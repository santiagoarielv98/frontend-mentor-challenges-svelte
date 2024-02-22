import usePokemon from "./hooks/usePokemon";

const App = () => {
	const { error, isLoaded } = usePokemon();

	return (
		<div className="bg-water">
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
