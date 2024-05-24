import { getMessages } from "next-intl/server";

export async function _() {
	const messages = await getMessages();
	return messages;
}
