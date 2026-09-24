import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";

import { Reveal } from "@/components/site/primitives";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Privacy Policy | Globantis Labs",
  description:
    "How Globantis Labs collects, uses, and protects personal data across our website, services, and client engagements.",
  path: "/privacy",
  keywords: ["privacy policy", "data protection", "GDPR", "CCPA", "Globantis Labs"],
});

const lastUpdated = "September 24, 2026";

export default function PrivacyPage() {
  return (
    <PageShell>
    <>
      <PageHero
        title="Privacy Policy"
        label="Legal"
        image="/images/wp/2025-02/technology1.png"
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />

      <section className="bg-white py-section-md">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="text-sm text-body">
              Last updated: <strong className="text-ink">{lastUpdated}</strong>
            </p>
            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-body">
              <Section title="1. Who we are">
                <p>
                  {company.name} (&ldquo;Globantis Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a global
                  software engineering firm with offices in the United States, Canada and
                  India. We design, build and operate software for clients worldwide.
                </p>
                <p className="mt-3">
                  For any privacy questions, email{" "}
                  <a
                    href={company.emailHref}
                    className="font-semibold text-brand hover:underline"
                  >
                    {company.email}
                  </a>{" "}
                  or write to us at our Canada office: {company.canadaAddress}.
                </p>
              </Section>

              <Section title="2. What data we collect">
                <p>We collect only the data necessary to operate our business:</p>
                <ul className="mt-3 space-y-1.5 pl-5">
                  <li><strong className="text-ink">Contact data</strong> — name, email, phone, company, message — when you submit a form on our site.</li>
                  <li><strong className="text-ink">Usage data</strong> — anonymised analytics (page views, referrer, device, country) via Google Analytics 4.</li>
                  <li><strong className="text-ink">Cookies</strong> — only essential cookies by default. Analytics cookies require your consent.</li>
                  <li><strong className="text-ink">Lead data</strong> — for our eBook and newsletter downloads, we store your email and the asset you requested.</li>
                  <li><strong className="text-ink">Client engagement data</strong> — when we work with you, your data is governed by the Master Services Agreement.</li>
                </ul>
              </Section>

              <Section title="3. How we use your data">
                <ul className="space-y-1.5 pl-5">
                  <li>To reply to your enquiry and ship you a written technical recommendation.</li>
                  <li>To send you the eBook, white paper or checklist you requested.</li>
                  <li>To send you our newsletter — only if you explicitly subscribe.</li>
                  <li>To measure aggregate traffic and improve our content (analytics).</li>
                  <li>To comply with legal, accounting and tax obligations.</li>
                </ul>
                <p className="mt-3">
                  We do <strong className="text-ink">not</strong> sell your data. We do
                  not share your data with third parties for marketing.
                </p>
              </Section>

              <Section title="4. Legal bases (GDPR)">
                <p>
                  For users in the European Economic Area, we process personal data
                  under the following lawful bases:
                </p>
                <ul className="mt-3 space-y-1.5 pl-5">
                  <li><strong className="text-ink">Consent</strong> — when you submit a form, request a download, or accept non-essential cookies.</li>
                  <li><strong className="text-ink">Contract</strong> — when you become a client, processing is necessary to deliver the engagement.</li>
                  <li><strong className="text-ink">Legitimate interest</strong> — anonymised analytics to improve our website and security.</li>
                  <li><strong className="text-ink">Legal obligation</strong> — accounting, tax, and regulatory compliance.</li>
                </ul>
              </Section>

              <Section title="5. Your rights (GDPR / CCPA)">
                <p>You have the right to:</p>
                <ul className="mt-3 space-y-1.5 pl-5">
                  <li>Access the personal data we hold about you</li>
                  <li>Rectify inaccurate data</li>
                  <li>Erasure (&ldquo;right to be forgotten&rdquo;)</li>
                  <li>Restrict or object to processing</li>
                  <li>Data portability (receive your data in a machine-readable format)</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with your local data protection authority</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, email{" "}
                  <a
                    href={company.emailHref}
                    className="font-semibold text-brand hover:underline"
                  >
                    {company.email}
                  </a>{" "}
                  with the subject line &ldquo;Data subject request&rdquo;. We&apos;ll
                  respond within 30 days.
                </p>
              </Section>

              <Section title="6. Cookies">
                <p>We use three categories of cookies:</p>
                <ul className="mt-3 space-y-1.5 pl-5">
                  <li><strong className="text-ink">Essential</strong> — required for the site to function (theme preference, cookie consent state). Always on.</li>
                  <li><strong className="text-ink">Analytics</strong> — Google Analytics 4. Only on if you consent.</li>
                  <li><strong className="text-ink">Functional</strong> — Crisp live chat, newsletter form state. Only on if you consent.</li>
                </ul>
                <p className="mt-3">
                  You can change your cookie preferences at any time via the cookie
                  banner that appears at the bottom of the page on your next visit.
                </p>
              </Section>

              <Section title="7. Data retention">
                <p>We retain personal data only as long as necessary:</p>
                <ul className="mt-3 space-y-1.5 pl-5">
                  <li>Contact enquiries: 24 months after last interaction</li>
                  <li>Newsletter subscribers: until you unsubscribe</li>
                  <li>eBook downloads: 24 months after download</li>
                  <li>Client engagement data: per the MSA + 7 years for tax/legal</li>
                </ul>
              </Section>

              <Section title="8. International transfers">
                <p>
                  Because we operate from the United States, Canada and India, your
                  data may be processed in any of these jurisdictions. We rely on
                  Standard Contractual Clauses (SCCs) for any transfer out of the
                  EEA, and we only work with sub-processors that offer equivalent
                  protection.
                </p>
              </Section>

              <Section title="9. Sub-processors">
                <p>We work with the following sub-processors:</p>
                <ul className="mt-3 space-y-1.5 pl-5">
                  <li><strong className="text-ink">Vercel</strong> — website hosting</li>
                  <li><strong className="text-ink">Google Analytics 4</strong> — traffic analytics</li>
                  <li><strong className="text-ink">Resend</strong> — newsletter and transactional email</li>
                  <li><strong className="text-ink">Crisp</strong> — live chat</li>
                  <li><strong className="text-ink">GitHub</strong> — source code hosting</li>
                </ul>
                <p className="mt-3">
                  We never share your personal data with sub-processors for their own
                  marketing purposes.
                </p>
              </Section>

              <Section title="10. Security">
                <p>
                  We follow industry-standard security practices: HTTPS in transit,
                  AES-256 at rest, role-based access controls, MFA for staff, quarterly
                  access reviews, and annual SOC 2 Type II audit. We have a documented
                  incident response plan.
                </p>
              </Section>

              <Section title="11. Changes to this policy">
                <p>
                  We may update this policy from time to time. Material changes will
                  be posted on this page with an updated &ldquo;Last updated&rdquo;
                  date. Continued use of the site after changes constitutes acceptance.
                </p>
              </Section>

              <Section title="12. Contact">
                <p>
                  For privacy questions, requests, or complaints, email{" "}
                  <a
                    href={company.emailHref}
                    className="font-semibold text-brand hover:underline"
                  >
                    {company.email}
                  </a>{" "}
                  with &ldquo;Privacy&rdquo; in the subject line. We respond within 5
                  business days.
                </p>
              </Section>
            </div>
          </Reveal>
        </div>
      </section>
    </>
    </PageShell>
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
