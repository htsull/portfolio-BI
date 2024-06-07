import Hero from "@/components/Hero";
import { BgBeams } from "@/components/ui/BgBeams";
import FloatingItems from "@/components/ui/FloatingItems";

export default function Home() {
	return (
		<main className="flex relative bg-black-100 justify-center items-center flex-col  mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full ">
				<BgBeams className="h-full border border-blue-600" />
				<Hero />
				{/* <div className="flex flex-col">
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						accusamus necessitatibus nam atque qui dicta ex aspernatur eveniet
						minus pariatur quaerat tempora recusandae expedita dolores?
						Suscipit, dicta dolore. Nesciunt, soluta?
					</p>
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						accusamus necessitatibus nam atque qui dicta ex aspernatur eveniet
						minus pariatur quaerat tempora recusandae expedita dolores?
						Suscipit, dicta dolore. Nesciunt, soluta?
					</p>
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						accusamus necessitatibus nam atque qui dicta ex aspernatur eveniet
						minus pariatur quaerat tempora recusandae expedita dolores?
						Suscipit, dicta dolore. Nesciunt, soluta?
					</p>
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						accusamus necessitatibus nam atque qui dicta ex aspernatur eveniet
						minus pariatur quaerat tempora recusandae expedita dolores?
						Suscipit, dicta dolore. Nesciunt, soluta?
					</p>
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						accusamus necessitatibus nam atque qui dicta ex aspernatur eveniet
						minus pariatur quaerat tempora recusandae expedita dolores?
						Suscipit, dicta dolore. Nesciunt, soluta?
					</p>
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						accusamus necessitatibus nam atque qui dicta ex aspernatur eveniet
						minus pariatur quaerat tempora recusandae expedita dolores?
						Suscipit, dicta dolore. Nesciunt, soluta?
					</p>
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						accusamus necessitatibus nam atque qui dicta ex aspernatur eveniet
						minus pariatur quaerat tempora recusandae expedita dolores?
						Suscipit, dicta dolore. Nesciunt, soluta?
					</p>
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						accusamus necessitatibus nam atque qui dicta ex aspernatur eveniet
						minus pariatur quaerat tempora recusandae expedita dolores?
						Suscipit, dicta dolore. Nesciunt, soluta?
					</p>
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						accusamus necessitatibus nam atque qui dicta ex aspernatur eveniet
						minus pariatur quaerat tempora recusandae expedita dolores?
						Suscipit, dicta dolore. Nesciunt, soluta?
					</p>
				</div> */}
				<FloatingItems />
			</div>
		</main>
	);
}
