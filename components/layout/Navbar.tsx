"use client";

import { Home, Calendar, MessageSquare, Bell, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Calendar, label: "Schedules", href: "/schedules" },
    { icon: MessageSquare, label: "Chats", href: "/chats" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed md:left-4 md:top-4 md:bottom-4 md:w-20 md:flex-col md:py-8 md:h-auto md:right-auto
                 bottom-0 left-0 right-0 h-16 flex-row px-6 py-0
                 flex items-center glass-panel md:rounded-3xl rounded-t-2xl z-50 justify-between"
        >
            <div className="flex md:flex-col flex-row items-center gap-8 w-full justify-between md:justify-start">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hidden md:flex">
                    <span className="text-white font-bold text-lg">I</span>
                </div>

                <div className="flex md:flex-col flex-row gap-1 md:gap-6 w-full items-center justify-between md:justify-start">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative group w-full flex justify-center"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute md:left-0 md:w-1 md:h-8 md:top-1/2 md:-translate-y-1/2 md:rounded-r-full bg-primary
                               bottom-0 w-8 h-1 left-1/2 -translate-x-1/2 rounded-t-full md:bottom-auto md:right-auto"
                                    />
                                )}
                                <div
                                    className={cn(
                                        "p-3 rounded-xl transition-all duration-300 relative",
                                        isActive
                                            ? "text-primary bg-primary/10"
                                            : "text-slate-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <item.icon size={24} />

                                    {/* Tooltip - Desktop only */}
                                    <span className="hidden md:block absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 backdrop-blur-md">
                                        {item.label}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-6 items-center hidden md:flex">
                <button className="p-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                    <User size={24} />
                </button>
            </div>
        </motion.nav>
    );
}
