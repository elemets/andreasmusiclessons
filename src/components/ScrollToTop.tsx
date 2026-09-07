// src/components/ScrollToTop.tsx
// React Router keeps the scroll position across route changes, so without this
// a visitor clicking a neighbourhood link from halfway down the page lands
// halfway down the next one.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduced ? 'auto' : 'smooth' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
