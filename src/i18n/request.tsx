import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "../../next-i18next.config";

export default getRequestConfig(async ({ locale }) => {
  console.log("aaaa", locale);
  const safeLocale =
    locale && locales.includes(locale) ? locale : defaultLocale;

  if (!safeLocale) {
    throw new Error("No locale could be determined in getRequestConfig.");
  }

  return {
    safeLocale,
    messages: (await import(`../../public/locales/${safeLocale}.json`)).default,
  };
});
