"use client";

import React, { useState, useCallback } from "react";
import { StepIndicator } from "./step-indicator";
import { NicheSelection } from "./steps/niche-selection";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import { useRouter } from "next/navigation";

type Step = 1 | 2 | 3 | 4;

export function CreateSeriesForm() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState<Step>(1);
    const [formData, setFormData] = useState({
        nicheId: "",
    });

    const totalSteps = 4;

    const handleNicheSelect = useCallback((nicheId: string) => {
        setFormData((prev) => ({ ...prev, nicheId }));
        setCurrentStep(2);
    }, []);

    const handleBack = useCallback(() => {
        if (currentStep > 1) {
            setCurrentStep((prev) => (prev - 1) as Step);
        }
    }, [currentStep]);

    return (
        <div className="mx-auto max-w-4xl space-y-4">
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

            <div className="relative">
                {currentStep === 1 && (
                    <NicheSelection
                        onContinue={handleNicheSelect}
                        selectedNiche={formData.nicheId}
                    />
                )}

                {currentStep === 2 && (
                    <div className="flex flex-col space-y-6 pt-10 animate-in fade-in zoom-in-95 duration-500">
                        <div className="rounded-2xl border border-volt/20 bg-volt/5 p-8 text-center backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-2">Language Selection</h3>
                            <p className="text-neutral-500 max-w-sm mx-auto">
                                You&apos;ve selected the <span className="text-volt font-bold">{formData.nicheId}</span> niche.
                                Next, we&apos;ll set up the language and voice for your series.
                            </p>
                        </div>
                        <Card className="border-dashed border-white/10 bg-noir-900/20 p-12 text-center w-full">
                            <p className="text-neutral-500 italic text-sm">Step 2 Implementation Pending...</p>
                        </Card>

                        <div className="flex justify-between items-center pt-4">
                            <button
                                onClick={handleBack}
                                className="h-12 px-8 text-neutral-500 hover:text-white hover:bg-white/5 font-bold uppercase tracking-widest transition-all rounded-md"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => setCurrentStep(3)}
                                className="h-12 px-10 bg-volt text-noir-950 font-black uppercase tracking-widest hover:bg-volt/90 hover:scale-105 transition-all rounded-md shadow-[0_0_20px_rgba(221,255,85,0.2)] flex items-center gap-2"
                            >
                                Continue <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
