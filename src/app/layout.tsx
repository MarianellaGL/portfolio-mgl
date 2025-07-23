import { redirect } from "next/navigation";
import { defaultLocale } from "../../next-i18next.config";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale}>
      <body suppressHydrationWarning>
        <>{children}</>
      </body>
    </html>
  );
}
