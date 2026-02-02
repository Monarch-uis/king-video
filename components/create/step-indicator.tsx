"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

const steps = [
    { id: 1, name: "Niche" },
    { id: 2, name: "Language" },
    { id: 3, name: "Voice" },
    { id: 4, name: "Review" },
];

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="mb-10 w-full space-y-6">
            <div className="flex justify-between">
                {steps.map((step) => {
                    const isActive = step.id <= currentStep;
                    const isCurrent = step.id === currentStep;

                    return (
                        <div
                            key={step.id}
                            className={cn(
                                "flex flex-col items-center gap-2 transition-all duration-300",
                                isActive ? "text-volt" : "text-neutral-600"
                            )}
                        >
                            <div
                                className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300",
                                    isActive
                                        ? "border-volt bg-volt/10 text-volt shadow-[0_0_10px_rgba(221,255,85,0.2)]"
                                        : "border-white/5 bg-white/5",
                                    isCurrent && "ring-2 ring-volt ring-offset-4 ring-offset-noir-950"
                                )}
                            >
                                {step.id}
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest">
                                {step.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5 shadow-inner">
                <Progress
                    value={progress}
                    className="h-full bg-volt transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] shadow-[0_0_15px_rgba(221,255,85,0.5)]"
                />
            </div>
        </div>
    );
}
