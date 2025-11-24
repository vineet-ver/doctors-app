"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from "date-fns";
import { GlassCard } from "@/components/ui/GlassCard";

export function CalendarWidget() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    const days = eachDayOfInterval({
        start: startOfMonth(currentDate),
        end: endOfMonth(currentDate),
    });

    return (
        <GlassCard className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">
                    {format(currentDate, "MMM yyyy")}
                </h3>
                <div className="flex gap-2">
                    <button onClick={prevMonth} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                        <ChevronLeft size={16} className="text-slate-400" />
                    </button>
                    <button onClick={nextMonth} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                        <ChevronRight size={16} className="text-slate-400" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                    <div key={day} className="text-slate-500 font-medium">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {days.map((day, idx) => {
                    const isCurrentMonth = isSameMonth(day, currentDate);
                    const isSelected = isSameDay(day, new Date()); // Mock selection

                    return (
                        <div
                            key={day.toString()}
                            className={`
                aspect-square flex items-center justify-center rounded-full cursor-pointer transition-all
                ${!isCurrentMonth ? "text-slate-700" : "text-slate-300 hover:bg-white/10"}
                ${isToday(day) ? "bg-primary text-white shadow-lg shadow-primary/30" : ""}
              `}
                        >
                            {format(day, "d")}
                        </div>
                    );
                })}
            </div>
        </GlassCard>
    );
}
