import pokemonTypes from "../../utils/pokemon-types";
import { Badge } from "./Badge";
import { BadgeIcon } from "./BadgeIcon";

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
			<div className="-space-x-2">
				{types.map((name) => (
					<BadgeIcon
						key={name}
						title={name}
						className={`bg-${name} shadow-sm shadow-${name} dark:bg-${name} dark:shadow-${name}`}
					>
						<img
							src={pokemonTypes[name] ?? pokemonTypes.normal}
							alt={name}
							width={16}
							height={16}
							className="select-none"
						/>
					</BadgeIcon>
				))}
			</div>
		</div>
	);
};
