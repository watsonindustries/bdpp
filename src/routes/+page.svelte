<script lang="ts">
	import SeatForm from '$lib/components/SeatForm.svelte';
	import StageImage from '$lib/assets/stage_image.png?enhanced';

	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>BDPP | Home</title>
	<meta name="description" content="Breaking Dimensions Penlight Project home." />
</svelte:head>

<MetaTags
	title="BDPP | Home"
	description="Breaking Dimensions Penlight Project"
	canonical="https://bdpp.holoen.fans/"
	openGraph={{
		url: 'https://bdpp.holoen.fans',
		title: 'HoloENLight',
		description: 'Breaking Dimensions Penlight Project',
		images: [
			{
				url: data.xImageURL,
				width: 700,
				height: 366,
				alt: 'HoloENLight Logo'
			}
		],
		siteName: 'BDPP Home'
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: 'HoloENLight',
		description: 'Breaking Dimensions Penlight Project.',
		image: data.xImageURL,
		imageAlt: 'HoloENLight Logo'
	}}
	additionalMetaTags={[
		{
			property: 'og:image:secure_url',
			content: data.xImageURL
		}
	]}
/>

<div class="mx-auto max-w-xl space-y-4 p-4">
	<SeatForm />
	<br />
	<div class="my-8 rounded border-2 border-primary-950/70"></div>
	<br />
	<p class="text-2xl font-bold tracking-tight text-primary-800">Map</p>

	<enhanced:img src={StageImage} alt="Penlight Stage Chart 2024" class="mx-auto" />
</div>
