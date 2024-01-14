/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		`./src/pages/**/*.{js,jsx,ts,tsx}`,
		`./src/components/**/*.{js,jsx,ts,tsx}`,
	],
	theme: {
		extend: {
			colors: {
				shark: {
					50: '#f7f7f8',
					100: '#eeeef0',
					200: '#dadadd',
					300: '#babbbf',
					400: '#94959c',
					500: '#606169',
					600: '#606169',
					700: '#4e4e56',
					800: '#434349',
					900: '#3b3c3f',
					950: '#27272a',
				},
			},
      fontFamily: {
        'dm': ['DM Sans'],
        'robot': ['Roboto']
      }
		},
	},
	plugins: [],
};
