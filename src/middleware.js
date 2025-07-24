import createMiddleware from "next-intl/middleware";

const locales = ["en", "es"];
const defaultLocale = "en";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|_static|favicon.ico|.*\\.(?:js|css|png|jpg|jpeg|gif|svg|webp|ico|txt|pdf|woff2?|ttf)).*)"],
};
