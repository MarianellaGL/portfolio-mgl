
import type { Metadata } from "next";
import "../globals.css";
import { Nunito } from "next/font/google";
import { Footer } from "@/Components/Footer";
import { Navigation } from "@/Components/Navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "../../../next-i18next.config";
import { notFound } from "next/navigation";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marianella Gomez Luna Portfolio",
  description: "Bienvenidos a mi mundillo",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`../../../public/locales/${locale}.json`))
    .default;

  return (
    <div className={nunito.className}>
      <div className="background-waves"></div>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navigation />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
