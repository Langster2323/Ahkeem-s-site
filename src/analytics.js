// Loads Google Analytics (gtag.js) when a measurement ID is configured.
// Universal Analytics IDs (UA-...) stopped collecting data in 2023;
// set REACT_APP_GA_TRACKING to a GA4 ID (G-...) in Netlify.
export function initAnalytics() {
  const id = import.meta.env.REACT_APP_GA_TRACKING;
  if (!id || typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);
}
