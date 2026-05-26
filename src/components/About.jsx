import React from 'react';

const strengths = [
  {
    icon: '🧩',
    title: 'Full Stack Dev',
    desc: 'End-to-end apps with React, Spring Boot & MySQL',
  },
  {
    icon: '🧠',
    title: 'AI/ML Interest',
    desc: 'Pursuing M.Tech in Artificial Intelligence & Machine Learning',
  },
  {
    icon: '🔧',
    title: 'Problem Solver',
    desc: 'Analytical mindset with structured debugging approach',
  },
  {
    icon: '🌱',
    title: 'Adaptable',
    desc: 'Quick learner who thrives in evolving tech environments',
  },
];

const quickFacts = [
  ['📍', 'Location', 'Kakinada, Andhra Pradesh, India'],
  ['🎓', 'Education', 'MCA + M.Tech AIML (Ongoing)'],
  ['💼', 'Experience', '2 Internships – React & Frontend Dev'],
  ['🌐', 'Languages', 'English, Telugu, Hindi'],
  ['🎯', 'Goal', 'Full Stack / AI-ML Engineer (India & Abroad)'],
];

const experiences = [
  { role: 'React Developer Intern', company: 'ANV Soft Solutions', year: '2024' },
  { role: 'Frontend Developer Intern', company: 'Kriffy Technologies', year: '2022' },
];

const cardStyle = {
  background: '#ffffff',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.06)',
};

export default function About() {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '100px 0 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="section-label">Who I am</div>

        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            marginBottom: 48,
            letterSpacing: '-0.5px',
            color: '#0f172a',
          }}
        >
          About <span className="gradient-text">Me</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'start',
          }}
          className="grid-2"
        >
          {/* Left */}
          <div>
            <div
              className="glass glass-hover"
              style={{ ...cardStyle, padding: 28, borderRadius: 18, marginBottom: 20 }}
            >
              <h3
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#2563eb',
                  marginBottom: 12,
                }}
              >
                Professional Objective
              </h3>

              <p
                style={{
                  color: '#334155',
                  lineHeight: 1.85,
                  fontSize: 14,
                }}
              >
                A highly motivated Software Engineer and MCA graduate, currently pursuing
                M.Tech in AI/ML at IIIT Rajiv Gandhi University. I aim to build impactful,
                scalable digital products while growing toward global opportunities in the
                tech industry.
              </p>
            </div>

            <div
              className="glass glass-hover"
              style={{ ...cardStyle, padding: 28, borderRadius: 18 }}
            >
              <h3
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#2563eb',
                  marginBottom: 16,
                }}
              >
                Quick Facts
              </h3>

              {quickFacts.map(([icon, key, val]) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    gap: 12,
                    marginBottom: 14,
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ fontSize: 16, marginTop: 2 }}>{icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: '#0f172a',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.6px',
                      }}
                    >
                      {key}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: '#475569',
                        fontWeight: 500,
                        marginTop: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {val}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 20,
                color: '#0f172a',
              }}
            >
              Core Strengths
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {strengths.map((s) => (
                <div
                  key={s.title}
                  className="glass glass-hover"
                  style={{
                    ...cardStyle,
                    padding: 20,
                    borderRadius: 16,
                    cursor: 'default',
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: 14,
                      color: '#0f172a',
                      marginBottom: 6,
                    }}
                  >
                    {s.title}
                  </div>
                  <div style={{ fontSize: 12, color: '#475569', lineHeight: 1.7 }}>
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="glass"
              style={{
                ...cardStyle,
                padding: 20,
                borderRadius: 16,
                marginTop: 14,
                borderLeft: '3px solid #2563eb',
              }}
            >
              <p
                style={{
                  color: '#475569',
                  fontSize: 13,
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                }}
              >
                "I believe in building with purpose — every line of code should solve a real
                problem. My goal is not just to code, but to create solutions that matter."
              </p>
            </div>

            {/* Internship badges */}
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="glass glass-hover"
                  style={{
                    ...cardStyle,
                    padding: '14px 18px',
                    borderRadius: 14,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>
                      {exp.role}
                    </div>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
                      {exp.company}
                    </div>
                  </div>

                  <span
                    style={{
                      background: 'rgba(37,99,235,0.08)',
                      color: '#2563eb',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 20,
                      border: '1px solid rgba(37,99,235,0.16)',
                    }}
                  >
                    {exp.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}