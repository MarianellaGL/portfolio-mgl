import createMiddleware from "next-intl/middleware";

const locales = ["en", "es"];
const defaultLocale = "es";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|_static|favicon.ico|.*\\..*).*)"],
};
