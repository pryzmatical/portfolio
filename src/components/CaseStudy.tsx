const points = [
  "Connected a GPT-based agent to SharePoint so it could pull underwriting knowledge from the shared drive on demand.",
  "Worked around a platform limitation (the agent runtime couldn't make outbound GET requests) with an inline POST-based proxy/relay pattern.",
  "Built the Flask/Python backend and the Docker + Azure Oryx build pipeline needed to deploy it reliably.",
  "Set up Azure Blob Storage + SAS URLs so parsed PDF images could flow back into a standardized loan memo template.",
  "Trained the agent's knowledge base directly with the Senior Underwriter and iterated on RBAC and instructions until output was consistent.",
];

export function CaseStudy() {
  return (
    <section id="case-study" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">Featured work</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          aiGENT — a production underwriting agent
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Built at Foundation Specialty Finance. This is proprietary, closed-source work — described
          here rather than linked, since the code lives inside a regulated finance environment.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
