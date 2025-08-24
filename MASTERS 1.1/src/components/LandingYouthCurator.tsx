import React from "react";
import Navigation from './Navigation';

export default function LandingYouthCurator() {
  return (
    <>
      <Navigation currentPage="/youth-curator" />
      <main style={{ background: "#FDFDFC", color: "black", minHeight: "100vh" }}>
        {/* Skip to main content for accessibility */}
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <div id="main">
          {/* Hero Section */}
          <header className="ai-hero" role="banner">
            <div className="universal-container">
              <div className="ai-hero-icon" aria-hidden="true">🎓</div>
              <h1 className="ai-hero-title">
                YOUTH CURATOR PROGRAM
              </h1>
              <p className="ai-hero-desc">
                Empowering high school juniors and seniors through mentorship, real-world collaborations, and paid opportunities in digital media. Building the next generation of creative leaders while fostering meaningful parent-guardian involvement.
              </p>
              
              <div className="hero-callout curations-card" style={{
                background: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'var(--neutral-0)',
                color: 'var(--neutral-0)',
                maxWidth: '600px',
                margin: '2rem auto'
              }}>
                <h2 className="callout-title">MORE THAN MENTORSHIP</h2>
                <p className="callout-text">
                  The Youth Curator Program creates pathways for students who may not pursue traditional college routes, 
                  providing real connections, digital portfolios, and employability skills for the modern creative economy.
                </p>
              </div>
            </div>
          </header>

          {/* Stats Section */}
        <section style={{
          background: "var(--neutral-90)",
          color: "white",
          padding: "4rem 2rem"
        }} aria-labelledby="stats-heading">
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <h2 id="stats-heading" style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              textAlign: "center",
              margin: "0 0 3rem 0",
              textTransform: "uppercase"
            }}>
              PROGRAM IMPACT
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem"
            }} role="list">
              <div style={{
                background: "var(--primary)",
                color: "white",
                padding: "2rem 1.5rem",
                textAlign: "center",
                border: "4px solid white",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }} role="listitem" onMouseEnter={(e) => {
                e.target.style.background = "var(--success)";
                e.target.style.color = "black";
                e.target.style.transform = "scale(1.05)";
              }} onMouseLeave={(e) => {
                e.target.style.background = "var(--primary)";
                e.target.style.color = "white";
                e.target.style.transform = "scale(1)";
              }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>74%</div>
                <div style={{ fontWeight: 700, textTransform: "uppercase" }}>Revenue Split to Curators</div>
              </div>
              <div style={{
                background: "var(--primary)",
                color: "white",
                padding: "2rem 1.5rem",
                textAlign: "center",
                border: "4px solid white",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }} role="listitem" onMouseEnter={(e) => {
                e.target.style.background = "var(--success)";
                e.target.style.color = "black";
                e.target.style.transform = "scale(1.05)";
              }} onMouseLeave={(e) => {
                e.target.style.background = "var(--primary)";
                e.target.style.color = "white";
                e.target.style.transform = "scale(1)";
              }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>100%</div>
                <div style={{ fontWeight: 700, textTransform: "uppercase" }}>Parent/Guardian Involvement</div>
              </div>
              <div style={{
                background: "var(--primary)",
                color: "white",
                padding: "2rem 1.5rem",
                textAlign: "center",
                border: "4px solid white",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }} role="listitem" onMouseEnter={(e) => {
                e.target.style.background = "var(--success)";
                e.target.style.color = "black";
                e.target.style.transform = "scale(1.05)";
              }} onMouseLeave={(e) => {
                e.target.style.background = "var(--primary)";
                e.target.style.color = "white";
                e.target.style.transform = "scale(1)";
              }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>3+</div>
                <div style={{ fontWeight: 700, textTransform: "uppercase" }}>Real-World Collaborations</div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section style={{ padding: "4rem 2rem" }} aria-labelledby="benefits-heading">
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <h2 id="benefits-heading" style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              textAlign: "center",
              margin: "0 0 3rem 0",
              textTransform: "uppercase"
            }}>
              WHAT YOUTH CURATORS RECEIVE
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem"
            }} role="list">
              <article className="curations-card" style={{
                background: "var(--secondary)",
                color: "white",
                padding: "2rem",
                textAlign: "center"
              }} role="listitem">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }} aria-hidden="true">💰</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "1rem",
                  textTransform: "uppercase"
                }}>
                  PAID OPPORTUNITIES
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  Earn 74% of sponsorship revenue from brand collaborations with complete transparency and proper tax documentation.
                </p>
              </article>

              <article className="curations-card" style={{
                background: "var(--primary)",
                color: "white",
                padding: "2rem",
                textAlign: "center"
              }} role="listitem">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }} aria-hidden="true">🎯</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "1rem",
                  textTransform: "uppercase"
                }}>
                  REAL-WORLD EXPERIENCE
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  Work on actual brand campaigns, social media takeovers, and content creation projects that build professional portfolios.
                </p>
              </article>

              <article className="curations-card" style={{
                background: "var(--success)",
                color: "black",
                padding: "2rem",
                textAlign: "center"
              }} role="listitem">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }} aria-hidden="true">👨‍👩‍👧‍👦</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "1rem",
                  textTransform: "uppercase"
                }}>
                  FAMILY INVOLVEMENT
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  Parents and guardians are looped into every email, conversation, and collaboration, fostering family engagement.
                </p>
              </article>

              <article className="curations-card" style={{
                padding: "2rem",
                textAlign: "center",
                background: "white",
                color: "black"
              }} role="listitem">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }} aria-hidden="true">🚀</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "1rem",
                  textTransform: "uppercase"
                }}>
                  MENTORSHIP ACCESS
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  Direct guidance from creative professionals on email craft, project navigation, and creative problem-solving.
                </p>
              </article>

              <article className="curations-card" style={{
                padding: "2rem",
                textAlign: "center",
                background: "white",
                color: "black"
              }} role="listitem">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }} aria-hidden="true">📱</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "1rem",
                  textTransform: "uppercase"
                }}>
                  SOCIAL MEDIA TAKEOVERS
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  Lead official social media campaigns and content creation for established brands and platforms.
                </p>
              </article>

              <article className="curations-card" style={{
                padding: "2rem",
                textAlign: "center",
                background: "white",
                color: "black"
              }} role="listitem">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }} aria-hidden="true">🔗</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "1rem",
                  textTransform: "uppercase"
                }}>
                  SEO-ENABLED ARTIFACTS
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  Create lasting digital content that builds online presence, showcases writing style, and enables backlinking opportunities.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section style={{
          background: "var(--success)",
          padding: "4rem 2rem"
        }} aria-labelledby="process-heading">
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <h2 id="process-heading" style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              textAlign: "center",
              margin: "0 0 3rem 0",
              textTransform: "uppercase",
              color: "black"
            }}>
              HOW THE PROGRAM WORKS
            </h2>

            <ol style={{ listStyle: "none", padding: 0 }} role="list">
              <li style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "2rem",
                transition: "transform 0.3s ease"
              }} role="listitem" onMouseEnter={(e) => e.target.style.transform = "translateX(10px)"} onMouseLeave={(e) => e.target.style.transform = "translateX(0)"}>
                <div style={{
                  background: "var(--primary)",
                  color: "white",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  marginRight: "1.5rem",
                  border: "4px solid black",
                  flexShrink: 0
                }} aria-label="Step 1">1</div>
                <div>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    marginBottom: "0.5rem",
                    textTransform: "uppercase"
                  }}>
                    APPLICATION & FAMILY ONBOARDING
                  </h3>
                  <p style={{ lineHeight: 1.8, margin: 0 }}>
                    Students submit applications including class rank (junior or senior), parent/guardian contact information,
                    and creative portfolio samples. Both student and family participate in orientation sessions.
                  </p>
                </div>
              </li>

              <li style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "2rem",
                transition: "transform 0.3s ease"
              }} role="listitem" onMouseEnter={(e) => e.target.style.transform = "translateX(10px)"} onMouseLeave={(e) => e.target.style.transform = "translateX(0)"}>
                <div style={{
                  background: "var(--secondary)",
                  color: "white",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  marginRight: "1.5rem",
                  border: "4px solid black",
                  flexShrink: 0
                }} aria-label="Step 2">2</div>
                <div>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    marginBottom: "0.5rem",
                    textTransform: "uppercase"
                  }}>
                    MENTORSHIP MATCHING
                  </h3>
                  <p style={{ lineHeight: 1.8, margin: 0 }}>
                    Each curator is paired with experienced creative professionals who provide ongoing guidance on
                    project development, communication skills, and industry navigation.
                  </p>
                </div>
              </li>

              <li style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "2rem",
                transition: "transform 0.3s ease"
              }} role="listitem" onMouseEnter={(e) => e.target.style.transform = "translateX(10px)"} onMouseLeave={(e) => e.target.style.transform = "translateX(0)"}>
                <div style={{
                  background: "var(--success)",
                  color: "black",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  marginRight: "1.5rem",
                  border: "4px solid black",
                  flexShrink: 0
                }} aria-label="Step 3">3</div>
                <div>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    marginBottom: "0.5rem",
                    textTransform: "uppercase"
                  }}>
                    COLLABORATIVE PROJECT LAUNCH
                  </h3>
                  <p style={{ lineHeight: 1.8, margin: 0 }}>
                    Curators begin working on real brand partnerships, content creation, and social media campaigns
                    with full family transparency and professional oversight.
                  </p>
                </div>
              </li>

              <li style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "2rem",
                transition: "transform 0.3s ease"
              }} role="listitem" onMouseEnter={(e) => e.target.style.transform = "translateX(10px)"} onMouseLeave={(e) => e.target.style.transform = "translateX(0)"}>
                <div style={{
                  background: "black",
                  color: "white",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  marginRight: "1.5rem",
                  border: "4px solid black",
                  flexShrink: 0
                }} aria-label="Step 4">4</div>
                <div>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    marginBottom: "0.5rem",
                    textTransform: "uppercase"
                  }}>
                    PORTFOLIO DEVELOPMENT
                  </h3>
                  <p style={{ lineHeight: 1.8, margin: 0 }}>
                    Build comprehensive digital portfolios showcasing completed projects, client testimonials,
                    and measurable impact metrics for future opportunities.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Requirements Section */}
        <section style={{
          background: "var(--neutral-10)",
          padding: "4rem 2rem"
        }} id="requirements" aria-labelledby="requirements-heading">
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <h2 id="requirements-heading" style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              textAlign: "center",
              margin: "0 0 3rem 0",
              textTransform: "uppercase"
            }}>
              APPLICATION REQUIREMENTS
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "2rem"
            }}>
              <div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "2rem",
                  textTransform: "uppercase"
                }}>
                  FOR STUDENTS
                </h3>
                <ul style={{
                  background: "white",
                  padding: "2rem",
                  border: "4px solid black",
                  listStyle: "none",
                  margin: 0
                }} role="list">
                  {[
                    "Current high school junior or senior status",
                    "Strong interest in digital media and creative content",
                    "Willingness to work collaboratively with family",
                    "Basic social media and writing skills",
                    "Commitment to professional communication"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: "1rem",
                      borderBottom: index < 4 ? "2px solid #eee" : "none",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center"
                    }} role="listitem">
                      <span style={{
                        background: "var(--success)",
                        color: "black",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                        fontWeight: 900,
                        border: "2px solid black",
                        flexShrink: 0
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "2rem",
                  textTransform: "uppercase"
                }}>
                  FOR PARENTS/GUARDIANS
                </h3>
                <ul style={{
                  background: "white",
                  padding: "2rem",
                  border: "4px solid black",
                  listStyle: "none",
                  margin: 0
                }} role="list">
                  {[
                    "Active participation in program communications",
                    "Support for student's creative development",
                    "Available for regular check-ins and feedback sessions",
                    "Understanding of digital media landscape",
                    "Commitment to family collaboration model"
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: "1rem",
                      borderBottom: index < 4 ? "2px solid #eee" : "none",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center"
                    }} role="listitem">
                      <span style={{
                        background: "var(--success)",
                        color: "black",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                        fontWeight: 900,
                        border: "2px solid black",
                        flexShrink: 0
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section style={{
          background: "var(--secondary)",
          color: "white",
          padding: "4rem 2rem"
        }} aria-labelledby="philosophy-heading">
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <h2 id="philosophy-heading" style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              textAlign: "center",
              margin: "0 0 3rem 0",
              textTransform: "uppercase"
            }}>
              PROGRAM PHILOSOPHY
            </h2>

            <blockquote style={{
              background: "rgba(255,255,255,0.1)",
              padding: "2rem",
              border: "2px solid white",
              textAlign: "center",
              maxWidth: 800,
              margin: "0 auto"
            }}>
              <p style={{
                fontSize: "1.25rem",
                fontStyle: "italic",
                lineHeight: 1.8,
                marginBottom: "1rem"
              }}>
                "The Youth Curator Program bridges the gap between traditional education and modern creative careers.
                By involving families in the process, we create lasting support systems that extend far beyond our program.
                These young creators aren't just building portfolios—they're building futures."
              </p>
              <cite style={{
                fontWeight: 700,
                textTransform: "uppercase"
              }}>
                CURATIONS CREATIVE LEADERSHIP
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Why This Matters Section */}
        <section style={{ padding: "4rem 2rem" }} aria-labelledby="why-matters-heading">
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <h2 id="why-matters-heading" style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              textAlign: "center",
              margin: "0 0 3rem 0",
              textTransform: "uppercase"
            }}>
              WHY THIS MATTERS
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem"
            }} role="list">
              <article className="curations-card" style={{
                padding: "2rem",
                textAlign: "center"
              }} role="listitem">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }} aria-hidden="true">🎓</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "1rem",
                  textTransform: "uppercase"
                }}>
                  ALTERNATIVE PATHWAYS
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  For students not pursuing traditional college routes, the program provides real-world experience,
                  professional connections, and marketable skills for immediate career entry.
                </p>
              </article>

              <article className="curations-card" style={{
                padding: "2rem",
                textAlign: "center"
              }} role="listitem">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }} aria-hidden="true">💡</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "1rem",
                  textTransform: "uppercase"
                }}>
                  CREATIVE EMPOWERMENT
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  Young creators learn to monetize their talents while maintaining authenticity, building sustainable
                  creative careers from the ground up.
                </p>
              </article>

              <article className="curations-card" style={{
                padding: "2rem",
                textAlign: "center"
              }} role="listitem">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }} aria-hidden="true">🌟</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginBottom: "1rem",
                  textTransform: "uppercase"
                }}>
                  POSITIVE INFLUENCE
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  Curators become leaders in promoting positivity and good vibes within their generation,
                  creating ripple effects of constructive content creation.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          background: "var(--primary)",
          color: "white",
          textAlign: "center",
          padding: "4rem 2rem"
        }} aria-labelledby="cta-heading">
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 id="cta-heading" style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              marginBottom: "2rem",
              textTransform: "uppercase"
            }}>
              READY TO EMPOWER THE NEXT GENERATION?
            </h2>
            <p style={{
              fontSize: "1.25rem",
              lineHeight: 1.8,
              marginBottom: "3rem"
            }}>
              Join the Youth Curator Program and help build the future of creative digital media.
              Applications are now open for motivated high school students and supportive families.
            </p>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "2rem"
            }}>
              <a
                href="mailto:go@curatedla.xyz?subject=Youth%20Curator%20Application"
                className="curations-button"
                style={{
                  textDecoration: "none",
                  background: "white",
                  color: "var(--primary)",
                  display: "inline-block"
                }}
                aria-label="Apply now via email"
              >
                APPLY NOW
              </a>
              <a
                href="#requirements"
                className="curations-button curations-button-accent"
                style={{
                  textDecoration: "none",
                  display: "inline-block"
                }}
                aria-label="Jump to requirements section"
              >
                VIEW REQUIREMENTS
              </a>
            </div>

            <div style={{
              padding: "2rem",
              background: "rgba(255,255,255,0.1)",
              border: "2px solid white"
            }}>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "1rem"
              }}>
                APPLICATION INSTRUCTIONS:
              </h3>
              <p style={{ lineHeight: 1.8 }}>
                Email <strong>go@curatedla.xyz</strong> with "Youth Curator Application" in the subject line.
                Include your class rank, parent/guardian email and phone number, and a brief statement of interest.
                Share this page with your parents/guardians before applying.
              </p>
            </div>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}