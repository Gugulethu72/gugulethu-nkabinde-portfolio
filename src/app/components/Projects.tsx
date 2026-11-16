
import Image from "next/image";
import Link from "next/link";
import { projects, CATEGORIES } from "@/app/lib/projects";
import Reveal from "./Reveal";

const aspectClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]",
  square: "aspect-square",
};

const sizeClasses = {
  small: "md:col-span-4",
  medium: "md:col-span-6",
  large: "md:col-span-8",
  wide: "md:col-span-12",
};

export default function Projects() {
  return (
    <section
      id="work"
      className="bg-bg-light py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-accent">
              Selected Work
            </p>

            <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-tight text-black text-balance sm:text-4xl md:text-5xl">
              A collection of ideas brought to life through{" "}
              <span className="text-accent">
                creativity, design and technology.
              </span>
            </h2>

            <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-black/60 sm:text-base">
              Explore selected projects across multimedia, visual
              communication, brand identity and digital experiences.
            </p>
          </div>
        </Reveal>

        {/* Projects by Category */}
        <div className="mt-12 space-y-20 md:mt-16 md:space-y-24">
          {CATEGORIES.map((category) => {
            const categoryProjects = projects
              .filter((project) => project.category === category)
              .slice(0, 3);

            if (categoryProjects.length === 0) {
              return null;
            }

            return (
              <div key={category}>
                {/* Category Heading */}
                <div className="mb-7 flex items-center justify-between border-b border-black/15 pb-4">
                  <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-black">
                    {category}
                  </h3>

                  <span
                    className="font-body text-[11px] tabular-nums text-black/40"
                    aria-label={`${categoryProjects.length} projects displayed`}
                  >
                    {String(categoryProjects.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12 md:gap-y-16">
                  {categoryProjects.map((project, index) => (
                    <Reveal
                      key={project.slug}
                      delay={index * 100}
                      className={`group col-span-1 ${sizeClasses[project.size]}`}
                    >
                      <Link
                        href={`/work/${project.slug}`}
                        className="block focus-visible:outline-accent"
                        aria-label={`View project: ${project.title}`}
                      >
                        <article>
                          {/* Project Image */}
                          <div
                            className={`relative w-full overflow-hidden bg-black/5 ${
                              aspectClasses[project.aspect]
                            }`}
                          >
                            <Image
                              src={project.media.thumbnail}
                              alt={project.title}
                              fill
                              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 66vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                              style={{
                                objectPosition:
                                  project.objectPosition || "center",
                              }}
                            />

                            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                            <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg-light text-lg text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                              ↗
                            </span>
                          </div>

                          {/* Project Information */}
                          <div className="mt-4 flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-display text-xl tracking-tight text-black transition-colors group-hover:text-accent">
                                {project.title}
                              </h4>

                              <p className="mt-1 font-body text-xs text-black/50">
                                {project.type}
                              </p>
                            </div>

                            <span
                              aria-hidden="true"
                              className="mt-1 text-black/40 transition-colors group-hover:text-accent"
                            >
                              ↗
                            </span>
                          </div>
                        </article>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects */}
        <Reveal>
          <div className="mt-16 flex justify-center md:mt-20">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-3 bg-black px-8 py-4 font-body text-[11px] uppercase tracking-[0.1em] text-bg-light transition-colors hover:bg-accent"
            >
              Explore all projects
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
