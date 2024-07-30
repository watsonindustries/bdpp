<script lang="ts">
	import type { PageData } from '../credits/$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>BDPP | Credits</title>
	<meta name="description" content="Breaking Dimensions Penlight Project credits." />
</svelte:head>

<section class="mx-auto max-w-2xl space-y-4 p-4">
	<h1
		class="bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-6xl tracking-tight text-transparent"
	>
		Credits
	</h1>
	<p class="text-xl text-primary-900">
		HoloENLight would not be possible without the help of the following people:
	</p>

	<h2 class="text-2xl text-primary-700 xl:text-3xl" id="project-managers">Project Managers</h2>
	<ul class="list-inside list-disc text-lg text-primary-900 xl:text-xl">
		<li>Fathendur</li>
		<li>Iriomote</li>
		<li>Ninjastahr</li>
	</ul>

	<h2 class="text-2xl text-primary-700 xl:text-3xl" id="web-development">Web Development</h2>
	<ul class="list-inside list-disc text-lg text-primary-900 xl:text-xl">
		<li>danirukun</li>
		<li>Moondog</li>
		Special thanks to GoldElysium for logistics support.
	</ul>

	<h2 class="text-2xl text-primary-700 xl:text-3xl" id="graphic-design">Graphic Design</h2>
	<ul class="list-inside list-disc text-lg text-primary-900 xl:text-xl">
		<li>Skiddosaur</li>
	</ul>

	<p class="text-lg text-primary-900">...and many other fans!</p>
</section>
