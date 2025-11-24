"use client";

import { Video, Phone, MoreVertical } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

export function DoctorProfileCard() {
    return (
        <GlassCard className="flex flex-col items-center text-center">
            <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 relative z-10">
                    {/* Placeholder avatar */}
                    <div className="w-full h-full bg-slate-700 flex items-center justify-center text-2xl">👩‍⚕️</div>
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-0" />
            </div>

            <h3 className="text-white font-semibold text-lg">Dr. Jane Doe</h3>
            <p className="text-slate-400 text-sm mb-6">Cardiologist</p>

            <button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center gap-2 transition-all mb-3 group">
                <Video size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Video Call</span>
            </button>

            <div className="flex gap-2 w-full">
                <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
                    <Phone size={16} className="text-slate-400" />
                </button>
                <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
                    <MoreVertical size={16} className="text-slate-400" />
                </button>
            </div>
        </GlassCard>
    );
}
