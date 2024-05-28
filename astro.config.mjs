import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://gregarious-starlight-d767cd.netlify.app/",
  integrations: [preact()]
});