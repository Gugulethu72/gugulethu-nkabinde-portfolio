
export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg-light px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 md:px-10 md:pb-28 md:pt-40"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Personal Logo */}
        <a href="#top" aria-label="Gugulethu Nkabinde — Home">
          <img
            src="/Gugulethu Logo tr-01.png"
            alt="Gugulethu Nkabinde"
            className="h-auto w-48 object-contain sm:w-56 md:w-[18rem]"
          />
        </a>

        {/* Main Statement */}
        <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-black text-balance sm:mt-10 sm:text-5xl md:text-6xl">
          I bring ideas to life
          <br className="hidden sm:block" />
          <span className="text-accent">
            {" "}through creativity and technology.
          </span>
        </h1>

        {/* Portfolio Hero Image 
        <div className="mt-10 aspect-[3/2] w-full max-w-4xl overflow-hidden sm:mt-12">
          <img
            src="/KC--Studio.jpg"
            alt="Creative workspace representing my design and development process"
            className="h-full w-full object-cover object-center"
          />
        </div>*/}

        {/* Introduction */}
        <p className="mt-7 max-w-2xl font-body text-sm leading-relaxed text-black/70 sm:text-base md:text-lg">
          I am a multimedia specialist and developer working across
          photography, videography, graphic design, brand identity,
          and web development.
        </p>

        {/* Calls to Action */}
        <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-black px-7 py-3.5 font-body text-[11px] uppercase tracking-[0.08em] text-bg-light transition-colors hover:bg-accent sm:w-auto"
          >
            Let&apos;s work together
          </a>

          <a
            href="#work"
            className="w-full rounded-full border border-black/20 px-7 py-3.5 font-body text-[11px] uppercase tracking-[0.08em] text-black transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            Explore my work
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#work"
          className="mt-12 text-[10px] uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-accent sm:mt-14"
        >
          Scroll to explore ↓
        </a>
      </div>
    </section>
  );
}
