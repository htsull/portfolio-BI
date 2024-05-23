import { link } from "fs";
import { useTranslations } from "next-intl";
import React from "react";

const menu = () => {
	const t = useTranslations("Menu");
	const keys = ["Home", "Resume"] as const;
	return (
		<div>
			{keys.map((key) => (
				<li className="capitalize">{t(`${key}`)}</li>
			))}
		</div>
	);
};

export default menu;
