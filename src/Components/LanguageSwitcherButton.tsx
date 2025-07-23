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

  const newLocale = locale === "en" ? "es" : "en";

  const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);

  function handleClick() {
    router.push(newPathname);
  }

  return (
    <button onClick={handleClick} className={className}>
      🌐 {newLocale.toUpperCase()} / {locale.toUpperCase()}
    </button>
  );
}
