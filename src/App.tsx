import React from "react";

import { Card } from "./components/CardPokemon/Card";
import usePokemon from "./hooks/usePokemon";

const App = () => {
	const { pokemon, error, isLoading } = usePokemon();

	React.useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	return (
		<div className="flex h-screen items-center justify-center">
			{error ? <p>{error.message}</p> : null}
			{isLoading ? <p>Loading...</p> : <Card pokemon={pokemon!} />}
		</div>
	);
};

export default App;
