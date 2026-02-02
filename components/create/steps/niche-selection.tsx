"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Ghost, Zap, Globe, DollarSign, Cpu, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const availableNiches = [
    { id: "scary", name: "Scary Stories", description: "Chilling tales of the paranormal and unexplained.", icon: Ghost },
    { id: "motivation", name: "Motivations", description: "Daily doses of inspiration and success strategies.", icon: Zap },
    { id: "true-crime", name: "True Crime", description: "Deep dives into mysterious real-life cases.", icon: Globe },
    { id: "finance", name: "Finance", description: "Expert tips for wealth building and markets.", icon: DollarSign },
    { id: "tech", name: "Tech News", description: "Stay ahead with latest digital breakthroughs.", icon: Cpu },
    { id: "health", name: "Health & Fitness", description: "Transformative advice for a better lifestyle.", icon: Zap },
];

interface NicheSelectionProps {
    onContinue: (nicheId: string) => void;
    onBack?: () => void;
    selectedNiche?: string;
}

export function NicheSelection({ onContinue, onBack, selectedNiche: initialNiche }: NicheSelectionProps) {
    const [selected, setSelected] = useState<string | undefined>(initialNiche);

    return (
        <div className="mx-auto max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
                    <span className="text-volt">01</span> Niche Selection
                </h2>
                <div className="h-px flex-1 mx-8 bg-white/5 hidden sm:block" />
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    Step 1 of 4
                </p>
            </div>

            <Tabs defaultValue="available" className="w-full">
                <TabsList className="grid h-11 w-full grid-cols-2 bg-white/5 p-1 border border-white/5 rounded-xl">
                    <TabsTrigger value="available" className="rounded-lg text-sm font-bold data-[state=active]:bg-volt data-[state=active]:text-noir-950 px-4">
                        Available Niche
                    </TabsTrigger>
                    <TabsTrigger value="custom" className="rounded-lg text-sm font-bold data-[state=active]:bg-volt data-[state=active]:text-noir-950 px-4">
                        Custom Niche
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="available" className="mt-8 outline-none">
                    <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
                        {availableNiches.map((niche) => {
                            const isSelected = selected === niche.id;
                            return (
                                <Card
                                    key={niche.id}
                                    className={cn(
                                        "group relative flex flex-col items-center justify-center gap-4 overflow-hidden border border-white/5 bg-noir-900/50 p-6 text-center transition-all hover:border-volt/30 hover:bg-noir-800/80",
                                        isSelected && "border-volt/50 bg-volt/5 ring-1 ring-volt/20 shadow-[0_0_30px_rgba(221,255,85,0.1)]"
                                    )}
                                    onClick={() => setSelected(niche.id)}
                                >
                                    <div className={cn(
                                        "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
                                        isSelected ? "bg-volt text-noir-950" : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white"
                                    )}>
                                        <niche.icon className="h-6 w-6" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <h4 className={cn(
                                            "text-base font-bold transition-colors",
                                            isSelected ? "text-white" : "text-neutral-300 group-hover:text-white"
                                        )}>
                                            {niche.name}
                                        </h4>
                                        <p className="text-xs leading-relaxed text-neutral-500 line-clamp-2">
                                            {niche.description}
                                        </p>
                                    </div>

                                    {isSelected && (
                                        <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-volt text-noir-950 shadow-[0_0_10px_rgba(221,255,85,0.4)]">
                                            <Check className="h-3.5 w-3.5 stroke-[4px]" />
                                        </div>
                                    )}

                                    {/* Selection Indicator Glow */}
                                    {isSelected && (
                                        <div className="absolute bottom-0 left-0 h-1 w-full bg-volt shadow-[0_0_15px_rgba(221,255,85,0.5)]" />
                                    )}
                                </Card>
                            );
                        })}
                    </div>
                </TabsContent>

                <TabsContent value="custom" className="mt-8 outline-none">
                    <Card className="flex flex-col items-center justify-center border-dashed border-white/10 bg-noir-900/20 p-12 text-center">
                        <div className="mb-4 rounded-full bg-white/5 p-4 text-neutral-600">
                            <Zap className="h-8 w-8" />
                        </div>
                        <h4 className="font-bold text-white mb-2">Custom Niche Coming Soon</h4>
                        <p className="text-sm text-neutral-500 max-w-[280px]">
                            We&apos;re polishing the custom niche engine. For now, please select one from the available list.
                        </p>
                    </Card>
                </TabsContent>
            </Tabs>

            <div className={cn("flex items-center pt-4", onBack ? "justify-between" : "justify-end")}>
                {onBack && (
                    <Button
                        variant="ghost"
                        onClick={onBack}
                        className="h-12 px-8 text-neutral-500 hover:text-white hover:bg-white/5 font-bold uppercase tracking-widest transition-all"
                    >
                        Back
                    </Button>
                )}
                <Button
                    disabled={!selected}
                    onClick={() => selected && onContinue(selected)}
                    className="h-12 px-10 bg-volt text-noir-950 font-black uppercase tracking-widest hover:bg-volt/90 hover:scale-105 transition-all disabled:opacity-50 disabled:grayscale disabled:scale-100 shadow-[0_0_20px_rgba(221,255,85,0.2)]"
                >
                    Continue <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
