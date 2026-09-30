/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://poemasreflexiones.com",
  generateRobotsTxt: true,
  sitemapSize: 10000,
  outDir: "./out",
  exclude: ["/icon.svg", "/404"],
};
