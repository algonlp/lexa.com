"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How fast is the AI response time?",
    answer:
      "Our architecture is optimized for ultra-low latency, typically responding in under 500ms — making conversations feel completely natural.",
  },
  {
    question: "Can I use my own Twilio and OpenAI keys?",
    answer:
      "Yes! lexa.com is a bring-your-own-keys (BYOK) platform. You pay zero markup on minutes or tokens — only your direct provider costs.",
  },
  {
    question: "Is it possible to transfer calls to a human?",
    answer:
      "Absolutely. You can instruct the AI to transfer calls to a live agent if a user requests it or the situation requires human intervention.",
  },
  {
    question: "Does it integrate with my CRM?",
    answer:
      "Yes — via Webhooks and direct API integrations, the AI can push call summaries and update lead statuses in GoHighLevel, HubSpot, Salesforce, and more.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-background"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold sm:text-base">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
