import React, { useEffect, useState } from 'react';

const ROLES = ['Software Engineer', 'Full Stack Developer', 'React Developer', 'Java Developer'];

function FloatingDots() {
  return (
    <div className="floating-dots" aria-hidden="true">
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className="dot"
          style={{
            left: `${8 + i * 5}%`,
            top: `${10 + (i % 6) * 12}%`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home({ setActive }) {
  const [typed, setTyped] = useState('');
  const [, setRoleIndex] = useState(0);

  useEffect(() => {
    let text = '';
    let charIndex = 0;
    let direction = 1;
    let ri = 0;

    const interval = setInterval(() => {
      if (direction === 1) {
        text += ROLES[ri][charIndex] || '';
        charIndex += 1;

        if (charIndex >= ROLES[ri].length) {
          direction = -1;
        }
      } else {
        text = text.slice(0, -1);

        if (text.length === 0) {
          direction = 1;
          charIndex = 0;
          ri = (ri + 1) % ROLES.length;
          setRoleIndex(ri);
        }
      }

      setTyped(text);
    }, 85);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    ['5+', 'Years Learning'],
    ['2', 'Internships'],
    ['2', 'Projects'],
    ['MCA', 'Completed'],
  ];

  return (
    <main className="home-page">
      <FloatingDots />

      <section className="container hero-grid">
        <div className="hero-text">
          <div className="section-label">Welcome to my portfolio</div>

          <h1 className="hero-name">
            S Surya Sai<span className="accent-dot"></span>
          </h1>

          <p className="hero-role">
            <span className="gradient-text">{typed}</span>
            <span className="cursor-blink">|</span>
          </p>

          <p className="hero-description">
            MCA graduate passionate about building clean, scalable, and user-friendly web
            applications. I enjoy turning ideas into practical digital solutions.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => setActive('Projects')}>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => setActive('About')}>
              About Me
            </button>
          </div>

          <div className="stats-row">
            {stats.map(([value, label]) => (
              <div className="stat-card" key={label}>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="photo-card">
            <img src="/profile.jpg" alt="S Surya Sai" className="profile-photo" />
          </div>
        </div>
      </section>
    </main>
  );
}