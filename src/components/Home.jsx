import React, { useState, useEffect } from 'react';

const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'AI/ML Enthusiast',
  'Problem Solver'
];

function Particles() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            borderRadius: '50%',
            background:
              i % 2 === 0
                ? 'rgba(6,182,212,0.6)'
                : 'rgba(59,130,246,0.4)',
            left: `${10 + i * 5.5}%`,
            top: `${8 + i * 5}%`,
            animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
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
        text += ROLES[ri][charIndex];
        charIndex++;

        if (charIndex > ROLES[ri].length) {
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
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    ['5+', 'Years Learning'],
    ['2', 'Internships'],
    ['2', 'Projects'],
    ['M.Tech', 'AI/ML Ongoing'],
  ];

  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
      }}
      className="grid-dots"
    >
      <Particles />

      {/* Orbit rings */}
      <div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          border: '1px dashed rgba(6,182,212,0.15)',
          width: 400,
          height: 400,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          border: '1px dashed rgba(6,182,212,0.08)',
          width: 620,
          height: 620,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
        }}
      >
        {/* Left Section */}
        <div style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
          <div className="section-label" style={{ marginBottom: 20 }}>
            Welcome to my portfolio
          </div>

          <h1
            className="hero-name"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.1,
              marginBottom: 16,
              letterSpacing: '-1px',
            }}
          >
            S Surya Sai
            <span style={{ color: '#06b6d4' }}>.</span>
          </h1>

          <div
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 500,
              color: '#94a3b8',
              marginBottom: 20,
              minHeight: 32,
            }}
          >
            <span className="gradient-text">{typed}</span>

            <span
              className="cursor-blink"
              style={{
                color: '#06b6d4',
                marginLeft: 2,
              }}
            >
              |
            </span>
          </div>

          <p
            style={{
              color: '#64748b',
              lineHeight: 1.8,
              marginBottom: 32,
              fontSize: 15,
              maxWidth: 460,
            }}
          >
            MCA graduate & M.Tech AI/ML student passionate about building
            scalable full-stack applications. Based in Kakinada, India —
            crafting digital solutions that make a real difference.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <button
              className="btn-primary"
              onClick={() => setActive('Projects')}
            >
              <span>View Projects →</span>
            </button>

            <button
              className="btn-outline"
              onClick={() => setActive('About')}
            >
              About Me
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              marginTop: 40,
              display: 'flex',
              gap: 28,
              flexWrap: 'wrap',
            }}
          >
            {stats.map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: 20,
                    background:
                      'linear-gradient(135deg, #06b6d4, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {num}
                </div>

                <div
                  style={{
                    fontSize: 11,
                    color: '#475569',
                    letterSpacing: '0.5px',
                    marginTop: 2,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div
          className="animate-float"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius:
                '30% 70% 70% 30% / 30% 30% 70% 70%',
              background:
                'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))',
              border: '1px solid rgba(6,182,212,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 64,
                background:
                  'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              SS
            </div>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 30% 30%, rgba(6,182,212,0.1), transparent 60%)',
              }}
            />
          </div>

          {/* Floating icons */}
          {[
            ['⚛️', '-8%', '10%'],
            ['☕', '85%', '20%'],
            ['🐍', '-6%', '55%'],
            ['🤖', '86%', '60%'],
            ['🗄️', '42%', '-5%'],
          ].map(([emoji, left, top], i) => (
            <div
              key={i}
              className="glass"
              style={{
                position: 'absolute',
                padding: '8px 10px',
                borderRadius: 10,
                fontSize: 18,
                left,
                top,
                animation: `float ${2.5 + i * 0.6}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          animation: 'float 2s ease-in-out infinite',
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: 'rgba(6,182,212,0.5)',
          }}
        >
          ↓
        </div>
      </div>
    </section>
  );
}