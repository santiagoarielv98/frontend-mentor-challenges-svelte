import clsx from "clsx";
import React from "react";

export const BadgeIcon = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={clsx(
				"inline-flex h-6 w-6 items-center justify-center rounded-full",
				"text-sm font-semibold text-gray-800 dark:bg-gray-700 dark:text-gray-300",
				className
			)}
			{...props}
		/>
	);
};
