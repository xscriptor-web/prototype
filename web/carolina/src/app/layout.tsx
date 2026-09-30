import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";
import "@xscriptor/xcomponents/styles.css";
import esMessages from "@/messages/es.json";
import { I18nProvider } from "@/app/i18n-provider";
import LenisProvider from "@/app/components/LenisProvider";
import TransitionProvider from "@/app/components/transitionProvider";
import FooterDivider from "@/app/components/layout/FooterDivider";
import XFooterComponent from "@/app/components/layout/footer/XFooterComponent";

export const metadata: Metadata = {
  metadataBase: new URL("https://poemasreflexiones.com"),
  title: {
    default: "Poemas y Reflexiones — Carolina Massa",
    template: "%s | Poemas y Reflexiones",
  },
  description:
    "Reflexiones poéticas y psicológicas que tocan el alma. Portfolio literario de Carolina Massa: poemas, libros y escritura creativa.",
  openGraph: {
    title: "Poemas y Reflexiones — Carolina Massa",
    description:
      "Reflexiones poéticas y psicológicas que tocan el alma. Portfolio literario de Carolina Massa.",
    locale: "es_ES",
    type: "website",
    siteName: "Poemas y Reflexiones",
    images: [
      {
        url: "/images/blog/el-arte-y-la-salud-mental.webp",
        width: 1200,
        height: 1200,
        alt: "Poemas y Reflexiones — Carolina Massa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poemas y Reflexiones — Carolina Massa",
    description:
      "Reflexiones poéticas y psicológicas que tocan el alma.",
    images: ["/images/blog/el-arte-y-la-salud-mental.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.setAttribute("data-theme","dark")}}catch(e){}})();`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-(--bg) text-(--text) overflow-x-hidden">
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        <I18nProvider locale="es" messages={esMessages}>
          <LenisProvider />
          <TransitionProvider />
          <main
            id="main-content"
            className="flex-1 px-4 sm:px-6 lg:px-8 pt-16"
          >
            {children}
          </main>
          <FooterDivider />
          <XFooterComponent />
        </I18nProvider>
      </body>
    </html>
  );
}
