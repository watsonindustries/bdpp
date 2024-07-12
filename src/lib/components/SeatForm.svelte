<script lang="ts">
	import { FORM_STEP, type FormStep, type Section } from '$lib/custom';
	import { Button, Dropdown, DropdownItem, Label, Input, Radio } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	const rows = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

	let activeStep: FormStep = FORM_STEP.SELECT_DAY;
	let selectedDay: 0 | 1 | 2 = 0;
	let selectedRow: string;
	let selectedSeat: number;
	let selectedSection: Section;

	let penlightColor = 'red';

	let dropdownOpen = false;

	const handleNextBtnClick = () => {
		if (activeStep === FORM_STEP.SELECT_DAY) {
			if (selectedDay < 1) {
				alert('Please select a day');
				return;
			}
			activeStep = FORM_STEP.SELECT_SEAT;
		} else if (activeStep === FORM_STEP.SELECT_SEAT) {
			if (!selectedSection) {
				alert('Please select a section');
				return;
			}
			console.log(
				'Selected day:',
				selectedDay,
				'Selected section:',
				selectedSection,
				'Selected seat:',
				selectedSeat
			);
			activeStep = FORM_STEP.CONFIRMATION;
		}
	};

	const handleDropdownClick = (e: Event) => {
		e.preventDefault();
		dropdownOpen = false;
		selectedRow = (e.target as HTMLElement)?.innerText;
	};
</script>

{#if activeStep == FORM_STEP.SELECT_DAY}
	<!-- Step 1 -->
	<p>Select concert day</p>

	<Radio name="day" id="day-1" value="1" bind:group={selectedDay}>Day 1</Radio>
	<Radio name="day" id="day-2" value="2" bind:group={selectedDay}>Day 2</Radio>

	<Button color="alternative" on:click={handleNextBtnClick}>Next</Button>
{:else if activeStep == FORM_STEP.SELECT_SEAT}
	<!-- Step 2 -->
	<p>Select seating area</p>
	<Radio name="seating" id="mezzanine" value="mezzanine" bind:group={selectedSection}
		>Mezzanine</Radio
	>
	<Radio name="seating" id="orchestra" value="orchestra" bind:group={selectedSection}
		>Orchestra</Radio
	>

	<p>Enter your seat number</p>
	<Label for="row-dropdown" class="mb-2 block">Row</Label>
	<Button color="alternative"
		>{selectedRow ?? 'Select Row'}<ChevronDownOutline
			class="ms-2 h-6 w-6 text-black dark:text-white"
		/></Button
	>
	<Dropdown id="row-dropdown" class="h-48 w-48 overflow-y-auto py-1" bind:open={dropdownOpen}>
		{#each rows as row}
			<DropdownItem
				class="flex items-center gap-2 text-base font-semibold"
				on:click={handleDropdownClick}
				color="alternative"
			>
				{row}
			</DropdownItem>
		{/each}
	</Dropdown>

	<div class="mb-6">
		<Label for="seat-input" class="mb-2 block">Seat</Label>
		<Input id="seat-input" placeholder="Seat number (1-226)" type="tel" bind:value={selectedSeat} />
	</div>

	<Button color="alternative" on:click={handleNextBtnClick}>Next</Button>
{:else if activeStep == FORM_STEP.CONFIRMATION}
	<!-- Step 3 -->
	<p>Your penlight color</p>

	<p>{penlightColor}</p>

	<Button color="alternative" on:click={() => (activeStep = FORM_STEP.SELECT_DAY)}
		>Change seat</Button
	>
{/if}
