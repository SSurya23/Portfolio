import React from 'react';

const PROJECTS = [
  {
    title: 'Blood Bank Management System',
    desc: 'A full-stack system designed to automate and streamline blood bank operations, improving healthcare workflow efficiency.',
    features: [
      'Automated donor registration & management',
      'Real-time blood inventory tracking',
      'Donation scheduling & appointment system',
      'Improved healthcare workflow efficiency',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
    icon: '🩸',
    headerGradient: 'linear-gradient(135deg, #ef4444, #ec4899)',
    cardBg: 'rgba(239,68,68,0.06)',
    borderColor: 'rgba(239,68,68,0.18)',
    accent: '#501010',
    accentBg: 'rgba(239,68,68,0.08)',
    accentBorder: 'rgba(239,68,68,0.18)',
  },
  {
    title: 'Online Home Service Provider',
    desc: 'A platform connecting homeowners with skilled service providers for seamless booking and service management.',
    features: [
      'End-to-end service booking platform',
      'User & provider profile management',
      'Automated booking & notification system',
      'Enhanced service delivery experience',
    ],
    tech: ['React.js', 'Spring Boot', 'MySQL', 'REST API'],
    icon: '🏠',
    headerGradient: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
    cardBg: 'rgba(37,99,235,0.06)',
    borderColor: 'rgba(37,99,235,0.18)',
    accent: '#09627b',
    accentBg: 'rgba(37,99,235,0.08)',
    accentBorder: 'rgba(37,99,235,0.16)',
  },
];

export default function Projects() {
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
        <div className="section-label">What I've Built</div>

        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            marginBottom: 48,
            letterSpacing: '-0.5px',
            color: '#0f172a',
          }}
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}
          className="grid-2"
        >
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="glass glass-hover"
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                cursor: 'default',
                border: `1px solid ${project.borderColor}`,
                background: project.cardBg,
                transition: 'all 0.3s ease',
              }}
            >
              {/* Project header */}
              <div
                style={{
                  height: 120,
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: project.headerGradient,
                    opacity: 0.12,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 54,
                  }}
                >
                  {project.icon}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    width: 110,
                    height: 110,
                    borderRadius: '50%',
                    background: project.headerGradient,
                    opacity: 0.08,
                    top: -30,
                    right: -20,
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#0f172a',
                    marginBottom: 10,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: '#475569',
                    lineHeight: 1.75,
                    marginBottom: 16,
                  }}
                >
                  {project.desc}
                </p>

                {/* Feature list */}
                <ul style={{ listStyle: 'none', marginBottom: 18, padding: 0 }}>
                  {project.features.map((f, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        gap: 8,
                        alignItems: 'flex-start',
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          color: project.accent,
                          marginTop: 4,
                          flexShrink: 0,
                          fontSize: 10,
                        }}
                      >
                        ▶
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          color: '#334155',
                          lineHeight: 1.6,
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: '8px 14px',
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 600,
                        background: project.accentBg,
                        color: project.accent,
                        border: `1px solid ${project.accentBorder}`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 40,
            textAlign: 'center',
            padding: '28px',
            borderRadius: 18,
            background: '#ffffff',
            border: '1px dashed rgba(37,99,235,0.18)',
            boxShadow: '0 10px 25px rgba(15,23,42,0.04)',
          }}
        >
          <div style={{ fontSize: 14, color: '#475569' }}>
            More projects coming soon as I continue growing my portfolio during M.Tech AI/ML studies.
          </div>
        </div>
      </div>
    </section>
  );
}