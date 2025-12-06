// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const teacherName = 'Andrea';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-logo" aria-hidden="true">
            ♬
          </div>
          <div className="brand-text">
            <span className="brand-title">{teacherName} Coutinho — Music Coaching: Voice &amp; Piano</span>
            <span className="brand-subtitle">Adults of all abilities • Los Angeles</span>
          </div>
        </Link>

        <nav className="nav-desktop" aria-label="Main navigation">
          <div className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' nav-link-active' : '')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <Link to="/contact" className="btn btn-small btn-primary">
            Request a trial
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={open ? 'burger burger-open' : 'burger'} />
        </button>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                'mobile-nav-link' + (isActive ? ' mobile-nav-link-active' : '')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-fullwidth btn-primary"
            onClick={closeMenu}
          >
            Request a trial
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
