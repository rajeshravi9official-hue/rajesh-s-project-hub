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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-6 w-6">
                    <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z" />
                  </svg>
                ),
              },
              {
                href: DOCS,
                label: "DOCS",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512.001 512.001" className="h-6 w-6">
                    <path d="M463.996,126.864L340.192,3.061C338.231,1.101,335.574,0,332.803,0H95.726C67.724,0,44.944,22.782,44.944,50.784v410.434 c0,28.001,22.781,50.783,50.783,50.783h320.547c28.002,0,50.783-22.781,50.783-50.783V134.253 C467.056,131.482,465.955,128.824,463.996,126.864z M343.255,35.679l88.127,88.126H373.14c-7.984,0-15.49-3.109-21.134-8.753 c-5.643-5.643-8.752-13.148-8.751-21.131V35.679z M446.158,461.217c0,16.479-13.406,29.885-29.884,29.885H95.726 c-16.479,0-29.885-13.406-29.885-29.885V50.784c0.001-16.479,13.407-29.886,29.885-29.886h226.631v73.021 c-0.002,13.565,5.28,26.318,14.871,35.909c9.592,9.592,22.345,14.874,35.911,14.874h73.018V461.217z" />
                    <path d="M275.092,351.492h-4.678c-5.77,0-10.449,4.678-10.449,10.449s4.679,10.449,10.449,10.449h4.678 c5.77,0,10.449-4.678,10.449-10.449S280.862,351.492,275.092,351.492z" />
                    <path d="M236.61,351.492H135.118c-5.77,0-10.449,4.678-10.449,10.449s4.679,10.449,10.449,10.449H236.61 c5.77,0,10.449-4.678,10.449-10.449S242.381,351.492,236.61,351.492z" />
                    <path d="M376.882,303.747H135.119c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h241.763 c5.77,0,10.449-4.678,10.449-10.449C387.331,308.425,382.652,303.747,376.882,303.747z" />
                    <path d="M376.882,256H135.119c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h241.763 c5.77,0,10.449-4.678,10.449-10.449C387.331,260.678,382.652,256,376.882,256z" />
                    <path d="M376.882,208.255H135.119c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h241.763 c5.77,0,10.449-4.678,10.449-10.449S382.652,208.255,376.882,208.255z" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-6 w-6">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
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

