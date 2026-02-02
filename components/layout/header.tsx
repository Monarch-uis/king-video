"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";

export function Header() {
    return (
        <header className="sticky top-0 z-20 flex h-20 w-full items-center justify-end px-8">
            <div className="flex items-center gap-4 rounded-full border border-white/5 bg-noir-900/50 px-4 py-2 backdrop-blur-md">
                <UserButton
                    appearance={{
                        elements: {
                            avatarBox: "h-9 w-9 ring-2 ring-white/10 transition-all hover:ring-volt/50",
                        }
                    }}
                />
            </div>
        </header>
    );
}
