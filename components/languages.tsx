import { Globe } from "lucide-react"

const greetings = [
  "Hello!",
  "¡Hola!",
  "Bonjour!",
  "مرحبا!",
  "नमस्ते!",
  "你好!",
  "Olá!",
  "Hallo!",
]

export function Languages() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-brand">
          <Globe className="h-4 w-4" />
          Global Reach
        </span>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          70+ Languages Supported
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Break down language barriers. Your AI agents automatically detect the
          caller&apos;s language and respond fluently.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {greetings.map((greeting, i) => (
            <span
              key={greeting}
              className={`rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium ${
                i === 0 ? "bg-brand text-brand-foreground" : "text-foreground"
              }`}
            >
              {greeting}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
