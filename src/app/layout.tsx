import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAW Photography",
  description: "Приложение для профессиональных фотографов",
  manifest: "/RAW/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "RAW",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#2C2418",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="apple-touch-icon" href="/RAW/icons/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/RAW/icons/icon-512.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RAW" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="RAW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/RAW/sw.js', { scope: '/RAW/' })
                    .catch(function(err) { console.log('SW error:', err); });
                });
              }
            `,
          }}
        />
      </head>
      <body>
        <div className="phone-shell">{children}</div>
      </body>
    </html>
  );
}
