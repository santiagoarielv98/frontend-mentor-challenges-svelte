import React from "react";
import { Pokemon } from "../services/pokeApi/types";
import { fetchRandomPokemon } from "../services/pokeApi";

const usePokemon = () => {
	const [pokemon, setpokemon] = React.useState<null | Pokemon>(null);
	const [error, setError] = React.useState<null | Error>(null);
	const isLoaded = pokemon !== null;

	React.useEffect(() => {
		if (pokemon === null) {
			fetchRandomPokemon()
				.then((data) => {
					console.log(data);
					setpokemon(data);
				})
				.catch((error) => {
					setError(error);
				});
		}
	}, [pokemon]);

	return { pokemon, error, isLoaded } as const;
};
export default usePokemon;
