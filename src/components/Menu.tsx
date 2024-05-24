import { useMessages, useTranslations } from "next-intl";

const menu = () => {
	const t = useTranslations("MenuItems");
	const messages = useMessages();
	const keys = Object.keys(messages.MenuItems);
	// console.log(messages);
	return (
		<div>
			{keys.map((key) => (
				<li key={key} className="capitalize">
					{t(`${key}.label`)}
				</li>
			))}
		</div>
	);
};

export default menu;
