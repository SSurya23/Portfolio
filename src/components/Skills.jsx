import React from 'react';

const SKILLS = {
  'Programming Languages': {
    icon: '💻',
    items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
  },
  'Frameworks & Technologies': {
    icon: '⚛️',
    items: ['React.js', 'Spring Boot', 'Node.js'],
  },
  Database: {
    icon: '🗄️',
    items: ['MySQL'],
  },
  Tools: {
    icon: '🔧',
    items: ['Git', 'VS Code', 'Eclipse', 'Power BI'],
  },
  'Professional Skills': {
    icon: '🤝',
    items: ['Problem-solving', 'Communication', 'Teamwork', 'Adaptability'],
  },
  'Languages Spoken': {
    icon: '🌐',
    items: ['English', 'Telugu', 'Hindi'],
  },
};

const cardStyle = {
  background: '#ffffff',
  border: '1px solid rgba(15,23,42,0.08)',
  boxShadow: '0 12px 30px rgba(15,23,42,0.06)',
};

export default function Skills() {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '100px 0 80px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="section-label">Tech & Abilities</div>

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
          Skills & <span style={{ color: '#2563eb' }}>Expertise</span>
        </h2>

        {/* Skill Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {Object.entries(SKILLS).map(([category, { icon, items }]) => (
            <div
              key={category}
              style={{
                ...cardStyle,
                padding: 24,
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 18,
                }}
              >
                <span style={{ fontSize: 24 }}>{icon}</span>

                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: 14,
                    color: '#0f172a',
                    letterSpacing: '0.5px',
                  }}
                >
                  {category}
                </h3>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 10,
                }}
              >
                {items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: 'rgba(37,99,235,0.08)',
                      color: '#1d4ed8',
                      border: '1px solid rgba(37,99,235,0.16)',
                      padding: '10px 16px',
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div
          style={{
            ...cardStyle,
            marginTop: 28,
            padding: '28px 32px',
            borderRadius: 20,
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: '#2563eb',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Internship Experience
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            {[
              {
                role: 'React Developer Intern',
                company: 'ANV Soft Solutions',
                year: '2024',
              },
              {
                role: 'Frontend Developer Intern',
                company: 'Kriffy Technologies',
                year: '2022',
              },
            ].map((exp) => (
              <div
                key={exp.company}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 18px',
                  borderRadius: 14,
                  background: '#f8fafc',
                  border: '1px solid rgba(15,23,42,0.06)',
                  flexWrap: 'wrap',
                  gap: 10,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      color: '#0f172a',
                      fontWeight: 700,
                    }}
                  >
                    {exp.role}
                  </div>

                  <div
                    style={{
                      fontSize: 13,
                      color: '#475569',
                      marginTop: 4,
                    }}
                  >
                    {exp.company}
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(37,99,235,0.08)',
                    color: '#2563eb',
                    border: '1px solid rgba(37,99,235,0.16)',
                    padding: '6px 14px',
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {exp.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div
          style={{
            marginTop: 24,
            padding: '22px 24px',
            borderRadius: 18,
            background: '#ffffff',
            border: '1px solid rgba(37,99,235,0.12)',
            boxShadow: '0 10px 25px rgba(15,23,42,0.04)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 14,
          }}
        >
          <span style={{ fontSize: 22 }}>🚀</span>

          <div>
            <div
              style={{
                fontSize: 13,
                color: '#2563eb',
                fontWeight: 700,
                letterSpacing: '0.5px',
                marginBottom: 6,
                textTransform: 'uppercase',
              }}
            >
              Currently Learning
            </div>

            <div
              style={{
                fontSize: 14,
                color: '#475569',
                lineHeight: 1.7,
              }}
            >
              Advanced AI/ML concepts · Deep Learning · Python for Data Science · System Design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}