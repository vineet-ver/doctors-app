"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Clock, MapPin } from "lucide-react";

const visits = [
    {
        id: 1,
        type: "Complete Blood Count",
        date: "24 April '23",
        doctor: "Dr. Shimron",
        role: "Hematologist",
        color: "bg-emerald-500",
    },
    {
        id: 2,
        type: "Clinic Visit",
        date: "31 May '23",
        doctor: "Dr. Shilpa",
        role: "General",
        color: "bg-purple-500",
    },
    {
        id: 3,
        type: "Video Consultation",
        date: "02 June '23",
        doctor: "Dr. Kartik",
        role: "Surgeon",
        color: "bg-blue-500",
    },
];

export function VisitsList() {
    return (
        <div className="w-full">
            <h3 className="text-slate-400 text-sm font-medium mb-4">In-Week Visits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {visits.map((visit) => (
                    <GlassCard key={visit.id} className="flex flex-col gap-3" hoverEffect>
                        <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 rounded-lg ${visit.color} bg-opacity-20 flex items-center justify-center`}>
                                <div className={`w-3 h-3 rounded-full ${visit.color}`} />
                            </div>
                            <span className="text-xs text-slate-400">{visit.date}</span>
                        </div>

                        <h4 className="text-white font-medium text-sm leading-tight mb-2">
                            {visit.type}
                        </h4>

                        <div className="flex items-center gap-2 mt-auto pt-2 border-t border-white/5">
                            <div className="w-6 h-6 rounded-full bg-slate-700 overflow-hidden">
                                {/* Avatar placeholder */}
                                <div className="w-full h-full bg-slate-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-white font-medium">{visit.doctor}</span>
                                <span className="text-[9px] text-slate-500">{visit.role}</span>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
