import { createFileRoute } from "@tanstack/react-router";

const PDF =
  "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/dao-redbelly@main/task18-kyc-explainer/KYC_and_Wallet_Activation_Explainer_BrandKit.pdf";
const DOCX =
  "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/dao-redbelly@main/task18-kyc-explainer/KYC_and_Wallet_Activation_Explainer_BrandKit.docx";

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

const MOD_TAG = "[MOD-VERIFIED, DISCORD - NO PUBLISHED DOC]";

type Section = {
  n: string;
  heading: string;
  summary: string;
  detail: React.ReactNode;
  source: string;
  modVerified?: boolean;
};

const sections: Section[] = [
  {
    n: "01",
    heading: "When KYC is required",
    summary:
      "KYC is required for native RBNT and mainnet activity. It is not required to hold or trade wrapped RBNT on other chains.",
    detail:
      "Redbelly Network gates access to its own Layer 1 (mainnet transactions, staking, governance) behind identity verification through the Redbelly Access portal. Wrapped RBNT on Ethereum or other chains is a standard ERC-20 token with no Redbelly-side identity check, so buying, holding, or swapping it on an external DEX does not require Redbelly KYC.",
    source:
      "Source: Redbelly Individual Onboarding SDK overview, docs.redbelly.network. Wrapped-token distinction inferred from wrapped RBNT operating as a standard ERC-20 outside Redbelly's identity layer.",
  },
  {
    n: "02",
    heading: "The ten-wallet-per-identity limit",
    summary:
      "One verified identity can activate up to 10 wallets. Beyond that limit, additional wallets cannot be linked to the same KYC record.",
    detail:
      "The limit applies per person, not per wallet, so completing KYC once covers up to 10 separate wallet addresses under that identity. A wallet requesting activation beyond the tenth is not accepted against an already-maxed identity.",
    source:
      "Source: verified firsthand by the contributor, who registered 10 wallets under one identity, and confirmed by a Redbelly moderator in the Discord support channel.",
    modVerified: true,
  },
  {
    n: "03",
    heading: "Typical approval wait time",
    summary: "Most KYC submissions are approved in about 3 to 5 minutes.",
    detail:
      "This is the typical turnaround reported for a standard individual submission through the Redbelly Access portal. Submissions that need manual review, such as flagged documents or edge-case jurisdictions, can take longer than this range.",
    source:
      "Source: verified firsthand by the contributor and confirmed by a Redbelly moderator in the Discord support channel.",
    modVerified: true,
  },
  {
    n: "04",
    heading: "Regional restrictions",
    summary:
      "Eighteen jurisdictions are currently restricted from accessing the Redbelly Network platform. This list has not been confirmed as reduced from a prior version.",
    detail:
      "Redbelly's own Terms and Conditions state the platform is not offered to residents or tax residents of: Afghanistan, Central African Republic, North Korea, Democratic Republic of the Congo, Guinea-Bissau, Iran, Iraq, Lebanon, Libya, Myanmar, Russia, Somalia, South Sudan, Sudan, Syria, Ukraine, Yemen, and Zimbabwe. Anyone outside this list can proceed with KYC and mainnet access; anyone inside it cannot, regardless of wallet or exchange used.",
    source:
      "Source: Redbelly Network Terms and Conditions, Clause 15, redbelly.network/terms-and-conditions. Note: this document reflects currently restricted jurisdictions. No official record of a prior, larger restricted list was found, so the claim that restrictions have been reduced is not confirmed and is not repeated here as fact.",
  },
  {
    n: "05",
    heading: "KYC as a prerequisite for staking",
    summary:
      "Staking RBNT requires completed KYC, because staking is a mainnet action gated by the same identity layer as any other native transaction.",
    detail:
      "Redbelly's whitepaper lists staking as one of RBNT's core token uses, alongside gas, governance, sharding, and incentives, all of which run on Redbelly's own chain rather than a wrapped external token. Since mainnet access itself requires identity verification, a wallet cannot stake without first completing KYC.",
    source:
      "Source: Redbelly Network whitepaper, redbelly.network/whitepaper. KYC-gating inferred from the same mainnet-access requirement covered in Section 1.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-4 py-4 sm:px-8 lg:px-16">
          <img
            src="/task18logo.png"
            alt="Redbelly DAO task 18 mark"
            className="h-9 w-9 shrink-0 rounded-[4px] bg-well object-contain p-1"
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
              href={DOCX}
              download
              className="whitespace-nowrap rounded-[4px] border border-border px-5 py-2.5 text-base font-medium text-foreground transition-colors hover:border-stamp-text hover:text-stamp-text"
            >
              Download DOCX
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
                {s.modVerified && (
                  <p className="mt-3 font-mono text-xs font-medium tracking-wide text-stamp-text">
                    {MOD_TAG}
                  </p>
                )}
              </div>
            </article>
          ))}
          <p className="max-w-[74ch] rounded-lg border-l-2 border-stamp bg-card-nested px-5 py-4 text-base leading-[1.5] text-secondary-foreground">
            Two claims above (ten-wallet limit, approval wait time) are verified firsthand by the
            contributor and confirmed by a Redbelly moderator in Discord, but have no published
            official document. They are marked accordingly per task requirements. All other claims
            are cited to an official Redbelly source.
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
        </div>
      </footer>
    </div>
  );
}

