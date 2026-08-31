import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivansh Mishra — Cinematographer, Editor & Yapper" },
      {
        name: "description",
        content:
          "Portfolio of Shivansh Mishra: video editing, photography, cinematography, color grading, and free knowledge served with total conviction.",
      },
      { property: "og:title", content: "Shivansh Mishra — Cinematographer, Editor & Yapper" },
      {
        property: "og:description",
        content:
          "Video editing, photography, cinematography, color grading, and top-tier yapping.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink font-body text-cream">
      {/* Cinematic grain + glow backdrop */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 22% 8%, rgba(255,61,110,.16), transparent 42%),
                            radial-gradient(circle at 84% 96%, rgba(201,242,79,.12), transparent 46%),
                            radial-gradient(rgba(255,255,255,.025) 1px, transparent 1px)`,
          backgroundSize: "auto, auto, 4px 4px",
        }}
      />

      <main className="relative z-10 mx-auto max-w-md px-5 pb-16 lg:max-w-3xl lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between pt-6 text-[11px] uppercase tracking-[0.25em] text-cream/45 lg:text-xs">
          <span>Studio</span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-neon blink" />
            Grading live
          </span>
        </div>

        {/* Hero */}
        <section className="rv rv1 mt-6 lg:mt-10">
          <p className="text-[11px] uppercase tracking-[0.35em] text-lime lg:text-xs">
            Portfolio — 2026
          </p>
          <h1 className="mt-3 font-display text-[64px] leading-[0.86] lg:text-[120px]">
            SHIVANSH
            <br />
            <span className="text-neon">MISHRA</span>
          </h1>
          <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-cream/70 lg:max-w-[42ch] lg:text-base">
            Cinematographer, colorist, photographer, and full-time yapper. I shoot the frame, grade
            the mood, then explain every choice — for free.
          </p>
        </section>

        {/* Marquee */}
        <div className="rv rv2 my-8 overflow-hidden border-y border-cream/10 py-2.5 lg:my-10">
          <div className="marq flex w-max gap-8 whitespace-nowrap text-[12px] uppercase tracking-[0.3em] text-cream/35">
            <span>Color</span>
            <span className="text-neon">✳</span>
            <span>Motion</span>
            <span className="text-lime">✳</span>
            <span>Light</span>
            <span className="text-amber">✳</span>
            <span>Yapping</span>
            <span className="text-neon">✳</span>
            <span>Color</span>
            <span className="text-lime">✳</span>
            <span>Motion</span>
            <span className="text-amber">✳</span>
            <span>Light</span>
            <span className="text-neon">✳</span>
            <span>Yapping</span>
            <span className="text-lime">✳</span>
          </div>
        </div>

        {/* Skills */}
        <section className="rv rv3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-base font-bold uppercase tracking-[0.2em] text-cream">The toolkit</h2>
            <span className="text-[11px] text-cream/40">05</span>
          </div>

          <div className="mt-4 space-y-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
            <SkillCard
              number="01"
              numberColor="text-neon"
              title="Video Editing"
              ringColor="hover:ring-neon/40"
            >
              Rhythm first. I cut to the beat and let the silence do the heavy lifting.
            </SkillCard>

            <SkillCard
              number="02"
              numberColor="text-amber"
              title="Photography"
              ringColor="hover:ring-amber/40"
            >
              Available light, honest grain, and an unhealthy obsession with skin tones.
            </SkillCard>

            <SkillCard
              number="03"
              numberColor="text-lime"
              title="Cinematography"
              ringColor="hover:ring-lime/40"
            >
              Handheld warmth, slow push-ins, frames that feel like you stumbled into them.
            </SkillCard>

            <SkillCard
              number="04"
              numberColor="text-neon"
              title="Color Grading"
              ringColor="hover:ring-neon/40"
            >
              Lift, gamma, gain — pulled deep until the blacks finally eat the room.
            </SkillCard>

            {/* Top-tier skill */}
            <div className="rounded-xl bg-gradient-to-br from-neon/25 via-amber/10 to-lime/15 p-4 ring-1 ring-neon/40 lg:col-span-2">
              <span className="inline-block rounded-full bg-lime px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                Top tier
              </span>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-[11px] text-amber">05</span>
                <h3 className="text-lg font-bold uppercase tracking-wide text-cream">
                  Yapping absolute bullshit & giving out free knowledge
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">
                Delivered with total conviction. I will talk your ear off about nodes, lenses, and
                why that one shot works — and you will thank me later.
              </p>
            </div>
          </div>
        </section>

        {/* Social links */}
        <section className="rv rv4 mt-10">
          <h2 className="text-base font-bold uppercase tracking-[0.2em]">Find the noise</h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <SocialPill href="#" variant="filled">
              Instagram
            </SocialPill>
            <SocialPill href="#">Vimeo</SocialPill>
            <SocialPill href="#">YouTube</SocialPill>
            <SocialPill href="#">X</SocialPill>
            <SocialPill href="#">Threads</SocialPill>
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-cream/35">
            All links are placeholders — tap one and get lost.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-10 rounded-xl bg-panel p-5 ring-1 ring-white/5 lg:p-8">
          <p className="text-[11px] uppercase tracking-[0.25em] text-lime">Got a project?</p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase leading-tight lg:text-4xl">
            Let&apos;s make it
            <br />
            cinematic.
          </h2>
          <a
            href="mailto:hello@shivanshmishra.studio"
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-cream text-[13px] font-bold uppercase tracking-[0.2em] text-ink transition duration-300 hover:-translate-y-0.5"
          >
            Say hello
          </a>
        </section>

        {/* Footer */}
        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.2em] text-cream/30">
          © 2026 Shivansh Mishra — graded on-screen
        </p>
      </main>
    </div>
  );
}

function SkillCard({
  number,
  numberColor,
  title,
  ringColor,
  children,
}: {
  number: string;
  numberColor: string;
  title: string;
  ringColor: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`group rounded-xl bg-panel p-4 ring-1 ring-white/5 transition duration-300 hover:-translate-y-0.5 ${ringColor}`}
    >
      <div className="flex items-center gap-3">
        <span className={`text-[11px] ${numberColor}`}>{number}</span>
        <h3 className="text-lg font-bold uppercase tracking-wide">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-cream/60">{children}</p>
    </div>
  );
}

function SocialPill({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "filled" | "outline";
}) {
  const base =
    "rounded-full px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide transition duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "filled"
      ? "bg-neon text-ink hover:shadow-[0_8px_24px_-6px_var(--color-neon)]"
      : "ring-1 ring-cream/20 hover:ring-cream/50";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
