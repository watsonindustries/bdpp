export const FORM_STEP = {
	SELECT_SEAT: 'SELECT_SEAT',
	CONFIRMATION: 'CONFIRMATION'
} as const;

export type FormStep = keyof typeof FORM_STEP;
