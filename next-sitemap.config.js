/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "https://glamori-web.vercel.app",
  generateRobotsTxt: true,
  priority: 1,
  exclude: ["/server-sitemap.xml"],
  changefreq: "daily",
  robotsTxtOptions: {
    additionalSitemaps: [
      `${
        process.env.NEXT_PUBLIC_APP_URL || "https://glamori-web.vercel.app"
      }/server-sitemap.xml`,
    ],
  },
};
