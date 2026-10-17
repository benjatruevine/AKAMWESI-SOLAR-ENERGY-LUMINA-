import Link from "next/link";
import { Home, SearchX } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="This page could not be found"
        description="The page you are looking for might have been moved, deleted, or may not exist in this demo site."
        actions={
          <>
            <ButtonLink href="/" variant="white">
              <Home className="h-4 w-4" aria-hidden />
              Back to home
            </ButtonLink>
            <ButtonLink href="/products" variant="whiteOutline">
              <SearchX className="h-4 w-4" aria-hidden />
              Browse products
            </ButtonLink>
          </>
        }
      />
      <Section tone="light">
        <SectionHeading
          title="Looking for something specific?"
          description="Try browsing by category or get in touch with the team on WhatsApp."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/products" className="text-sm font-semibold text-solar-600 hover:text-solar-700">
            View all products
          </Link>
          <span aria-hidden>·</span>
          <Link href="/faq" className="text-sm font-semibold text-solar-600 hover:text-solar-700">
            Read FAQs
          </Link>
          <span aria-hidden>·</span>
          <Link href="/contact" className="text-sm font-semibold text-solar-600 hover:text-solar-700">
            Contact us
          </Link>
        </div>
      </Section>
      <CtaSection />
    </>
  );
}
