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
            className="fixed left-4 top-4 bottom-4 w-20 flex flex-col items-center py-8 glass-panel rounded-3xl z-50 justify-between"
        >
            <div className="flex flex-col items-center gap-8 w-full">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="text-white font-bold text-lg">I</span>
                </div>

                <div className="flex flex-col gap-6 w-full items-center">
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
                                        className="absolute left-0 w-1 h-8 bg-primary rounded-r-full top-1/2 -translate-y-1/2"
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

                                    {/* Tooltip */}
                                    <span className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 backdrop-blur-md">
                                        {item.label}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-6 items-center">
                <button className="p-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                    <User size={24} />
                </button>
            </div>
        </motion.nav>
    );
}
