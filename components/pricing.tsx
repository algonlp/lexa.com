import { Check } from "lucide-react"

const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=infoalgonlp%40gmail.com&su=I'm%20interested%20in%20getting%20started&body=Hi%2C%0A%0AI'd%20like%20to%20learn%20more%20about%20getting%20started.%0A"

const features = [
  "Unlimited AI Agents & Personas",
  "Unlimited Concurrent Calls",
  "Custom Tool Integrations & Webhooks",
  "Real-time Call Analytics & Transcripts",
  "Bring Your Own Keys (Twilio, OpenAI)",
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Pricing
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Own it forever
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            No monthly platform fees. Connect your own API keys and pay only for
            the exact AI and telephony usage at cost.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-lg rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <span className="inline-flex rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-foreground">
            Lifetime Deal
          </span>
          <h3 className="mt-5 text-2xl font-bold">Full Platform Access</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Everything you need to build and run an AI voice agency or internal
            tool.
          </p>

          <ul className="mt-8 space-y-3.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-full bg-brand px-6 py-3.5 text-center text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-dark"
          >
            Contact Us to Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
