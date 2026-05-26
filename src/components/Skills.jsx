import React from 'react';

const SKILLS = {
  'Programming Languages': { icon: '💻', items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'] },
  'Frameworks & Technologies': { icon: '⚛️', items: ['React.js', 'Spring Boot', 'Node.js'] },
  'Database': { icon: '🗄️', items: ['MySQL'] },
  'Tools': { icon: '🔧', items: ['Git', 'VS Code', 'Eclipse', 'Power BI'] },
  'Professional Skills': { icon: '🤝', items: ['Problem-solving', 'Communication', 'Teamwork', 'Adaptability'] },
  'Languages Spoken': { icon: '🌐', items: ['English', 'Telugu', 'Hindi'] },
};

export default function Skills() {
  return (
    <section style={{ minHeight: '100vh', padding: '100px 0 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="section-label">Tech & abilities</div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 48, letterSpacing: '-0.5px',
        }}>
          Skills & <span className="gradient-text">Expertise</span>
        </h2>

        {/* Skill category cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
          {Object.entries(SKILLS).map(([category, { icon, items }]) => (
            <div key={category} className="glass glass-hover" style={{ padding: 22, borderRadius: 16, cursor: 'default' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 22 }}>{icon}</span>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 13,
                  color: '#67e8f9', letterSpacing: '1px', textTransform: 'uppercase',
                }}>{category}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience highlight */}
        <div className="glass" style={{
          padding: '24px 28px', borderRadius: 16, marginTop: 24,
          borderColor: 'rgba(6,182,212,0.2)',
          display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: '#475569', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 6 }}>Work Experience</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { role: 'React Developer Intern', company: 'ANV Soft Solutions', year: '2024' },
                { role: 'Frontend Developer Intern', company: 'Kriffy Technologies', year: '2022' },
              ].map(exp => (
                <div key={exp.company} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '8px 16px', borderRadius: 8,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#06b6d4', flexShrink: 0 }} />
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: 13, color: '#67e8f9', fontWeight: 600 }}>{exp.role}</span>
                    <span style={{ fontSize: 12, color: '#475569', marginLeft: 8 }}>{exp.company} · {exp.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Currently learning */}
        <div style={{
          marginTop: 20, padding: '18px 24px', borderRadius: 14,
          background: 'rgba(139,92,246,0.06)',
          border: '1px solid rgba(139,92,246,0.2)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ fontSize: 20 }}>🚀</span>
          <div>
            <div style={{ fontSize: 12, color: '#a78bfa', fontWeight: 600, letterSpacing: '0.5px', marginBottom: 3 }}>CURRENTLY LEARNING</div>
            <div style={{ fontSize: 13, color: '#94a3b8' }}>
              Advanced AI/ML concepts · Deep Learning · Python for Data Science · System Design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
