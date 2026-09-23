import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "group inline-flex items-center justify-center gap-2.5 px-7 py-4 label-text transition-all duration-300 will-change-transform";

const variants = {
  /** CTA principal — métal champagne sur noir */
  primary:
    "bg-[linear-gradient(150deg,#e6cfa3_0%,#c29a5e_45%,#9a7845_100%)] text-noir hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
  /** CTA secondaire — filet discret */
  ghost:
    "border border-ivory/20 text-ivory hover:border-bronze/70 hover:text-champagne",
  /** Lien fléché nu */
  bare: "px-0 py-0 text-bronze hover:text-champagne",
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
