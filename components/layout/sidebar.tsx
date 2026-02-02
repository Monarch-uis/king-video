"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Clapperboard,
    Video,
    BookOpen,
    CreditCard,
    Settings,
    ArrowUpCircle,
    User,
    Plus,
    Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { name: "Series", href: "/dashboard", icon: Clapperboard },
    { name: "Videos", href: "/dashboard/videos", icon: Video },
    { name: "Guides", href: "/dashboard/guides", icon: BookOpen },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

const footerItems = [
    { name: "Upgrade", href: "/dashboard/upgrade", icon: ArrowUpCircle },
    { name: "Profile", href: "/dashboard/profile", icon: User },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 z-30 flex h-screen w-72 flex-col border-r border-white/5 bg-noir-900/40 backdrop-blur-xl transition-all duration-300 ease-in-out">
            {/* Header / Logo */}
            <div className="flex h-20 items-center gap-3 px-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-volt text-noir-950 shadow-[0_0_15px_rgba(221,255,85,0.3)]">
                    <Zap className="h-5 w-5 fill-current" />
                </div>
                <span className="font-bricolage text-xl font-bold tracking-tight text-white">
                    KING<span className="text-volt">.VIDEO</span>
                </span>
            </div>

            {/* Primary Action */}
            <div className="px-6 py-4">
                <Link href="/dashboard/create">
                    <button className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-volt px-6 py-4 text-noir-950 shadow-[0_0_20px_rgba(221,255,85,0.2)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(221,255,85,0.4)] active:scale-95">
                        <Plus className="relative h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                        <span className="relative font-bold uppercase tracking-wider">
                            New Series
                        </span>
                    </button>
                </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
                <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => {
                        const isActive = item.href === "/dashboard"
                            ? pathname === item.href
                            : pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "group relative flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-300",
                                    isActive
                                        ? "bg-white/5 text-volt shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                                        : "text-neutral-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                {/* Active Indicator / Glow */}
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-volt shadow-[0_0_10px_#DDFF55]" />
                                )}

                                <item.icon
                                    className={cn(
                                        "h-5 w-5 transition-all duration-300 group-hover:scale-110",
                                        isActive ? "text-volt drop-shadow-[0_0_8px_rgba(221,255,85,0.5)]" : "text-neutral-400 group-hover:text-white"
                                    )}
                                />
                                <span className="font-medium text-base tracking-wide">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Footer Navigation */}
            <div className="border-t border-white/5 px-4 py-6">
                <nav className="flex flex-col gap-2">
                    {footerItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-4 rounded-xl px-4 py-3 text-neutral-500 transition-all hover:bg-white/5 hover:text-white"
                        >
                            <item.icon className="h-5 w-5 transition-colors group-hover:text-white" />
                            <span className="font-medium text-base">{item.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
