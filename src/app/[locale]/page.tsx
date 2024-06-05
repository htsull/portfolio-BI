import Hero from "@/components/Hero";
import FloatingItems from "@/components/ui/FloatingItems";

export default function Home() {
	return (
		<main className="flex relative bg-black-100 justify-center items-center flex-col  mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full ">
				<Hero />
				<FloatingItems />
			</div>
		</main>
	);
}
