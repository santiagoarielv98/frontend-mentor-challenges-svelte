export interface Pokemon {
	id: number;
	name: string;
	sprites: PokemonSprites;
	types: PokemonType[];
	weight: number;
	height: number;
}

export interface PokemonSprites {
	front_default: string;
	front_shiny: string;
	front_female: string;
	front_shiny_female: string;
	back_default: string;
	back_shiny: string;
	back_female: string;
	back_shiny_female: string;
	other: OtherSprites;
}

export interface OtherSprites {
	dream_world: DreamWorldSprites;
	home: HomeSprites;
	"official-artwork": OfficialArtworkSprites;
	showdown: ShowdownSprites;
}

export interface DreamWorldSprites {
	front_default: string;
}

export interface HomeSprites {
	front_default: string;
}
export interface OfficialArtworkSprites {
	front_default: string;
}

export interface ShowdownSprites {
	front_default: string;
}

export interface PokemonType {
	slot: number;
	type: NamedApiResource;
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
