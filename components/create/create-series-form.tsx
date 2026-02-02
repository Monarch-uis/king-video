"use client";

import React, { useState, useCallback } from "react";
import { StepIndicator } from "./step-indicator";
import { NicheSelection } from "./steps/niche-selection";
import { Card } from "@/components/ui/card";

type Step = 1 | 2 | 3 | 4;

export function CreateSeriesForm() {
    const [currentStep, setCurrentStep] = useState<Step>(1);
    const [formData, setFormData] = useState({
        nicheId: "",
    });

    const totalSteps = 4;

    const handleNicheSelect = useCallback((nicheId: string) => {
        setFormData((prev) => ({ ...prev, nicheId }));
        setCurrentStep(2);
        // In a real app involving more steps, you'd navigate locally or update internal component state
    }, []);

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
                    <div className="flex flex-col items-center justify-center space-y-6 pt-20 animate-in fade-in zoom-in-95 duration-500">
                        <div className="rounded-2xl border border-volt/20 bg-volt/5 p-8 text-center backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-2">Language Selection</h3>
                            <p className="text-neutral-500 max-w-sm">
                                You&apos;ve selected the <span className="text-volt font-bold">{formData.nicheId}</span> niche.
                                Next, we&apos;ll set up the language and voice for your series.
                            </p>
                            <button
                                onClick={() => setCurrentStep(1)}
                                className="mt-6 text-sm font-bold text-volt hover:underline"
                            >
                                ← Back to Niche Selection
                            </button>
                        </div>
                        <Card className="border-dashed border-white/10 bg-noir-900/20 p-12 text-center w-full max-w-md">
                            <p className="text-neutral-500 italic">Step 2 Implementation Pending...</p>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
}
