import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "blockspot",
  description: "Reserve your favorite spot inside your organization",
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: ["/favicon/favicon-96x96.png", "/favicon/favicon.svg"],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale ?? "es"}
      suppressHydrationWarning
      className={`${GeistSans.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
