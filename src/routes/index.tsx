import { createFileRoute } from "@tanstack/react-router";
import { FileText, FileType2, Github, PenLine } from "lucide-react";

const PDF = "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/daotask18@main/task18kyc.pdf";
const DOCS =
  "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/0xDarkSeidBull/daotask18/main/task18.docx&embedded=true";
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
      "Redbelly Network gates access to its own Layer 1 (mainnet transactions, staking, governance) behind identity verification through the Redbelly Access portal. Wrapped RBNT on Ethereum is a standard ERC-20 token with no Redbelly-side identity check, so buying, holding, or swapping it there does not require Redbelly KYC. The same principle should extend to wrapped RBNT on other chains, since any token living outside Redbelly's own chain sits outside its identity layer by definition, but the exact token standard on each additional chain (ERC-20, SPL, or otherwise) has not been individually verified here and should not be assumed uniform.",
    source:
      "Source: Redbelly Individual Onboarding SDK overview, docs.redbelly.network. Wrapped-token distinction inferred from Ethereum wRBNT operating as a standard ERC-20 outside Redbelly's identity layer; the same outside-the-identity-layer logic is assumed, not separately verified, for wrapped RBNT on other chains.",
  },
  {
    n: "02",
    heading: "The ten-wallet-per-identity limit",
    summary:
      "One verified identity can activate up to 10 wallets. Beyond that limit, additional wallets cannot be linked to the same KYC record.",
    detail:
      "The limit applies per person, not per wallet, so completing KYC once covers up to 10 separate wallet addresses under that identity. A wallet requesting activation beyond the tenth is not accepted against an already-maxed identity.",
    source:
      "Source: reported by the contributor, who states they registered 10 wallets under one identity, with informal corroboration from a Redbelly moderator in the Discord support channel. No screenshot or message link is attached to verify this.",
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
    summary: "Most KYC submissions are approved in about 3 to 5 minutes.",
    detail:
      "This is the typical turnaround reported for a standard individual submission through the Redbelly Access portal. Submissions that need manual review, such as flagged documents or edge-case jurisdictions, can take longer than this range.",
    source:
      "Source: reported by the contributor, with informal corroboration from a Redbelly moderator in the Discord support channel. No screenshot or message link is attached to verify this.",
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
                      <a
                        key={e.href}
                        href={e.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-lg border border-[#27323a] bg-[#1e2a31] p-2"
                      >
                        <img
                          src={e.img}
                          alt={e.caption}
                          loading="lazy"
                          className="w-full max-w-[220px] rounded-[4px]"
                        />
                        <span className="mt-2 block font-mono text-[12px] text-[#93a4ae] transition-colors group-hover:text-[#ffb3ae]">
                          {e.caption}
                        </span>
                      </a>
                    ))}
                  </div>
                )}

              </div>
            </article>
          ))}
          <p className="max-w-[74ch] rounded-lg border-l-2 border-stamp bg-card-nested px-5 py-4 text-base leading-[1.5] text-secondary-foreground">
            Two claims above (ten-wallet limit, approval wait time) are reported firsthand by the
            contributor, with informal corroboration from a Redbelly moderator in Discord, but no
            published official document and no screenshot or message link on file. They are marked
            community-reported and unconfirmed per task requirements. All other claims are cited to
            an official Redbelly source.
          </p>
        </section>
      </main>

      <footer className="border-t border-hairline py-12">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Research deliverable &middot; Redbelly DAO
          </p>
          <p className="mt-2 text-base text-secondary-foreground">
            Built with{" "}
            <span aria-hidden="true" className="text-stamp">
              &hearts;
            </span>{" "}
            by{" "}
            <a
              href="https://github.com/0xDarkSeidBull/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stamp-text hover:underline"
            >
              0xDarkSeidBull
            </a>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {[
              { href: PDF, label: "PDF", icon: <FileText className="h-5 w-5" /> },
              { href: DOCS, label: "DOCS", icon: <FileType2 className="h-5 w-5" /> },
              { href: ARTICLE, label: "dev.to", icon: <PenLine className="h-5 w-5" /> },
              { href: GITHUB, label: "GitHub", icon: <Github className="h-5 w-5" /> },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-secondary-foreground transition-colors hover:text-stamp-text"
              >
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

