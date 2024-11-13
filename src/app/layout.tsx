import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import { nunito, nunito_sans } from "./fonts/fonts";
import { createClient, repositoryName } from "@/prismicio";
import Header from "@/componenets/header";
import Footer from "@/componenets/footer";
import { PrismicPreview } from "@prismicio/next";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "fallback title",
    description: page.data.meta_description || "fallback description",
    openGraph: {
      images: [page.data.og_image.url || "image"],
    },
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable, nunito_sans.variable)}>
        <Header></Header>
        {children}
        <Footer></Footer>
        <div className="fixed bg-gradient-to-tr from-cyan-50 to-emerald-50 z-[-1] inset-0"/>
        <PrismicPreview  repositoryName={repositoryName}/>
      </body>
    </html>
  );
}
