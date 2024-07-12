export const FORM_STEP = {
	SELECT_DAY: 'SELECT_DAY',
	SELECT_SEAT: 'SELECT_SEAT',
	CONFIRMATION: 'CONFIRMATION'
} as const;

export type FormStep = keyof typeof FORM_STEP;

export const SECTION = {
	MEZZANINE: 'mezzanine',
	ORCHESTRA: 'orchestra'
} as const;

export type Section = keyof typeof SECTION;
