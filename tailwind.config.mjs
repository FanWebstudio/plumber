/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1681FF',
				dark: '#171A1F',
				secondary: '#495460',
				divider: '#E2E7EC',
				yellow: '#FFD234',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				satoshi: ['Satoshi', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
