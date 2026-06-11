import {
  Bot,
  PhoneIncoming,
  Wrench,
  Layers,
  Megaphone,
  LineChart,
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Create unlimited personas. Define their behavior, prompt instructions, and voice tones from the Agents dashboard.",
  },
  {
    icon: PhoneIncoming,
    title: "Inbound Call Routing",
    description:
      "Instantly deploy agents to answer incoming calls 24/7. Never miss a lead, and let the AI handle basic queries and appointments automatically.",
  },
  {
    icon: Wrench,
    title: "Agent Tools",
    description:
      "Equip agents with tools to book calendars, fetch data via webhooks, or update CRM records mid-conversation.",
  },
  {
    icon: Layers,
    title: "20+ Concurrent Calls",
    description:
      "Scale effortlessly. Your AI can talk to 20 or more customers at the exact same time without breaking a sweat.",
  },
  {
    icon: Megaphone,
    title: "Outbound Campaigns",
    description:
      "Launch outbound calls instantly. Trigger single calls via API or upload CSVs to run bulk campaigns for follow-ups.",
  },
  {
    icon: LineChart,
    title: "Real-time Call Logs & Analytics",
    description:
      "Read live transcripts, check durations, view costs, and analyze customer sentiment in one unified view. Everything is recorded and searchable.",
  },
]

const stats = [
  { value: "20+", label: "Concurrent Calls Per Agent" },
  { value: "500ms", label: "Average AI Response Time" },
  { value: "70+", label: "Languages Supported" },
  { value: "$0", label: "Platform Markup on API Costs" },
]

export function Features() {
  return (
    <section id="platform" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Core Modules
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Manage your entire AI workforce from a single, powerful dashboard.
            Built for businesses that want complete control over inbound and
            outbound calls.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg hover:shadow-brand/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card px-6 py-8 text-center"
            >
              <div className="text-3xl font-extrabold text-brand sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
