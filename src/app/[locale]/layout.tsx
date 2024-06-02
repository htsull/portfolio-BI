import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/ThemeProvider";

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
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<NextIntlClientProvider messages={messages}>
						{/* <Menu /> */}
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
