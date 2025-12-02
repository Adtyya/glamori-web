/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "https://glamori-web.vercel.app",
  generateRobotsTxt: true,
  priority: 1,
  exclude: ["/blog-sitemap.xml", "blog-pagination-sitemap.xml"],
  changefreq: "daily",
  robotsTxtOptions: {
    additionalSitemaps: [
      `${
        process.env.NEXT_PUBLIC_APP_URL || "https://glamori-web.vercel.app"
      }/blog-sitemap.xml`,
      `${
        process.env.NEXT_PUBLIC_APP_URL || "https://glamori-web.vercel.app"
      }/blog-pagination-sitemap.xml`,
    ],
  },
};
