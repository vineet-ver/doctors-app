"use client";

import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameMonth, isSameDay, addMonths, subMonths, addDays } from "date-fns";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

export default function SchedulesPage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState<"month" | "week" | "day">("month");

    const next = () => {
        if (view === "month") setCurrentDate(addMonths(currentDate, 1));
        else setCurrentDate(addDays(currentDate, 7));
    };

    const prev = () => {
        if (view === "month") setCurrentDate(subMonths(currentDate, 1));
        else setCurrentDate(addDays(currentDate, -7));
    };

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const days = eachDayOfInterval({
        start: startDate,
        end: endDate,
    });

    // Mock appointments
    const appointments = [
        { date: new Date(), title: "Dr. Smith - Cardiology", type: "video", color: "bg-blue-500" },
        { date: addDays(new Date(), 2), title: "Blood Test", type: "lab", color: "bg-purple-500" },
    ];

    return (
        <div className="h-full flex flex-col gap-6">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Schedules</h1>
                    <p className="text-slate-400 text-sm">Manage your appointments</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex bg-white/5 rounded-lg p-1">
                        {(["month", "week", "day"] as const).map((v) => (
                            <button
                                key={v}
                                onClick={() => setView(v)}
                                className={`px-4 py-1.5 rounded-md text-sm capitalize transition-all ${view === v ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-white"
                                    }`}
                            >
                                {v}
                            </button>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-xl text-white text-sm font-medium transition-colors">
                        <Plus size={18} />
                        New Appointment
                    </button>
                </div>
            </header>

            <GlassCard className="flex-1 flex flex-col min-h-0 overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-white">
                        {format(currentDate, "MMMM yyyy")}
                    </h2>
                    <div className="flex gap-2">
                        <button onClick={prev} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <ChevronLeft size={20} className="text-slate-400" />
                        </button>
                        <button onClick={next} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <ChevronRight size={20} className="text-slate-400" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden flex-1">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="bg-white/5 p-4 text-center text-sm font-medium text-slate-400 border-b border-white/10">
                            {day}
                        </div>
                    ))}

                    {days.map((day, idx) => {
                        const isCurrentMonth = isSameMonth(day, monthStart);
                        const dayAppointments = appointments.filter(apt => isSameDay(apt.date, day));

                        return (
                            <div
                                key={day.toString()}
                                className={`
                  min-h-[100px] p-2 transition-colors hover:bg-white/5 relative group
                  ${!isCurrentMonth ? "bg-black/20 text-slate-600" : "bg-transparent text-slate-300"}
                `}
                            >
                                <span className={`text-sm font-medium ${isSameDay(day, new Date()) ? "bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full" : ""}`}>
                                    {format(day, "d")}
                                </span>

                                <div className="mt-2 flex flex-col gap-1">
                                    {dayAppointments.map((apt, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`text-[10px] p-1.5 rounded ${apt.color} text-white truncate cursor-pointer hover:brightness-110`}
                                        >
                                            {apt.title}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Add button on hover */}
                                <button className="absolute bottom-2 right-2 p-1 rounded-full bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary">
                                    <Plus size={12} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </GlassCard>
        </div>
    );
}
