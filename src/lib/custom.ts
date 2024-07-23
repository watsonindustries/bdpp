import type { sectionPenlightColorMapping } from '$lib/const';

export const FORM_STEP = {
	SELECT_SEAT: 'SELECT_SEAT',
	CONFIRMATION: 'CONFIRMATION'
} as const;

export type FormStep = keyof typeof FORM_STEP;

export type SectionNumber = keyof typeof sectionPenlightColorMapping;

export type PenlightColor =
	| 'violet'
	| 'blue'
	| 'lightblue'
	| 'purple'
	| 'yellow'
	| 'white'
	| 'green'
	| 'lightpink'
	| 'lightgreen'
	| 'orange'
	| 'pink'
	| 'red';

export type RGB = {
	r: number;
	g: number;
	b: number;
};
