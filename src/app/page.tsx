import Image from "next/image";
import pcmbLogo from "./images/pcmb-logo.png";
import preview from "./images/preview.gif";
import CopyAddress from "../components/CopyAddress";

const LINKS = {
  play: "https://play.google.com/store/apps/details?id=com.harvz.pixelclimb",
  token:
    "https://explorer.solana.com/address/DuZq6LWkvRwLw5t2GqbSx3BeAtSeikDVf1VKraxbMLcs?cluster=devnet",
  deck: "https://docs.google.com/presentation/d/16RyBghsvNW822D_68EvWE-_b2ZL5Y8TkQRFif1F48lc/edit?usp=sharing",
  x: "https://x.com/pixelclimb",
  email: "mailto:support@pixelclimb.xyz",
};

const MINT = "DuZq6LWkvRwLw5t2GqbSx3BeAtSeikDVf1VKraxbMLcs";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const TICKER = [
  "Built on Solana",
  "SPL Token · $PCMB",
  "Live on Google Play",
  "Free to play",
  "One-tap gameplay",
  "Endless floors",
];

const GAMEPLAY = [
  {
    tag: "01",
    color: "bg-pcmb-yellow",
    title: "One tap. That's it.",
    body: "Tap to jump between walls. Easy to pick up, and hard to put down once you're chasing a new floor.",
  },
  {
    tag: "02",
    color: "bg-pcmb-green",
    title: "Climb endless floors",
    body: "Platforms shift with every floor. The higher you go, the faster you need to react.",
  },
  {
    tag: "03",
    color: "bg-pcmb-cyan",
    title: "Collect gems, top the board",
    body: "Pick up gems on the way up, beat your daily high, and go for the top of the leaderboard.",
  },
];

const THESIS = [
  {
    k: "Market",
    title: "Hyper-casual reach",
    body: "The most downloaded genre on mobile. Short sessions and instant onboarding bring in players who would never open a wallet first.",
  },
  {
    k: "Chain",
    title: "Solana-native",
    body: "Fast finality and sub-cent fees make it practical to put micro-rewards and in-game actions on-chain.",
  },
  {
    k: "Product",
    title: "Shipped, not slideware",
    body: "Playable today on Google Play. Web3 is added on top of a game that is already fun, not the other way around.",
  },
  {
    k: "Token",
    title: "Aligned economy",
    body: "$PCMB is both the native in-game currency and the governance token, so players have a say in the game's direction.",
  },
];

const TOKEN_SPECS = [
  ["Symbol", "PCMB"],
  ["Standard", "SPL Token"],
  ["Network", "Solana · Devnet"],
  ["Role", "Native + Governance"],
];

const HACKATHONS = [
  "Colosseum",
  "Solana Radar PH",
  "PGDX Solana × YGG GameJam",
  "DOST · DICT · DTI Region 5",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-pcmb-blue">
      {children}
    </p>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      {...external}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-pcmb-blue px-6 text-sm font-semibold text-white shadow-[0_0_40px_-8px_var(--blue)] transition hover:brightness-110 active:scale-[0.98]"
    >
      {children}
    </a>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      {...external}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 text-sm font-semibold text-foreground backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]"
    >
      {children}
    </a>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M4 2.5v11l9-5.5-9-5.5z" />
    </svg>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[240px] sm:w-[270px] lg:w-[300px]">
      {/* glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-pcmb-blue/25 blur-3xl" aria-hidden />
      <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] p-2.5 shadow-2xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-white">
          <Image
            src={preview}
            alt="Pixel Climb gameplay: a yellow block jumping between colored platforms"
            className="h-auto w-full"
            sizes="300px"
            unoptimized
            priority
          />
        </div>
      </div>
      {/* floating platforms */}
      <span className="platform absolute -left-10 top-16 h-3 w-14 rounded-sm bg-pcmb-red/90" aria-hidden />
      <span className="platform absolute -right-12 top-40 h-3 w-16 rounded-sm bg-pcmb-green/90 [animation-delay:-2s]" aria-hidden />
      <span className="platform absolute -left-14 bottom-28 h-3 w-12 rounded-sm bg-pcmb-indigo [animation-delay:-4s]" aria-hidden />
      <span className="platform absolute -right-8 bottom-12 h-3 w-10 rounded-sm bg-pcmb-yellow/90 [animation-delay:-1s]" aria-hidden />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* Background */}
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[900px]" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(72,21,170,0.35),transparent)]"
        aria-hidden
      />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-line bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <Image src={pcmbLogo} alt="" width={28} height={28} className="pixelated" />
            <span className="font-pixel text-base tracking-wide">PIXEL CLIMB</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#game" className="transition-colors hover:text-foreground">Game</a>
            <a href="#token" className="transition-colors hover:text-foreground">Token</a>
            <a href="#investors" className="transition-colors hover:text-foreground">Investors</a>
          </div>
          <a
            href={LINKS.play}
            {...external}
            className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-4 text-xs font-semibold text-black transition hover:bg-white/85"
          >
            <PlayIcon /> Play
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-pcmb-green" />
              Live on Google Play · Powered by Solana
            </div>

            <h1 className="mt-6 font-pixel text-[2rem] leading-[1.1] min-[400px]:text-4xl sm:text-6xl lg:text-[4rem] xl:text-7xl">
              <span className="text-gradient">Tap. Jump.</span>
              <br />
              <span className="whitespace-nowrap">Climb on-chain.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-balance text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
              Pixel Climb is a one-tap, hyper-casual mobile game on Solana. You
              learn it in seconds, then keep coming back for the next floor and
              a share of <span className="text-foreground">$PCMB</span>.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <PrimaryButton href={LINKS.play}>
                <PlayIcon /> Play on Google Play
              </PrimaryButton>
              <GhostButton href={LINKS.deck}>
                Read the pitch deck <Arrow />
              </GhostButton>
            </div>

            <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 divide-x divide-line border-y border-line lg:mx-0">
              {[
                ["Chain", "Solana"],
                ["Token", "$PCMB"],
                ["Price", "Free"],
              ].map(([k, v]) => (
                <div key={k} className="px-2 py-4 text-center lg:text-left lg:first:pl-0 lg:[&:not(:first-child)]:pl-5">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">{k}</dt>
                  <dd className="mt-1 font-pixel text-lg">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <PhoneMockup />
        </section>

        {/* Ticker */}
        <div className="border-y border-line bg-surface/60 py-4" aria-hidden>
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <div className="marquee flex w-max">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span key={i} className="flex items-center gap-10 whitespace-nowrap pr-10 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {t}
                  <span className="h-1.5 w-1.5 bg-pcmb-blue/70" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gameplay */}
        <section id="game" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32">
          <div className="max-w-2xl">
            <Eyebrow>For players</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple to learn. Hard to stop playing.
            </h2>
            <p className="mt-4 text-muted">
              No wallet setup screens to get through first. Open the app and
              start climbing.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {GAMEPLAY.map((g) => (
              <article
                key={g.tag}
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-white/15 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className={`block h-3 w-10 -skew-y-6 rounded-sm ${g.color}`} aria-hidden />
                  <span className="font-mono text-xs text-muted">{g.tag}</span>
                </div>
                <h3 className="mt-10 text-lg font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Token */}
        <section id="token" className="scroll-mt-20 border-y border-line bg-surface/40">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2">
            <div>
              <Eyebrow>The token</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                <span className="font-pixel">$PCMB</span> powers the climb.
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-muted">
                $PCMB is Pixel Climb&apos;s native and governance token, issued
                as an SPL token on Solana. It is currently deployed on devnet
                while the in-game economy is being tested.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GhostButton href={LINKS.token}>
                  View on Solana Explorer <Arrow />
                </GhostButton>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-pcmb-blue/40 via-transparent to-pcmb-indigo/40" aria-hidden />
              <div className="rounded-2xl border border-line bg-background p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <Image src={pcmbLogo} alt="PCMB token" width={48} height={48} className="pixelated" />
                  <div>
                    <p className="font-pixel text-xl">PCMB</p>
                    <p className="text-xs text-muted">Pixel Climb Token</p>
                  </div>
                  <span className="ml-auto rounded-full border border-pcmb-orange/30 bg-pcmb-orange/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-pcmb-orange">
                    Devnet
                  </span>
                </div>

                <dl className="mt-8 divide-y divide-line border-y border-line">
                  {TOKEN_SPECS.map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between py-3.5 text-sm">
                      <dt className="font-mono text-xs uppercase tracking-widest text-muted">{k}</dt>
                      <dd className="font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted">Mint address</p>
                <div className="mt-2">
                  <CopyAddress address={MINT} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investors */}
        <section id="investors" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>For investors</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Bringing the biggest mobile genre on-chain.
              </h2>
            </div>
            <a
              href={LINKS.deck}
              {...external}
              className="inline-flex items-center gap-2 text-sm font-medium text-pcmb-blue hover:underline hover:underline-offset-4"
            >
              Full pitch deck <Arrow />
            </a>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {THESIS.map((t) => (
              <article key={t.k} className="bg-background p-6 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{t.k}</p>
                <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Hackathon submissions</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {HACKATHONS.map((h) => (
                <li key={h} className="rounded-full border border-line px-3.5 py-1.5 text-xs text-muted">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 sm:pb-32">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
            <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-pcmb-blue/20 blur-3xl" aria-hidden />
            <div className="relative">
              <h2 className="text-balance font-pixel text-3xl sm:text-5xl">How high can you climb?</h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                Free on Android. Building with us or want to invest? Get in touch.
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <PrimaryButton href={LINKS.play}>
                  <PlayIcon /> Play now
                </PrimaryButton>
                <GhostButton href={LINKS.email}>Contact the team</GhostButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2.5">
            <Image src={pcmbLogo} alt="" width={20} height={20} className="pixelated" />
            <span className="font-pixel text-sm">PIXEL CLIMB</span>
            <span className="text-xs text-muted">© {new Date().getFullYear()}</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <a href={LINKS.x} {...external} className="hover:text-foreground">X / Twitter</a>
            <a href={LINKS.deck} {...external} className="hover:text-foreground">Pitch deck</a>
            <a href={LINKS.token} {...external} className="hover:text-foreground">Explorer</a>
            <a href={LINKS.email} className="hover:text-foreground">support@pixelclimb.xyz</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
