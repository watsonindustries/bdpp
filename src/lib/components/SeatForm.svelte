<script lang="ts">
	import { calculatePenlightColor } from '$lib/color';
	import { FORM_STEP, type FormStep, type SectionNumber } from '$lib/custom';
	import { Button, Dropdown, DropdownItem, Label } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	const sections = Array.from({ length: 16 }, (_, i) => i + 1);
	const rows = ['v', 'w', 'x', 'y', 'z', 'other'];

	let activeStep: FormStep = FORM_STEP.SELECT_SEAT;

	let selectedRow: string;
	let selectedSection: SectionNumber;

	let rowDropdownOpen = false;
	let sectionDropdownOpen = false;

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

	$: penlightColor =
		selectedSection ? calculatePenlightColor(selectedSection, selectedRow) : 'none';
</script>

{#if activeStep == FORM_STEP.SELECT_SEAT}
	<!-- Step 1 -->
	<Label for="section-dropdown" class="mb-2 block">Section</Label>
	<Button color="alternative"
		>{selectedSection ?? 'Select Section'}<ChevronDownOutline
			class="ms-2 h-6 w-6 text-black dark:text-white"
		/></Button
	>
	<Dropdown
		id="section-dropdown"
		class="h-48 w-48 overflow-y-auto py-1"
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
		<Label for="row-dropdown" class="mb-2 block">Row</Label>
		<Button color="alternative"
			>{selectedRow ?? 'Select Row'}<ChevronDownOutline
				class="ms-2 h-6 w-6 text-black dark:text-white"
			/></Button
		>
		<Dropdown id="row-dropdown" class="h-48 w-48 overflow-y-auto py-1" bind:open={rowDropdownOpen}>
			{#each rows as row}
				<DropdownItem
					class="flex items-center gap-2 text-base font-semibold"
					on:click={handleRowDropdownClick}
					color="alternative"
				>
					{row}
				</DropdownItem>
			{/each}
		</Dropdown>
	{/if}

	<Button color="alternative" on:click={handleNextBtnClick}>Next</Button>
{:else if activeStep == FORM_STEP.CONFIRMATION}
	<!-- Step 2 -->
	<p>Your penlight color</p>

	<p>{penlightColor}</p>

	<Button color="alternative" on:click={() => (activeStep = FORM_STEP.SELECT_SEAT)}
		>Change seat</Button
	>
{/if}
