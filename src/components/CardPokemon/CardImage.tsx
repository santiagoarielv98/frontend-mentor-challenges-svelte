import clsx from "clsx";

export interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
	src?: string;
	alt?: string;
}

export const CardImage = ({ src, alt = "pokemon image", className, ...props }: CardImageProps) => {
	return (
		<div {...props} className={clsx("flex justify-center", className)}>
			<div className="rounded-full bg-gradient-to-t from-neutral-800 to-neutral-500 px-4 pt-8 shadow-[0_-.5rem_1rem_.5rem] dark:shadow-neutral-700">
				{src ? (
					<img src={src} alt={alt} className="h-48 w-48 select-none" />
				) : (
					<div className="h-48 w-48 rounded-full bg-gradient-to-t from-neutral-700 to-neutral-500" />
				)}
			</div>
		</div>
	);
};
