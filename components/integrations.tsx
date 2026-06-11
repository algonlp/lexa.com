import {
  Bot,
  CalendarDays,
  CalendarRange,
  Cloud,
  MessageCircle,
  Network,
  Phone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Integration = {
  name: string
  color: string
  icon?: LucideIcon
  mark?: string
}

const integrations: Integration[] = [
  { name: "Freshworks", mark: "freshworks", color: "text-sky-600" },
  { name: "Cal.com", mark: "Cal.com", color: "text-foreground" },
  { name: "Calendly", icon: CalendarRange, color: "text-blue-600" },
  { name: "Zapier", icon: Zap, color: "text-orange-600" },
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-600" },
  { name: "GoHighLevel", icon: Workflow, color: "text-indigo-600" },
  { name: "Salesforce", icon: Cloud, color: "text-blue-500" },
  { name: "HubSpot", icon: Network, color: "text-orange-500" },
  { name: "OpenAI", icon: Bot, color: "text-slate-700" },
  { name: "Google Gemini", icon: Sparkles, color: "text-blue-500" },
  { name: "Twilio", icon: Phone, color: "text-red-500" },
  { name: "ElevenLabs", mark: "II", color: "text-slate-800" },
  { name: "Zoho", mark: "Z", color: "text-orange-500" },
  { name: "Make", mark: "M", color: "text-violet-600" },
  { name: "Google Calendar", icon: CalendarDays, color: "text-blue-600" },
  { name: "AI Agent", icon: Bot, color: "text-slate-700" },
]

export function Integrations() {
  const rows = [integrations.slice(0, 8), integrations.slice(8)]

  return (
    <section id="integrations" className="bg-muted/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Ecosystem
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Connects to your stack
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            lexa.com sits at the center of your workflow, seamlessly passing data
            between your telephony provider, AI engines, and CRMs.
          </p>
        </div>

        <div className="integration-marquee mx-auto mt-14 max-w-6xl space-y-4 overflow-hidden">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex w-max gap-4 ${
                rowIndex === 0
                  ? "animate-integration-marquee"
                  : "animate-integration-marquee-reverse"
              }`}
            >
              {[...row, ...row].map((integration, index) => {
                const Icon = integration.icon

                return (
                  <div
                    key={`${integration.name}-${index}`}
                    aria-hidden={index >= row.length}
                    className="group flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-28 sm:w-28"
                    title={integration.name}
                  >
                    {Icon ? (
                      <Icon
                        aria-label={integration.name}
                        className={`h-10 w-10 stroke-[1.8] sm:h-11 sm:w-11 ${integration.color}`}
                      />
                    ) : (
                      <span
                        aria-label={integration.name}
                        className={`text-center text-sm font-extrabold tracking-tight ${integration.color}`}
                      >
                        {integration.mark}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
