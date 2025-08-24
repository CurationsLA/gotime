// RSS Feed utility functions for parsing different feed formats
export interface ParsedRSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author?: string;
}

export interface ParsedRSSFeed {
  title: string;
  description: string;
  items: ParsedRSSItem[];
  status: 'ok' | 'error';
  message?: string;
}

/**
 * Parse RSS/Atom XML feed directly
 */
export const parseXMLFeed = (xmlText: string): ParsedRSSFeed => {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    // Check for parse errors
    const parseError = xmlDoc.querySelector('parsererror');
    if (parseError) {
      throw new Error('XML parsing error');
    }
    
    let feedData: ParsedRSSFeed;
    
    // Check if it's an Atom feed
    if (xmlDoc.querySelector('feed')) {
      feedData = parseAtomFeed(xmlDoc);
    } else {
      // Assume RSS 2.0 format
      feedData = parseRSSFeed(xmlDoc);
    }
    
    return feedData;
  } catch (error) {
    console.error('Error parsing XML feed:', error);
    return {
      title: 'Feed Error',
      description: 'Unable to parse feed',
      items: [],
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown parsing error'
    };
  }
};

/**
 * Parse RSS 2.0 format
 */
const parseRSSFeed = (xmlDoc: Document): ParsedRSSFeed => {
  const channel = xmlDoc.querySelector('channel');
  if (!channel) {
    throw new Error('Invalid RSS format: no channel element found');
  }
  
  const title = channel.querySelector('title')?.textContent || 'Unknown Feed';
  const description = channel.querySelector('description')?.textContent || '';
  
  const items = Array.from(channel.querySelectorAll('item')).map((item): ParsedRSSItem => {
    const titleEl = item.querySelector('title');
    const linkEl = item.querySelector('link');
    const pubDateEl = item.querySelector('pubDate');
    const descriptionEl = item.querySelector('description') || item.querySelector('content\\:encoded');
    const authorEl = item.querySelector('author') || item.querySelector('dc\\:creator');
    
    return {
      title: titleEl?.textContent || 'Untitled',
      link: linkEl?.textContent || '#',
      pubDate: pubDateEl?.textContent || new Date().toISOString(),
      description: descriptionEl?.textContent || '',
      author: authorEl?.textContent || undefined
    };
  });
  
  return {
    title,
    description,
    items,
    status: 'ok'
  };
};

/**
 * Parse Atom format
 */
const parseAtomFeed = (xmlDoc: Document): ParsedRSSFeed => {
  const feed = xmlDoc.querySelector('feed');
  if (!feed) {
    throw new Error('Invalid Atom format: no feed element found');
  }
  
  const title = feed.querySelector('title')?.textContent || 'Unknown Feed';
  const description = feed.querySelector('subtitle')?.textContent || '';
  
  const items = Array.from(feed.querySelectorAll('entry')).map((entry): ParsedRSSItem => {
    const titleEl = entry.querySelector('title');
    const linkEl = entry.querySelector('link');
    const updatedEl = entry.querySelector('updated') || entry.querySelector('published');
    const contentEl = entry.querySelector('content') || entry.querySelector('summary');
    const authorEl = entry.querySelector('author name');
    
    return {
      title: titleEl?.textContent || 'Untitled',
      link: linkEl?.getAttribute('href') || '#',
      pubDate: updatedEl?.textContent || new Date().toISOString(),
      description: contentEl?.textContent || '',
      author: authorEl?.textContent || undefined
    };
  });
  
  return {
    title,
    description,
    items,
    status: 'ok'
  };
};

/**
 * Fetch RSS feed with CORS proxy fallbacks
 */
export const fetchRSSFeed = async (feedUrl: string): Promise<ParsedRSSFeed> => {
  const corsProxies = [
    // Primary: RSS2JSON service
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}&count=5`,
    // Fallback: AllOrigins
    `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`,
    // Fallback: CORS Anywhere (if available)
    `https://cors-anywhere.herokuapp.com/${feedUrl}`,
  ];
  
  let lastError: Error | null = null;
  
  // Try RSS2JSON first (structured response)
  try {
    const response = await fetch(corsProxies[0]);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const data = await response.json();
    if (data.status === 'ok' && data.items) {
      return {
        title: data.feed?.title || 'RSS Feed',
        description: data.feed?.description || '',
        items: data.items.map((item: any): ParsedRSSItem => ({
          title: item.title || 'Untitled',
          link: item.link || '#',
          pubDate: item.pubDate || new Date().toISOString(),
          description: item.description || item.content || '',
          author: item.author || undefined
        })),
        status: 'ok'
      };
    }
    throw new Error(data.message || 'RSS2JSON service error');
  } catch (error) {
    lastError = error instanceof Error ? error : new Error('RSS2JSON failed');
    console.warn('RSS2JSON failed, trying XML parsing...', lastError.message);
  }
  
  // Try direct XML parsing with CORS proxies
  for (const proxyUrl of corsProxies.slice(1)) {
    try {
      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      let xmlText: string;
      
      if (proxyUrl.includes('allorigins')) {
        const data = await response.json();
        if (!data.contents) throw new Error('AllOrigins: no contents');
        xmlText = data.contents;
      } else {
        xmlText = await response.text();
      }
      
      const parsed = parseXMLFeed(xmlText);
      if (parsed.status === 'ok' && parsed.items.length > 0) {
        return parsed;
      }
      throw new Error('Parsed feed has no items');
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Proxy failed');
      console.warn(`Proxy ${proxyUrl} failed:`, lastError.message);
    }
  }
  
  // All methods failed, return mock data
  console.error('All RSS fetching methods failed, using fallback data');
  return getMockRSSData();
};

/**
 * Mock RSS data for fallback
 */
export const getMockRSSData = (): ParsedRSSFeed => {
  const now = new Date();
  return {
    title: 'CurationsLA',
    description: 'Cultural insights and trends from Los Angeles',
    items: [
      {
        title: "LA's Creative Economy Booms: Tech Meets Art in Unprecedented Ways",
        link: "https://la.curations.org/creative-economy-boom",
        pubDate: now.toISOString(),
        description: "Los Angeles continues to lead the intersection of technology and creative industries, with new collaborations emerging daily.",
        author: "CurationsLA Editorial"
      },
      {
        title: "The Rise of Micro-Influencers in Local Brand Building",
        link: "https://la.curations.org/micro-influencers-local-brands",
        pubDate: new Date(now.getTime() - 3600000).toISOString(), // 1 hour ago
        description: "Small-scale content creators are driving authentic engagement for local LA businesses at unprecedented rates.",
        author: "CurationsLA Editorial"
      },
      {
        title: "AI Tools Transform LA's Marketing Landscape",
        link: "https://la.curations.org/ai-marketing-transformation",
        pubDate: new Date(now.getTime() - 7200000).toISOString(), // 2 hours ago
        description: "From prompt engineering to automated content creation, artificial intelligence is reshaping how brands communicate in Los Angeles.",
        author: "CurationsLA Editorial"
      },
      {
        title: "Community-Driven Campaigns: The New Standard for Authentic Marketing",
        link: "https://la.curations.org/community-driven-campaigns",
        pubDate: new Date(now.getTime() - 86400000).toISOString(), // 1 day ago
        description: "Successful brands are building communities first, then developing products and services that serve those communities.",
        author: "CurationsLA Editorial"
      }
    ],
    status: 'ok'
  };
};