// src/lib/tracking.ts
//
// CONVERSION TRACKING — READ BEFORE CHANGING THE EVENT NAMES.
//
// `generate_lead` is the single conversion event. It is imported from this
// GA4 property into Google Ads, so renaming it breaks the Ads conversion.
//
// It now fires for THREE things, not just the form: a form submission, a tap
// on a `tel:` link, and a tap on an `sms:` link. Most of this site's traffic
// is on a phone, where calling or texting is the conversion — counting only
// the form undercounted the leads the ads were actually producing. The
// `lead_method` parameter separates them again in GA4, so register it as a
// custom dimension there if you want the split in reports.
const GA4_MEASUREMENT_ID = 'G-WKPWSHT6XL';

/** How the visitor got in touch. */
export type LeadMethod = 'form' | 'phone_call' | 'text_message';

declare global {
  interface Window {
    gtag?: (command: 'event', name: string, parameters: Record<string, string>) => void;
  }
}

function send(name: string, parameters: Record<string, string>) {
  // Analytics must never interfere with form delivery, its success message,
  // or the phone's dialler opening.
  try {
    window.gtag?.('event', name, { send_to: GA4_MEASUREMENT_ID, ...parameters });
  } catch {
    // A blocked or unavailable tracking script should not affect the site.
  }
}

export function trackContactPageView() {
  send('contact_page_view', { page_path: '/contact' });
}

/**
 * A lead, however it arrived.
 *
 * @param method  Which channel the visitor used.
 * @param place   Where on the site they used it, e.g. "mobile_bar" or "hero".
 *                Tells you which call-to-action is actually earning the taps.
 */
export function trackLead(method: LeadMethod, place: string) {
  send('generate_lead', { lead_method: method, lead_place: place });
}
