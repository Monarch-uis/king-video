import { UserButton } from "@clerk/nextjs";
import { Zap } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-background font-bricolage">
            <nav className="border-b border-white/5 bg-background/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-volt text-noir-950">
                            <Zap className="h-5 w-5 fill-current" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground">
                            KING<span className="text-volt">.VIDEO</span>
                        </span>
                    </div>
                    <UserButton />
                </div>
            </nav>

            <main className="mx-auto max-w-7xl px-6 py-12">
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="mt-2 text-muted-foreground">Welcome to your dashboard.</p>

                {/* Placeholder Content */}
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl border border-white/5 bg-noir-900 p-6">
                        <h3 className="font-bold text-foreground">Recent Videos</h3>
                        <p className="text-sm text-muted-foreground">No videos generated yet.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
