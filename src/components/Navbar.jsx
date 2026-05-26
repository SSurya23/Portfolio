import React, { useState, useEffect } from 'react';

const NAV_ITEMS = ['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact'];

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (name) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        background: scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(15,23,42,0.08)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1150,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
          position: 'relative',
        }}
      >
        <div
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 24,
            color: '#0f172a',
            cursor: 'pointer',
            letterSpacing: '-0.5px',
          }}
          onClick={() => handleNavClick('Home')}
        >
          Surya<span style={{ color: '#2563eb' }}>.</span>
        </div>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {NAV_ITEMS.map((name) => (
            <button
              key={name}
              onClick={() => handleNavClick(name)}
              style={{
                border: 'none',
                background: active === name ? '#0f172a' : 'transparent',
                color: active === name ? '#ffffff' : '#334155',
                padding: '10px 16px',
                borderRadius: 999,
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 600,
                transition: 'all 0.25s ease',
              }}
            >
              {name}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle Menu"
          style={{
            display: 'none',
            width: 42,
            height: 42,
            borderRadius: 12,
            border: 'none',
            background: '#0f172a',
            color: '#ffffff',
            fontSize: 20,
            cursor: 'pointer',
          }}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div
          className="mobile-dropdown"
          style={{
            background: '#ffffff',
            border: '1px solid rgba(15,23,42,0.08)',
            borderRadius: 18,
            padding: 12,
            marginBottom: 12,
            boxShadow: '0 20px 40px rgba(15,23,42,0.08)',
          }}
        >
          {NAV_ITEMS.map((name) => (
            <div
              key={name}
              onClick={() => handleNavClick(name)}
              style={{
                padding: '12px 14px',
                borderRadius: 12,
                marginBottom: 6,
                background: active === name ? 'rgba(37,99,235,0.08)' : 'transparent',
                color: active === name ? '#2563eb' : '#334155',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}