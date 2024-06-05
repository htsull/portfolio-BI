"use client";

import { useTranslations } from "next-intl";
import { FloatingNav } from "./FloatingNav";

const FloatingItems = () => {
	const t = useTranslations("MenuItems");
	const keys = ["Home", "Resume", "Projects", "Contacts"];

	const navItems = keys.map((key) => ({
		name: t(`${key}.label`),
		link: t(`${key}.href`),
	}));
	// console.log(test);

	return <FloatingNav className="text-white" navItems={navItems} />;
};

export default FloatingItems;
