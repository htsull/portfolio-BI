import Hero from "@/components/Hero";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { BgBeams } from "@/components/ui/BgBeams";
import FloatingItems from "@/components/ui/FloatingItems";
import { bentoGridItems } from "../../../data";

export default function Home() {
	console.log(bentoGridItems);

	return (
		<main className="flex relative bg-black-100 justify-center items-center flex-col  mx-auto sm:px-10 px-5 z-10">
			<div className="max-w-7xl w-full ">
				<Hero />
				<BentoGrid>
					{bentoGridItems.map((item, i) => (
						<BentoGridItem
							key={i}
							title={item.title}
							description={item.description}
						/>
					))}
				</BentoGrid>

				<FloatingItems />
			</div>
			<BgBeams className="-z-10 h-full border border-blue-600" />
		</main>
	);
}
