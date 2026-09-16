import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import { site, siteUrl } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
});

const description =
  "Sitio institucional de la Jefatura Distrital de San Andrés de Giles (Dirección General de Cultura y Educación, Provincia de Buenos Aires). Instituciones educativas, inspectores, calendario, formularios, normativa y documentos del distrito.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.nombreJefatura} — ${site.organismo}`,
    template: `%s · ${site.nombreJefatura}`,
  },
  description,
  openGraph: {
    title: site.nombreJefatura,
    description,
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${encodeSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-surface text-ink">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
