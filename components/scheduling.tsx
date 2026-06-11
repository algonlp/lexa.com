import { Check, CalendarDays } from "lucide-react"

const points = [
  "Native Google Calendar integration",
  "Automatically handles timezone differences",
  "Sends automated SMS reminders before meetings",
]

const slots = [
  { time: "Tuesday, 1:00 PM", state: "free" },
  { time: "Tuesday, 2:00 PM", state: "booking" },
  { time: "Tuesday, 3:00 PM", state: "free" },
]

export function Scheduling() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Scheduling
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Automate appointment booking &amp; reminders
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Let your AI agent handle your calendar. It reads available slots in
            real-time, negotiates times with clients, and books directly into
            Google Calendar or Cal.com.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="space-y-4">
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand px-4 py-3 text-sm text-brand-foreground">
              &quot;Can I book a consultation for next Tuesday around 2 PM?&quot;
            </div>
            <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm text-foreground">
              &quot;Let me check... Yes, 2:00 PM is available. I&apos;ve booked
              that for you!&quot;
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-background p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <CalendarDays className="h-4 w-4 text-brand" />
              Available slots
            </div>
            <div className="mt-3 space-y-2">
              {slots.map((slot) => (
                <div
                  key={slot.time}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm ${
                    slot.state === "booking"
                      ? "border-brand bg-accent font-medium text-brand"
                      : "border-border bg-card text-foreground"
                  }`}
                >
                  <span>{slot.time}</span>
                  {slot.state === "booking" && (
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Booking...
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
