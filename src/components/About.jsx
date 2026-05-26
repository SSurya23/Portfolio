import React from 'react';

const strengths = [
  { icon: '🧩', title: 'Full Stack Dev', desc: 'End-to-end apps with React, Spring Boot & MySQL' },
  { icon: '🧠', title: 'AI/ML Interest', desc: 'Pursuing M.Tech in Artificial Intelligence & Machine Learning' },
  { icon: '🔧', title: 'Problem Solver', desc: 'Analytical mindset with structured debugging approach' },
  { icon: '🌱', title: 'Adaptable', desc: 'Quick learner who thrives in evolving tech environments' },
];

export default function About() {
  return (
    <section style={{ minHeight: '100vh', padding: '100px 0 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="section-label">Who I am</div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 48, letterSpacing: '-0.5px',
        }}>
          About <span className="gradient-text">Me</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="grid-2">
          {/* Left */}
          <div>
            <div className="glass" style={{ padding: 28, borderRadius: 16, marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 600, color: '#67e8f9', marginBottom: 12 }}>
                Professional Objective
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: 14 }}>
                A highly motivated Software Engineer and MCA graduate, currently pursuing M.Tech in AI/ML
                at IIIT Rajiv Gandhi University. I aim to build impactful, scalable digital products while
                growing toward global opportunities in the tech industry.
              </p>
            </div>

            <div className="glass" style={{ padding: 28, borderRadius: 16 }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 600, color: '#67e8f9', marginBottom: 16 }}>
                Quick Facts
              </h3>
              {[
                ['📍', 'Location', 'Kakinada, Andhra Pradesh, India'],
                ['🎓', 'Education', 'MCA + M.Tech AIML (Ongoing)'],
                ['💼', 'Experience', '2 Internships – React & Frontend Dev'],
                ['🌐', 'Languages', 'English, Telugu, Hindi'],
                ['🎯', 'Goal', 'Full Stack / AI-ML Engineer (India & Abroad)'],
              ].map(([icon, key, val]) => (
                <div key={key} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 16, marginTop: 2 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px' }}>{key}</div>
                    <div style={{ fontSize: 14, color: '#cbd5e1', fontWeight: 500, marginTop: 2 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 600, marginBottom: 20, color: '#e2e8f0' }}>
              Core Strengths
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {strengths.map(s => (
                <div key={s.title} className="glass glass-hover" style={{ padding: 20, borderRadius: 14, cursor: 'default' }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14, color: '#e2e8f0', marginBottom: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="glass" style={{ padding: 20, borderRadius: 14, marginTop: 14, borderLeft: '3px solid #06b6d4' }}>
              <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.8, fontStyle: 'italic' }}>
                "I believe in building with purpose — every line of code should solve a real problem.
                My goal is not just to code, but to create solutions that matter."
              </p>
            </div>

            {/* Internship badges */}
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { role: 'React Developer Intern', company: 'ANV Soft Solutions', year: '2024' },
                { role: 'Frontend Developer Intern', company: 'Kriffy Technologies', year: '2022' },
              ].map(exp => (
                <div key={exp.company} className="glass" style={{
                  padding: '14px 18px', borderRadius: 12,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#67e8f9' }}>{exp.role}</div>
                    <div style={{ fontSize: 12, color: '#475569', marginTop: 2 }}>{exp.company}</div>
                  </div>
                  <span style={{
                    background: 'rgba(6,182,212,0.1)', color: '#06b6d4',
                    fontSize: 11, fontWeight: 600, padding: '3px 10px',
                    borderRadius: 20, border: '1px solid rgba(6,182,212,0.25)',
                  }}>{exp.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
