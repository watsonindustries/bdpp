<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<title>BDPP | About</title>
<meta name="description" content="Breaking Dimensions Penlight Project information page." />

<MetaTags
	title="BDPP | About"
	description="Breaking Dimensions Penlight Project information page."
/>

<section class="mx-auto max-w-2xl space-y-4 p-4">
	<h1
		class="mb-4 bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent xl:text-6xl"
	>
		HoloENLight Breaks Dimensions!
	</h1>

	<p class="text-primary-900 xl:text-xl">
		<span class="font-semibold text-primary-900">HoloENLight</span> is a fan-organized hololive concert
		penlight project group. Last year we made rainbows at Connect the World, and now we want to bring
		some colors to Breaking Dimensions!
	</p>

	<h2
		class="bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent"
	>
		How can I participate?
	</h2>

	<p class="text-primary-900 xl:text-xl">
		During the concerts, the project will start with the Breaking Dimensions theme. Change your
		penlight to the designated color and we’ll make a striking pattern! When the song finishes, the
		project is over!
	</p>

	<p class="text-primary-900 xl:text-xl">
		To find your project color, read the section and row written on your ticket. Then use this
		webapp or the map to find the correct color! Both days will use the same pattern.
	</p>

	<div class="text-primary-900 xl:text-xl">
		<!-- Square space for QR Code near this section -->
	</div>

	<!-- Map of the color pattern with sections labeled -->

	<h2
		class="bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent"
	>
		How can I help?
	</h2>
	<p class="mb-4 text-primary-900 xl:text-xl">
		This project can’t succeed without fans spreading the word! Please tell your friends going to
		Breaking Dimensions about us! Thank you!
	</p>

	<p class="text-primary-900 xl:text-xl">#HoloENLight</p>

	<Button shadow color="dark" size="xl" href="https://x.com/HoloENPP" class="gap-2 text-2xl" pill
		>Follow us on <span class="font-bold">𝕏</span></Button
	>
</section>
