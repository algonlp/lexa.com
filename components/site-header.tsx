"use client"

import { useState } from "react"
import { Menu, X, Waypoints } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Platform", href: "#platform" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
]

const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=infoalgonlp%40gmail.com&su=I'm%20interested%20in%20getting%20started&body=Hi%2C%0A%0AI'd%20like%20to%20learn%20more%20about%20getting%20started.%0A"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
            <Waypoints className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">lexa.com</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-foreground transition-colors hover:text-brand"
          >
            Login
          </a>
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-dark"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border/60 pt-3">
              <a href="#" className="px-3 py-2 text-sm font-medium">
                Login
              </a>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-full bg-brand px-5 py-2 text-center text-sm font-semibold text-brand-foreground"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
