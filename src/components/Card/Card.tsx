import clsx from "clsx";

import type { Pokemon } from "../../services/pokeApi/types";

export interface CardProps {
	pokemon: Pokemon;
}

export const Card = ({ pokemon }: CardProps) => {
	const defaultClass = "w-full max-w-sm overflow-hidden rounded-xl border border-2";

	const types = pokemon.types.map(({ type }) => type.name);

	return (
		<div
			className={clsx(
				defaultClass,
				types.map((name) => `border-${name}`)
			)}
		>
			<CardHeader id={pokemon.id} types={types} />
			Card
		</div>
	);
};

export interface CardHeaderProps {
	id: number;
	types: string[];
}

export const CardHeader = ({ id, types }: CardHeaderProps) => {
	const formattedId = id.toString().padStart(3, "0");

	return (
		<div>
			<span>
				<Badge>#{formattedId}</Badge>
			</span>
			<div className="">
				{types.map((name) => (
					<span key={name}>{name}</span>
				))}
			</div>
		</div>
	);
};

const Badge = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	const defaultClass = "rounded px-2.5 py-0.5 text-xs font-medium";
	const defaultColor = "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";

	return <span className={clsx(defaultClass, defaultColor, className)} {...props} />;
};
