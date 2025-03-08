import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/assets/styles/main.scss";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../assets/fonts/Blackside.ttf" });

export const metadata: Metadata = {
  title: "Blackspine",
  description:
    "Tatuador de Málaga, especializado en tatuajes de estilo blackwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
