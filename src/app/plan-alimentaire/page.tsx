import type { Metadata } from "next";
import { Suspense } from "react";
import { PlanForm } from "@/components/nutrition/PlanForm";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Marks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recevoir mon plan alimentaire",
  description: `Demandez votre programme alimentaire personnalisé SO WORKFIT — ${site.offers.nutrition.toLowerCase()}.`,
};

export default function PlanAlimentairePage() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 glow-bronze" />
      <div className="container-sw pb-24 pt-36 md:pt-44">
        <Reveal punch className="mx-auto mb-14 max-w-2xl text-center">
          <p className="label-text flex items-center justify-center gap-3 text-bronze">
            <Chevron className="w-3.5 -rotate-90" />
            {site.offers.nutrition}
          </p>
          <h1 className="display-text mt-6 text-[clamp(2.4rem,6.5vw,4.4rem)]">
            Recevez votre{" "}
            <span className="text-metal">plan alimentaire.</span>
          </h1>
          <p className="mt-5 text-base text-sand">
            Quelques informations suffisent — le coach construit ensuite un
            programme adapté à votre objectif.
          </p>
        </Reveal>

        <Suspense fallback={null}>
          <PlanForm />
        </Suspense>
      </div>
    </section>
  );
}
