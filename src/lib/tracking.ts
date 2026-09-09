const GA4_MEASUREMENT_ID = 'G-WKPWSHT6XL';

declare global {
  interface Window {
    gtag?: (command: 'event', name: string, parameters: Record<string, string>) => void;
  }
}

// Import generate_lead from this GA4 property into Google Ads as a conversion.
export function trackContactEvent(name: 'contact_page_view' | 'generate_lead') {
  // Analytics must never interfere with form delivery or its success message.
  try {
    window.gtag?.('event', name, {
      send_to: GA4_MEASUREMENT_ID,
      page_path: '/contact',
      form_name: 'contact',
    });
  } catch {
    // A blocked or unavailable tracking script should not affect the site.
  }
}
