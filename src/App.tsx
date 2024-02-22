import { Card } from "./components/Card/Card";
import usePokemon from "./hooks/usePokemon";

const App = () => {
	const { pokemon, error, isLoading } = usePokemon();

	return (
		<div>
			{error ? <p>{error.message}</p> : null}
			{isLoading ? <p>Loading...</p> : <Card pokemon={pokemon!} />}
		</div>
	);
};

export default App;
