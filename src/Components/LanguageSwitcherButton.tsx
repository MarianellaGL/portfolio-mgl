import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcherButton({
  className,
}: {
  className?: string;
}) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = locale === "en" ? "es" : "en";

  const newPath = (() => {
    const segments = pathname.split("/");
    segments[1] = switchTo;
    return segments.join("/");
  })();

  return (
    <button onClick={() => router.push(newPath)} className={className}>
      🌐 {switchTo.toUpperCase()} / {locale.toUpperCase()}
    </button>
  );
}
