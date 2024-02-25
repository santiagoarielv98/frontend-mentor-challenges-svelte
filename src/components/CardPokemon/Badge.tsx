import clsx from "clsx";
import React from "react";

export const Badge = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={clsx(
				"rounded-lg px-1.5 text-lg font-medium",
				"bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-gray-100",
				className
			)}
			{...props}
		/>
	);
};
