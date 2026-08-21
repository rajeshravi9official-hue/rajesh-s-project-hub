import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const PDF =
  "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/daotask18@main/KYC_and_Wallet_Activation_Explainer_BrandKit.pdf";
const DOCS =
  "https://docs.google.com/gview?url=https://raw.githubusercontent.com/0xDarkSeidBull/daotask18/main/KYC_and_Wallet_Activation_Explainer_BrandKit.docx&embedded=true";
const ARTICLE =
  "https://dev.to/0xdarkseidbull/resolving-kyc-confusion-for-redbelly-network-1nld";
const GITHUB = "https://github.com/0xDarkSeidBull/daotask18";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KYC and Wallet Activation Explainer | Redbelly DAO" },
      {
        name: "description",
        content:
          "Five recurring points of confusion about Redbelly KYC and wallet activation, answered in plain language with every claim sourced or marked unconfirmed.",
      },
      { property: "og:title", content: "KYC and Wallet Activation Explainer | Redbelly DAO" },
      {
        property: "og:description",
        content:
          "Five recurring points of confusion about Redbelly KYC and wallet activation, answered in plain language with sources.",
      },
    ],
  }),
  component: Index,
});

const UNCONFIRMED_LABEL = "COMMUNITY-REPORTED, UNCONFIRMED, NO PUBLISHED SOURCE";

type Evidence = {
  img: string;
  href: string;
  caption: string;
};

type Section = {
  n: string;
  heading: string;
  summary: string;
  detail: React.ReactNode;
  source: string;
  unconfirmed?: boolean;
  evidence?: Evidence[];
};


const sections: Section[] = [
  {
    n: "01",
    heading: "When KYC is required",
    summary:
      "KYC is required for native RBNT and mainnet activity. It is not required to hold or trade wrapped RBNT on other chains.",
    detail:
      "Redbelly Network gates access to its own Layer 1, mainnet transactions, staking, governance, behind identity verification through the Redbelly Access portal, and the onboarding documentation scopes this specifically to Redbelly's own chain. Wrapped RBNT already exists on multiple external chains: Ethereum (ERC-20) and Solana (SPL, bridged via Router Protocol's Nitro), both confirmed through Redbelly Network's own official channels. Any token living outside Redbelly's own chain sits outside that stated scope by definition, so buying, holding, or swapping it on an external DEX needs no Redbelly-side verification. The token standard on any chain beyond these two confirmed deployments has not been checked here and should not be assumed.",
    source:
      "Source: Redbelly Individual Onboarding SDK overview, docs.redbelly.network, for the mainnet-only scope of the identity layer. Ethereum wRBNT (ERC-20) and Solana wRBNT (SPL) confirmed via Redbelly Network's official X account (x.com/RedbellyNetwork). No chains beyond these two were checked.",
  },
  {
    n: "02",
    heading: "The ten-wallet-per-identity limit",
    summary:
      "One verified identity can activate up to 10 wallets. Beyond that limit, additional wallets cannot be linked to the same KYC record.",
    detail:
      "The limit applies per person, not per wallet, so completing KYC once covers up to 10 separate wallet addresses under that identity. A wallet requesting activation beyond the tenth is not accepted against an already-maxed identity.",
    source:
      "Source: reported by the contributor, who registered 10 wallets under one identity, with corroboration from two Redbelly moderators, Appie and Daniel Bressoud, in the Discord support channel.",
    unconfirmed: true,
    evidence: [
      {
        img: "/evidence/discord-wallet-limit-appie.png",
        href: "https://discord.com/channels/969088176322908160/969088176515854343/1318698971429998594",
        caption: "Appie, Redbelly moderator · view on Discord ↗",
      },
      {
        img: "/evidence/discord-wallet-limit-daniel.png",
        href: "https://discord.com/channels/969088176322908160/969088176515854343/1384913117632401469",
        caption: "Daniel Bressoud, Redbelly moderator · view on Discord ↗",
      },
    ],
  },
  {
    n: "03",
    heading: "Typical approval wait time",
    summary: "Community members report that KYC approval typically takes about 3 to 5 minutes.",
    detail:
      "This estimate reflects turnaround reported by community members for a standard individual submission through the Redbelly Access portal, not a figure published by Redbelly itself. Submissions that need manual review, such as flagged documents or edge-case jurisdictions, can take longer than this range.",
    source:
      "Source: reported by the contributor, with corroboration from two Redbelly moderators, Daniel Bressoud and Appie, in the Discord support channel.",
    unconfirmed: true,
    evidence: [
      {
        img: "/evidence/discord-approval-time-daniel.png",
        href: "https://discord.com/channels/969088176322908160/969088176515854343/1251896050780868630",
        caption: "Daniel Bressoud, Redbelly moderator · view on Discord ↗",
      },
      {
        img: "/evidence/discord-approval-time-appie.png",
        href: "https://discord.com/channels/969088176322908160/969088176515854343/1438389387829317755",
        caption: "Appie, Redbelly moderator · view on Discord ↗",
      },
    ],
  },

  {
    n: "04",
    heading: "Regional restrictions",
    summary:
      "Eighteen jurisdictions are currently restricted from accessing the Redbelly Network platform. This list has not been confirmed as reduced from a prior version.",
    detail:
      "Redbelly's own Terms and Conditions state the platform is not offered to residents or tax residents of: Afghanistan, Central African Republic, North Korea, Democratic Republic of the Congo, Guinea-Bissau, Iran, Iraq, Lebanon, Libya, Myanmar, Russia, Somalia, South Sudan, Sudan, Syria, Ukraine, Yemen, and Zimbabwe. Residents or tax residents of any jurisdiction on this list cannot proceed with KYC or mainnet access, regardless of wallet or exchange used. The Terms name only these excluded jurisdictions; they do not separately state that residency outside this list guarantees KYC approval.",
    source:
      "Source: Redbelly Network Terms and Conditions, Clause 15, redbelly.network/terms-and-conditions. Note: this document reflects currently restricted jurisdictions. No official record of a prior, larger restricted list was found, so the claim that restrictions have been reduced is not confirmed and is not repeated here as fact.",
  },
  {
    n: "05",
    heading: "KYC as a prerequisite for staking",
    summary:
      "Staking RBNT requires completed KYC, because staking is a write action on Redbelly's own chain, gated by the same access-credential requirement as any other mainnet transaction.",
    detail:
      "Redbelly's developer portal states that before a user is granted access to the network, they must claim an access credential, proved with a photo identity document and biometric checks, before they can self-enable write access to the network through a specific network smart contract. Staking works by calling the deposit function on Redbelly's staking contract, which is exactly this kind of write action, so it falls under the same access-credential requirement. The whitepaper separately confirms staking as a core RBNT utility on Redbelly's own chain, not a wrapped external token.",
    source:
      "Source: Redbelly Network developer portal, User access and Staking pages, vine.redbelly.network/identity/user-access and vine.redbelly.network/nodes/staking; and Redbelly Network whitepaper, redbelly.network/whitepaper.",
  },
];

function Index() {
  const [zoomed, setZoomed] = useState<Evidence | null>(null);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setZoomed(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-4 py-4 sm:px-8 lg:px-16">
          <img
            src="/dao-logo-on-dark.png"
            alt="Redbelly DAO"
            width={1434}
            height={1024}
            className="h-9 w-auto shrink-0"
          />
          <div className="min-w-0">
            <p className="truncate text-base font-semibold leading-tight">
              KYC and Wallet Activation Explainer
            </p>
            <p className="truncate text-[13px] text-muted-foreground">Redbelly DAO</p>
          </div>
          <span className="ml-auto hidden shrink-0 rounded-[4px] border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-stamp-text sm:inline-block">
            Task-18
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16">
        <section className="border-b border-hairline bg-surface-lifted/60 py-16 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-stamp-text">
            Research deliverable / Task-18
          </p>
          <h1 className="mt-5 max-w-[22ch] text-[32px] font-semibold leading-tight tracking-[-0.01em] sm:text-[48px] sm:font-bold sm:tracking-[-0.02em]">
            KYC and Wallet Activation Explainer
          </h1>
          <p className="mt-5 max-w-[68ch] text-[18px] leading-[1.55] text-secondary-foreground">
            Resolves the recurring KYC confusion in the Redbelly community by answering the 5
            questions that keep coming back, in plain language, with every claim either sourced or
            marked unconfirmed.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-[4px] bg-stamp px-5 py-2.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Read PDF
            </a>
            <a
              href={DOCS}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-[4px] border border-border px-5 py-2.5 text-base font-medium text-foreground transition-colors hover:border-stamp-text hover:text-stamp-text"
            >
              Read DOCS
            </a>
            <a
              href={ARTICLE}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-[4px] border border-border px-5 py-2.5 text-base font-medium text-foreground transition-colors hover:border-stamp-text hover:text-stamp-text"
            >
              Read Article
            </a>
          </div>
        </section>

        <section className="py-14">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Document preview
          </h2>
          <div className="mt-5 rounded-lg border border-border bg-well p-2">
            <iframe
              src={PDF}
              title="KYC and Wallet Activation Explainer PDF"
              className="h-[760px] w-full rounded-[4px]"
            />
          </div>
        </section>

        <section className="space-y-6 pb-20">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Full text, five sections
          </h2>
          {sections.map((s) => (
            <article key={s.n} className="rounded-lg border border-border bg-card">
              <div className="flex items-baseline gap-3 border-b border-hairline px-6 py-5 sm:px-8">
                <span className="font-mono text-sm text-stamp-text">{s.n}</span>
                <h3 className="text-[22px] font-semibold leading-snug text-card-foreground">
                  {s.heading}
                </h3>
              </div>
              <div className="px-6 py-6 sm:px-8">
                <p className="max-w-[72ch] text-base font-semibold leading-[1.5] text-card-foreground">
                  {s.summary}
                </p>
                <p className="mt-4 max-w-[72ch] text-base leading-[1.5] text-secondary-foreground">
                  {s.detail}
                </p>
                <p className="mt-6 max-w-[74ch] border-t border-hairline pt-4 text-[15px] italic leading-[1.5] text-muted-foreground">
                  {s.source}
                </p>
                {s.unconfirmed && (
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-pending/40 bg-pending/10 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-pending">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-pending" />
                    {UNCONFIRMED_LABEL}
                  </p>
                )}
                {s.evidence && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {s.evidence.map((e) => (
                      <div
                        key={e.href}
                        className="group rounded-lg border border-[#27323a] bg-[#1e2a31] p-2"
                      >
                        <button
                          type="button"
                          onClick={() => setZoomed(e)}
                          aria-label={`Enlarge screenshot: ${e.caption}`}
                          className="block w-full max-w-[220px] cursor-zoom-in"
                        >
                          <img
                            src={e.img}
                            alt={e.caption}
                            loading="lazy"
                            className="w-full rounded-[4px]"
                          />
                        </button>
                        <a
                          href={e.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 block font-mono text-[12px] text-[#93a4ae] transition-colors hover:text-[#ffb3ae]"
                        >
                          {e.caption}
                        </a>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </article>
          ))}
          <p className="max-w-[74ch] rounded-lg border-l-2 border-stamp bg-card-nested px-5 py-4 text-base leading-[1.5] text-secondary-foreground">
            Two claims above (ten-wallet limit, approval wait time) are reported firsthand by the
            contributor, with corroboration from two Redbelly moderators in Discord, but no
            published official document. Screenshots and direct message links for both moderators
            are included with each claim. They are marked community-reported and unconfirmed per
            task requirements. All other claims are cited to an official Redbelly source.
          </p>
        </section>
      </main>

      <footer className="border-t border-hairline py-12">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Research deliverable &middot; Redbelly DAO
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {[
              {
                href: PDF,
                label: "PDF",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <polyline points="13 2 13 9 20 9" />
                    <path d="M9 13h2a2 2 0 0 1 0 4H9v-4z" />
                    <path d="M9 17h4" />
                  </svg>
                ),
              },
              {
                href: DOCS,
                label: "DOCS",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="8" y1="13" x2="16" y2="13" />
                    <line x1="8" y1="17" x2="13" y2="17" />
                  </svg>
                ),
              },
              {
                href: ARTICLE,
                label: "dev.to",
                icon: (
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M7.826 10.083a.8.8 0 0 0-.468-.175h-.701v4.198h.701a.8.8 0 0 0 .469-.175q.233-.175.233-.525v-2.798q0-.35-.234-.525M19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3M9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31z" />
                  </svg>
                ),
              },
              {
                href: GITHUB,
                label: "GitHub",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.821.576 4.765-1.589 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
              },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="text-secondary-foreground transition-colors hover:text-stamp-text"
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.caption}
          onClick={() => setZoomed(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setZoomed(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 rounded-[4px] border border-border bg-background/80 p-2 text-foreground transition-colors hover:text-stamp-text"
          >
            <X className="h-5 w-5" />
          </button>
          <figure onClick={(ev) => ev.stopPropagation()} className="max-h-full">
            <img
              src={zoomed.img}
              alt={zoomed.caption}
              className="max-h-[80vh] w-auto max-w-[92vw] rounded-lg border border-[#27323a]"
            />
            <figcaption className="mt-3 text-center font-mono text-[12px] text-[#93a4ae]">
              <a
                href={zoomed.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#ffb3ae]"
              >
                {zoomed.caption}
              </a>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

