import React from 'react';
import { useKV } from '@github/spark/hooks';
import DevDraftNavGate from './components/DevDraftNavGate';
import ThemeToggle from './components/ThemeToggle';
import { LoadingProvider } from './hooks/useLoading';
import Homepage from './components/Homepage';
import LandingRestaurants from './components/LandingRestaurants';
import LandingAI from './components/LandingAI';
import LandingPR from './components/LandingPR';
import LandingCreativeCampaigns from './components/LandingCreativeCampaigns';
import LandingInfluencerUGC from './components/LandingInfluencerUGC';
import LandingNewsletters from './components/LandingNewsletters';
import LandingBrandingToolkit from './components/LandingBrandingToolkit';
import LandingYouthCurator from './components/LandingYouthCurator';
import LandingGrowWithGoogle from './components/LandingGrowWithGoogle';
import Outbox from './components/Outbox';
import ServicesPage from './components/ServicesPage';
import About from './components/About';
import Contact from './components/Contact';

// Day Theme Previews
import DayThemeOne from './components/DayThemeOne';
import DayThemeTwo from './components/DayThemeTwo';
import DayThemeThree from './components/DayThemeThree';
import DayThemeFour from './components/DayThemeFour';
import DayThemeFive from './components/DayThemeFive';

// Night Theme Previews  
import NightThemeOne from './components/NightThemeOne';
import NightThemeTwo from './components/NightThemeTwo';
import NightThemeThree from './components/NightThemeThree';
import NightThemeFour from './components/NightThemeFour';
import NightThemeFive from './components/NightThemeFive';
import ThemePreview from './components/ThemePreview';
import ThemeComparison from './components/ThemeComparison';
import ThemeBuilder from './components/ThemeBuilder';
import ThemeSitePreview from './components/ThemeSitePreview';
import ThemeBuilderDemo from './components/ThemeBuilderDemo';


function App() {
  const [currentPage, setCurrentPage] = useKV('currentPage', '/');

  // Simple client-side routing based on hash or stored page
  const getCurrentPage = () => {
    const hash = window.location.hash.replace('#', '') || currentPage;
    return hash;
  };

  const renderPage = () => {
    const page = getCurrentPage();
    
    switch (page) {
      case '/':
        return <Homepage />;
      case '/restaurant-biz':
        return <LandingRestaurants />;
      case '/ai-discovery':
        return <LandingAI />;
      case '/public-relations':
        return <LandingPR />;
      case '/creative-campaigns':
        return <LandingCreativeCampaigns />;
      case '/influencer-ugc':
        return <LandingInfluencerUGC />;
      case '/newsletters':
        return <LandingNewsletters />;
      case '/branding-toolkit':
        return <LandingBrandingToolkit />;
      case '/youth-curator':
        return <LandingYouthCurator />;
      case '/grow-with-google':
        return <LandingGrowWithGoogle />;
      case '/outbox':
        return <Outbox />;
      case '/services':
        return <ServicesPage />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      case '/themes':
        return <ThemePreview />;
      case '/theme-comparison':
        return <ThemeComparison />;
      case '/theme-builder':
        return <ThemeBuilder />;
      case '/theme-builder-demo':
        return <ThemeBuilderDemo />;
      case '/theme-site-preview':
        return <ThemeSitePreview />;
      // Day Theme Previews
      case '/daytest/1':
        return <DayThemeOne />;
      case '/daytest/2':
        return <DayThemeTwo />;
      case '/daytest/3':
        return <DayThemeThree />;
      case '/daytest/4':
        return <DayThemeFour />;
      case '/daytest/5':
        return <DayThemeFive />;
      // Night Theme Previews  
      case '/nighttest/1':
        return <NightThemeOne />;
      case '/nighttest/2':
        return <NightThemeTwo />;
      case '/nighttest/3':
        return <NightThemeThree />;
      case '/nighttest/4':
        return <NightThemeFour />;
      case '/nighttest/5':
        return <NightThemeFive />;
      default:
        return <Homepage />;
    }
  };

  // Handle navigation clicks
  React.useEffect(() => {
    const handleHashChange = () => {
      const newPage = window.location.hash.replace('#', '') || '/';
      setCurrentPage(newPage);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setCurrentPage]);

  // Update page links to use hash routing
  React.useEffect(() => {
    const updateLinks = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach(link => {
        if (!link.getAttribute('href')?.startsWith('#')) {
          const href = link.getAttribute('href');
          link.setAttribute('href', '#' + href);
        }
      });
    };

    updateLinks();
    const observer = new MutationObserver(updateLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <LoadingProvider>
      <DevDraftNavGate />
      {/* Theme toggle for all pages except AI Discovery */}
      {getCurrentPage() !== '/ai-discovery' && <ThemeToggle />}
      {renderPage()}
    </LoadingProvider>
  );
}

export default App;