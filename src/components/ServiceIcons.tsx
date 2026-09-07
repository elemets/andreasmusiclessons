// src/components/ServiceIcons.tsx
// Hand-drawn line icons replacing the four grayscale photographs that used to
// sit in the offerings grid. Photos of objects, desaturated and cropped
// differently from one another, read as stock imagery; a consistent 1.5px line
// set in the brass accent reads as a considered brand mark.
//
// They also remove four image requests (~90KB) from the home page.
import React from 'react';

type IconProps = { className?: string };

const base = {
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

/** Keyboard, drawn as a plan view of one octave. */
export const PianoIcon: React.FC<IconProps> = ({ className }) => (
  <svg {...base} className={className}>
    <rect x="6" y="19" width="52" height="27" rx="1.5" />
    <path d="M13.4 19v27M20.9 19v27M28.3 19v27M35.7 19v27M43.1 19v27M50.6 19v27" />
    {/* Sharps are drawn slightly narrower and at reduced opacity so this icon
        carries the same visual weight as the other three in the set. */}
    <g fill="currentColor" stroke="none" opacity="0.82">
      <rect x="11.3" y="19" width="4.2" height="15" rx="1" />
      <rect x="18.8" y="19" width="4.2" height="15" rx="1" />
      <rect x="33.6" y="19" width="4.2" height="15" rx="1" />
      <rect x="41" y="19" width="4.2" height="15" rx="1" />
      <rect x="48.5" y="19" width="4.2" height="15" rx="1" />
    </g>
  </svg>
);

/** Condenser microphone on a stand. */
export const MicrophoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg {...base} className={className}>
    <rect x="25" y="8" width="14" height="28" rx="7" />
    <path d="M28.5 16h7M28.5 21h7M28.5 26h7" opacity="0.55" />
    <path d="M18 30v2a14 14 0 0 0 28 0v-2" />
    <path d="M32 46v8" />
    <path d="M23 54h18" />
  </svg>
);

/** Staff and note — music theory. */
export const TheoryIcon: React.FC<IconProps> = ({ className }) => (
  <svg {...base} className={className}>
    <path d="M6 18h52M6 25h52M6 32h52M6 39h52M6 46h52" opacity="0.45" />
    <ellipse cx="23" cy="42" rx="6.4" ry="4.8" transform="rotate(-20 23 42)" fill="currentColor" stroke="none" />
    <path d="M28.8 39.6V13l18 5.4" />
    <path d="M46.8 18.4v15" />
    <ellipse cx="41" cy="33.4" rx="6" ry="4.5" transform="rotate(-20 41 33.4)" fill="currentColor" stroke="none" />
  </svg>
);

/** Manuscript page and pen — songwriting. */
export const SongwritingIcon: React.FC<IconProps> = ({ className }) => (
  <svg {...base} className={className}>
    <path d="M13 7h27l11 11v25" />
    <path d="M51 49v8H13V7" />
    <path d="M39 7v12h12" />
    <path d="M20 26h14M20 33h18M20 40h9" opacity="0.55" />
    <ellipse cx="35" cy="47.5" rx="5.2" ry="3.9" transform="rotate(-20 35 47.5)" fill="currentColor" stroke="none" />
    <path d="M39.7 45.6V31l8 2.4" />
  </svg>
);
