import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export default function Home() {
	const t = useTranslations("Index");

	return (
		<div className="flex flex-col">
			<p>{t("title")}</p>
		</div>
	);
}
