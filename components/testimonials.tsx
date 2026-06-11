import { Star } from "lucide-react"

const reviews = [
  {
    quote:
      "We replaced our entire outbound call team with lexa.com. It books 3x more appointments and never takes a sick day. The ROI was immediate.",
    initials: "JM",
    name: "James Mitchell",
    role: "CEO, Mitchell Realty Group",
  },
  {
    quote:
      "Our patients say the AI sounds completely natural. It handles all our appointment reminders and after-hours calls without a single complaint.",
    initials: "SR",
    name: "Dr. Sara Ramos",
    role: "Medical Director, ClearPath Clinic",
  },
  {
    quote:
      "Setup took under an hour. We plugged in our OpenAI key, configured our agent, and it was live. The bring-your-own-keys model saves us hundreds per month.",
    initials: "AK",
    name: "Ali Khan",
    role: "Founder, QuickShip Commerce",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Reviews
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            See how businesses are saving time and closing more leads with
            lexa.com voice agents.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                &quot;{review.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-brand">
                  {review.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    {review.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {review.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
