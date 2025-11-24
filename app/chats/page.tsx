"use client";

import { useState } from "react";
import { Search, Phone, Video, MoreVertical, Send, Paperclip, Mic, Image as ImageIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";

const contacts = [
    { id: 1, name: "Dr. Jane Doe", role: "Cardiologist", avatar: "👩‍⚕️", online: true, lastMsg: "Please send the report.", time: "10:30 AM", unread: 2 },
    { id: 2, name: "Dr. Shimron", role: "Hematologist", avatar: "👨‍⚕️", online: false, lastMsg: "Appointment confirmed.", time: "Yesterday", unread: 0 },
    { id: 3, name: "Dr. Shilpa", role: "General", avatar: "👩‍⚕️", online: true, lastMsg: "How are you feeling?", time: "Mon", unread: 0 },
];

const messages = [
    { id: 1, text: "Hello! How can I help you today?", sender: "them", time: "10:00 AM" },
    { id: 2, text: "I have some questions about my heart rate.", sender: "me", time: "10:05 AM" },
    { id: 3, text: "Sure, please go ahead.", sender: "them", time: "10:06 AM" },
    { id: 4, text: "It seems a bit high in the mornings.", sender: "me", time: "10:07 AM" },
    { id: 5, text: "Please send the report.", sender: "them", time: "10:30 AM" },
];

export default function ChatsPage() {
    const [activeChat, setActiveChat] = useState(contacts[0]);
    const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);

    return (
        <div className="h-full flex gap-6 relative">
            {/* Sidebar */}
            <div className="w-80 flex flex-col gap-4">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search chats..."
                        className="w-full bg-glass border border-glass-border rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-2">
                    {contacts.map((contact) => (
                        <button
                            key={contact.id}
                            onClick={() => setActiveChat(contact)}
                            className={`p-3 rounded-xl flex items-center gap-3 transition-all ${activeChat.id === contact.id ? "bg-primary/20 border border-primary/30" : "hover:bg-white/5 border border-transparent"
                                }`}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-xl">
                                    {contact.avatar}
                                </div>
                                {contact.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900" />
                                )}
                            </div>

                            <div className="flex-1 text-left">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-white font-medium text-sm">{contact.name}</h4>
                                    <span className="text-[10px] text-slate-400">{contact.time}</span>
                                </div>
                                <p className="text-xs text-slate-400 truncate max-w-[140px]">{contact.lastMsg}</p>
                            </div>

                            {contact.unread > 0 && (
                                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                                    {contact.unread}
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-lg">
                            {activeChat.avatar}
                        </div>
                        <div>
                            <h3 className="text-white font-medium">{activeChat.name}</h3>
                            <p className="text-xs text-green-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                Online
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
                            <Phone size={20} />
                        </button>
                        <button
                            onClick={() => setIsVideoCallOpen(true)}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
                        >
                            <Video size={20} />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
                            <MoreVertical size={20} />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar bg-black/20">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[70%] p-3 rounded-2xl text-sm ${msg.sender === "me"
                                    ? "bg-primary text-white rounded-br-none"
                                    : "bg-white/10 text-slate-200 rounded-bl-none"
                                    }`}
                            >
                                <p>{msg.text}</p>
                                <span className={`text-[10px] block mt-1 ${msg.sender === "me" ? "text-primary-foreground/70" : "text-slate-400"}`}>
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="p-4 bg-white/5 border-t border-white/10">
                    <div className="flex items-center gap-2 bg-black/20 rounded-full p-2 border border-white/5">
                        <button className="p-2 hover:bg-white/10 rounded-full text-slate-400 transition-colors">
                            <Paperclip size={18} />
                        </button>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none px-2"
                        />
                        <button className="p-2 hover:bg-white/10 rounded-full text-slate-400 transition-colors">
                            <Mic size={18} />
                        </button>
                        <button className="p-2 bg-primary hover:bg-primary/90 rounded-full text-white transition-colors shadow-lg shadow-primary/20">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </GlassCard>

            {/* Video Call Overlay */}
            <AnimatePresence>
                {isVideoCallOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-3xl overflow-hidden"
                    >
                        <div className="relative w-full h-full max-w-4xl max-h-[800px] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            {/* Remote Video (Mock) */}
                            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                                <div className="text-6xl">👩‍⚕️</div>
                                <p className="absolute bottom-24 text-white font-medium text-lg drop-shadow-md">Dr. Jane Doe</p>
                            </div>

                            {/* Local Video (Mock) */}
                            <div className="absolute top-4 right-4 w-48 h-36 bg-black rounded-xl border border-white/20 shadow-lg overflow-hidden flex items-center justify-center">
                                <div className="text-3xl">👤</div>
                            </div>

                            {/* Controls */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 backdrop-blur-md p-3 rounded-full border border-white/10">
                                <button className="p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                                    <Mic size={24} />
                                </button>
                                <button className="p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                                    <Video size={24} />
                                </button>
                                <button
                                    onClick={() => setIsVideoCallOpen(false)}
                                    className="p-4 bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors shadow-lg shadow-red-500/30"
                                >
                                    <Phone size={24} className="rotate-[135deg]" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
