
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-bg-light py-15 md:py-15"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* INTRO */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-accent">
              A little about me
            </p>

            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-black text-balance sm:text-5xl md:text-5xl">
              Creativity is
              <span className="text-accent"> an evolution.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="max-w-xl space-y-5 font-body text-[15px] leading-relaxed text-black/65 md:text-[14px]">
              <p>
                I'm Gugulethu Nkabinde, a Multimedia Specialist
                with an interest in the intersection of creativity,
                design and technology.
              </p>

              <p>
                My work spans photography, videography, graphic
                design and web development. Different disciplines,
                but connected by a shared interest in visual
                communication, creative expression and bringing
                ideas to life.
              </p>

              <p>
                I enjoy exploring possibilities, experimenting
                with ideas and developing the skills to turn
                concepts into meaningful visual and digital
                experiences.
              </p>
            </div>
          </Reveal>
        </div>

        {/* PHILOSOPHY */}
        <div className="mt-24 border-t border-black/10 pt-10 md:mt-32 md:pt-14">
          <div className="grid gap-10 md:grid-cols-12 md:gap-6">

            <div className="md:col-span-4">
              <p className="font-body text-[10px] uppercase tracking-[0.16em] text-black/40">
                My perspective
              </p>
            </div>

            <Reveal className="md:col-span-8">
              <h3 className="max-w-3xl font-display text-3xl leading-[1.1] tracking-tight text-black sm:text-4xl md:text-5xl">
                Always exploring.
                <span className="text-accent"> Always evolving.</span>
              </h3>

              <div className="mt-7 max-w-2xl space-y-5 font-body text-[15px] leading-relaxed text-black/60 md:text-[14px]">
                <p>
                  I don't see creativity as something confined
                  to a single discipline. An idea can take the
                  form of an image, a film, a visual identity
                  or an interactive digital experience.
                </p>

                <p>
                  What interests me is the process of taking
                  something from an initial thought to a
                  finished creation. Exploring different
                  approaches, solving problems and discovering
                  new ways to communicate along the way.
                </p>

                <p>
                  I'm equally interested in the creative and
                  technical sides of that process. The visual
                  decisions, the underlying systems and how
                  everything comes together to create an
                  experience.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* WHAT DRIVES ME */}
        <div className="mt-24 grid gap-10 border-t border-black/10 pt-10 sm:grid-cols-2 md:mt-32 md:grid-cols-3 md:gap-8 md:pt-14">

          <Reveal>
            <p className="font-body text-[10px] uppercase tracking-[0.14em] text-accent">
              01
            </p>

            <h3 className="mt-4 font-display text-2xl tracking-tight text-black">
              Creativity through exploration.
            </h3>

            <p className="mt-4 font-body text-sm leading-relaxed text-black/55">
              I'm driven by curiosity, experimentation and
              the freedom to explore ideas beyond familiar
              creative boundaries.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="font-body text-[10px] uppercase tracking-[0.14em] text-accent">
              02
            </p>

            <h3 className="mt-4 font-display text-2xl tracking-tight text-black">
              Design meets technology.
            </h3>

            <p className="mt-4 font-body text-sm leading-relaxed text-black/55">
              I enjoy bringing visual thinking and technical
              problem-solving together to create work that
              is both considered and functional.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-body text-[10px] uppercase tracking-[0.14em] text-accent">
              03
            </p>

            <h3 className="mt-4 font-display text-2xl tracking-tight text-black">
              Growth through creation.
            </h3>

            <p className="mt-4 font-body text-sm leading-relaxed text-black/55">
              Every project presents an opportunity to learn,
              refine my approach and develop a stronger
              understanding of what I'm capable of creating.
            </p>
          </Reveal>
        </div>

        {/* CLOSING */}
        <Reveal className="mt-24 md:mt-32">
          <div className="border-t border-black/10 pt-10 md:pt-14">

            <p className="font-body text-[10px] uppercase tracking-[0.16em] text-black/40">
              What's next
            </p>

            <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

              <h3 className="max-w-3xl font-display text-3xl leading-[1.05] tracking-tight text-black sm:text-4xl md:text-5xl">
                There's always more
                <span className="text-accent"> to create.</span>
              </h3>

              <p className="max-w-xs font-body text-sm leading-relaxed text-black/50">
                I'm open to meaningful collaborations,
                interesting projects and opportunities
                that challenge me to think differently,
                create and grow.
              </p>
            </div>

            {/* Final CTA */}
            <div className="mt-12 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

              <p className="font-display text-2xl tracking-tight text-accent">
                Evolve Freely.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.12em] text-black transition-colors hover:text-accent"
              >
                Let's connect

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
