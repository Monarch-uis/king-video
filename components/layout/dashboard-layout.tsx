"use client";

import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

interface DashboardLayoutWrapperProps {
    children: React.ReactNode;
}

export function DashboardLayoutWrapper({ children }: DashboardLayoutWrapperProps) {
    return (
        <div className="flex min-h-screen w-full bg-noir-950 text-foreground selection:bg-volt selection:text-noir-950">
            <Sidebar />
            <div className="flex flex-1 flex-col pl-72 transition-all duration-300 ease-in-out">
                <Header />
                <main className="flex-1 overflow-x-hidden p-8 pt-0">
                    {children}
                </main>
            </div>

            {/* Global Glow Effect */}
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--volt)_0%,_transparent_40%)] opacity-[0.03]" />
        </div>
    );
}
