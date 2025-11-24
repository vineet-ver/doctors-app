"use client";

import { Search, Bell, ChevronDown } from "lucide-react";
import { HeartScene } from "@/components/dashboard/HeartScene";
import { CalendarWidget } from "@/components/dashboard/CalendarWidget";
import { DoctorProfileCard } from "@/components/dashboard/DoctorProfileCard";
import { VisitsList } from "@/components/dashboard/VisitsList";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="h-full flex flex-col gap-6">
            {/* Top Header */}
            <header className="flex items-center justify-between py-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">InfiHealth</h1>
                </div>

                <div className="flex items-center gap-6 flex-1 max-w-2xl justify-end">
                    {/* Search Bar */}
                    <div className="relative w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-glass border border-glass-border rounded-full py-2.5 pl-12 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
                            <Bell size={20} className="text-slate-300" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-slate-900" />
                        </button>

                        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent-purple p-[2px]">
                                <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden relative">
                                    {/* Avatar */}
                                    <div className="w-full h-full flex items-center justify-center text-xs">👨‍⚕️</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Grid */}
            <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
                {/* Left/Center Area - Heart Model & Overview */}
                <div className="col-span-8 relative flex flex-col">
                    <div className="absolute top-0 left-0 z-10">
                        <h2 className="text-4xl font-light mb-1">Overview</h2>
                        <h2 className="text-4xl font-semibold mb-6">Patient Health</h2>

                        <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#334155"
                                        strokeWidth="3"
                                    />
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#22c55e"
                                        strokeWidth="3"
                                        strokeDasharray="5, 100"
                                        className="animate-[spin_3s_linear_infinite]"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                                    5%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3D Scene */}
                    <div className="flex-1 relative -ml-20">
                        <HeartScene />
                    </div>
                </div>

                {/* Right Column - Widgets */}
                <div className="col-span-4 flex flex-col gap-6 overflow-y-auto pr-2 pb-2 custom-scrollbar">
                    <div className="flex items-center justify-between mb-2">
                        <div className="glass-panel px-4 py-2 rounded-full text-sm font-medium">
                            6:41 PM
                        </div>

                    </div>

                    <CalendarWidget />

                    <DoctorProfileCard />

                    <VisitsList />
                </div>
            </div>
        </div>
    );
}
