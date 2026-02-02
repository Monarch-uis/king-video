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
    selectedNiche?: string;
}

export function NicheSelection({ onContinue, selectedNiche: initialNiche }: NicheSelectionProps) {
    const [selected, setSelected] = useState<string | undefined>(initialNiche);

    return (
        <div className="mx-auto max-w-4xl space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                    <span className="text-volt">01</span> Niche Selection
                </h2>
                <div className="h-px flex-1 mx-6 bg-white/5 hidden sm:block" />
                <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                    Step 1 of 4
                </p>
            </div>

            <Tabs defaultValue="available" className="w-full">
                <TabsList className="grid h-9 w-full grid-cols-2 bg-white/5 p-1 border border-white/5 rounded-lg">
                    <TabsTrigger value="available" className="rounded-md text-xs font-bold data-[state=active]:bg-volt data-[state=active]:text-noir-950 px-3">
                        Available
                    </TabsTrigger>
                    <TabsTrigger value="custom" className="rounded-md text-xs font-bold data-[state=active]:bg-volt data-[state=active]:text-noir-950 px-3">
                        Custom
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="available" className="mt-4 outline-none">
                    <div className="grid gap-2 grid-cols-2 lg:grid-cols-3">
                        {availableNiches.map((niche) => {
                            const isSelected = selected === niche.id;
                            return (
                                <Card
                                    key={niche.id}
                                    className={cn(
                                        "group relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-white/5 bg-noir-900/50 p-3 text-center transition-all hover:border-volt/30 hover:bg-noir-800/80",
                                        isSelected && "border-volt/50 bg-volt/5 ring-1 ring-volt/20 shadow-[0_0_20px_rgba(221,255,85,0.1)]"
                                    )}
                                    onClick={() => setSelected(niche.id)}
                                >
                                    <div className={cn(
                                        "flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300",
                                        isSelected ? "bg-volt text-noir-950" : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white"
                                    )}>
                                        <niche.icon className="h-4 w-4" />
                                    </div>

                                    <div className="space-y-0.5">
                                        <h4 className={cn(
                                            "text-xs font-bold transition-colors",
                                            isSelected ? "text-white" : "text-neutral-300 group-hover:text-white"
                                        )}>
                                            {niche.name}
                                        </h4>
                                        <p className="text-[10px] leading-tight text-neutral-600 line-clamp-1">
                                            {niche.description}
                                        </p>
                                    </div>

                                    {isSelected && (
                                        <div className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-volt text-noir-950 shadow-[0_0_8px_rgba(221,255,85,0.4)]">
                                            <Check className="h-2.5 w-2.5 stroke-[4px]" />
                                        </div>
                                    )}
                                </Card>
                            );
                        })}
                    </div>
                </TabsContent>

                <TabsContent value="custom" className="mt-4 outline-none">
                    <Card className="flex flex-col items-center justify-center border-dashed border-white/10 bg-noir-900/20 p-6 text-center">
                        <Zap className="h-6 w-6 text-neutral-600 mb-2" />
                        <h4 className="text-xs font-bold text-white mb-1">Custom Niche Coming Soon</h4>
                        <p className="text-[10px] text-neutral-500">
                            We&apos;re polishing the custom niche engine.
                        </p>
                    </Card>
                </TabsContent>
            </Tabs>

            <div className="flex justify-end pt-2">
                <Button
                    disabled={!selected}
                    onClick={() => selected && onContinue(selected)}
                    className="h-9 px-8 bg-volt text-noir-950 text-xs font-black uppercase tracking-widest hover:bg-volt/90 hover:scale-105 transition-all disabled:opacity-50 disabled:grayscale disabled:scale-100"
                >
                    Continue <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
            </div>
        </div>
    );
}
