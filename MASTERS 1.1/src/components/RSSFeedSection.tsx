import React, { useState, useEffect } from 'react';
import { fetchRSSFeed, ParsedRSSItem, getMockRSSData } from '../utils/rssParser';

const RSSIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#EBF998" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M4 11a9 9 0 0 1 9 9"></path>
    <path d="M4 4a16 16 0 0 1 16 16"></path>
    <circle cx="5" cy="19" r="1"></circle>
  </svg>
);

const RSSFeedSection: React.FC = () => {
  const [feedItems, setFeedItems] = useState<ParsedRSSItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const loadRSSFeed = async () => {
      try {
        setLoading(true);
        setError(null);

        // CurationsLA RSS feed URL
        const rssUrl = 'https://la.curations.org/feed';
        
        console.log('Fetching RSS feed from:', rssUrl);
        const feedData = await fetchRSSFeed(rssUrl);
        
        if (feedData.status === 'ok' && feedData.items.length > 0) {
          // Limit to 4 items for display
          setFeedItems(feedData.items.slice(0, 4));
          setIsLive(true);
          console.log('Successfully loaded live RSS feed');
        } else {
          throw new Error(feedData.message || 'No items in feed');
        }
      } catch (err) {
        console.error('Error loading RSS feed:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        
        // Use mock data as fallback
        const mockData = getMockRSSData();
        setFeedItems(mockData.items.slice(0, 4));
        setIsLive(false);
        console.log('Using fallback data due to RSS fetch failure');
      } finally {
        setLoading(false);
      }
    };

    loadRSSFeed();

    // Refresh feed every 10 minutes
    const interval = setInterval(loadRSSFeed, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
      
      if (diffInHours < 1) {
        return 'Just now';
      } else if (diffInHours < 24) {
        return `${diffInHours}h ago`;
      } else {
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays}d ago`;
      }
    } catch {
      return 'Recently';
    }
  };

  const truncateTitle = (title: string, maxLength: number = 65): string => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + '...';
  };

  return (
    <div 
      className="brutal-box mb-4 p-6"
      style={{
        background: '#000',
        color: 'white',
        borderColor: '#EBF998',
        borderWidth: '8px',
        boxShadow: '8px 8px 0 #EBF998'
      }}
    >
      <h3 className="font-black text-xl mb-3 uppercase flex items-center gap-2">
        <RSSIcon />
        LOCAL HEADLINES
        {loading && (
          <div 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: '#EBF998' }}
          />
        )}
        {!loading && (
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: isLive ? '#4AE54A' : '#FFD200' }}
            title={isLive ? 'Live feed active' : 'Using cached content'}
          />
        )}
      </h3>
      
      <div className="space-y-3">
        {loading ? (
          <>
            <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
          </>
        ) : (
          <>
            {feedItems.map((item, index) => (
              <a 
                key={`${item.link}-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-highlight transition-colors"
                style={{ textDecoration: 'none' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#EBF998';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                <div 
                  className="border-l-4 pl-3 py-1"
                  style={{ borderColor: '#EBF998' }}
                >
                  <h4 className="font-bold text-sm leading-tight">
                    {truncateTitle(item.title)}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {formatDate(item.pubDate)} • {item.author || 'CurationsLA'}
                  </p>
                </div>
              </a>
            ))}
            
            {!isLive && !loading && (
              <div className="text-center py-2">
                <p className="text-xs text-gray-400">
                  📡 Live feed temporarily unavailable
                </p>
              </div>
            )}
          </>
        )}
      </div>
      
      <div 
        className="mt-4 pt-3"
        style={{ borderTop: '1px solid #374151' }}
      >
        <div className="flex justify-between items-center">
          <a 
            href="https://la.curations.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center gap-1"
            style={{ 
              color: '#EBF998',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            Read Full Stories
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
          
          <div className="text-xs text-gray-400">
            {isLive ? '🟢 LIVE' : '🟡 CACHED'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSSFeedSection;