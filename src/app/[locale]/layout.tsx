import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Berthony Sully | Portfolio",
	description: "Modern & Minimalist Data Portfolio",
};

type RootLayoutProps = {
	children: React.ReactNode;
	params: {
		locale: string;
	};
};

export default async function RootLayout({
	children,
	params: { locale },
}: RootLayoutProps) {
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
