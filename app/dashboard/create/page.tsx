import { CreateSeriesForm } from "@/components/create/create-series-form";

export default function CreateSeriesPage() {
    return (
        <div className="container mx-auto max-w-5xl px-4 py-4">
            <div className="mb-6 space-y-1">
                <h1 className="text-2xl font-black uppercase tracking-tighter text-white sm:text-3xl lg:text-4xl">
                    Create New <span className="text-volt italic">Series</span>
                </h1>
                <p className="max-w-xl text-sm text-neutral-400">
                    Transform your channel with high-engagement AI content.
                </p>
            </div>

            <CreateSeriesForm />
        </div>
    );
}
