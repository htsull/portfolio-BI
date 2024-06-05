"use client";
import { BgBeams } from "./ui/BgBeams";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa";
const Hero = () => {
	const words1 = '"I am inevitable... just like the need for accurate data."';
	const words2 = "— Inspired by Thanos";
	return (
		<div className="pb-20 pt-20 flex flex-col">
			<div className="flex flex-col items-center">
				<BgBeams />
				<div className="max-w-[70vw] py-10">
					<div className="flex flex-col text-center items-center justify-center">
						<TextGenerateEffect
							words={words1}
							className="text-4xl md:text-4xl"
						/>
						<TextGenerateEffect words={words2} className="text-sm md:text-xl" />
					</div>
					<p className="text-white md:text-2xl text-xl leading-snug tracking-normal text-center items-center my-6 font-bold">
						Hi, I&apos;m <span className="text-orange-500"> Berthony. </span>A
						Data Analyst based in Montréal, Canada 🇨🇦
					</p>
					<div className="flex flex-col items-center justify-center">
						<MagicButton
							title="More about my work"
							position="right"
							icon={<FaLocationArrow className="hover:rotate-45" />}
							otherClasses="gap-2 "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
