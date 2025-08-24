// RSS Feed Integration Test - Development utility
import { fetchRSSFeed, getMockRSSData, parseXMLFeed } from '../utils/rssParser';

// Test the RSS feed functionality
export const testRSSIntegration = async () => {
  console.log('🧪 Testing RSS Feed Integration...');
  
  // Test 1: Mock data fallback
  console.log('📊 Testing mock data fallback...');
  const mockData = getMockRSSData();
  console.log(`✅ Mock data loaded: ${mockData.items.length} items`);
  console.log('Sample:', mockData.items[0]?.title);
  
  // Test 2: Live RSS feed fetch
  console.log('🌐 Testing live RSS feed fetch...');
  try {
    const liveData = await fetchRSSFeed('https://la.curations.org/feed');
    if (liveData.status === 'ok') {
      console.log(`✅ Live feed loaded: ${liveData.items.length} items`);
      console.log('Sample:', liveData.items[0]?.title);
      return {
        success: true,
        live: true,
        itemCount: liveData.items.length,
        sampleTitle: liveData.items[0]?.title
      };
    } else {
      console.log('⚠️ Live feed failed, but mock data available');
      return {
        success: true,
        live: false,
        itemCount: mockData.items.length,
        sampleTitle: mockData.items[0]?.title
      };
    }
  } catch (error) {
    console.error('❌ RSS test failed:', error);
    return {
      success: false,
      live: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      itemCount: mockData.items.length,
      sampleTitle: mockData.items[0]?.title
    };
  }
};

// Test specific RSS URLs
export const testRSSUrl = async (url: string) => {
  console.log(`🔗 Testing RSS URL: ${url}`);
  try {
    const result = await fetchRSSFeed(url);
    console.log(`Status: ${result.status}`);
    console.log(`Items: ${result.items.length}`);
    if (result.items.length > 0) {
      console.log(`Latest: ${result.items[0].title}`);
    }
    return result;
  } catch (error) {
    console.error(`❌ Failed to test ${url}:`, error);
    throw error;
  }
};

// Available for browser console testing
if (typeof window !== 'undefined') {
  (window as any).testRSS = {
    test: testRSSIntegration,
    testUrl: testRSSUrl,
    mockData: getMockRSSData
  };
  
  console.log('🛠️ RSS testing utilities loaded. Use window.testRSS.test() to run tests.');
}