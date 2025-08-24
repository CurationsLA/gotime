import React, { useState, useCallback } from 'react';

interface LoadingState {
  [key: string]: boolean;
}

interface LoadingContextType {
  loadingStates: LoadingState;
  setLoading: (key: string, isLoading: boolean) => void;
  isLoading: (key: string) => boolean;
  startLoading: (key: string) => void;
  stopLoading: (key: string) => void;
  clearAllLoading: () => void;
}

const LoadingContext = React.createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loadingStates, setLoadingStates] = useState<LoadingState>({});

  const setLoading = useCallback((key: string, isLoading: boolean) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: isLoading
    }));
  }, []);

  const isLoading = useCallback((key: string) => {
    return loadingStates[key] || false;
  }, [loadingStates]);

  const startLoading = useCallback((key: string) => {
    setLoading(key, true);
  }, [setLoading]);

  const stopLoading = useCallback((key: string) => {
    setLoading(key, false);
  }, [setLoading]);

  const clearAllLoading = useCallback(() => {
    setLoadingStates({});
  }, []);

  const value = React.useMemo(() => ({
    loadingStates,
    setLoading,
    isLoading,
    startLoading,
    stopLoading,
    clearAllLoading
  }), [loadingStates, setLoading, isLoading, startLoading, stopLoading, clearAllLoading]);

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = React.useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Enhanced loading hook with automatic cleanup and timeout
export const useAsyncLoading = () => {
  const { setLoading, isLoading } = useLoading();
  const timeoutRefs = React.useRef<{ [key: string]: NodeJS.Timeout }>({});

  const executeWithLoading = useCallback(async (
    key: string,
    asyncFn: () => Promise<any>,
    options?: {
      minLoadingTime?: number;
      maxLoadingTime?: number;
      onError?: (error: Error) => void;
      onFinally?: () => void;
    }
  ): Promise<any> => {
    const {
      minLoadingTime = 300,
      maxLoadingTime = 10000,
      onError,
      onFinally
    } = options || {};

    try {
      setLoading(key, true);
      
      // Set maximum loading timeout
      timeoutRefs.current[key] = setTimeout(() => {
        setLoading(key, false);
      }, maxLoadingTime);

      const startTime = Date.now();
      const result = await asyncFn();
      
      // Ensure minimum loading time for UX
      const elapsed = Date.now() - startTime;
      if (elapsed < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsed));
      }

      return result;
    } catch (error) {
      if (onError && error instanceof Error) {
        onError(error);
      }
      return null;
    } finally {
      // Clear timeout
      if (timeoutRefs.current[key]) {
        clearTimeout(timeoutRefs.current[key]);
        delete timeoutRefs.current[key];
      }
      
      setLoading(key, false);
      
      if (onFinally) {
        onFinally();
      }
    }
  }, [setLoading]);

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach(timeout => {
        clearTimeout(timeout);
      });
    };
  }, []);

  return {
    executeWithLoading,
    isLoading
  };
};

// Preloading hook for images and resources
export const useResourcePreloader = () => {
  const { setLoading, isLoading } = useLoading();

  const preloadImage = useCallback(async (
    key: string,
    src: string,
    options?: {
      onSuccess?: (img: HTMLImageElement) => void;
      onError?: (error: Event) => void;
    }
  ): Promise<HTMLImageElement | null> => {
    return new Promise((resolve) => {
      setLoading(key, true);
      
      const img = new Image();
      
      img.onload = () => {
        setLoading(key, false);
        if (options?.onSuccess) {
          options.onSuccess(img);
        }
        resolve(img);
      };
      
      img.onerror = (error) => {
        setLoading(key, false);
        if (options?.onError) {
          options.onError(error);
        }
        resolve(null);
      };
      
      img.src = src;
    });
  }, [setLoading]);

  const preloadImages = useCallback(async (
    key: string,
    sources: string[],
    options?: {
      onProgress?: (loaded: number, total: number) => void;
      onComplete?: (results: (HTMLImageElement | null)[]) => void;
    }
  ): Promise<(HTMLImageElement | null)[]> => {
    setLoading(key, true);
    
    let loadedCount = 0;
    const results: (HTMLImageElement | null)[] = [];
    
    const promises = sources.map((src, index) => {
      return new Promise<HTMLImageElement | null>((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          if (options?.onProgress) {
            options.onProgress(loadedCount, sources.length);
          }
          results[index] = img;
          resolve(img);
        };
        
        img.onerror = () => {
          loadedCount++;
          if (options?.onProgress) {
            options.onProgress(loadedCount, sources.length);
          }
          results[index] = null;
          resolve(null);
        };
        
        img.src = src;
      });
    });
    
    const finalResults = await Promise.all(promises);
    
    setLoading(key, false);
    
    if (options?.onComplete) {
      options.onComplete(finalResults);
    }
    
    return finalResults;
  }, [setLoading]);

  return {
    preloadImage,
    preloadImages,
    isLoading
  };
};

// Scroll-based loading hook
export const useScrollLoading = () => {
  const { setLoading, isLoading } = useLoading();
  
  const observeElements = useCallback((
    key: string,
    elements: HTMLElement[],
    options?: {
      rootMargin?: string;
      threshold?: number;
      onIntersect?: (element: HTMLElement) => void;
      onComplete?: () => void;
    }
  ) => {
    const {
      rootMargin = '100px',
      threshold = 0.1,
      onIntersect,
      onComplete
    } = options || {};

    setLoading(key, true);
    
    let intersectedCount = 0;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          intersectedCount++;
          
          if (onIntersect) {
            onIntersect(entry.target as HTMLElement);
          }
          
          observer.unobserve(entry.target);
          
          if (intersectedCount === elements.length) {
            setLoading(key, false);
            if (onComplete) {
              onComplete();
            }
          }
        }
      });
    }, { rootMargin, threshold });
    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
      setLoading(key, false);
    };
  }, [setLoading]);

  return {
    observeElements,
    isLoading
  };
};

export default LoadingContext;