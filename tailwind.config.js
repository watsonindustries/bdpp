import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#edf3ff',
					100: '#dfe7ff',
					200: '#c5d4ff',
					300: '#a2b6ff',
					400: '#7d8ffc',
					500: '#4f5af5',
					600: '#4241ea',
					700: '#3833cf',
					800: '#2e2ca7',
					900: '#2b2c84',
					950: '#1b194d'
				},
				secondary: {
					50: '#ecfcff',
					100: '#cff6fe',
					200: '#9feafc',
					300: '#67dbf9',
					400: '#22c1ee',
					500: '#06a3d4',
					600: '#0882b2',
					700: '#0e6890',
					800: '#155575',
					900: '#164763',
					950: '#082e44'
				}
			}
		}
	},
	plugins: [flowbite],
  darkMode: 'class'
};
