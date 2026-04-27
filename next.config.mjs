/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "bg"],
    defaultLocale: "en",
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
 async headers() {
  const oneMonth = "public, max-age=2592000";
  const oneYear = "public, max-age=31536000";

  return [
    {
      source: "/((?!api|_next|.*\\..*).*)",
      headers: [
        {
          key: "Cache-Control",
          value: oneMonth,
        },
      ],
    },
    {
      source: "/:path*\\.(js|css|woff|woff2|ttf|otf|eot|jpg|jpeg|png|gif|webp|avif|svg|ico)",
      headers: [
        {
          key: "Cache-Control",
          value: oneYear,
        },
      ],
    },
  ];
},
images: {
  minimumCacheTTL: 31536000,
},

};

export default nextConfig;
