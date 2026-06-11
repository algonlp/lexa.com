import {
  Bot,
  BrainCircuit,
  DatabaseZap,
  Headphones,
  MessagesSquare,
  PhoneCall,
  Puzzle,
  Target,
} from "lucide-react"

const services = [
  {
    icon: PhoneCall,
    title: "AI Receptionist",
    description:
      "An intelligent AI-powered receptionist that answers incoming calls, handles customer inquiries, books appointments, collects customer information, and transfers calls when needed - available 24/7.",
  },
  {
    icon: Bot,
    title: "AI Voice Agents",
    description:
      "Human-like AI calling agents for inbound and outbound communications, capable of lead qualification, appointment scheduling, customer support, order confirmations, and follow-up calls.",
  },
  {
    icon: MessagesSquare,
    title: "AI Chatbots",
    description:
      "Multi-channel AI chatbots for websites, WhatsApp, Instagram, Facebook Messenger, and other platforms that provide instant customer support and automate conversations.",
  },
  {
    icon: Target,
    title: "Lead Generation Automation",
    description:
      "AI-powered solutions that engage prospects, qualify leads, capture customer information, and automatically schedule meetings for sales teams.",
  },
  {
    icon: Headphones,
    title: "Customer Support Automation",
    description:
      "Automated support agents that answer frequently asked questions, provide order updates, handle common requests, and reduce customer service workload.",
  },
  {
    icon: BrainCircuit,
    title: "Knowledge Base AI",
    description:
      "Custom AI assistants trained on company documents, PDFs, policies, FAQs, and internal knowledge to provide accurate and instant answers.",
  },
  {
    icon: DatabaseZap,
    title: "CRM & Business Integrations",
    description:
      "Seamless integration with CRMs, calendars, helpdesk systems, and business tools to automate workflows and synchronize customer data.",
  },
  {
    icon: Puzzle,
    title: "Custom AI Solutions",
    description:
      "Tailor-made AI applications designed to solve specific business challenges and automate unique operational processes.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Services
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            AI automation built for your business
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From customer conversations to internal workflows, our AI solutions
            help your team respond faster, generate more leads, and operate
            efficiently.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
