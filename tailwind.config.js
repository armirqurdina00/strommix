module.exports = {
	theme: {
		extend: {
		  backgroundColor: {
			'enbw-blue': '#000099',
			'enbw-orange': '#FF8F0F',
		  },      
		  textColor: {
			'enbw-orange': '#FF8F0F',
		  },
		},
	  },
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	plugins: [require('tailwindcss-safe-area')],
}
