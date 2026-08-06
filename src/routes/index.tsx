import { createFileRoute } from "@tanstack/react-router";

const PDF = "/docs/KYC_and_Wallet_Activation_Explainer.pdf";
const DOCX = "/docs/KYC_and_Wallet_Activation_Explainer.docx";

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
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-3">
          <img
            src="/task18logo.png"
            alt="Redbelly DAO task 18 mark"
            className="h-9 w-9 shrink-0 object-contain"
          />
          <div className="min-w-0">
            <p className="truncate font-serif text-base font-semibold leading-tight">
              KYC and Wallet Activation Explainer
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60">
              Redbelly DAO
            </p>
          </div>
          <span className="ml-auto hidden shrink-0 border border-stamp px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-stamp sm:inline-block">
            Task-18
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5">
        <section className="border-b border-border py-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-stamp">
            Research deliverable / Task-18
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            KYC and Wallet Activation Explainer
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
            Resolves the recurring KYC confusion in the Redbelly community by answering the 5
            questions that keep coming back, in plain language, with every claim either sourced or
            marked unconfirmed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-stamp bg-stamp px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Read PDF
            </a>
            <a
              href={DOCX}
              download
              className="border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-stamp hover:text-stamp"
            >
              Download DOCX
            </a>
          </div>
        </section>

        <section className="py-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60">
            Document preview
          </h2>
          <div className="mt-4 border border-border bg-card p-2">
            <iframe
              src={PDF}
              title="KYC and Wallet Activation Explainer PDF"
              className="h-[760px] w-full"
            />
          </div>
        </section>

        <section className="space-y-6 pb-16">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60">
            Full text, five sections
          </h2>
          {sections.map((s) => (
            <article key={s.n} className="border border-paper-line bg-card p-6 sm:p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-stamp">{s.n}</span>
                <h3 className="font-serif text-2xl font-semibold text-card-foreground">
                  {s.heading}
                </h3>
              </div>
              <p className="mt-4 font-semibold leading-relaxed text-card-foreground">{s.summary}</p>
              <p className="mt-4 leading-relaxed text-card-foreground/85">{s.detail}</p>
              <p className="mt-5 border-t border-paper-line pt-4 text-sm italic leading-relaxed text-muted-foreground">
                {s.source}
              </p>
              {s.modVerified && (
                <p className="mt-2 font-mono text-xs font-medium tracking-wide text-stamp">
                  {MOD_TAG}
                </p>
              )}
            </article>
          ))}
          <p className="border-l-2 border-stamp pl-4 text-sm leading-relaxed text-foreground/70">
            Two claims above (ten-wallet limit, approval wait time) are verified firsthand by the
            contributor and confirmed by a Redbelly moderator in Discord, but have no published
            official document. They are marked accordingly per task requirements. All other claims
            are cited to an official Redbelly source.
          </p>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-5xl px-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/60">
            Research deliverable &middot; Redbelly DAO
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            Built with{" "}
            <span aria-hidden="true" className="text-stamp">
              &hearts;
            </span>{" "}
            by{" "}
            <a
              href="https://github.com/0xDarkSeidBull/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stamp hover:underline"
            >
              0xDarkSeidBull
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
