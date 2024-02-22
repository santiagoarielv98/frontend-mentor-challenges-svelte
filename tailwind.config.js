/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				water: "hsla(var(--type-water) / <alpha-value>)",
				fire: "hsla(var(--type-fire) / <alpha-value>)",
				grass: "hsla(var(--type-grass) / <alpha-value>)",
				electric: "hsla(var(--type-electric) / <alpha-value>)",
				ice: "hsla(var(--type-ice) / <alpha-value>)",
				fighting: "hsla(var(--type-fighting) / <alpha-value>)",
				poison: "hsla(var(--type-poison) / <alpha-value>)",
				ground: "hsla(var(--type-ground) / <alpha-value>)",
				flying: "hsla(var(--type-flying) / <alpha-value>)",
				psychic: "hsla(var(--type-psychic) / <alpha-value>)",
				bug: "hsla(var(--type-bug) / <alpha-value>)",
				rock: "hsla(var(--type-rock) / <alpha-value>)",
				ghost: "hsla(var(--type-ghost) / <alpha-value>)",
				dragon: "hsla(var(--type-dragon) / <alpha-value>)",
				dark: "hsla(var(--type-dark) / <alpha-value>)",
				steel: "hsla(var(--type-steel) / <alpha-value>)",
				fairy: "hsla(var(--type-fairy) / <alpha-value>)"
			}
		}
	},
	plugins: []
};
