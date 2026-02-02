import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Calendar,
  Youtube,
  Instagram,
  Send,
  Zap,
  CheckCircle2,
  ArrowRight,
  MonitorPlay,
  Share2,
  Clock
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-bricolage selection:bg-volt selection:text-noir-950">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-volt text-noir-950">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              KING<span className="text-volt">.VIDEO</span>
            </span>
          </div>
          <div className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-volt">Features</a>
            <a href="#scheduling" className="transition-colors hover:text-volt">Scheduling</a>
            <a href="#pricing" className="transition-colors hover:text-volt">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <Button variant="ghost" className="hidden transition-colors hover:text-volt sm:inline-flex cursor-pointer">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-volt text-noir-950 hover:bg-volt/90 font-bold uppercase tracking-wider cursor-pointer">
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <a href="/dashboard">
                <Button variant="ghost" className="hidden transition-colors hover:text-volt sm:inline-flex cursor-pointer mr-2">
                  Dashboard
                </Button>
              </a>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pb-24 text-center lg:pb-32">
          {/* Subtle glow background */}
          <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,_var(--volt)_0%,_transparent_70%)] opacity-[0.03]" />

          <div className="mx-auto max-w-4xl">
            <Badge variant="outline" className="mb-6 border-volt/30 px-4 py-1.5 text-volt backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-volt" />
              Now in Private Beta
            </Badge>
            <h1 className="mb-8 text-5xl font-black tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              AUTOPILOT FOR <br />
              <span className="bg-gradient-to-br from-volt to-volt/50 bg-clip-text text-transparent">
                SHORT CONTENT
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              The world's first AI-native engine that generates, edits, and
              autoschedules high-retention shorts across every social platform.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <SignedOut>
                <SignUpButton>
                  <Button size="lg" className="h-14 bg-volt px-10 text-lg font-black uppercase tracking-widest text-noir-950 transition-all hover:scale-105 hover:bg-volt/90 cursor-pointer">
                    Start Generating <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <a href="/dashboard">
                  <Button size="lg" className="h-14 bg-volt px-10 text-lg font-black uppercase tracking-widest text-noir-950 transition-all hover:scale-105 hover:bg-volt/90 cursor-pointer">
                    Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </SignedIn>
              <Button size="lg" variant="outline" className="h-14 border-white/10 px-10 text-lg font-bold backdrop-blur-sm transition-all hover:border-volt/50 hover:bg-volt/5">
                <Play className="mr-2 h-4 w-4 fill-foreground" /> Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Interface Preview */}
          <div className="mx-auto mt-20 max-w-6xl">
            <div className="relative rounded-2xl border border-white/10 bg-noir-900/50 p-2 shadow-2xl backdrop-blur-sm">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-volt/20 to-transparent opacity-50 blur-xl" />
              <div className="relative overflow-hidden rounded-xl border border-white/5 bg-foreground/5">
                <Image
                  src="/hero.png"
                  alt="King Video AI Interface"
                  width={1400}
                  height={800}
                  className="w-full object-cover grayscale-[20%] transition-all hover:grayscale-0"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid - Film-Strip Aesthetic */}
        <section id="features" className="bg-noir-950 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 grid gap-12 lg:grid-cols-3 lg:gap-8">
              <div className="flex flex-col gap-4 border-l-2 border-volt/20 pl-8 transition-colors hover:border-volt">
                <MonitorPlay className="h-10 w-10 text-volt" />
                <h3 className="text-2xl font-bold text-foreground">AI Video Engine</h3>
                <p className="text-muted-foreground">
                  Proprietary neural models trained on top-0.1% retention content. High agency video generation that actually converts.
                </p>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-volt/20 pl-8 transition-colors hover:border-volt">
                <Calendar className="h-10 w-10 text-volt" />
                <h3 className="text-2xl font-bold text-foreground">Autoschedule v4</h3>
                <p className="text-muted-foreground">
                  Queue weeks of content in minutes. Set your strategy and let King Video distribute across all platform APIs automatically.
                </p>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-volt/20 pl-8 transition-colors hover:border-volt">
                <Share2 className="h-10 w-10 text-volt" />
                <h3 className="text-2xl font-bold text-foreground">Omni-Channel</h3>
                <p className="text-muted-foreground">
                  Native integrations for YouTube Shorts, Reels, TikTok, and even personalized Video Emails. One click to everywhere.
                </p>
              </div>
            </div>

            {/* Content Preview Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "YouTube Shorts", icon: <Youtube className="h-5 w-5" />, count: "2.4B Monthly Views" },
                { title: "IG Reels", icon: <Instagram className="h-5 w-5" />, count: "1.2B Reach" },
                { title: "TikTok", icon: <Send className="h-5 w-5 rotate-12" />, count: "Viral DNA" },
                { title: "Video Emails", icon: <Send className="h-5 w-5" />, count: "85% Open Rate" },
              ].map((plat, i) => (
                <Card key={i} className="group relative overflow-hidden border-white/5 bg-noir-900 transition-all hover:border-volt/30">
                  <div className="absolute inset-x-0 bottom-0 h-1 w-0 bg-volt transition-all group-hover:w-full" />
                  <div className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 text-volt">
                      {plat.icon}
                    </div>
                    <h4 className="mb-2 font-bold text-foreground">{plat.title}</h4>
                    <p className="text-sm text-muted-foreground">{plat.count}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scheduling Section */}
        <section id="scheduling" className="relative border-y border-white/5 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="flex-1">
                <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Set it once. <br />
                  <span className="text-volt">Post forever.</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "Auto-generate captions from 50+ languages",
                    "Smart time-zone detection for peak engagement",
                    "A/B test different AI voiceovers automatically",
                    "Unified analytics dashboard for all platforms"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-volt" />
                      <p className="text-muted-foreground">{text}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-10 h-12 bg-white text-black hover:bg-white/90">
                  Explore Scheduler <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="w-full shrink-0 lg:w-[500px]">
                <Card className="border-white/10 bg-noir-900/50 p-6 backdrop-blur-md">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-amber-500" />
                      <div className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Command Center</span>
                  </div>
                  <div className="space-y-4">
                    {[8, 9, 10, 11].map((hour) => (
                      <div key={hour} className="flex items-center gap-4 rounded-lg border border-white/5 bg-foreground/5 p-3">
                        <Clock className="h-4 w-4 text-volt" />
                        <span className="text-sm font-medium">{hour}:00 AM</span>
                        <Badge variant="outline" className="ml-auto border-volt/20 text-[10px] text-volt uppercase tracking-tighter">Scheduled</Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-volt py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-8 text-4xl font-black uppercase italic tracking-tighter text-noir-950 sm:text-6xl">
              DOMINATE THE FEED
            </h2>
            <p className="mb-10 text-lg font-medium text-noir-950/70">
              Join 2,500+ creators who are using King Video to grow 10x faster
              without spending a second in an editor.
            </p>
            <Button size="lg" className="h-16 rounded-none bg-noir-950 px-12 text-xl font-black uppercase tracking-[0.2em] text-volt hover:bg-noir-800 transition-all active:scale-95">
              Join the Kingdom
            </Button>
          </div>
        </section>
      </main>

      {/* Production-Grade Footer */}
      <footer className="border-t border-white/5 bg-noir-950 pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="col-span-2">
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-volt text-noir-950">
                  <Zap className="h-5 w-5 fill-current" />
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground">
                  KING<span className="text-volt">.VIDEO</span>
                </span>
              </div>
              <p className="mb-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Next-generation utility for the modern creator economy.
                Built at the intersection of production-grade AI and industrial scheduling.
              </p>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/5 hover:border-volt/50 transition-colors">
                  <Youtube className="h-5 w-5 text-muted-foreground transition-colors hover:text-volt" />
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/5 hover:border-volt/50 transition-colors">
                  <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-volt" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Product</h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground italic">Video Engine</a></li>
                <li><a href="#" className="hover:text-foreground">Cloud Scheduler</a></li>
                <li><a href="#" className="hover:text-foreground italic italic">Creative Assets</a></li>
                <li><a href="#" className="hover:text-foreground">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Company</h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About Us</a></li>
                <li><a href="#" className="hover:text-foreground italic">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground italic">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-center justify-between border-t border-white/5 pt-12 text-xs text-muted-foreground/40 sm:flex-row">
            <p>© 2026 King Video Operations. All Rights Reserved.</p>
            <p className="mt-4 sm:mt-0 uppercase tracking-widest font-bold">Encrypted & Secure</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

