const { i18n } = require("./next-i18next.config");
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  i18n,
  reactStrictMode: true,
  experimental: { serverActions: true },
};

module.exports = withNextIntl(nextConfig);
