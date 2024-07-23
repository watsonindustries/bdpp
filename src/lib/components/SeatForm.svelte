<script lang="ts">
	import { calculatePenlightColor } from '$lib/color';
	import { colorToBladeColorsMapping, sectionPenlightColorMapping } from '$lib/const';
	import { FORM_STEP, type FormStep, type PenlightColor, type SectionNumber } from '$lib/custom';
	import { Button, Dropdown, DropdownItem, Label } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { fade } from 'svelte/transition';

	const sections = Object.keys(sectionPenlightColorMapping);

	let activeStep: FormStep = FORM_STEP.SELECT_SEAT;

	let selectedRow: string;
	let selectedSection: SectionNumber;

	$: availableRows = selectedSection
		? Object.keys(sectionPenlightColorMapping[selectedSection])
		: [];

	let rowDropdownOpen = false;
	let sectionDropdownOpen = false;

	$: penlightColor = selectedSection
		? calculatePenlightColor(selectedSection, selectedRow)
		: 'none';

	$: penlightColorHex =
		penlightColor !== 'none'
			? colorToBladeColorsMapping[penlightColor as PenlightColor]['hex']
			: 'none';

	// Handlers
	const handleNextBtnClick = () => {
		if (activeStep === FORM_STEP.SELECT_SEAT) {
			activeStep = FORM_STEP.CONFIRMATION;
		}
	};

	const handleRowDropdownClick = (e: Event) => {
		e.preventDefault();
		rowDropdownOpen = false;
		selectedRow = (e.target as HTMLElement)?.innerText;
	};

	const handleSectionDropdownClick = (e: Event) => {
		e.preventDefault();
		sectionDropdownOpen = false;
		selectedSection = parseInt((e.target as HTMLElement)?.innerText) as SectionNumber;
	};

	const handleHexColorClick = () => {
		navigator.clipboard.writeText(penlightColorHex);
		alert('Copied HEX code to clipboard');
	};
</script>

{#if activeStep == FORM_STEP.SELECT_SEAT}
	<!-- Step 1 -->
	<section id="select-seat" class="flex flex-col gap-4">
		<Label for="section-dropdown" class="mb-2 block text-2xl">Section</Label>
		<Button color="alternative"
			>{selectedSection ?? 'Select Section'}<ChevronDownOutline
				class="ms-2 h-6 w-6 text-black dark:text-white"
			/></Button
		>
		<Dropdown
			id="section-dropdown"
			class="h-64 w-60 overflow-y-auto py-1"
			bind:open={sectionDropdownOpen}
		>
			{#each sections as section}
				<DropdownItem
					class="flex items-center gap-2 text-base font-semibold"
					color="alternative"
					on:click={handleSectionDropdownClick}
				>
					{section}
				</DropdownItem>
			{/each}
		</Dropdown>

		{#if selectedSection >= 1 && selectedSection < 4}
			<section id="row-selection" transition:fade>
				<Label for="row-dropdown" class="mb-2 block text-2xl">Row</Label>
				<Button color="alternative"
					>{selectedRow ?? 'Select Row'}<ChevronDownOutline
						class="ms-2 h-6 w-6 text-black dark:text-white"
					/></Button
				>
				<Dropdown
					id="row-dropdown"
					class="h-64 w-60 overflow-y-auto py-1"
					bind:open={rowDropdownOpen}
				>
					{#each availableRows as row}
						<DropdownItem
							class="flex items-center gap-2 text-base font-semibold"
							on:click={handleRowDropdownClick}
							color="alternative"
						>
							{row}
						</DropdownItem>
					{/each}
				</Dropdown>
			</section>
		{/if}

		<Button color="primary" on:click={handleNextBtnClick}>Next</Button>
	</section>
{:else if activeStep == FORM_STEP.CONFIRMATION}
	<section
		id="confirmation"
		class="flex flex-col items-center justify-center gap-6 align-middle"
		in:fade
	>
		<!-- Step 2 -->
		<p class="text-xl font-semibold text-secondary-500">Your penlight color</p>

		<div class="rounded-2xl p-32" style={`background-color: ${penlightColorHex}`}></div>
		<p class="text-6xl font-bold tracking-tight text-primary-800">{penlightColor}</p>
		<p class="text-2xl text-primary-700" on:click={handleHexColorClick}>{penlightColorHex}</p>

		<Button color="alternative" size="xl" on:click={() => (activeStep = FORM_STEP.SELECT_SEAT)}
			>Change seat</Button
		>
	</section>
{/if}
