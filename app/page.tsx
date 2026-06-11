import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { Steps } from "@/components/steps"
import { Scheduling } from "@/components/scheduling"
import { Industries } from "@/components/industries"
import { Testimonials } from "@/components/testimonials"
import { WhatsApp } from "@/components/whatsapp"
import { Languages } from "@/components/languages"
import { Integrations } from "@/components/integrations"
import { Security } from "@/components/security"
import { Faq } from "@/components/faq"
import { Pricing } from "@/components/pricing"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Features />
        <Steps />
        <Scheduling />
        <Industries />
        <Testimonials />
        <WhatsApp />
        <Languages />
        <Integrations />
        <Security />
        <Faq />
        <Pricing />
      </main>
      <SiteFooter />
    </div>
  )
}
