import type { FetchPokemons, FetchRandomPokemon, NamedApiResourceList, Pokemon } from "./types";

const baseUrl = "https://pokeapi.co/api/v2" as const;

const totalPokemonsKey = "totalPokemons";

const getTotalPokemons = (): number => {
	return Number(localStorage.getItem(totalPokemonsKey) ?? 9999);
};

const fetchApi = async <T>(path: string): Promise<T> => {
	const response = await fetch(`${baseUrl}/${path}`);
	const data = await response.json();
	return data;
};

export const fetchPokemon = async (name: string): Promise<Pokemon> => {
	return fetchApi<Pokemon>(`pokemon/${name}`);
};

export const fetchPokemons: FetchPokemons = async (params = {}) => {
	const { limit = 20, offset = 0 } = params;
	return fetchApi<NamedApiResourceList>(`pokemon?limit=${limit}&offset=${offset}`);
};

export const fetchRandomPokemon: FetchRandomPokemon = async () => {
	let limit = getTotalPokemons();
	let offset = 0;

	if (limit < 9999) {
		offset = Math.floor(Math.random() * limit);
		limit = 1;
	}

	const { count, results } = await fetchPokemons({ limit, offset });

	localStorage.setItem(totalPokemonsKey, String(count));

	const randomIndex = Math.floor(Math.random() * results.length);
	const randomPokemon = results[randomIndex];
	return fetchPokemon(randomPokemon.name);
};
