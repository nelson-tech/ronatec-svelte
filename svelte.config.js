import adapter from "@sveltejs/adapter-node"
import preprocess from "svelte-preprocess"
import { searchForWorkspaceRoot } from "vite"

import autoImport from "sveltekit-autoimport"
import watchAndRun from "@kitql/vite-plugin-watch-and-run"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter({ out: "dist" }),
		alias: {
			$components: "src/components",
			$ui: "src/components/ui",
			$machines: "src/machines",
			$stores: "/src/stores",
			$wp: "packages/wp",
		},
		vite: {
			server: {
				fs: {
					allow: [searchForWorkspaceRoot(process.cwd()), "packages/"],
				},
			},
			plugins: [
				autoImport({
					components: [{ name: "./src/elements", flat: true }],

					module: {
						svelte: ["onMount"],
					},
				}),
				watchAndRun([
					{
						watch: "**/*.(gql|graphql)",
						run: "npm run gen",
					},
				]),
			],
		},
	},
}

export default config
