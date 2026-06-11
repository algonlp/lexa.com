import {
  Home,
  HeartPulse,
  ShoppingCart,
  UtensilsCrossed,
  Car,
  Wrench,
} from "lucide-react"

const industries = [
  {
    icon: Home,
    title: "Real Estate",
    items: [
      "Lead qualification calls",
      "Property viewing scheduling",
      "Outbound follow-ups",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    items: [
      "Patient intake screening",
      "Appointment reminders",
      "After-hours answering",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    items: [
      "Order tracking inquiries",
      "Return policy FAQs",
      "Abandoned cart calls",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    items: [
      "Table reservations",
      "Menu and hours inquiries",
      "Takeout order taking",
    ],
  },
  {
    icon: Car,
    title: "Auto Dealerships",
    items: [
      "Service appointment booking",
      "Lease renewal reminders",
      "Inventory check inquiries",
    ],
  },
  {
    icon: Wrench,
    title: "Home Services",
    items: [
      "Dispatch & routing updates",
      "Quote estimations",
      "Emergency support routing",
    ],
  },
]

export function Industries() {
  return (
    <section id="use-cases" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Solutions
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            AI Voice Agents for Every Industry
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            No matter your business, lexa.com automates your phone communication
            and saves hundreds of hours every month.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-2xl border border-border bg-background p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-brand">
                  <industry.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{industry.title}</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {industry.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
