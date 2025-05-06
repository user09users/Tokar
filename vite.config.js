import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				catalog: resolve(__dirname, "catalog.html"),
				cardPage: resolve(__dirname, "cardPage.html"),
				about: resolve(__dirname, "about.html"),
				contacts: resolve(__dirname, "contacts.html"),
				works: resolve(__dirname, "works.html"),
				cases: resolve(__dirname, "cases.html"),
			},
		},
	},
});
