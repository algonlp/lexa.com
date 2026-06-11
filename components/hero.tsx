import { ArrowRight } from "lucide-react"
import { ParticleNetwork } from "@/components/particle-network"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 -z-10">
        <ParticleNetwork />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-brand" />
          Conversational AI voice infrastructure
        </span>
        <h1 className="mt-8 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
          Intelligent AI Calling
          <br />
          <span className="text-brand">People Trust</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          The ultimate platform to design, equip, and launch AI voice agents.
          Handle unlimited inbound calls, run outbound campaigns, and connect
          your favorite tools in minutes.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-dark"
          >
            Start Building Free
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#platform"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted"
          >
            Explore Platform
          </a>
        </div>
      </div>
    </section>
  )
}
