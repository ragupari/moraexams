import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { defaultLang } from "./src/i18n/ui";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), svelte()],
	output: "hybrid",
	redirects: {
		"/": `/${defaultLang}/`,
		"/modelpaper": `https://drive.google.com/drive/folders/1pAzO3OQ7nwBLuJ_gU-4vY12x6eENrwPz`,
		"/results": `/${defaultLang}/results`,
		"/practicepapers": `/${defaultLang}/practicepapers`,
		"/manage": "https://moraetamils.com/manage",
	},
	adapter: netlify({
		edgeMiddleware: true,
	}),
	// site: "https://astounding-brigadeiros-506019.netlify.app",
});
