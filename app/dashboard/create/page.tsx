import { CreateSeriesForm } from "@/components/create/create-series-form";

export default function CreateSeriesPage() {
    return (
        <div className="container mx-auto max-w-5xl px-4 py-8">
            <div className="mb-12 space-y-4">
                <h1 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl lg:text-6xl">
                    Create New <span className="text-volt italic">Series</span>
                </h1>
                <p className="max-w-xl text-lg text-neutral-400">
                    Transform your channel with high-engagement AI content.
                    Follow the steps below to initialize your series.
                </p>
            </div>

            <CreateSeriesForm />
        </div>
    );
}
