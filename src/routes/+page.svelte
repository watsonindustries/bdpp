<script>
	import SeatForm from '$lib/components/SeatForm.svelte';
	import StageImage from '$lib/assets/stage_image.png?enhanced';

	import { MetaTags } from 'svelte-meta-tags';
</script>

<title>BDPP | Home</title>
<meta name="description" content="Breaking Dimensions Penlight Project home." />

<MetaTags title="BDPP | Home" description="Breaking Dimensions Penlight Project" />

<div class="mx-auto max-w-xl space-y-4 p-4">
	<SeatForm />
	<br />
	<div class="my-8 rounded border-2 border-primary-950/70"></div>
	<br />
	<p class="text-2xl">Map</p>

	<enhanced:img src={StageImage} alt="Penlight Stage Chart 2024" class="mx-auto" />
</div>
