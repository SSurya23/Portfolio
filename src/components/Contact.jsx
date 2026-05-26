import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const submit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section style={{ minHeight: '100vh', padding: '100px 0 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="section-label">Get in touch</div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 10, letterSpacing: '-0.5px',
        }}>
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p style={{ color: '#64748b', marginBottom: 48, fontSize: 14 }}>
          Open for job opportunities, collaborations, and conversations.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32, alignItems: 'start' }} className="grid-2">
          {/* Left: contact info */}
          <div>
            {[
              { icon: '✉️', label: 'Email', val: 'suryabss3008@gmail.com', link: 'mailto:suryabss3008@gmail.com' },
              { icon: '📞', label: 'Phone', val: '+91 9640533044', link: 'tel:+919640533044' },
              { icon: '📍', label: 'Location', val: 'Kakinada, Andhra Pradesh, India' },
            ].map(c => (
              <div key={c.label} className="glass glass-hover" style={{ padding: '18px 20px', borderRadius: 14, marginBottom: 12, cursor: 'default' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: '#475569', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{c.label}</div>
                    {c.link
                      ? <a href={c.link} style={{ fontSize: 13, color: '#67e8f9', fontWeight: 500, textDecoration: 'none' }}>{c.val}</a>
                      : <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{c.val}</div>
                    }
                  </div>
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="glass" style={{ padding: '18px 20px', borderRadius: 14, marginTop: 4, borderLeft: '3px solid #3b82f6' }}>
              <div style={{ fontSize: 11, color: '#475569', marginBottom: 8, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Availability
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 0 3px rgba(16,185,129,0.2)' }} />
                <span style={{ fontSize: 13, color: '#94a3b8' }}>Open to new opportunities</span>
              </div>
              <div style={{ marginTop: 8, fontSize: 12, color: '#334155' }}>
                Full Stack · Java Backend · React Frontend · AI/ML Roles
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass" style={{ padding: 28, borderRadius: 18 }}>
            {sent && (
              <div style={{
                padding: '12px 16px', borderRadius: 10, marginBottom: 16,
                background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                color: '#34d399', fontSize: 13, fontWeight: 500,
              }}>
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {[
              { name: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
              { name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
              { name: 'subject', label: 'Subject (Optional)', placeholder: 'Job Opportunity / Collaboration...', type: 'text' },
            ].map(field => (
              <div key={field.name} style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#94a3b8', marginBottom: 6, letterSpacing: '0.3px' }}>
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handle}
                />
                {errors[field.name] && (
                  <div style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors[field.name]}</div>
                )}
              </div>
            ))}

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#94a3b8', marginBottom: 6, letterSpacing: '0.3px' }}>
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message here..."
                value={form.message}
                onChange={handle}
              />
              {errors.message && (
                <div style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.message}</div>
              )}
            </div>

            <button className="btn-primary" onClick={submit} style={{ width: '100%', padding: 14 }}>
              <span>{sent ? '✓ Message Sent!' : 'Send Message →'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: 80, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 24,
          background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          marginBottom: 8,
        }}>S Surya Sai</div>
        <div style={{ fontSize: 13, color: '#334155', letterSpacing: '0.5px' }}>
          Software Engineer · AI/ML Enthusiast · Kakinada, India
        </div>
        <div style={{ fontSize: 11, color: '#1e293b', marginTop: 16 }}>
          © {new Date().getFullYear()} S Surya Sai. Built with React.js & Tailwind CSS
        </div>
      </footer>
    </section>
  );
}
