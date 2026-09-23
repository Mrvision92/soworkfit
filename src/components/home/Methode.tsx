import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "On définit votre objectif",
    text: "Un échange simple et direct : où vous en êtes, où vous voulez aller.",
  },
  {
    num: "02",
    title: "On évalue votre niveau",
    text: "Pas de programme copié-collé. Tout part de votre condition réelle.",
  },
  {
    num: "03",
    title: "On construit votre accompagnement",
    text: "Séances, intensité, alimentation : un cadre pensé pour vous.",
  },
  {
    num: "04",
    title: "On mesure votre progression",
    text: "Des repères concrets, ajustés au fil des semaines.",
  },
];

export function Methode() {
  return (
    <section className="border-t hairline bg-coal">
      <div className="container-sw py-20 md:py-28">
        <SectionHeading
          kicker="La méthode SO WORKFIT"
          title={
            <>
              Simple. Exigeante.
              <br />
              <span className="text-metal">Suivie.</span>
            </>
          }
          lede="Le coaching ne s'arrête pas quand la séance se termine. Le suivi fait partie du service."
        />

        <ol className="mt-14 grid gap-px border hairline bg-ivory/8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08} className="bg-coal">
              <li className="group h-full p-7 transition-colors duration-500 hover:bg-ash md:p-8">
                <span className="display-text text-metal text-4xl">
                  {s.num}
                </span>
                <h3 className="display-text mt-6 text-xl text-ivory md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">
                  {s.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
