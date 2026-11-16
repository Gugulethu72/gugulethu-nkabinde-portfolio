
import Image from "next/image";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/gugulethursa72/",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/guguletnkabind",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gugulethu-nkabinde-2660732a7/",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-bg-light">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Personal brand */}
          <a
            href="#top"
            aria-label="Back to top"
            className="flex w-fit items-center"
          >
            <Image
              src="/Gugulethu Logo tr-01.png"
              alt="Gugulethu Nkabinde logo"
              width={160}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Social links */}
          <nav
            aria-label="Social media"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 font-body text-[10px] uppercase tracking-[0.12em] text-black/50"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {social.label} ↗
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[10px] uppercase tracking-[0.1em] text-black/40">
            © {new Date().getFullYear()} Gugulethu Nkabinde. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="font-body text-[10px] uppercase tracking-[0.1em] text-black/40">
              South Africa
            </span>

            <a
              href="#top"
              className="font-body text-[10px] uppercase tracking-[0.1em] text-black/50 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
