// src/components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import brandLogo from '../assets/AndreaMusicCoachLogoNoText.png';

const teacherName = 'Andrea';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const { pathname } = useLocation();

  // Only the home page has a hero to sit over. Everywhere else the bar
  // keeps its paper background from the first paint.
  const overHero = pathname === '/';

  useEffect(() => {
    if (!overHero) {
      setPastHero(false);
      return;
    }
    const sync = () => setPastHero(window.scrollY > window.innerHeight - 72);
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [overHero]);

  // An open mobile menu needs its solid background back, or the links
  // land on paper while the bar above them is still inverted.
  const transparent = overHero && !pastHero && !open;

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className={'navbar' + (transparent ? ' navbar-transparent' : '')}>
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src={brandLogo}
            alt="Andrea Music Coach logo"
            className="brand-logo"
          />
          <div className="brand-text">
            <span className="brand-title">{teacherName} Coutinho - Music Coaching</span>
            <span className="brand-subtitle">Private music lessons in Los Angeles</span>
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
            Request Free Consultation
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
            Request Free Consultation
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;



