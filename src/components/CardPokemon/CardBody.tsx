import { Stat } from "./StatProps";
import { toCapitalize, transformHeight, transformWeight } from "./utils";

export interface CardBodyProps {
	name: string;
	weight: number;
	height: number;
	types: string[];
}

export const CardBody = ({ name, weight, height, types }: CardBodyProps) => {
	return (
		<div className="flex flex-col items-center gap-4">
			<h1 className="text-2xl font-semibold capitalize">{name}</h1>
			<div className="flex space-x-8">
				<Stat label="Weight" value={`${transformWeight(weight)} kg`} />
				<Stat label="Height" value={`${transformHeight(height)} m`} />
			</div>
			<Stat label="Types:" value={types.map(toCapitalize).join("/")} orientation="horizontal" />
		</div>
	);
};
