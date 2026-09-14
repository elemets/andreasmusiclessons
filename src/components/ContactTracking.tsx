import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackContactPageView } from '../lib/tracking';

export default function ContactTracking() {
  const { pathname } = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '').toLowerCase() || '/';
    if (previousPath.current === path) return;
    previousPath.current = path;
    if (path === '/contact') trackContactPageView();
  }, [pathname]);

  return null;
}
