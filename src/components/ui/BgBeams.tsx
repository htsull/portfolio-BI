"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

// Function to generate random SVG paths
const generateRandomPaths = (numPaths: number) => {
	const paths = [];
	for (let i = 0; i < numPaths; i++) {
		const startX = -380 + Math.random() * 200;
		const startY = -200 + Math.random() * 400;
		const controlX1 = startX + 200 + Math.random() * 200;
		const controlY1 = startY + Math.random() * 200;
		const controlX2 = controlX1 + Math.random() * 200;
		const controlY2 = controlY1 + Math.random() * 200;
		const endX = controlX2 + 200 + Math.random() * 200;
		const endY = controlY2 + 200 + Math.random() * 200;
		paths.push(
			`M${startX} ${startY}C${controlX1} ${controlY1},${controlX2} ${controlY2},${endX} ${endY}`
		);
	}
	return paths;
};

export const BgBeams = React.memo(({ className }: { className?: string }) => {
	const [paths, setPaths] = useState([]);

	useEffect(() => {
		const generatedPaths = generateRandomPaths(50); // Generate 50 random paths
		setPaths(generatedPaths);
	}, []);

	return (
		<div
			className={cn(
				"absolute inset-0  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
				className
			)}>
			<svg
				className="h-full w-full pointer-events-none absolute"
				width="100%"
				height="100%"
				viewBox="0 0 696 316"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				{paths.map((path, index) => (
					<motion.path
						key={`path-` + index}
						d={path}
						stroke={`url(#linearGradient-${index})`}
						strokeOpacity="0.4"
						strokeWidth="0.5"></motion.path>
				))}
				<defs>
					{paths.map((path, index) => (
						<motion.linearGradient
							id={`linearGradient-${index}`}
							key={`gradient-${index}`}
							initial={{
								x1: "0%",
								x2: "0%",
								y1: "0%",
								y2: "0%",
							}}
							animate={{
								x1: ["0%", "100%"],
								x2: ["0%", "95%"],
								y1: ["0%", "100%"],
								y2: ["0%", `${93 + Math.random() * 8}%`],
							}}
							transition={{
								duration: Math.random() * 10 + 10,
								ease: "easeInOut",
								repeat: Infinity,
								delay: Math.random() * 10,
							}}>
							<stop stopColor="#18CCFC" stopOpacity="0"></stop>
							<stop stopColor="#18CCFC"></stop>
							<stop offset="32.5%" stopColor="#6344F5"></stop>
							<stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
						</motion.linearGradient>
					))}

					<radialGradient
						id="paint0_radial_242_278"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)">
						<stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
						<stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
						<stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
					</radialGradient>
				</defs>
			</svg>
		</div>
	);
});

BgBeams.displayName = "BackgroundBeams";
