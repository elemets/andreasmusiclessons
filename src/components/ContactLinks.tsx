// src/components/ContactLinks.tsx
//
// The call and text links, in one place so every call-to-action on the site
// dials the same number, prefills the same message and reports the same
// conversion event.
import React from 'react';
import { BUSINESS } from '../data/site';
import { trackLead } from '../lib/tracking';

// BUSINESS.telephone is stored with hyphens for structured data. Some Android
// messaging apps drop an `sms:` link with punctuation in it, so both hrefs are
// built from a bare E.164 number instead.
const dialable = BUSINESS.telephone.replace(/[^\d+]/g, '');

const SMS_BODY = 'Hi Andrea, I found your website and wanted to ask about music lessons.';

export const TEL_HREF = `tel:${dialable}`;
// `?&body=` rather than `?body=`: the redundant ampersand is what makes a
// prefilled message work on iOS as well as Android.
export const SMS_HREF = `sms:${dialable}?&body=${encodeURIComponent(SMS_BODY)}`;

type IconProps = { className?: string };

const iconBase = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

export const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg {...iconBase} className={className}>
    <path d="M6.6 3.5h-2a1.6 1.6 0 0 0-1.6 1.7A16.6 16.6 0 0 0 18.8 21a1.6 1.6 0 0 0 1.7-1.6v-2a1.6 1.6 0 0 0-1.4-1.6 10 10 0 0 1-2.2-.5 1.6 1.6 0 0 0-1.6.4l-.9.9a13 13 0 0 1-5-5l.9-.9a1.6 1.6 0 0 0 .4-1.6 10 10 0 0 1-.5-2.2 1.6 1.6 0 0 0-1.6-1.4Z" />
  </svg>
);

export const MessageIcon: React.FC<IconProps> = ({ className }) => (
  <svg {...iconBase} className={className}>
    <path d="M20.5 12.3a7.7 7.7 0 0 1-8.3 7.7 8.7 8.7 0 0 1-2.8-.5L4 21l1.5-4.2a7.5 7.5 0 0 1-1-3.8 7.7 7.7 0 0 1 8-7.7 7.8 7.8 0 0 1 8 7Z" />
  </svg>
);

type LinkProps = {
  /** Where on the site this link sits, e.g. "hero". Reported with the lead. */
  place: string;
  className?: string;
  iconClassName?: string;
  children?: React.ReactNode;
};

export const CallLink: React.FC<LinkProps> = ({
  place,
  className,
  iconClassName,
  children,
}) => (
  <a
    href={TEL_HREF}
    className={className}
    onClick={() => trackLead('phone_call', place)}
  >
    <PhoneIcon className={iconClassName} />
    <span>{children ?? 'Call Andrea'}</span>
  </a>
);

export const TextLink: React.FC<LinkProps> = ({
  place,
  className,
  iconClassName,
  children,
}) => (
  <a
    href={SMS_HREF}
    className={className}
    onClick={() => trackLead('text_message', place)}
  >
    <MessageIcon className={iconClassName} />
    <span>{children ?? 'Text Andrea'}</span>
  </a>
);
