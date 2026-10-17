"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash,
  X,
} from "lucide-react";
import { getProduct } from "@/data/products";
import { cn, formatUGX } from "@/lib/utils";
import { WhatsAppAction } from "@/components/whatsapp";
import { whatsappLink } from "@/lib/whatsapp";

/**
 * DEMO CART
 * ---------
 * A deliberately lightweight, client-only cart so the catalogue is visually
 * ready for a future ecommerce system. It stores product slugs and quantities
 * only — never personal details — and it clearly states that no order has been
 * placed and that no payment is processed.
 */

type CartLine = { slug: string; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number | null;
  hasIndicativePricing: boolean;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "lumina-demo-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) {
          setLines(
            parsed.filter(
              (line) =>
                typeof line?.slug === "string" &&
                typeof line?.quantity === "number" &&
                line.quantity > 0 &&
                Boolean(getProduct(line.slug)),
            ),
          );
        }
      }
    } catch {
      // Ignore unreadable storage — an empty cart is a safe fallback.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage may be unavailable (private mode) — the cart still works in-session.
    }
  }, [lines, hydrated]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const add = useCallback((slug: string) => {
    setLines((current) => {
      const existing = current.find((line) => line.slug === slug);
      if (existing) {
        return current.map((line) =>
          line.slug === slug
            ? { ...line, quantity: Math.min(line.quantity + 1, 99) }
            : line,
        );
      }
      return [...current, { slug, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((current) => current.filter((line) => line.slug !== slug));
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setLines((current) =>
      current
        .map((line) =>
          line.slug === slug
            ? { ...line, quantity: Math.max(0, Math.min(quantity, 99)) }
            : line,
        )
        .filter((line) => line.quantity > 0),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((total, line) => total + line.quantity, 0);
    const priced = lines
      .map((line) => ({ line, product: getProduct(line.slug) }))
      .filter(({ product }) => typeof product?.priceUGX === "number");
    const hasIndicativePricing = priced.length > 0;
    const subtotal = priced.reduce(
      (total, { line, product }) =>
        total + (product?.priceUGX ?? 0) * line.quantity,
      0,
    );

    return {
      lines,
      count,
      subtotal: hasIndicativePricing ? subtotal : null,
      hasIndicativePricing,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      remove,
      setQuantity,
      clear,
    };
  }, [lines, isOpen, add, remove, setQuantity, clear]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return context;
}

export function CartButton({ className }: { className?: string }) {
  const { count, open } = useCart();
  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Open demo cart, ${count} item${count === 1 ? "" : "s"}`}
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-700 transition-colors hover:border-navy-200 hover:bg-navy-50",
        className,
      )}
    >
      <ShoppingCart className="h-5 w-5" strokeWidth={1.7} aria-hidden />
      {count > 0 ? (
        <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-solar-500 px-1 text-[0.65rem] font-bold text-navy-950">
          {count > 99 ? "99+" : count}
        </span>
      ) : null}
    </button>
  );
}

export function AddToCartButton({
  slug,
  className,
  variant = "outline",
}: {
  slug: string;
  className?: string;
  variant?: "outline" | "primary" | "solid";
}) {
  const { add } = useCart();
  const product = getProduct(slug);

  const styles = {
    outline:
      "border border-navy-200 bg-white text-navy-800 hover:border-navy-300 hover:bg-navy-50",
    primary:
      "bg-solar-500 text-navy-950 hover:bg-solar-400 shadow-glow",
    solid: "bg-navy-900 text-white hover:bg-navy-800",
  } as const;

  return (
    <button
      type="button"
      onClick={() => add(slug)}
      aria-label={`Add ${product?.name ?? "item"} to the demo cart`}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200",
        styles[variant],
        className,
      )}
    >
      <Plus className="h-4 w-4" aria-hidden />
      Add to cart
    </button>
  );
}

function CartDrawer() {
  const {
    lines,
    count,
    subtotal,
    isOpen,
    close,
    remove,
    setQuantity,
    clear,
  } = useCart();

  const items = lines
    .map((line) => ({ line, product: getProduct(line.slug) }))
    .filter((entry) => Boolean(entry.product));

  return (
    <div
      className={cn(
        "fixed inset-0 z-50",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!isOpen}
    >
      <div
        onClick={close}
        className={cn(
          "absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Demo cart"
        className={cn(
          "absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-white shadow-lift transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <header className="flex items-center justify-between gap-4 border-b border-navy-100 px-5 py-4">
          <div>
            <h2 className="text-base font-bold text-navy-900">Your demo cart</h2>
            <p className="text-xs text-navy-500">
              {count} item{count === 1 ? "" : "s"} · no order is placed
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 text-navy-600 hover:bg-navy-50"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </header>

        <div className="scrollbar-thin flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-50">
                <ShoppingCart className="h-6 w-6 text-navy-400" aria-hidden />
              </span>
              <p className="text-sm font-medium text-navy-700">
                Your demo cart is empty
              </p>
              <p className="max-w-xs text-xs text-navy-500">
                Add products to see how the catalogue would work, or send a
                WhatsApp enquiry to confirm prices and availability.
              </p>
              <Link
                href="/products"
                onClick={close}
                className="mt-1 text-sm font-semibold text-solar-600 hover:text-solar-700"
              >
                Browse products
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ line, product }) => {
                if (!product) return null;
                return (
                  <li
                    key={line.slug}
                    className="flex gap-4 rounded-2xl border border-navy-100 p-3"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-navy-50">
                      {product.image ? (
                        <Image
                          src={product.image.src}
                          alt={product.image.alt}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="grid h-full w-full place-items-center text-[0.6rem] font-semibold tracking-wide text-navy-400 uppercase">
                          Demo
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/products/${product.slug}`}
                        onClick={close}
                        className="line-clamp-2 text-sm font-semibold text-navy-900 hover:text-solar-600"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-1 text-xs text-navy-500">
                        {typeof product.priceUGX === "number"
                          ? `${formatUGX(product.priceUGX)} · indicative`
                          : "Request price"}
                      </p>
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-navy-200">
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(line.slug, line.quantity - 1)
                            }
                            aria-label={`Reduce quantity of ${product.name}`}
                            className="grid h-8 w-8 place-items-center rounded-full text-navy-600 hover:bg-navy-50"
                          >
                            <Minus className="h-3.5 w-3.5" aria-hidden />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold text-navy-900">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(line.slug, line.quantity + 1)
                            }
                            aria-label={`Increase quantity of ${product.name}`}
                            className="grid h-8 w-8 place-items-center rounded-full text-navy-600 hover:bg-navy-50"
                          >
                            <Plus className="h-3.5 w-3.5" aria-hidden />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(line.slug)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-navy-500 hover:text-red-600"
                        >
                          <Trash className="h-3.5 w-3.5" aria-hidden />
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <footer className="space-y-3 border-t border-navy-100 px-5 py-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-navy-600">Indicative subtotal</span>
            <span className="font-bold text-navy-900">
              {typeof subtotal === "number" && subtotal > 0
                ? formatUGX(subtotal)
                : "Confirm pricing"}
            </span>
          </div>
          <p className="text-[0.7rem] leading-relaxed text-navy-500">
            This demo cart does not place an order, does not reserve stock and
            does not process payment. Indicative prices are sample figures only.
          </p>
          <WhatsAppAction
            size="md"
            className="w-full"
            message={[
              "Hello Akamwesi Solar Energy, I am interested in the following items:",
              ...items.map(
                ({ line, product }) =>
                  `- ${product?.name} x${line.quantity}`,
              ),
              "Please share current prices, availability and next steps.",
            ].join("\n")}
          >
            Send enquiry on WhatsApp
          </WhatsAppAction>
          {items.length > 0 ? (
            <button
              type="button"
              onClick={clear}
              className="w-full rounded-full px-4 py-2 text-xs font-semibold text-navy-500 hover:bg-navy-50"
            >
              Clear demo cart
            </button>
          ) : (
            <a
              href={whatsappLink()}
              className="sr-only"
              tabIndex={-1}
              aria-hidden
            >
              WhatsApp
            </a>
          )}
        </footer>
      </aside>
    </div>
  );
}
