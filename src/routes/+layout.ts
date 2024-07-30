import type { LayoutLoad } from './$types';

import PenlightCard from '$lib/assets/penlight-card.jpg';

export const load = (async ({ url }) => {
	const xImageURL = new URL(PenlightCard, url.origin).toString();

	return { xImageURL };
}) satisfies LayoutLoad;
