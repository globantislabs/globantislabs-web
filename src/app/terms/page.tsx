import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Terms of Service | Globantis Labs",
  description:
    "The terms that govern your use of the Globantis Labs website, services, and engagements.",
  path: "/terms",
  keywords: ["terms of service", "terms of use", "Globantis Labs"],
});

const lastUpdated = "September 24, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        label="Legal"
        image="/images/wp/2025-02/faq00.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />

      <section className="bg-white py-section-md">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="text-sm text-body">
              Last updated: <strong className="text-ink">{lastUpdated}</strong>
            </p>

            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-body">
              <Section title="1. Acceptance of terms">
                <p>
                  By accessing or using the {company.name} website (the
                  &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service
                  (&ldquo;Terms&rdquo;). If you do not agree, please do not use the
                  Site.
                </p>
                <p className="mt-3">
                  These Terms govern your use of the Site only. Any client engagement
                  is governed by a separate Master Services Agreement (MSA) signed
                  between you and Globantis Labs.
                </p>
              </Section>

              <Section title="2. Who we are">
                <p>
                  {company.name} is a global software engineering firm with offices at:
                </p>
                <ul className="mt-3 space-y-1.5 pl-5">
                  <li>{company.usaAddress}</li>
                  <li>{company.canadaAddress}</li>
                  <li>{company.indiaAddress}</li>
                </ul>
              </Section>

              <Section title="3. Use of the site">
                <p>You may use the Site for lawful purposes only. You agree not to:</p>
                <ul className="mt-3 space-y-1.5 pl-5">
                  <li>Use the Site in any way that breaches applicable law or regulation</li>
                  <li>Attempt to gain unauthorised access to any part of the Site, its systems, or networks</li>
                  <li>Introduce malware, viruses, or other harmful code</li>
                  <li>Scrape, copy, or republish substantial portions of the Site without written permission</li>
                  <li>Use the Site to send unsolicited commercial communications</li>
                  <li>Impersonate another person or misrepresent your affiliation</li>
                </ul>
              </Section>

              <Section title="4. Intellectual property">
                <p>
                  All content on the Site — including text, graphics, logos, images,
                  software, and source code — is owned by Globantis Labs or its
                  licensors and is protected by intellectual property laws.
                </p>
                <p className="mt-3">
                  You may view and print pages from the Site for your personal,
                  non-commercial use. Any other use, including reproduction,
                  distribution, or modification, requires our prior written consent.
                </p>
                <p className="mt-3">
                  Our name, logo, and product names are trademarks of Globantis Labs.
                  All other trademarks on the Site are the property of their
                  respective owners.
                </p>
              </Section>

              <Section title="5. Forms and enquiries">
                <p>
                  When you submit a form on the Site (contact, consultation, eBook
                  download, newsletter signup), you grant Globantis Labs a
                  non-exclusive, royalty-free licence to use the information you
                  provide to respond to your enquiry and, where you have consented, to
                  send you marketing communications.
                </p>
                <p className="mt-3">
                  You can unsubscribe from marketing communications at any time using
                  the unsubscribe link in any email or by contacting us at{" "}
                  <a
                    href={company.emailHref}
                    className="font-semibold text-brand hover:underline"
                  >
                    {company.email}
                  </a>
                  .
                </p>
              </Section>

              <Section title="6. External links">
                <p>
                  The Site may contain links to third-party websites. We are not
                  responsible for the content, privacy practices, or accuracy of any
                  third-party site. Visiting a third-party link is at your own risk.
                </p>
              </Section>

              <Section title="7. Disclaimers">
                <p>
                  The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;.
                  To the extent permitted by law, we disclaim all warranties, express
                  or implied, including merchantability, fitness for a particular
                  purpose, and non-infringement.
                </p>
                <p className="mt-3">
                  We do not warrant that the Site will be uninterrupted, secure, or
                  error-free, or that defects will be corrected.
                </p>
              </Section>

              <Section title="8. Limitation of liability">
                <p>
                  To the maximum extent permitted by law, Globantis Labs shall not be
                  liable for any indirect, incidental, special, consequential, or
                  punitive damages — including loss of profits, data, or goodwill —
                  arising out of your use of, or inability to use, the Site.
                </p>
              </Section>

              <Section title="9. Indemnification">
                <p>
                  You agree to indemnify and hold harmless Globantis Labs and its
                  affiliates from any claim, damage, or expense arising out of your
                  breach of these Terms or your misuse of the Site.
                </p>
              </Section>

              <Section title="10. Changes to these terms">
                <p>
                  We may revise these Terms at any time. The most current version will
                  always be posted on this page with an updated &ldquo;Last
                  updated&rdquo; date. Continued use of the Site after changes
                  constitutes acceptance of the revised Terms.
                </p>
              </Section>

              <Section title="11. Governing law">
                <p>
                  These Terms are governed by the laws of the Province of Québec,
                  Canada, without regard to conflict of law principles. Any dispute
                  arising out of or in connection with these Terms shall be submitted
                  to the exclusive jurisdiction of the courts of Québec.
                </p>
              </Section>

              <Section title="12. Contact">
                <p>
                  For questions about these Terms, email{" "}
                  <a
                    href={company.emailHref}
                    className="font-semibold text-brand hover:underline"
                  >
                    {company.email}
                  </a>{" "}
                  with &ldquo;Terms&rdquo; in the subject line.
                </p>
              </Section>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-display-md font-bold text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
