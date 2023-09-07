<script>
	import Card from './components/Card.svelte';
	import { countries } from './country';

	const filters = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
</script>

<form class="flex justify-between gap-4 flex-wrap">
	<div class="inline-flex w-full max-w-[30rem] min-w-[15rem] relative">
		<div class="absolute inset-y-0 left-0 flex items-center px-6 pointer-events-none">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="w-5 h-5"
			>
				<path
					fill-rule="evenodd"
					d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<input
			class="w-full px-6 py-4 pl-[73px] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 hover:ring-2 hover:ring-gray-300 dark:bg-gray-800 shadow-md"
			id="search"
			placeholder="Search for a country..."
		/>
	</div>
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
			id="label">Filter by Region</label
		>
		<ul
			id="filter"
			class="invisible absolute inset-x-0 top-full mt-2 py-3 peer-checked:visible shadow-md bg-white cursor-pointer dark:bg-gray-800 rounded-md z-10"
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
	{#each $countries as country (country.name.common)}
		<Card {country} />
	{/each}
</div>
