import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="bg-indigo-600">
      <Container className="py-20 text-center sm:py-28">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to transform your data?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
          Start your free trial today. No credit card required. Join thousands of teams already using VantageFlow.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-medium text-indigo-700 shadow-sm transition-colors hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
          >
            Start Free Trial
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-indigo-400 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
          >
            Talk to Sales
          </Link>
        </div>
      </Container>
    </section>
  );
}
