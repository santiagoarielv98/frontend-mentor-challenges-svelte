<script lang="ts">
	import type { Country } from '../api';
	export let country: Country;
</script>

<a href="rest-countries/{country.name.common}" class="mx-auto">
	<div
		class="card w-[16.5rem] flex flex-col h-[21rem] shadow-md bg-white rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow dark:bg-gray-800 dark:hover:shadow-xl"
	>
		<img
			class="w-full h-40 object-cover"
			src={country.flags.svg}
			alt={country.flags.alt ?? `${country.name.common} flag`}
			width="264"
			height="160"
		/>
		<div class="p-6 flex-1">
			<h2 class="font-bold text-lg">{country.name.common}</h2>
			<ul class="mt-3 text-sm leading-relaxed">
				<li>
					<p>
						<b class="tracking-tight">Population:</b>
						<span>{country.population}</span>
					</p>
				</li>
				<li>
					<p>
						<b class="tracking-tight">Region:</b>
						<span>{country.region}</span>
					</p>
				</li>
				<li>
					<p>
						<b class="tracking-tight">Capital:</b>
						<span>{country.capital?.join(', ')}</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
</a>
