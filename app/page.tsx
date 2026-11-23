import { Emblem } from "@/components/Emblem";
import { CopyCode, LectureDates, StickyNav } from "@/components/Interactive";
import { faq, people, program, site } from "@/data/site";

function Arrow() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function IconCalendar() {
  return (
    <svg {...iconProps}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 7.5V12h3.5" />
    </svg>
  );
}

function IconCalendarGrid() {
  return (
    <svg {...iconProps}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01M16 16.5h.01" strokeWidth="2" />
    </svg>
  );
}

/* Small line icons for the founder cards. */
function FounderIcon({ name }: { name: string }) {
  const p = { ...iconProps, width: 24, height: 24 };
  switch (name) {
    case "octopus":
      // Octopi Poker brand mark (Marketing Materials/SVG/Asset 1.svg), recoloured via currentColor
      return (
        <svg width={22} height={22} viewBox="0 0 28.33 28.47" fill="currentColor" aria-hidden="true">
          <path d="M18.38,18.3c.63-.04,1.05.11,1.41.28.81.43,1.05,1.03,1.65,2.15.52.99,1.44,1.59,2.66,1.59,1.72,0,2.77-1.31,2.77-2.77,0-1.31-.83-2.06-1.05-2.06-.17,0-.24.07-.24.36,0,1.82-.39,2.38-1.37,2.38-.63,0-1.13-.51-1.48-1.46-.35-.99-.67-1.35-1.54-2.06-.46-.36-.94-.52-1.68-.75.52-.17.98-.21,1.33-.21,1.37,0,2.46,1.16,4.59,1.16,1.68,0,2.87-1.59,2.9-3.09,0-1.31-.83-2.41-1.96-2.41-.43,0-.67.11-.81.21-.15.09-.17.17-.04.28.24.11.55.24.78.47.28.24.39.6.39.99,0,.92-.52,1.59-1.54,1.59-1.17,0-2.47-1.23-4.12-1.34.78-.73,1.41-1.95,1.47-3.64.11-2.83.63-4.16,1.72-4.16.46,0,.87.36,1.09.96.11.28.17.36.28.36.15,0,.24-.47.24-.82,0-1.03-.87-2.19-2.24-2.19-2.2,0-2.87,2.19-2.98,4.53-.11,2.58-.94,4.04-2.63,4.04-1.05,0-1.65-.75-1.65-1.35,0-1.59,2.7-2.38,2.7-6.34-.04-2.9-2-5-4.94-5-2.87,0-4.83,2.1-4.83,5,0,3.97,2.7,4.75,2.7,6.34,0,.6-.59,1.35-1.65,1.35-1.68,0-2.52-1.46-2.63-4.04-.11-2.34-.78-4.53-2.98-4.53-1.37,0-2.24,1.16-2.24,2.19,0,.36.11.82.24.82.11,0,.17-.07.28-.36.2-.6.63-.96,1.09-.96,1.09,0,1.61,1.31,1.72,4.16.06,1.68.7,2.9,1.48,3.64-1.65.11-2.95,1.34-4.12,1.34-1.02,0-1.54-.67-1.54-1.59,0-.39.11-.75.39-.99.2-.21.52-.36.78-.47.15-.11.11-.17-.04-.28-.15-.11-.39-.21-.81-.21-1.13,0-1.96,1.1-1.96,2.41.04,1.5,1.18,3.09,3.05,3.09,1.96,0,3.09-1.16,4.44-1.16.35,0,.81.04,1.33.21-.74.21-1.22.39-1.68.75-.87.71-1.18,1.07-1.54,2.06-.35.95-.83,1.46-1.48,1.46-.98,0-1.37-.56-1.37-2.38,0-.28-.07-.36-.24-.36-.2,0-1.05.75-1.05,2.06,0,1.46,1.05,2.77,2.77,2.77,1.22,0,2.13-.6,2.66-1.59.59-1.14.83-1.74,1.65-2.15.35-.17.78-.32,1.41-.28-1.79,1.83-3.12,3.22-3.12,5.78,0,1.52.68,2.78,1.62,3.56.66.56,1.5.86,2.48.82,1.41-.14,2.25-1.24,2.25-2.17,0-.17-.11-.28-.24-.28-.46,0-.55.75-1.92.75-1.33,0-2.24-1.2-2.24-2.54,0-1.82.91-2.73,2.66-3.86.91-.56,2.11-1.55,2.74-2.58.63,1.03,1.81,2.02,2.74,2.58,1.76,1.14,2.66,2.06,2.66,3.86,0,1.35-.91,2.54-2.24,2.54-1.37,0-1.48-.75-1.92-.75-.15,0-.24.11-.24.28,0,.86.71,1.84,1.92,2.11,1.11.17,2.08-.22,2.94-.87.87-.78,1.49-1.99,1.49-3.45,0-2.55-1.33-3.93-3.12-5.78Z" />
        </svg>
      );
    case "spade":
      return (
        <svg {...p} fill="currentColor" stroke="none">
          <path d="M12 3.5c-2.6 3.1-6.5 5.4-6.5 8.8 0 2 1.5 3.4 3.3 3.4 1 0 1.9-.4 2.5-1.1-.2 1.7-.9 3.2-2.1 4.4h5.6c-1.2-1.2-1.9-2.7-2.1-4.4.6.7 1.5 1.1 2.5 1.1 1.8 0 3.3-1.4 3.3-3.4 0-3.4-3.9-5.7-6.5-8.8Z" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...p}>
          <path d="M7.5 4.5h9v4.2a4.5 4.5 0 0 1-9 0V4.5Z" />
          <path d="M7.5 6.5H5a2.5 2.5 0 0 0 2.8 3.4M16.5 6.5H19a2.5 2.5 0 0 1-2.8 3.4" />
          <path d="M12 13.2v3.3M8.5 19.5h7M9.5 19.5l.6-3h3.8l.6 3" />
        </svg>
      );
    case "star":
      return (
        <svg {...p}>
          <path d="m12 3.8 2.5 5.1 5.6.8-4 3.9 1 5.6L12 16.6l-5 2.6 1-5.6-4-3.9 5.5-.8L12 3.8Z" />
        </svg>
      );
    default: // people
      return (
        <svg {...p}>
          <circle cx="12" cy="8" r="2.8" />
          <path d="M6.8 18.5c.4-2.8 2.6-4.6 5.2-4.6s4.8 1.8 5.2 4.6" />
          <circle cx="5.6" cy="9.6" r="2" />
          <circle cx="18.4" cy="9.6" r="2" />
          <path d="M2.5 17.5c.3-2 1.6-3.3 3.4-3.6M21.5 17.5c-.3-2-1.6-3.3-3.4-3.6" />
        </svg>
      );
  }
}

/* TODO: replace text lockup with the Ladies of the Hippodrome League logo when received */
function PartnerWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display leading-[1.05] text-ivory ${className}`}>
      <span className="block text-[0.62em] italic text-mauve">Ladies of the</span>
      <span className="monument block text-[0.8em]">Hippodrome League</span>
    </span>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-4" aria-label="Women in Poker — back to top">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="images/octopi-logo-white.svg" alt="Octopi Poker" width={102} height={34} className="h-7 w-auto md:h-8" />
      <span className="hidden h-6 w-px bg-line-gold sm:block" aria-hidden="true" />
      <span className="monument hidden whitespace-nowrap text-[0.7rem] tracking-[0.28em] text-champagne sm:inline md:text-xs">Women in Poker</span>
    </a>
  );
}

function SectionHead({ eyebrow, title, accent, sub }: { eyebrow: string; title: string; accent?: string; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow mb-6">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(2.5rem,6vw,4.75rem)]">
        {title} {accent ? <em className="text-champagne">{accent}</em> : null}
      </h2>
      {sub ? <p className="mt-6 max-w-xl text-mauve">{sub}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <StickyNav logo={<Logo />} />

      <main id="main">
        {/* ───────── HERO ───────── */}
        <section
          id="top"
          className="relative isolate flex min-h-svh overflow-hidden bg-night pt-[min(92vw,50svh)] pb-16 xl:items-center xl:pt-28 xl:pb-20"
        >
          {/* Photo: banner on top for small screens, full-bleed background (empty left side for copy) on xl */}
          <div className="absolute inset-x-0 top-0 -z-10 h-[min(112vw,62svh)] xl:inset-0 xl:h-full" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="images/hero-table.jpg"
              alt=""
              width={2000}
              height={1125}
              fetchPriority="high"
              className="h-full w-full object-cover object-[93%_center] xl:object-[74%_center]"
            />
            {/* fades: into the page below, and (xl) behind the copy on the left */}
            <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-transparent via-35% to-night xl:hidden" />
            <div className="absolute inset-0 hidden xl:block bg-[linear-gradient(90deg,var(--night)_0%,rgb(17_10_21/0.85)_30%,rgb(17_10_21/0.2)_48%,transparent_60%)]" />
            <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-b from-transparent to-night xl:block" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-night/70 to-transparent" />
          </div>
          <div className="grain -z-10" />

          <div className="container-wide">
            <div className="max-w-[30rem] animate-rise 2xl:max-w-[42rem]">
              <p className="eyebrow mb-8">
                Octopi Poker × Ladies of the Hippodrome League
              </p>
              <h1 className="monument text-[clamp(2.75rem,7vw,6rem)] 2xl:text-[clamp(6rem,6vw,7.5rem)] leading-[0.95] !tracking-[0.05em]">
                Women
                <br />
                <span className="whitespace-nowrap">in Poker</span>
              </h1>
              <p className="mt-6 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] italic leading-tight text-champagne">
                A free global study group for women.
              </p>
              <p className="mt-6 max-w-xl text-mauve">
                A free poker community for women who want to learn, improve, and grow together. Join expert-led
                monthly lectures, weekly practice, and a supportive network of women who share your passion for the
                game. Open to all women, anywhere in the world. Join and leave at any time.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap [&>a]:whitespace-nowrap">
                <a href={site.joinUrl} className="btn-gold">
                  Join the community <Arrow />
                </a>
                <a href="#program" className="btn-ghost">
                  What’s inside
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── PROGRAM ───────── */}
        <section id="program" className="section">
          <div className="container-site">
            <SectionHead
              eyebrow="What’s inside"
              title="A community first."
              accent="With a program built in."
              sub="Women in Poker brings women players together from around the world. Every member gets five things — all free, and you can join at any time."
            />
            <ol className="mt-16 border-t border-line">
              {program.map((p) => (
                <li
                  key={p.n}
                  className="group grid gap-4 border-b border-line py-10 md:grid-cols-[7rem_1fr_1.1fr] md:items-baseline md:gap-10"
                >
                  <span className="display-numeral text-6xl md:text-7xl">{p.n}</span>
                  <div>
                    <h3 className="text-3xl transition-colors duration-500 group-hover:text-champagne md:text-4xl">{p.title}</h3>
                    <p className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-champagne">{p.tag}</p>
                  </div>
                  <p className="text-mauve">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── LIGHT BAND: FOUNDERS + LECTURES (one continuous background) ───────── */}
        <div style={{ background: "radial-gradient(120% 60% at 20% 0%, var(--cream), var(--cream-deep))" }}>
        {/* ───────── FOUNDERS ───────── */}
        <section id="founders" className="section relative overflow-hidden text-burgundy-ink">
          <div className="container-site grid gap-14 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] xl:gap-12">
            <div className="xl:pt-6">
              <p className="eyebrow mb-6 !text-burgundy-ink">
                Founders &amp; partners
              </p>
              <h2 className="text-[clamp(2.5rem,6vw,4.75rem)]">
                Meet the <em className="text-burgundy">founders.</em>
              </h2>
              <p className="mt-6 max-w-xl text-burgundy-soft">
                Women in Poker is a joint initiative of Octopi Poker and Ladies of the Hippodrome League. Victoria
                Livschitz is also the community’s coach.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {people.map((p) => (
                <article
                  key={p.name}
                  className="flex flex-col overflow-hidden rounded-[1.75rem] bg-cream shadow-[0_30px_60px_-30px_rgb(74_29_58/0.45)]"
                >
                  <div className="relative aspect-[20/19] overflow-hidden bg-wine">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.photo}
                      alt={`Portrait of ${p.name}`}
                      width={1254}
                      height={1254}
                      loading="lazy"
                      className={`h-full w-full object-cover object-top ${p.photoClass}`}
                    />
                  </div>
                  <div className="relative -mt-8 flex flex-1 flex-col rounded-[1.75rem] border border-white/70 bg-[#fcf5f0] px-7 pb-8 pt-7 sm:px-8">
                    <p className="eyebrow !text-burgundy-ink">{p.role}</p>
                    <h3 className="mt-3 text-[2.25rem] text-burgundy">{p.name}</h3>
                    {"points" in p ? (
                      <ul className="mt-5 space-y-3.5 border-t border-line-burgundy pt-5 text-[0.9375rem] text-burgundy-ink/90">
                        {p.points.map((pt) => (
                          <li key={pt.text} className="flex items-center gap-4">
                            <span className="shrink-0 text-burgundy">
                              <FounderIcon name={pt.icon} />
                            </span>
                            {pt.text}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <>
                        <p className="mt-1 font-display text-xl italic text-burgundy">{p.org}</p>
                        <div className="mt-5 flex gap-4 border-t border-line-burgundy pt-5 text-[0.9375rem] text-burgundy-ink/90">
                          <span className="shrink-0 pt-0.5 text-burgundy">
                            <FounderIcon name="people" />
                          </span>
                          <p>{p.bio}</p>
                        </div>
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── LECTURES ───────── */}
        <section id="lectures" className="section relative overflow-hidden !pt-0 text-burgundy-ink">
          <div className="container-site grid gap-16 xl:grid-cols-2 xl:gap-20">
            <div>
              <p className="eyebrow mb-6 !text-burgundy-ink">
                Monthly lectures
              </p>
              <h2 className="text-[clamp(2.5rem,6vw,4.75rem)]">
                One Wednesday. <em className="text-burgundy">Every month.</em>
              </h2>
              <p className="mt-6 max-w-xl text-burgundy-soft">
                Live lectures with coach Victoria Livschitz on the first Wednesday of every month. Can’t make it live?
                Every lecture is recorded and stays available to members.
              </p>
              <dl className="mt-12 grid gap-5 border-t border-line-burgundy pt-8 sm:grid-cols-[auto_auto_auto] sm:justify-start sm:gap-0 [&_dd]:xl:text-3xl">
                {[
                  ["Day", "1st Wed", <IconCalendar key="d" />],
                  ["Time", "10 AM PT", <IconClock key="t" />],
                  ["Starts", "Dec 2", <IconCalendarGrid key="s" />],
                ].map(([k, v, icon], i) => (
                  <div
                    key={k as string}
                    className={`flex items-center gap-4 ${i > 0 ? "sm:border-l sm:border-line-burgundy sm:pl-5 xl:pl-7" : ""} ${i < 2 ? "sm:pr-5 xl:pr-7" : ""}`}
                  >
                    <dt className="shrink-0 text-burgundy">
                      <span className="sr-only">{k as string}</span>
                      {icon}
                    </dt>
                    <dd className="whitespace-nowrap font-display text-2xl sm:text-3xl md:text-4xl">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-sm text-burgundy-mute">Dial-in details are sent to members separately.</p>
            </div>
            <div className="xl:pt-24">
              <p className="eyebrow mb-6 !text-burgundy-ink">
                Upcoming lectures
              </p>
              <LectureDates />
            </div>
          </div>
        </section>


        </div>

        {/* ───────── HOW TO JOIN ───────── */}
        <section id="join" className="section border-t border-line">
          <div className="container-site">
            <SectionHead
              eyebrow="How to join"
              title="Three ways"
              accent="in."
              sub="Membership is voluntary and open to women everywhere — join whenever you’re ready and leave at any time."
            />
            <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
              <article className="flex flex-col bg-night p-8 md:p-10">
                <span className="display-numeral text-7xl">01</span>
                <h3 className="mt-6 text-3xl">Click “Join now”</h3>
                <p className="mt-3 text-mauve">The fastest way in — straight to the Women in Poker community on Octopi.</p>
                <div className="mt-auto pt-10">
                  <a href={site.joinUrl} className="btn-gold w-full">
                    Join now <Arrow />
                  </a>
                </div>
              </article>
              <article className="flex flex-col bg-night p-8 md:p-10">
                <span className="display-numeral text-7xl">02</span>
                <h3 className="mt-6 text-3xl">Subscribe with our code</h3>
                <p className="mt-3 text-mauve">Getting an Octopi Poker subscription? Use this code at checkout to join the community.</p>
                <div className="mt-auto pt-10">
                  <CopyCode />
                </div>
              </article>
              <article className="flex flex-col bg-night p-8 md:p-10">
                <span className="display-numeral text-7xl">03</span>
                <h3 className="mt-6 text-3xl">Scan the QR code</h3>
                <p className="mt-3 text-mauve">On another device? Scan to open the Women in Poker group invite.</p>
                <div className="mt-auto pt-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="images/qr-women-in-poker.png"
                    alt="QR code linking to the Women in Poker group on Octopi Poker"
                    width={140}
                    height={140}
                    className="w-36 border border-line-gold bg-[#24232b] p-3"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ───────── SPONSORS ───────── */}
        <section aria-labelledby="sponsors-title" className="border-y border-line bg-plum py-16">
          <div className="container-site text-center">
            <p id="sponsors-title" className="eyebrow">Brought to you by</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="images/octopi-logo-white.svg" alt="Octopi Poker" width={150} height={50} className="h-11 w-auto" />
              <span className="font-display text-3xl italic text-champagne" aria-hidden="true">&amp;</span>
              <PartnerWordmark className="text-2xl" />
            </div>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section id="faq" className="section">
          <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHead eyebrow="Questions" title="Before you" accent="join." />
            <div className="border-t border-line">
              {faq.map((f) => (
                <details key={f.q} className="faq-item group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center gap-6 py-6 font-display text-2xl transition-colors hover:text-champagne md:text-[1.75rem]">
                    {f.q}
                    <span className="faq-plus ml-auto text-2xl text-champagne transition-transform duration-300" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-7 text-mauve">
                    {f.a}
                    {"link" in f ? (
                      <>
                        {" "}
                        <a href={f.link.href} target="_blank" rel="noopener" className="text-champagne underline underline-offset-4">
                          {f.link.label}
                        </a>
                      </>
                    ) : null}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── CLOSING ───────── */}
        <section className="relative isolate overflow-hidden border-t border-line py-28 text-center md:py-40">
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "radial-gradient(60% 70% at 50% 50%, rgb(74 29 58 / 0.6), var(--night) 75%)" }}
          />
          <Emblem className="absolute left-1/2 top-1/2 -z-10 w-[44rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.12]" />
          <div className="container-site">
            <p className="eyebrow">Women in Poker</p>
            <h2 className="mt-6 text-[clamp(2.75rem,7vw,5.5rem)]">
              Your seat at the table <em className="text-champagne">is waiting.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-mauve">
              Join the community today — our first live lecture is on Wednesday, December 2.
            </p>
            <a href={site.joinUrl} className="btn-gold mt-10">
              Join the community <Arrow />
            </a>
            <p className="mt-5 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-mauve-dim">
              Free to join · Leave anytime
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-plum py-10">
        <div className="container-site flex flex-col items-center justify-between gap-6 text-xs text-mauve-dim md:flex-row">
          <p>© 2026 Octopi Poker Studios, Inc. · Co-sponsored by Ladies of the Hippodrome League.</p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-6">
            <a href="https://octopipoker.ai/aup" className="hover:text-champagne">Acceptable Use</a>
            <a href="https://octopipoker.ai/terms" className="hover:text-champagne">Terms</a>
            <a href="https://octopipoker.ai/privacy" className="hover:text-champagne">Privacy</a>
            <a href="https://octopipoker.ai/contact" className="hover:text-champagne">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
