import type { Metadata } from "next";
import "./globals.css";
import { FlightProvider } from "@/context/FlightContext";

export const metadata: Metadata = {
    title: "Flightly",
    description: "View your flight status in real-time without hassle.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="w-screen min-h-screen pb-20 lg:p-0">
                    <FlightProvider>
                        {children}
                    </FlightProvider>
                </main>
            </body>
        </html>
    );
}
