import { Footer, Header } from "@/app/_components/custom";
import { BodyWrapper } from "@/app/_components/custom/body-wrapper";
import { Providers } from "@/app/_components/providers";
import { I18nProviderClient } from "@/packages/locales/client";
import { asset, SITE_URL } from "@/lib/base-path";
import { getStaticParams } from "@/packages/locales/server";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "ISAGOG - AI that makes sense",
  description:
    "ISAGOG is an AI Engineering company that helps businesses to build intelligent and trustworthy AI solutions.",
  icons: [{ rel: "icon", url: asset("/favicon.ico") }],
  metadataBase: new URL(SITE_URL),
  robots: { index: false, follow: false },
  openGraph: {
    title: "ISAGOG - AI that makes sense",
    description:
      "ISAGOG is an AI Engineering company that helps businesses to build intelligent and trustworthy AI solutions.",
    url: SITE_URL,
    siteName: "ISAGOG",
    images: [
      {
        url: asset("/images/tree.avif"),
        width: 1200,
        height: 630,
        alt: "Illustration representing ISAGOG - AI Engineering Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISAGOG - AI that makes sense",
    description:
      "ISAGOG is an AI Engineering company that helps businesses to build intelligent and trustworthy AI solutions.",
    images: [asset("/images/tree.avif")],
  },
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/en`,
      it: `${SITE_URL}/it`,
    },
  },
};

export function generateStaticParams() {
  return getStaticParams();
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html
      lang={locale ?? "it"}
      className={`${inter.variable} ${fraunces.variable} font-serif`}
    >
      <I18nProviderClient locale={locale}>
        <Providers>
          <BodyWrapper>
            <Header />
            {children}
            <Footer />
          </BodyWrapper>
        </Providers>
      </I18nProviderClient>
    </html>
  );
}
