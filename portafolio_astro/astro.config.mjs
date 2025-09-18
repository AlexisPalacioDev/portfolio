// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

const isVercel = Boolean(process.env.VERCEL);
const githubSite = 'https://alexispalaciodev.github.io/portfolio/';
const vercelSite = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;

const config = {
  site: isVercel ? vercelSite ?? githubSite : githubSite,
  base: isVercel ? '/' : '/portfolio',
  integrations: [react(), tailwind(), sitemap()]
};

if (isVercel) {
  config.adapter = vercel();
}

// https://astro.build/config
export default defineConfig(config);