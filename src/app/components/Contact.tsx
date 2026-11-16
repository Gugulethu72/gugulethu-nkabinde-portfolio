
"use client";

import type { FormEvent } from "react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "YOUR_EMAIL@example.com";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="bg-black py-24 text-bg-light md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-secondary">
              Get in touch
            </p>

            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-bg-light text-balance sm:text-5xl md:text-6xl">
              Have a project in mind?
              <span className="block text-accent">
                Let&apos;s talk.
              </span>
            </h2>

            <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-bg-light/60 sm:text-base">
              Whether it&apos;s a creative project, a website, or a
              collaboration, I&apos;d love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          {/* Contact Details */}
          <Reveal delay={100}>
            <div>
              <p className="font-body text-[11px] uppercase tracking-[0.12em] text-secondary">
                Contact details
              </p>

              <div className="mt-6">
                <p className="mb-2 font-body text-[10px] uppercase tracking-[0.1em] text-bg-light/40">
                  Email
                </p>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all font-body text-sm text-bg-light transition-colors hover:text-accent sm:text-base"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <p className="mt-8 max-w-xs font-body text-xs leading-relaxed text-bg-light/40">
                Have an idea or want to work together? Send me a
                message and let&apos;s discuss it.
              </p>
            </div>
          </Reveal>

          {/* Simple Contact Form */}
          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="border border-bg-light/15 bg-bg-light/[0.03] p-6 sm:p-9 md:p-10"
            >
              <div className="space-y-7">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-body text-[10px] uppercase tracking-[0.1em] text-bg-light/60"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    required
                    className="input-field mt-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-body text-[10px] uppercase tracking-[0.1em] text-bg-light/60"
                  >
                    Your email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="input-field mt-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-body text-[10px] uppercase tracking-[0.1em] text-bg-light/60"
                  >
                    Your message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me a little about what you have in mind..."
                    required
                    className="input-field mt-2 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-bg-light px-6 py-4 font-body text-[11px] uppercase tracking-[0.1em] text-black transition-colors hover:bg-accent"
                >
                  Open email to send message →
                </button>

                <p className="text-center font-body text-[10px] leading-relaxed text-bg-light/40">
                  Your email application will open with your message
                  ready to send.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
