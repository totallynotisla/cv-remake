import type { Metadata } from "next";
import "./globals.css";
import "@/node_modules/aos/dist/aos.css";
import Navbar from "@/components/master/Navbar";
import Footer from "@/components/master/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
    title: "My Portfolio - Adi",
    metadataBase: new URL(`https://www.totallynotisla.my.id`),
    description: "Welcome to Adi's portfolio. Explore my projects, skills, and experience.",
    keywords: ["Adi", "totallynotisla", "portfolio", "developer", "projects", "skills", "experience"],
    authors: [{ name: "totallynotisla", url: "https://github.com/totallynotisla" }],
    robots: "index, follow",
    alternates: {
        canonical: "./",
    },
    openGraph: {
        emails: "wkomangadi44@gmail.com",
        title: "totallynotisla",
        type: "website",
        siteName: "TotallyNotIsla",
        description: "Welcome to Adi's portfolio. Explore my projects, skills, and experience.",
        url: "https://www.totallynotisla.my.id/",
        images: [
            {
                url: "https://www.totallynotisla.my.id/assets/og-cv",
                width: 128,
                height: 133,
                alt: "Logo light",
            },
            {
                url: "https://www.totallynotisla.my.id/assets/og-cv-dark",
                width: 128,
                height: 133,
                alt: "Logo dark",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "totallynotisla",
        description: "Welcome to Adi's portfolio. Explore my projects, skills, and experience.",
        site: "@TotallyNotIsla",
        creator: "@totallynotisla",
        images: [
            {
                url: "https://www.totallynotisla.my.id/assets/og-cv",
                width: 128,
                height: 133,
                alt: "Logo light",
            },
            {
                url: "https://www.totallynotisla.my.id/assets/og-cv-dark",
                width: 128,
                height: 133,
                alt: "Logo dark",
            },
        ],
    },
    icons: ["/assets/logo-cv.svg"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased poppins min-h-dvh flex flex-col`}>
                <Toaster />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
