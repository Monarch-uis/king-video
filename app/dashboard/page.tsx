import { UserButton } from "@clerk/nextjs";
import { Zap } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="min-h-screen font-bricolage">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="mt-2 text-muted-foreground">Welcome to your dashboard.</p>

                {/* Placeholder Content */}
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl border border-white/5 bg-noir-900 p-6">
                        <h3 className="font-bold text-foreground">Recent Videos</h3>
                        <p className="text-sm text-muted-foreground">No videos generated yet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
