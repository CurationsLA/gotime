import Navigation from './Navigation';

interface Highlight {
  headline: string;
  text: string;
  bg: string;
  color?: string;
}

interface Package {
  title: string;
  price: string;
  features: string[];
  bg: string;
  color?: string;
}

interface LandingProps {
  emoji: string;
  color: string;
  title: string;
  desc: string;
  highlights: Highlight[];
  packages: Package[];
  currentPage?: string;
}

export default function Landing({ 
  emoji, 
  color, 
  title, 
  desc, 
  highlights, 
  packages, 
  currentPage 
}: LandingProps) {
  return (
    <main className="bg-background text-foreground min-h-screen" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navigation currentPage={currentPage} />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 px-8 text-white text-center"
        style={{ background: color }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-6xl mb-6">{emoji}</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {desc}
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className="curations-card p-8"
                style={{ 
                  background: item.bg, 
                  color: item.color || 'black'
                }}
              >
                <h3 className="text-xl font-black mb-4 uppercase">
                  {item.headline}
                </h3>
                <p className="text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-black mb-12 uppercase text-center">
            PACKAGES
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className="curations-card p-8"
                style={{ 
                  background: pkg.bg, 
                  color: pkg.color || 'black'
                }}
              >
                <h4 className="text-xl font-black mb-2 uppercase">
                  {pkg.title}
                </h4>
                <div className="text-2xl font-bold mb-6">
                  {pkg.price}
                </div>
                <ul className="list-none p-0">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="mb-3 font-medium">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact" 
                  className="curations-button mt-6 w-full text-center"
                  style={{ 
                    background: pkg.color === 'white' || !pkg.color ? '#ff69b4' : 'white',
                    color: pkg.color === 'white' || !pkg.color ? 'white' : 'black'
                  }}
                >
                  GET STARTED
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8" style={{ background: '#ff69b4' }}>
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-6 uppercase">
            Ready to Curate Culture?
          </h2>
          <a 
            href="/contact" 
            className="curations-button"
            style={{ background: 'white', color: 'black' }}
          >
            LET'S TALK
          </a>
        </div>
      </section>
    </main>
  );
}