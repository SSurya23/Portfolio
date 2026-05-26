import React from 'react';

const EDUCATION = [
  { degree: 'M.Tech in Artificial Intelligence & Machine Learning', inst: 'IIIT Rajiv Gandhi University', year: 'Expected 2027', current: true },
  { degree: 'MCA – Master of Computer Applications', inst: 'Adikavi Nannaya University', year: '2021 – 2023' },
  { degree: 'B.Sc Computer Science', inst: 'Pragati Degree College', year: '2016 – 2020' },
  { degree: 'Intermediate (10+2)', inst: 'Pragati Junior College', year: '2014 – 2016' },
  { degree: 'SSC – 10th Grade', inst: 'Nehru Convent High School', year: '2013 – 2014' },
];

export default function Education() {
  return (
    <section style={{ minHeight: '100vh', padding: '100px 0 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="section-label">Academic journey</div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 52, letterSpacing: '-0.5px',
        }}>
          My <span className="gradient-text">Education</span>
        </h2>

        <div style={{ position: 'relative', maxWidth: 720 }}>
          {EDUCATION.map((edu, i) => (
            <div key={i} style={{
              display: 'flex', gap: 24, marginBottom: 28,
              animation: 'fadeInUp 0.5s ease forwards',
              animationDelay: `${i * 0.12}s`,
              opacity: 0,
            }}>
              {/* Timeline dot + line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                  background: edu.current
                    ? 'linear-gradient(135deg, #06b6d4, #3b82f6)'
                    : 'rgba(255,255,255,0.06)',
                  border: edu.current ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, position: 'relative', zIndex: 1,
                }}>
                  {edu.current ? '🎓' : '📚'}
                </div>
                {i < EDUCATION.length - 1 && (
                  <div style={{
                    width: 2, flex: 1, minHeight: 20,
                    background: 'linear-gradient(to bottom, rgba(6,182,212,0.4), rgba(6,182,212,0.05))',
                    margin: '4px 0',
                  }} />
                )}
              </div>

              {/* Card */}
              <div className="glass-hover" style={{
                flex: 1, padding: '20px 24px', borderRadius: 14, cursor: 'default',
                border: edu.current ? '1px solid rgba(6,182,212,0.3)' : '1px solid rgba(255,255,255,0.06)',
                background: edu.current ? 'rgba(6,182,212,0.05)' : 'rgba(255,255,255,0.03)',
                transition: 'all 0.3s ease',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{
                      fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15,
                      color: edu.current ? '#67e8f9' : '#e2e8f0', marginBottom: 4,
                    }}>{edu.degree}</div>
                    <div style={{ fontSize: 13, color: '#64748b' }}>{edu.inst}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                    {edu.current && (
                      <span style={{
                        background: 'rgba(6,182,212,0.15)', color: '#06b6d4',
                        fontSize: 10, fontWeight: 700, padding: '3px 10px',
                        borderRadius: 20, letterSpacing: '0.5px',
                        border: '1px solid rgba(6,182,212,0.3)',
                      }}>CURRENT</span>
                    )}
                    <span style={{ fontSize: 12, color: '#475569', fontWeight: 500 }}>{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
