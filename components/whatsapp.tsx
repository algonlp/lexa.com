import { MessageCircle, Check } from "lucide-react"

const points = [
  {
    title: "Appointment Reminders via WhatsApp",
    description:
      "Send automated reminders before every booked meeting — reducing no-shows by up to 60%.",
  },
  {
    title: "Missed Call Auto-Message",
    description:
      "If a lead is busy and disconnects, lexa.com instantly sends a WhatsApp follow-up so the conversation continues on their terms.",
  },
  {
    title: "Two-Way Follow-Up Flows",
    description:
      "Chain SMS, WhatsApp, and voice calls into one intelligent outreach sequence — never let a lead go cold.",
  },
]

export function WhatsApp() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-brand">
            <MessageCircle className="h-4 w-4" />
            WhatsApp Integration
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Stay connected even when calls go unanswered
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            lexa.com automatically fires a WhatsApp message whenever a lead
            misses a call or is too busy to pick up — so you never lose a
            conversation. Reminders, follow-ups, and confirmations land directly
            in WhatsApp.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    {point.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-3xl border border-border bg-background p-5 shadow-sm">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-semibold">lexa.com Agent</div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Online
              </div>
            </div>
          </div>

          <div className="space-y-3 py-5">
            <div className="text-center text-xs text-muted-foreground">
              Missed Call · 10:42 AM
            </div>
            <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-muted px-4 py-2.5 text-sm">
              Hi! 👋 I just tried calling you from lexa.com. Looks like you were
              busy — no worries!
              <span className="mt-1 block text-right text-[10px] text-muted-foreground">
                10:42 AM
              </span>
            </div>
            <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-muted px-4 py-2.5 text-sm">
              Would you like to reschedule? Reply with a time that works and
              I&apos;ll book it right away. 📅
              <span className="mt-1 block text-right text-[10px] text-muted-foreground">
                10:42 AM
              </span>
            </div>
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand px-4 py-2.5 text-sm text-brand-foreground">
              Tomorrow 3 PM works for me!
              <span className="mt-1 block text-right text-[10px] text-brand-foreground/70">
                10:44 AM ✓✓
              </span>
            </div>
          </div>

          <div className="rounded-full bg-accent px-4 py-2 text-center text-xs font-medium text-brand">
            Message Delivered
          </div>
        </div>
      </div>
    </section>
  )
}
