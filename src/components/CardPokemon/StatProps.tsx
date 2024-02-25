import clsx from "clsx";

export interface StatProps {
	label: string;
	value: string | number;
	orientation?: "horizontal" | "vertical";
}

export const Stat = ({ label, value, orientation = "vertical" }: StatProps) => {
	return (
		<div className={clsx("flex items-center", orientation === "vertical" ? "flex-col" : "space-x-2", "text-lg")}>
			<span className="font-medium text-gray-600 dark:text-gray-400">{label}</span>
			<span className="font-semibold">{value}</span>
		</div>
	);
};
