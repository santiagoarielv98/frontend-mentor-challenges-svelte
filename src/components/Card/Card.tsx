import clsx from "clsx";
import React from "react";

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
				"bg-gray-800 p-2",
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
		<div className="flex justify-between">
			<span>
				<Badge>#{formattedId}</Badge>
			</span>
			<div className="">
				{types.map((name) => (
					<BadgeIcon key={name} title={name} className={`bg-${name}`}>
						<img src={`/src/assets/icons/${name}.svg`} alt={name} width={16} height={16} />
					</BadgeIcon>
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

const BadgeIcon = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	const defaultClass = "inline-flex h-6 w-6 items-center justify-center rounded-full";
	const defaultColor = "text-sm font-semibold text-gray-800 dark:bg-gray-700 dark:text-gray-300";

	return <span className={clsx(defaultClass, defaultColor, className)} {...props} />;
};
