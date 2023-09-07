<script>
	export let search = '';
</script>

<div class="inline-flex w-full max-w-[30rem] min-w-[15rem] relative">
	<div class="absolute inset-y-0 left-0 flex items-center px-6 pointer-events-none">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
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
		bind:value={search}
	/>
</div>
