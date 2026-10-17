import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { HeroVideo } from "@/components/hero-video";
import { WhatsAppAction } from "@/components/whatsapp";
import { heroImages } from "@/data/assets";
import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

const marqueeItems = [
  "Solar panels",
  "Lithium batteries",
  "Hybrid inverters",
  "Solar streetlights",
  "Complete systems",
  "Mounting & accessories",
  "Gayaza Road, Kampala",
  "Enquiries on WhatsApp",
];

export function Hero() {
  const mp4 = site.heroVideo.mp4Url;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={heroImages.primary.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-center opacity-45"
        />
        {mp4 ? (
          <HeroVideo
            src={mp4}
            poster={heroImages.primary.src}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
        <div className="bg-grid-navy absolute inset-0 opacity-40" />
        <div className="bg-radial-solar absolute inset-0" />
      </div>

      <div className="container-page relative pt-14 pb-12 sm:pt-20 lg:pt-24 lg:pb-16">
        <div className="max-w-3xl">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-solar-300 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Solar equipment supply · Kampala, Uganda
            </span>

            <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              Empowering Uganda with{" "}
              <span className="text-solar-400">Smart, Reliable</span> Solar
              Energy Solutions
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
              Akamwesi Solar Energy (Lumina) supplies solar panels, lithium
              batteries, inverters and solar lighting for homes, businesses and
              projects — with guidance to help you match equipment to what you
              actually need to power.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppAction
                size="lg"
                message={DEFAULT_WHATSAPP_MESSAGE}
                label="Chat with Akamwesi Solar Energy on WhatsApp"
              >
                Chat on WhatsApp
              </WhatsAppAction>
              <Link
                href="/products"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/20"
              >
                Browse products
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-navy-200">
              {[
                "Panels, batteries, inverters & lighting",
                "Homes, shops, offices & projects",
                "Direct WhatsApp enquiries",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-eco-600/20 text-eco-400">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-t border-white/10 py-4">
        <div
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          aria-hidden
        >
          <div className="animate-marquee flex w-max items-center gap-8">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-navy-300 uppercase"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-solar-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Screen-reader friendly category list (marquee is decorative) */}
      <ul className="sr-only">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
