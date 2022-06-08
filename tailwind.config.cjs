const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			animation: {
				"reverse-spin": "reverse-spin 1s linear infinite",
			},
			keyframes: {
				"reverse-spin": {
					from: {
						transform: "rotate(360deg)",
					},
				},
			},
			colors: {
				electric: "#db00ff",
				ribbon: "#0047ff",
				primary: "var(--primary)",
				text: {
					primary: "var(--text-primary)",
					secondary: "#111",
				},
				"primary-2": "var(--primary-2)",
				secondary: "var(--secondary)",
				"secondary-2": "var(--secondary-2)",
				hover: "var(--hover)",
				// gray: colors.neutral,
				violet: { main: "var(--violet)", light: "var(--violet-light)" },
				pink: { main: "var(--pink)" },
				cyan: { main: "var(--cyan)" },
				blue: {
					dark: "#485D7D",
					light: "#6B82A6",
					main: "#5375A0",
				},
				teal: "#32de8a",
				green: { main: "var(--green)" },
				red: { main: "#d72638" },
				// white: "#fffaff",
				black: "#0d1821",
				accent: "#5375A0",
				highlight: "#37b679",
				error: "#d72638",
			},
			fontFamily: {
				exo: ["Exo", "sans-serif"],
				// montserrat: ["Montserrat", "sans-serif"],
				sans: ["Exo", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
