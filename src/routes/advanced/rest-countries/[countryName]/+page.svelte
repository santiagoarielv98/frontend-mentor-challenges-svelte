<script>
	import Detail from '../components/Detail.svelte';
	import { countries } from '../country';
	export let data;
	$: country = $countries.find((c) => c.name.common === data.countryName);
</script>

<a
	href="/advanced/rest-countries"
	class="inline-flex w-[8.5rem] justify-center gap-2 px-4 py-2 pr-6 bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg transition-shadow focus:ring-2 focus:ring-gray-300 dark:bg-gray-800"
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
		<path
			fill-rule="evenodd"
			d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
			clip-rule="evenodd"
		/>
	</svg>
	Back
</a>
{#if country}
	<Detail {country} />
{/if}
