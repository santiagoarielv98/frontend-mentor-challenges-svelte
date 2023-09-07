<script lang="ts">
	import Card from './components/Card.svelte';
	import SearchInput from './components/SearchInput.svelte';
	import { countries } from './country';

	let search = '';
	let filter = '';

	$: filteredCountries = $countries.filter(
		(country) =>
			country.name.common.toLowerCase().includes(search.toLowerCase()) &&
			country.region.toLowerCase().includes(filter.toLowerCase())
	);

	const handleKeyUp = (e: KeyboardEvent) => {
		let target = e.target as HTMLLIElement;
		if (target.nodeName !== 'LI') return;

		if (e.key === 'Escape') {
			filter = '';
		}
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		let target = e.target as HTMLLIElement;
		if (target.nodeName !== 'LI') return;
		if (e.key === 'Enter') {
			filter = target.dataset.value ?? '';
		}
	};

	const handleFilter = (e: Event) => {
		let target = e.target as HTMLLIElement;
		if (target.nodeName !== 'LI') return;
		filter = target.dataset.value ?? '';
	};

	const filters = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
</script>

<form class="flex justify-between gap-4 flex-wrap">
	<SearchInput {search} />
	<label
		class="inline-flex w-full max-w-[12.5rem] relative h-max shadow-md bg-white rounded-md dark:bg-gray-800"
	>
		<input id="menu" hidden class="peer" type="checkbox" />
		<div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="w-5 h-5"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>

		<label
			class="w-full px-6 py-4 text-sm rounded-md cursor-pointer peer-checked:ring-2 peer-checked:ring-gray-300 hover:ring-2 hover:ring-gray-300"
			for="menu"
			id="label"
		>
			{#if filter}
				{filter}
			{:else}
				Filter by Region
			{/if}
		</label>
		<ul
			id="filter"
			class="invisible absolute inset-x-0 top-full mt-2 py-3 peer-checked:visible shadow-md bg-white cursor-pointer dark:bg-gray-800 rounded-md z-10"
			on:click={handleFilter}
			on:keydown={handleKeyDown}
			on:keyup={handleKeyUp}
			role="menu"
		>
			<li
				class="px-6 py-1 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100"
				data-value=""
			>
				All
			</li>
			{#each filters as filter}
				<li
					class="px-6 py-1 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100"
					data-value={filter}
				>
					{filter}
				</li>
			{/each}
		</ul>
	</label>
</form>
<div
	id="container"
	class="mt-12 grid gap-[4.625rem] grid-cols-[repeat(auto-fit,_minmax(16.5rem,_1fr))]"
>
	{#each filteredCountries as country (country.name.common)}
		<Card {country} />
	{/each}
</div>
