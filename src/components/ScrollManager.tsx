// src/components/ScrollManager.tsx
// Owns every programmatic scroll on the site.
//
// React Router keeps the scroll position across route changes, so without this
// a visitor clicking a neighbourhood link from halfway down the page lands
// halfway down the next one.
//
// It also drives in-page anchors (/#faq, /#testimonials and friends), which
// the browser cannot resolve on its own here: on a cold load the fragment is
// applied before React has rendered the section, so the target element does
// not exist yet and the jump is silently dropped. Anything pointing at a
// fragment — an ad sitelink especially — depends on this running after paint.
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/** Frames to wait for a hash target to mount before giving up. */
const MAX_FRAMES = 10;

const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  const firstRun = useRef(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Animating a long scroll on a cold deep link just delays the content the
    // visitor asked for; only in-app navigation gets the smooth treatment.
    const behavior: ScrollBehavior = reduced || firstRun.current ? 'auto' : 'smooth';
    firstRun.current = false;

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior });
      return;
    }

    let id: string;
    try {
      id = decodeURIComponent(hash.slice(1));
    } catch {
      id = hash.slice(1); // Malformed escape sequence — use the raw fragment.
    }

    let frame = 0;
    const jump = (framesLeft: number) => {
      const target = document.getElementById(id);
      if (target) {
        // scroll-margin-top on the section keeps the heading clear of the
        // sticky navbar; block: 'start' is what honours it.
        target.scrollIntoView({ behavior, block: 'start' });
        return;
      }
      if (framesLeft > 0) {
        frame = requestAnimationFrame(() => jump(framesLeft - 1));
      } else {
        // Unknown fragment: fall back to the top rather than stranding the
        // visitor wherever the previous page happened to be scrolled to.
        window.scrollTo({ top: 0, left: 0, behavior });
      }
    };

    jump(MAX_FRAMES);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
