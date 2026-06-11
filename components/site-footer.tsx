import { Waypoints, Globe, Mail, AtSign, Rss } from "lucide-react"

const columns = [
  {
    heading: "Product",
    links: ["Services", "Features", "Integrations", "Industry", "Pricing", "FAQ"],
  },
  {
    heading: "Resources",
    links: ["Dashboard", "Agents", "Tools", "Integration", "API settings"],
  },
  {
    heading: "Legal",
    links: [
      "Compliance & Data Protection",
      "Terms of Service",
      "Privacy Policy",
      "Refund Policy",
      "Contact Support",
    ],
  },
]

const socials = [Globe, Mail, AtSign, Rss]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <Waypoints className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">lexa.com</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The modern infrastructure for conversational AI voice agents.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold">{col.heading}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 lexa.com. All rights reserved. Powered by Veta AI
          </p>
          <div className="flex items-center gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                aria-label="Social media link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
