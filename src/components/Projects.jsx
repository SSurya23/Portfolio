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
    gradient: 'linear-gradient(135deg, #e11d48, #db2777)',
    accentColor: 'rgba(225,29,72,0.1)',
    borderColor: 'rgba(225,29,72,0.25)',
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
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    accentColor: 'rgba(6,182,212,0.08)',
    borderColor: 'rgba(6,182,212,0.25)',
  },
];

export default function Projects() {
  return (
    <section style={{ minHeight: '100vh', padding: '100px 0 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="section-label">What I've built</div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 48, letterSpacing: '-0.5px',
        }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="grid-2">
          {PROJECTS.map((project, i) => (
            <div key={i} className="glass-hover" style={{
              borderRadius: 18, overflow: 'hidden', cursor: 'default',
              border: `1px solid ${project.borderColor}`,
              background: project.accentColor,
              transition: 'all 0.3s ease',
            }}>
              {/* Project header banner */}
              <div style={{
                height: 110, position: 'relative', overflow: 'hidden',
                background: 'linear-gradient(135deg, #050d1a, #0a1628)',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: project.gradient, opacity: 0.12,
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 52,
                }}>{project.icon}</div>
                {/* Decorative circles */}
                <div style={{
                  position: 'absolute', width: 100, height: 100, borderRadius: '50%',
                  background: project.gradient, opacity: 0.08,
                  top: -30, right: -20,
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 17,
                  color: '#e2e8f0', marginBottom: 8,
                }}>{project.title}</h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, marginBottom: 16 }}>
                  {project.desc}
                </p>

                {/* Feature list */}
                <ul style={{ listStyle: 'none', marginBottom: 18 }}>
                  {project.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                      <span style={{ color: '#06b6d4', marginTop: 3, flexShrink: 0, fontSize: 10 }}>▶</span>
                      <span style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      padding: '4px 12px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                      background: 'rgba(6,182,212,0.1)', color: '#67e8f9',
                      border: '1px solid rgba(6,182,212,0.2)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 40, textAlign: 'center',
          padding: '28px', borderRadius: 16,
          background: 'rgba(6,182,212,0.04)',
          border: '1px dashed rgba(6,182,212,0.2)',
        }}>
          <div style={{ fontSize: 13, color: '#475569' }}>
            More projects coming soon as I grow my portfolio during M.Tech AI/ML studies.
          </div>
        </div>
      </div>
    </section>
  );
}
