"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Faq } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
  className,
}: {
  items: Faq[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-navy-100", className)}>
      {items.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.question} className="py-1">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                className="flex w-full items-start justify-between gap-4 rounded-2xl px-1 py-4 text-left transition-colors hover:bg-navy-50/60"
              >
                <span className="text-base font-semibold text-navy-900 sm:text-[1.05rem]">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors",
                    isOpen
                      ? "border-solar-500 bg-solar-500 text-navy-950"
                      : "border-navy-200 text-navy-500",
                  )}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" aria-hidden />
                  ) : (
                    <Plus className="h-4 w-4" aria-hidden />
                  )}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              hidden={!isOpen}
              className="px-1 pb-4"
            >
              <p className="max-w-3xl text-sm leading-relaxed text-navy-600">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
