import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "../../next-i18next.config";

export default getRequestConfig(async (params) => {
  const resolveRequest = await params.requestLocale;
  const safeLocale = resolveRequest || "es";

  if (!safeLocale) {
    throw new Error("No locale could be determined in getRequestConfig.");
  }

  return {
    locale: safeLocale,
    messages: (await import(`../locales/${safeLocale}.json`)).default,
  };
});
