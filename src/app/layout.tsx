import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import HomeSide from "@/components/home/home";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Explore my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased bg-[url('/general_bg.jpg')] w-full bg-cover bg-center bg-no-repeat`}
      >
        <main className="lg:flex lg:items-center lg:justify-center lg:w-[100vw] lg:h-[100vh]">
          <Navbar />
          <div className="lg:h-[550px] lg:pt-0 pt-[50px] flex flex-col lg:flex-row items-center">
            <HomeSide view={false} />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}