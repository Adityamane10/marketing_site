import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/content/site";
import { FAQSection } from "@/components/sections/FAQ";
import { generalFAQ } from "@/content/faq";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  openGraph: {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    url: pageMetadata.contact.path,
  },
  twitter: {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
  },
  alternates: {
    canonical: pageMetadata.contact.path,
  },
};

export default function ContactPage() {
  return (
    <>
      <FAQPageJsonLd items={generalFAQ} />
      <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <Container className="py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 sm:text-xl">
              Have a question about VantageFlow? Want a demo? Our team is here to help.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="contact-form-heading">
        <Container className="pb-20 sm:pb-28">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            <div>
              <h2 id="contact-form-heading" className="text-2xl font-bold text-zinc-900">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Fill out the form and a member of our team will respond within one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside>
              <h2 className="text-2xl font-bold text-zinc-900">
                Other ways to reach us
              </h2>
              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">Email</h3>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-indigo-600 hover:text-indigo-500">
                    {site.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">Phone</h3>
                  <a href={`tel:${site.phone}`} className="mt-1 block text-sm text-indigo-600 hover:text-indigo-500">
                    {site.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">Office</h3>
                  <address className="mt-1 not-italic text-sm text-zinc-600">
                    {site.address.street}<br />
                    {site.address.city}, {site.address.state} {site.address.zip}<br />
                    {site.address.country}
                  </address>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">Social</h3>
                  <div className="mt-2 flex gap-4">
                    <a
                      href={site.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Twitter
                    </a>
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={site.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FAQSection items={generalFAQ} title="Frequently asked questions" id="general-faq" />
    </>
  );
}
