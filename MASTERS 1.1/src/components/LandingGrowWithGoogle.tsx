import React from 'react';
import Navigation from './Navigation';
import GrowWithGoogleBox from './GrowWithGoogleBox';

export default function LandingGrowWithGoogle() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navigation />
      
      {/* Full Hero/Banner Section */}
      <GrowWithGoogleBox />

      {/* Additional Success Stories Section */}
      <div style={{
        padding: '4rem 2rem',
        background: 'var(--background)',
        borderTop: '5px solid black'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '900',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            color: 'var(--foreground)'
          }}>
            SUCCESS STORIES
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{
              background: 'white',
              border: '4px solid black',
              boxShadow: '8px 8px 0px var(--master-primary)',
              padding: '2rem',
              textAlign: 'left'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>🏪</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: '800',
                fontSize: '1.25rem',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                color: 'var(--master-primary)'
              }}>
                LOCAL RETAILER
              </h3>
              <p style={{
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                "From 0 online presence to 300% revenue increase in 8 months. The Google Ads strategy alone brought in 2,000+ new customers."
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                fontSize: '0.875rem',
                fontWeight: '700'
              }}>
                <span style={{ color: 'var(--master-success)' }}>+300% REVENUE</span>
                <span style={{ color: 'var(--master-accent)' }}>+2000 CUSTOMERS</span>
              </div>
            </div>

            <div style={{
              background: 'white',
              border: '4px solid black',
              boxShadow: '8px 8px 0px var(--master-accent)',
              padding: '2rem',
              textAlign: 'left'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>🌮</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: '800',
                fontSize: '1.25rem',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                color: 'var(--master-accent)'
              }}>
                FAMILY RESTAURANT
              </h3>
              <p style={{
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                "Went from struggling during COVID to having a 6-month waitlist for catering. Our Google ranking went from page 3 to #1."
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                fontSize: '0.875rem',
                fontWeight: '700'
              }}>
                <span style={{ color: 'var(--master-success)' }}>#1 GOOGLE RANK</span>
                <span style={{ color: 'var(--master-primary)' }}>6mo WAITLIST</span>
              </div>
            </div>

            <div style={{
              background: 'white',
              border: '4px solid black',
              boxShadow: '8px 8px 0px var(--master-success)',
              padding: '2rem',
              textAlign: 'left'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>🏋️</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: '800',
                fontSize: '1.25rem',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                color: 'var(--master-success)'
              }}>
                FITNESS STUDIO
              </h3>
              <p style={{
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                "Membership grew from 50 to 400+ in one year. The brand transformation helped us charge premium rates and expand to two locations."
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                fontSize: '0.875rem',
                fontWeight: '700'
              }}>
                <span style={{ color: 'var(--master-primary)' }}>+700% MEMBERS</span>
                <span style={{ color: 'var(--master-accent)' }}>2 LOCATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{
        padding: '4rem 2rem',
        background: 'var(--neutral-90)',
        color: 'white'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '900',
            textTransform: 'uppercase',
            marginBottom: '3rem',
            textAlign: 'center',
            color: 'var(--master-success)'
          }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              {
                q: "What makes a business 'deserving' of this program?",
                a: "We look for businesses that demonstrate community impact, have clear growth goals, face genuine marketing challenges, and show commitment to long-term success. Priority goes to businesses that serve their local community and have growth potential but limited marketing resources."
              },
              {
                q: "Do I have to pay anything during the 12 months?",
                a: "No. This is completely free for the selected business. We cover all advertising costs, tools, software, and our team's time. The only requirement is your commitment to participate actively and allow us to document the journey as a case study."
              },
              {
                q: "What happens after the 12 months?",
                a: "You'll have a complete marketing system in place and the knowledge to maintain it. We'll provide transition support and offer continued services at standard rates if you choose. Most businesses continue independently with the systems we've built."
              },
              {
                q: "How much time commitment is required from me?",
                a: "Approximately 2-4 hours per month for strategy meetings, content approval, and feedback sessions. We handle the heavy lifting - you focus on running your business while we document the process and results."
              },
              {
                q: "Can I apply if I'm already working with another agency?",
                a: "Yes, but you would need to pause other marketing services during the program to accurately measure results. We want to ensure our strategies can be properly tested and the case study reflects our methods exclusively."
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '3px solid rgba(255,255,255,0.2)',
                padding: '2rem',
                borderLeft: `6px solid var(--master-${index % 2 === 0 ? 'primary' : 'accent'})`
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: '800',
                  fontSize: '1.125rem',
                  marginBottom: '1rem',
                  color: 'white',
                  textTransform: 'uppercase'
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  lineHeight: '1.6',
                  margin: 0,
                  opacity: '0.9'
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, var(--master-primary) 0%, var(--master-accent) 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            lineHeight: '1',
            textShadow: '3px 3px 0px black'
          }}>
            TRANSFORM YOUR BUSINESS
          </h2>
          <p style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.4'
          }}>
            Don't let another year pass struggling with marketing. Apply now and let us build your success story together.
          </p>
          
          <button 
            onClick={() => window.location.href = 'mailto:hello@curations.cc?subject=Grow%20with%20Google%20Partnership%20Application&body=Please%20include:%0A%0A1.%20Business%20name%20and%20description%0A2.%20Current%20marketing%20challenges%0A3.%20Growth%20goals%20and%20timeline%0A4.%20Community%20impact%20statement%0A5.%20Why%20you%20believe%20your%20business%20should%20be%20selected%0A%0AThank%20you%20for%20your%20interest!'}
            style={{
              background: 'white',
              color: 'var(--master-primary)',
              padding: '2rem 3rem',
              fontFamily: 'var(--font-display)',
              fontWeight: '900',
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              textTransform: 'uppercase',
              border: '5px solid black',
              boxShadow: '12px 12px 0px black',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              letterSpacing: '2px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translate(-3px, -3px)';
              e.target.style.boxShadow = '15px 15px 0px black';
              e.target.style.background = 'var(--master-success)';
              e.target.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translate(0, 0)';
              e.target.style.boxShadow = '12px 12px 0px black';
              e.target.style.background = 'white';
              e.target.style.color = 'var(--master-primary)';
            }}
          >
            APPLY TODAY → START YOUR TRANSFORMATION
          </button>
          
          <p style={{
            marginTop: '2rem',
            fontSize: '0.875rem',
            opacity: '0.8'
          }}>
            Applications reviewed quarterly • Next deadline: March 31, 2024
          </p>
        </div>
      </div>
    </div>
  );
}