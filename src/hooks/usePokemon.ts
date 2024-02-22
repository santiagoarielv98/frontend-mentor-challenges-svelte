import React from "react";

import { fetchRandomPokemon } from "../services/pokeApi";
import type { Pokemon } from "../services/pokeApi/types";

const usePokemon = () => {
	const [pokemon, setpokemon] = React.useState<null | Pokemon>(null);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState<null | Error>(null);

	React.useEffect(() => {
		if (pokemon === null) {
			fetchRandomPokemon()
				.then((data) => {
					setLoading(true);
					console.log(data);
					setpokemon(data);
				})
				.catch((error) => {
					setError(error);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [pokemon]);

	return { pokemon, error, isLoading: loading } as const;
};

export default usePokemon;
