<script lang="ts">
	import type { Country } from '../api';
	export let country: Country;
</script>

<div class="mt-12 flex justify-between gap-12 flex-wrap max-lg:flex-col">
	<div class="flex-1 max-w-[35rem] mx-auto">
		<img src={country.flags.svg} alt={country.flags.alt} class="aspect-[7/5] w-full" />
	</div>
	<div class="flex-1 max-w-[37.5rem] mx-auto w-full">
		<div class="flex flex-col justify-center gap-8 h-full w-full">
			<h1 class="text-3xl text-[32px] font-bold leading-tight tracking-tight">
				{country.name.common}
			</h1>
			<div class="flex justify-between flex-wrap gap-10">
				<ul class="flex flex-col gap-2">
					<li>
						<p>
							<b class="tracking-tight">Native Name:</b>
							<span>{Object.values(country.name.nativeName)[0].common} </span>
						</p>
					</li>
					<li>
						<p>
							<b class="tracking-tight">Population:</b>
							<span>{country.population} </span>
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
							<b class="tracking-tight">Sub Region:</b>
							<span>{country.subregion} </span>
						</p>
					</li>
					<li>
						<p>
							<b class="tracking-tight">Capital:</b>
							<span>{country.capital?.join(', ')} </span>
						</p>
					</li>
				</ul>
				<ul class="flex flex-col gap-2">
					<li>
						<p>
							<b class="tracking-tight">Top Level Domain:</b>
							<span>{country.tld?.join(', ')} </span>
						</p>
					</li>
					<li>
						<p>
							<b class="tracking-tight">Currencies:</b>
							<span>
								{Object.values(country.currencies)
									.map((c) => c.name)
									?.join(', ')}
							</span>
						</p>
					</li>
					<li>
						<p>
							<b class="tracking-tight">Languages:</b>
							<span>{Object.values(country.languages)?.join(', ')} </span>
						</p>
					</li>
				</ul>
			</div>
			<div class="flex items-center flex-wrap gap-[9px] mt-9">
				<b class="tracking-tight mr-2">Border Countries: </b>
				{#if country.borders}
					{#each country.borders as b}
						<span class="w-24 px-2 py-1 text-center font-semibold text-sm border rounded-md"
							>{b}</span
						>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
