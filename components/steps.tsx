const steps = [
  {
    number: "1",
    title: "Connect Your Keys",
    description:
      "Plug in your own Twilio, OpenAI, and ElevenLabs API keys. Pay zero markup — only your actual usage costs.",
  },
  {
    number: "2",
    title: "Create an Agent",
    description:
      "Define your agent's name, personality, voice, and instructions. Give it tools like calendar booking or CRM updates.",
  },
  {
    number: "3",
    title: "Assign a Number",
    description:
      "Link a Twilio phone number to your agent. It's instantly ready to receive inbound calls or launch outbound campaigns.",
  },
  {
    number: "4",
    title: "Watch it Work",
    description:
      "Monitor live calls, read transcripts, and analyze sentiment from your dashboard in real time.",
  },
]

export function Steps() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Getting Started
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            No complex setup. No engineering team required. Launch your first AI
            voice agent in 4 simple steps.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-border bg-background p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-base font-bold text-brand-foreground">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
