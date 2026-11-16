
import Reveal from "./Reveal";

const DISCIPLINES = [
  {
    number: "01",
    title: "Photography",
    description:
      "I use photography to explore perspectives, capture meaningful moments and create imagery across people, products, architecture and places.",
  },
  {
    number: "02",
    title: "Videography",
    description:
      "I create moving images through visual storytelling, cinematography and editing, bringing concepts, experiences and stories to life.",
  },
  {
    number: "03",
    title: "Graphic Design & Brand Identity",
    description:
      "I explore visual communication through typography, composition and identity design, developing distinctive visual languages for brands and creative projects.",
  },
  /*{
    number: "04",
    title: "Web Design & Development",
    description:
      "I combine design thinking and web technologies to build digital experiences, from visual interfaces and portfolio websites to functional web applications.",
  },*/
];

export default function WhatIDo() {
  return (
    <section
      id="disciplines"
      className="bg-bg-light py-2 md:py-2"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Introduction */}
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">

          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-accent">
              My Disciplines
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-display text-3xl leading-[1.05] tracking-tight text-black text-balance sm:text-5xl md:text-6xl">
              Different disciplines.
              <span className="text-accent">
                {" "}One creative perspective.
              </span>
            </h2>

            <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-black/60 md:text-lg">
              My creative practice moves between imagery,
              moving pictures, visual communication and
              digital development. Each discipline offers
              a different way to explore ideas and bring
              them into existence.
            </p>
          </div>
        </div>

        {/* Disciplines */}
        <div className="mt-20 grid grid-cols-1 border-t border-black/15 sm:grid-cols-2 md:grid-cols-3">
          {DISCIPLINES.map((discipline, index) => (
            <Reveal
              key={discipline.number}
              delay={index * 100}
              className="border-b border-black/15 sm:border-r sm:last:border-r-0"
            >
              <article className="group flex h-full flex-col gap-8 px-0 py-9 sm:px-5 md:px-5 md:py-12">

                {/* Number */}
                <span className="font-body text-[10px] tracking-[0.12em] text-black/40">
                  {discipline.number}
                </span>

                {/* Title */}
                <h3 className="min-h-[3rem] font-display text-xl leading-tight text-black transition-colors duration-300 group-hover:text-accent md:text-2xl">
                  {discipline.title}
                </h3>

                {/* Description */}
                <p className="max-w-md font-body text-xs leading-relaxed text-black/60 md:text-[13px]">
                  {discipline.description}
                </p>

              </article>
            </Reveal>
          ))}
        </div>

        {/* Work CTA */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-md font-body text-sm leading-relaxed text-black/50">
            A selection of ideas, experiments and projects
            developed across these creative disciplines.
          </p>

          <a
            href="#work"
            className="inline-flex w-fit items-center gap-2 font-body text-[11px] uppercase tracking-[0.1em] text-black transition-colors hover:text-accent"
          >
            Explore selected work
            <span aria-hidden="true">↗</span>
          </a>

        </div>
      </div>
    </section>
  );
}
