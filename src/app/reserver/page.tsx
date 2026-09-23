import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Marks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réserver ma séance offerte",
  description: `Réservez votre première séance offerte avec ${site.coach} — coaching privé, collectif, enfants ou préparation football. Sans engagement.`,
};

export default function ReserverPage() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 glow-bronze" />
      <div className="container-sw pb-24 pt-36 md:pt-44">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="label-text flex items-center justify-center gap-3 text-bronze">
            <Chevron className="w-3.5 -rotate-90" />
            {site.offers.firstSession} · Sans engagement
          </p>
          <h1 className="display-text mt-6 text-[clamp(2.4rem,7vw,4.6rem)]">
            Réservez votre <span className="text-metal">séance offerte.</span>
          </h1>
          <p className="mt-5 text-base text-sand">
            Deux minutes suffisent. Le coach confirme ensuite le créneau avec
            vous.
          </p>
        </Reveal>

        <Suspense fallback={null}>
          <BookingFlow />
        </Suspense>
      </div>
    </section>
  );
}
