import React, { useState } from 'react';

const cardStyle = {
  background: '#ffffff',
  border: '1px solid rgba(15,23,42,0.08)',
  boxShadow: '0 12px 30px rgba(15,23,42,0.06)',
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handle = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const validate = () => {
    const errs = {};

    if (!form.name.trim()) {
      errs.name = 'Name is required';
    }

    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Valid email is required';
    }

    if (!form.message.trim()) {
      errs.message = 'Message is required';
    }

    return errs;
  };

  const submit = () => {
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSent(true);

    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '100px 0 60px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="section-label">Get in touch</div>

        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            marginBottom: 12,
            color: '#0f172a',
          }}
        >
          Contact <span className="gradient-text">Me</span>
        </h2>

        <p
          style={{
            color: '#475569',
            marginBottom: 48,
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          Open for job opportunities, collaborations, and conversations.
        </p>

        <div
          className="grid-2"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 28,
            alignItems: 'start',
          }}
        >
          {/* LEFT */}
          <div>
            {[
              {
                icon: '✉️',
                label: 'Email',
                val: 'suryabss3008@gmail.com',
                link: 'mailto:suryabss3008@gmail.com',
              },
              {
                icon: '📞',
                label: 'Phone',
                val: '+91 9640533044',
                link: 'tel:+919640533044',
              },
              {
                icon: '📍',
                label: 'Location',
                val: 'Kakinada, Andhra Pradesh, India',
              },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  ...cardStyle,
                  padding: '20px 22px',
                  borderRadius: 18,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: 'rgba(37,99,235,0.08)',
                      border: '1px solid rgba(37,99,235,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: '#64748b',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        marginBottom: 4,
                      }}
                    >
                      {c.label}
                    </div>

                    {c.link ? (
                      <a
                        href={c.link}
                        style={{
                          fontSize: 15,
                          color: '#0f172a',
                          textDecoration: 'none',
                          fontWeight: 600,
                        }}
                      >
                        {c.val}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontSize: 15,
                          color: '#334155',
                          fontWeight: 500,
                        }}
                      >
                        {c.val}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Availability */}
            <div
              style={{
                ...cardStyle,
                padding: '22px 24px',
                borderRadius: 18,
                borderLeft: '4px solid #2563eb',
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: '#64748b',
                  marginBottom: 12,
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                }}
              >
                Availability
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 0 4px rgba(16,185,129,0.18)',
                  }}
                />

                <span
                  style={{
                    fontSize: 14,
                    color: '#0f172a',
                    fontWeight: 600,
                  }}
                >
                  Open to new opportunities
                </span>
              </div>

              <div
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  color: '#475569',
                  lineHeight: 1.7,
                }}
              >
                Full Stack · Java Backend · React Frontend · AI/ML Roles
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            style={{
              ...cardStyle,
              padding: 30,
              borderRadius: 22,
            }}
          >
            {sent && (
              <div
                style={{
                  padding: '14px 16px',
                  borderRadius: 12,
                  marginBottom: 20,
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.18)',
                  color: '#059669',
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                ✓ Message sent successfully!
              </div>
            )}

            {[
              {
                name: 'name',
                label: 'Your Name',
                placeholder: 'John Doe',
                type: 'text',
              },
              {
                name: 'email',
                label: 'Email Address',
                placeholder: 'john@example.com',
                type: 'email',
              },
              {
                name: 'subject',
                label: 'Subject',
                placeholder: 'Job Opportunity / Collaboration',
                type: 'text',
              },
            ].map((field) => (
              <div key={field.name} style={{ marginBottom: 18 }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#334155',
                    marginBottom: 8,
                  }}
                >
                  {field.label}
                </label>

                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handle}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 14,
                    border: '1px solid rgba(15,23,42,0.08)',
                    background: '#f8fafc',
                    color: '#0f172a',
                    fontSize: 14,
                    outline: 'none',
                  }}
                />

                {errors[field.name] && (
                  <div
                    style={{
                      fontSize: 12,
                      color: '#dc2626',
                      marginTop: 6,
                    }}
                  >
                    {errors[field.name]}
                  </div>
                )}
              </div>
            ))}

            <div style={{ marginBottom: 18 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#334155',
                  marginBottom: 8,
                }}
              >
                Message
              </label>

              <textarea
                name="message"
                rows={5}
                placeholder="Write your message here..."
                value={form.message}
                onChange={handle}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: 14,
                  border: '1px solid rgba(15,23,42,0.08)',
                  background: '#f8fafc',
                  color: '#0f172a',
                  fontSize: 14,
                  outline: 'none',
                  resize: 'vertical',
                }}
              />

              {errors.message && (
                <div
                  style={{
                    fontSize: 12,
                    color: '#dc2626',
                    marginTop: 6,
                  }}
                >
                  {errors.message}
                </div>
              )}
            </div>

            <button
              onClick={submit}
              style={{
                width: '100%',
                padding: '15px 18px',
                borderRadius: 999,
                border: 'none',
                background: '#0f172a',
                color: '#ffffff',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          marginTop: 80,
          paddingTop: 32,
          borderTop: '1px solid rgba(15,23,42,0.08)',
        }}
      >
        <div
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 24,
            color: '#0f172a',
            marginBottom: 8,
          }}
        >
          S Surya Sai
        </div>

        <div
          style={{
            fontSize: 14,
            color: '#475569',
          }}
        >
          Software Engineer · AI/ML Enthusiast · Kakinada, India
        </div>

        <div
          style={{
            fontSize: 12,
            color: '#64748b',
            marginTop: 16,
          }}
        >
          © {new Date().getFullYear()} S Surya Sai
        </div>
      </footer>
    </section>
  );
}