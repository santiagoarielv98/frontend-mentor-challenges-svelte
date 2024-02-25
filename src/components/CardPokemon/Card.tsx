import clsx from "clsx";

import type { Pokemon } from "../../services/pokeApi/types";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";
import { CardImage } from "./CardImage";

export interface CardProps {
	pokemon: Pokemon;
}

export const Card = ({ pokemon }: CardProps) => {
	const types = pokemon.types.map(({ type }) => type.name);
	console.log(types);

	return (
		<div
			className={clsx(
				"relative -z-10 w-full max-w-xs gap-4 space-y-8 overflow-hidden rounded-xl border-2 p-1 pb-8",
				"border-gray-100 bg-gradient-to-t dark:border-neutral-700 dark:from-neutral-900 dark:to-neutral-800",
				types.length === 2
					? `border-b-${types[0]} border-l-${types[1]} border-r-${types[0]} border-t-${types[1]} dark:border-b-${types[0]} dark:border-l-${types[1]} dark:border-r-${types[0]} dark:border-t-${types[1]}`
					: `border-${types[0]} dark:border-${types[0]}`
			)}
		>
			<CardHeader id={pokemon.id} types={types} />
			<CardImage src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
			<CardBody name={pokemon.name} weight={pokemon.weight} height={pokemon.height} types={types} />
		</div>
	);
};
