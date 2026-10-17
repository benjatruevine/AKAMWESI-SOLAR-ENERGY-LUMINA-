import { ArrowRight, MapPin, Phone } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { WhatsAppAction } from "@/components/whatsapp";
import { site } from "@/data/site";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function CtaSection({
  title = "Ready to talk about your solar requirements?",
  description = "Send your appliance list, location and required backup time on WhatsApp — the team will help you identify suitable equipment and prepare a quotation.",
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-950 py-16 text-white sm:py-20",
        className,
      )}
    >
      <div className="bg-grid-navy absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-solar-500/20 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-200">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppAction
                size="lg"
                message={DEFAULT_WHATSAPP_MESSAGE}
                label="Chat with Akamwesi Solar Energy on WhatsApp"
              >
                Chat on WhatsApp
              </WhatsAppAction>
              <ButtonLink
                href="/request-quote"
                variant="whiteOutline"
                size="lg"
              >
                Request a quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-[0.18em] text-solar-400 uppercase">
              Visit or call
            </p>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-solar-400"
                  aria-hidden
                />
                <p className="text-navy-100">
                  {site.location.street}
                  <br />
                  {site.location.landmark}
                  <br />
                  {site.location.city}, {site.location.country}
                </p>
              </div>
              <div className="flex gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-solar-400"
                  aria-hidden
                />
                <ButtonAnchor
                  href={site.contact.phoneHref}
                  variant="ghost"
                  size="sm"
                  className="-my-2 px-0 text-navy-100 hover:bg-transparent hover:text-solar-400"
                >
                  {site.contact.phoneDisplay}
                </ButtonAnchor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
