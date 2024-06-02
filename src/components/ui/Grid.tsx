import React from "react";

export function Grid() {
	return (
		<div className="h-screen w-full dark:bg-black bg-white  dark:bg-black-100 dark:bg-grid-white/[.1] relative flex items-center justify-center">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
		</div>
	);
}
