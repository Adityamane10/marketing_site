import { Container } from "@/components/ui/Container";
import { benefits } from "@/content/features";

export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="bg-indigo-600">
      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="stats-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real results from real teams
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Teams using VantageFlow see measurable improvements in their analytics workflow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="text-center">
              <p className="text-5xl font-bold text-white">{benefit.stat}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-indigo-200">
                {benefit.statLabel}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm text-indigo-100">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
