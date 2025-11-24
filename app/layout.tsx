import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "InfiHealth Dashboard",
    description: "Doctor consulting dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen bg-background text-foreground overflow-hidden">
                {/* Background Gradients */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/20 rounded-full blur-[120px]" />
                    <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-accent-green/10 rounded-full blur-[100px]" />
                </div>

                <Navbar />

                <main className={cn(
                    "relative z-10 h-screen md:ml-24 p-4 transition-all duration-300 pb-20 md:pb-4",
                    "flex flex-col"
                )}>
                    {children}
                </main>
            </body>
        </html>
    );
}
