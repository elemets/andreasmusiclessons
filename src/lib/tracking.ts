const GOOGLE_ADS_ID = 'AW-18434780037';

declare global {
  interface Window {
    gtag?: (command: 'event', name: string, parameters: Record<string, string>) => void;
  }
}

// Labels come from the corresponding Google Ads conversion event snippets.
const conversionLabels = {
  contact_page_view: import.meta.env.VITE_GOOGLE_ADS_CONTACT_VIEW_LABEL,
  generate_lead: import.meta.env.VITE_GOOGLE_ADS_FORM_SUBMIT_LABEL,
};

export function trackContactEvent(name: keyof typeof conversionLabels) {
  // Analytics must never interfere with form delivery or its success message.
  try {
    window.gtag?.('event', name, {
      send_to: GOOGLE_ADS_ID,
      page_path: '/contact',
      form_name: 'contact',
    });

    const label = conversionLabels[name]?.trim();
    if (label) {
      window.gtag?.('event', 'conversion', {
        send_to: `${GOOGLE_ADS_ID}/${label}`,
      });
    }
  } catch {
    // A blocked or unavailable tracking script should not affect the site.
  }
}
