import { Container } from "@/components/ui/Container";
import { FAQItem } from "@/types";

interface FAQSectionProps {
  items: FAQItem[];
  title: string;
  id?: string;
}

export function FAQSection({ items, title, id = "faq" }: FAQSectionProps) {
  return (
    <section aria-labelledby={`${id}-heading`} className="bg-zinc-50">
      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 id={`${id}-heading`} className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            {title}
          </h2>

          <div className="mt-12">
            {items.map((item, index) => (
              <details
                key={index}
                className="group border-b border-zinc-200 [&[open]]:pb-5"
              >
                <summary className="flex w-full cursor-pointer items-center justify-between py-5 text-base font-medium text-zinc-900 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="text-sm text-zinc-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
