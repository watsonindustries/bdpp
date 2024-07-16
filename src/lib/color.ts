/**
 * Calculates the penlight color based on the section number and row.
 * @param section - The section number.
 * @param row - The row string.
 * @returns The penlight color.
 */
import { sectionPenlightColorMapping } from '$lib/const';
import type { PenlightColor, SectionNumber } from '$lib/custom';

export function calculatePenlightColor(
	section: SectionNumber,
	row: string = 'other'
): PenlightColor {
	if (section < 4) {
		return (sectionPenlightColorMapping[section] as { [key: string]: PenlightColor })[row];
	}
	return sectionPenlightColorMapping[section] as PenlightColor;
}
