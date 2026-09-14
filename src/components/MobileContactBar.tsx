// src/components/MobileContactBar.tsx
//
// Most of this site's traffic is on a phone, and a phone can dial. This bar is
// pinned to the bottom of every page below 768px so the two fastest ways to
// get in touch are on screen from the first paint — no scrolling to the
// footer, no opening the menu, no filling in a form.
//
// It is hidden on desktop by CSS (see .mobile-contact-bar in index.css), where
// a tel: link is of little use and the header CTA is already visible.
import React from 'react';
import { CallLink, TextLink } from './ContactLinks';

const MobileContactBar: React.FC = () => (
  <div className="mobile-contact-bar">
    <CallLink
      place="mobile_bar"
      className="mobile-contact-action"
      iconClassName="mobile-contact-icon"
    >
      Call
    </CallLink>
    <TextLink
      place="mobile_bar"
      className="mobile-contact-action mobile-contact-action-text"
      iconClassName="mobile-contact-icon"
    >
      Text
    </TextLink>
  </div>
);

export default MobileContactBar;
