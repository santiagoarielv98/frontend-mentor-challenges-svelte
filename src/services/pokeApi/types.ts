export interface Pokemon {
	name: string;
}

export type NamedApiResourceList = {
	count: number;
	next: string | null;
	previous: string | null;
	results: NamedApiResource[];
};

export type NamedApiResource = {
	name: string;
	url: string;
};

export type QueryParams = {
	limit?: number;
	offset?: number;
};

export type FetchPokemons = (params?: QueryParams) => Promise<NamedApiResourceList>;
export type FetchRandomPokemon = () => Promise<Pokemon>;
