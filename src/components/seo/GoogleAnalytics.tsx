import Script from "next/script";

export function GoogleConsentDefaults() {
  return (
    <script
      id="ft-ga-consent-defaults"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});`,
      }}
    />
  );
}

export function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  if (!measurementId?.trim()) return null;
  const id = measurementId.trim();
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ft-ga-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}