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
  title: "Olaegbe Abdul-Rahmon | Developer Portfolio",
  description:
    "Discover the portfolio of Olaegbe Abdul-Rahmon, a creative web developer specializing in React.js, TypeScript, Three.js, and cutting-edge web technologies. Explore my projects and skills to see how I bring ideas to life!",
  keywords: [
    "Olaegbe Abdul-Rahmon",
    "Young techie",
    "young__techie",
    "Developer Portfolio",
    "React Developer",
    "TypeScript Developer",
    "Three.js Developer",
    "Frontend Developer",
    "3D Web Developer",
    "Web Development Portfolio",
  ],
  authors: [
    {
      name: "Olaegbe Abdul-Rahmon",
      url: "https://olaegbe-portfolio.vercel.app/",
    },
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Olaegbe Abdul-Rahmon | Developer Portfolio",
    description:
      "Discover the portfolio of Olaegbe Abdul-Rahmon, a creative web developer specializing in React.js, TypeScript, Three.js, and cutting-edge web technologies.",
    url: "https://olaegbe-portfolio.vercel.app/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Olaegbe Abdul-Rahmon's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olaegbe Abdul-Rahmon | Developer Portfolio",
    description:
      "Discover the portfolio of Olaegbe Abdul-Rahmon, a creative web developer specializing in React.js, TypeScript, Three.js, and cutting-edge web technologies.",
    images: [
      {
        url: "/og-image.png",
        alt: "Olaegbe Abdul-Rahmon's Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased bg-[url('/general_bg.jpg')] w-full h-full bg-cover bg-center bg-no-repeat`}
      >
        <main className="lg:flex lg:items-center lg:justify-center w-full h-full">
          <Navbar />
          <div className="lg:h-[550px] lg:pt-0 flex flex-col lg:flex-row items-center">
            <HomeSide view={false} />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
