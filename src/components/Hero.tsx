"use client";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
	const words1 =
		'"In the world of data, accuracy and integrity are paramount. The insights we derive are only as reliable as the data we analyze."';
	const words2 = "— Anonymous (Me) 😎";
	return (
		<div className="pb-20 pt-36">
			<div className="z-[-1]">
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="h-[80vh] w-[50vw] top-10 left-full"
					fill="purple"
				/>
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>
			<div className="flex flex-col items-center">
				<div className="h-screen w-full dark:bg-black bg-white  dark:bg-black-100 dark:bg-grid-white/[.1]">
					<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
				</div>
				<div className="absolute max-w-[70vw]">
					<div className="flex flex-col text-center items-center justify-center">
						<TextGenerateEffect
							words={words1}
							className="text-xl md:text-3xl"
						/>
						<TextGenerateEffect words={words2} className="text-sm md:text-xl" />
					</div>
					<p className="text-white md:text-3xl text-xl leading-snug tracking-normal text-center items-center my-6 font-bold">
						Hi, I&apos;m <span className="text-orange-500"> Berthony. </span>A
						Data Analyst based in Montréal, Canada 🇨🇦
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
