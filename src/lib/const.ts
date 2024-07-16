export const sectionPenlightColorMapping = {
	1: {
		x: 'violet',
		y: 'violet',
		z: 'violet',
		other: 'red'
	},
	2: {
		v: 'blue',
		w: 'blue',
		x: 'blue',
		y: 'blue',
		z: 'blue',
		other: 'orange'
	},
	3: {
		x: 'lightblue',
		y: 'lightblue',
		z: 'lightblue',
		other: 'pink'
	},
	4: 'violet',
	5: 'violet',
	6: 'blue',
	7: 'lightblue',
	8: 'lightblue',
	9: 'purple',
	10: 'purple',
	11: 'yellow',
	12: 'white',
	13: 'green',
	14: 'lightpink',
	15: 'lightgreen',
	16: 'lightgreen'
};

export const colorToBladeColorsMapping = {
	violet: {
		hex: '#8e58a5'
	},
	blue: {
		hex: '#1650c3'
	},
	lightblue: {
		hex: '#71cad5'
	},
	pink: {
		hex: '#c55b98'
	},
	orange: {
		hex: '#d79d47'
	},
	red: {
		hex: '#ff0000'
	},
	purple: {
		hex: '#674599'
	},
	yellow: {
		hex: '#efe736'
	},
	white: {
		hex: '#cfd0cb'
	},
	green: {
		hex: '#008f49'
	},
	lightpink: {
		hex: '#d999c1'
	},
	lightgreen: {
		hex: '#3fa688'
	}
} as const;
