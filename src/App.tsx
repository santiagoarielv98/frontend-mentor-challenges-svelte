import React from "react";

import usePokemon from "./hooks/usePokemon";

const App = () => {
	const [pokemon, setPokemon] = React.useState<null>(null);
	const { error, isLoaded } = usePokemon();

	React.useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/1")
			.then((res) => res.json())
			.then((result) => {
				setPokemon(result);
			});
	}, []);

	return (
		<div className="bg-water">
			{pokemon}
			{error ? <p>{error.message}</p> : null}
			{isLoaded ? (
				<div>
					<div className="w-full max-w-sm  rounded-xl border  bg-water/50">asd</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};
export default App;
