import usePokemon from "./hooks/usePokemon";

const App = () => {
	const { error, isLoaded } = usePokemon();

	return (
		<div>
			{error ? <p>{error.message}</p> : null}
			{isLoaded ? (
				<div>
					<div className="max-w-sm w-full border border-red-500 rounded-xl">asd</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};
export default App;
