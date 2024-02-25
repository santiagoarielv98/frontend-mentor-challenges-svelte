/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				normal: "hsla(var(--color-normal) / <alpha-value>) !important",
				water: "hsla(var(--type-water) / <alpha-value>) !important",
				fire: "hsla(var(--type-fire) / <alpha-value>) !important",
				grass: "hsla(var(--type-grass) / <alpha-value>) !important",
				electric: "hsla(var(--type-electric) / <alpha-value>) !important",
				ice: "hsla(var(--type-ice) / <alpha-value>) !important",
				fighting: "hsla(var(--type-fighting) / <alpha-value>) !important",
				poison: "hsla(var(--type-poison) / <alpha-value>) !important",
				ground: "hsla(var(--type-ground) / <alpha-value>) !important",
				flying: "hsla(var(--type-flying) / <alpha-value>) !important",
				psychic: "hsla(var(--type-psychic) / <alpha-value>) !important",
				bug: "hsla(var(--type-bug) / <alpha-value>) !important",
				rock: "hsla(var(--type-rock) / <alpha-value>) !important",
				ghost: "hsla(var(--type-ghost) / <alpha-value>) !important",
				dragon: "hsla(var(--type-dragon) / <alpha-value>) !important",
				dark: "hsla(var(--type-dark) / <alpha-value>) !important",
				steel: "hsla(var(--type-steel) / <alpha-value>) !important",
				fairy: "hsla(var(--type-fairy) / <alpha-value>) !important"
			}
		}
	},
	darkMode: "class",
	safelist: [
		{
			variants: ["dark","before"],
			pattern:
				/.*(water|fire|grass|electric|ice|fighting|poison|ground|flying|psychic|bug|rock|ghost|dragon|dark|steel|fairy).*/
		}
	],
	plugins: []
};
