/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // No remote patterns needed as all brand assets are hosted locally
  },
  async redirects() {
    return [{ source: "/social-media-management", destination: "/", permanent: true }];
  },
};

export default nextConfig;
