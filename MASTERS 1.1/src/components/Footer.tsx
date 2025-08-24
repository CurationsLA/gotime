import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter/X', url: 'https://twitter.com/CurationsX' },
    { name: 'Instagram', url: 'https://instagram.com/curations.cc' },
    { name: 'Twitch', url: 'https://twitch.tv/curations' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/curations' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="copyright">
          &copy; {currentYear} CURATIONS. ALL RIGHTS RESERVED.
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--neutral-90); /* Dark background */
          color: var(--neutral-0); /* Light text */
          border-top: 6px solid var(--border); /* Strong top border */
          padding: 3rem 2rem; /* Padding */
          box-shadow: 0 -8px 0 var(--border); /* Brutalist box shadow */
          font-family: var(--font-primary);
          text-align: center;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem; /* Space between links */
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .social-link {
          background-color: var(--master-accent);
          color: var(--secondary-foreground);
          text-decoration: none;
          font-family: var(--font-display); /* Bold font */
          font-weight: 700;
          text-transform: uppercase; /* Uppercase text */
          border: 4px solid var(--border); /* Border with Mastery Green */
          padding: 0.75rem 1.5rem; /* Padding for link area */
          transition: all 0.2s ease;
          display: inline-block;
          box-shadow: 6px 6px 0px var(--border);
        }

          background-color: var(--master-success); /* Background on hover */
          color: var(--neutral-90); /* Dark text on hover */
          box-shadow: 4px 4px 0px var(--master-success); /* Brutalist box shadow */
          transform: translateY(-2px);
        }

        .copyright {
          font-size: 0.875rem;
          color: var(--neutral-60); /* Subtle text color */
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .social-link:hover {
          background-color: var(--master-primary); /* Background on hover */
          color: var(--primary-foreground); /* Dark text on hover */
          box-shadow: 10px 10px 0px var(--border); /* Brutalist box shadow */
          transform: translateY(-4px);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .footer {
            padding: 2rem 1rem;
          }

          .social-links {
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .social-link {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }

          .copyright {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 1.5rem 0.75rem;
          }

          .social-links {
            gap: 0.75rem;
            flex-direction: column;
            align-items: center;
          }

          .social-link {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;