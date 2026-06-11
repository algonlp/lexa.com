import { Lock, ShieldCheck, FileLock2 } from "lucide-react"

const items = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All calls, transcripts, and data in transit are encrypted using modern TLS protocols.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA & SOC2 Ready",
    description:
      "Infrastructure designed to comply with strict healthcare and enterprise data regulations.",
  },
  {
    icon: FileLock2,
    title: "Data Privacy",
    description:
      "Your call logs are yours. We never use private conversational data to train global AI models.",
  },
]

export function Security() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Security &amp; Compliance
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Enterprise-Grade Security
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every layer of lexa.com is built with your data&apos;s safety in
            mind.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-7 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-brand">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
