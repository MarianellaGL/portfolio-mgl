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

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  if (!["en", "es"].includes(locale)) notFound();

  const messages = (await import(`@/locales/${locale}.json`)).default;

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
