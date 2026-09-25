import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold tracking-tight transition-all duration-300 will-change-transform active:scale-[0.98]";

const variants = {
  /** CTA principal — pilule bronze pleine */
  primary:
    "bg-bronze text-white shadow-[0_1px_2px_rgba(0,0,0,0.12)] hover:bg-bronze-deep hover:-translate-y-0.5 active:translate-y-0",
  /** CTA secondaire — pilule neutre discrète */
  ghost:
    "border border-ivory/15 bg-coal text-ivory hover:border-bronze/50 hover:text-champagne",
  /** Lien fléché nu */
  bare: "rounded-none px-0 py-0 text-champagne hover:text-bronze",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
