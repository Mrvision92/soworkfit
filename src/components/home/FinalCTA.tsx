import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Halo } from "@/components/ui/Marks";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t hairline">
      <div className="pointer-events-none absolute left-1/2 top-1/2 w-[60rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40">
        <div className="anim-spin-slow">
          <Halo className="w-full" />
        </div>
      </div>
      <div className="container-sw py-28 text-center md:py-40">
        <Reveal punch>
          <p className="label-text text-bronze">Sans engagement</p>
          <h2 className="display-text mt-6 text-[clamp(2.6rem,8vw,5.6rem)]">
            Première séance
            <br />
            <span className="text-metal">offerte.</span>
          </h2>
          <p className="serif-accent mx-auto mt-6 max-w-md text-xl text-sand">
            Valable sur toutes les formules — privé, collectif, enfants,
            football.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/reserver">Réserver ma séance offerte</Button>
            <Button href="/contact" variant="ghost">
              Poser une question
            </Button>
          </div>
          <p className="label-text mt-8 text-ivory/35">
            {site.coach} · {site.experienceYears} ans d&apos;expérience
          </p>
        </Reveal>
      </div>
    </section>
  );
}
