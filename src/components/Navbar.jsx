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

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 24px',
      background: scrolled ? 'rgba(5,13,26,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 64,
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22,
          background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
        }} onClick={() => setActive('Home')}>
          SS<span style={{ WebkitTextFillColor: '#06b6d4' }}>.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hide-mobile" style={{ display: 'flex', gap: 32 }}>
          {NAV_ITEMS.map(name => (
            <span
              key={name}
              className={`nav-link${active === name ? ' active' : ''}`}
              onClick={() => setActive(name)}
            >{name}</span>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            color: '#94a3b8', cursor: 'pointer', fontSize: 24, padding: 4,
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >☰</button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="glass" style={{ padding: 16, borderRadius: 12, margin: '0 0 8px' }}>
          {NAV_ITEMS.map(name => (
            <div
              key={name}
              style={{
                padding: '10px 4px',
                color: active === name ? '#06b6d4' : '#94a3b8',
                cursor: 'pointer', fontSize: 15, fontWeight: 500,
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
              onClick={() => { setActive(name); setMenuOpen(false); }}
            >{name}</div>
          ))}
        </div>
      )}
    </nav>
  );
}
