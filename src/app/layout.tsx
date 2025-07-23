import { defaultLocale } from "../../next-i18next.config";

export const revalidate = 0;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
