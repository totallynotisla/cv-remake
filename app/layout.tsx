import type { Metadata } from "next";
import "./globals.css";
import "@/node_modules/aos/dist/aos.css";
import Navbar from "@/components/master/Navbar";
import Footer from "@/components/master/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
    title: "My Portfolio - Adi",
    description: "Welcome to Adi's portfolio. Explore my projects, skills, and experience.",
    keywords: ["Adi", "mangadi3859", "portfolio", "developer", "projects", "skills", "experience"],
    authors: [{ name: "mangadi3859", url: "https://github.com/mangadi3859" }],
    robots: "index, follow",
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
