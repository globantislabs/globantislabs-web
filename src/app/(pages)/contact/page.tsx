"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, Phone, Clock } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { PageBanner } from "@/components/site/page-banner";
import { Container, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { contactChannels, company, consultationTopics } from "@/lib/site-data";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      toast({
        title: "Thanks — we'll be in touch.",
        description: `A senior engineer will reply to ${data.email} within one business day.`,
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong.",
        description: `Email us directly at ${company.email} while we resolve this.`,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageShell>
      <PageBanner
        eyebrow="Contact"
        title="Tell us what you're building."
        description="A senior engineer — not a salesperson — will read your message and reply within one business day. No script, no gatekeeper."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section className="border-b border-hairline">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left — channels + offices */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="micro-label mb-4">Direct channels</p>
                <ul className="space-y-3">
                  {contactChannels.map((c) => {
                    const Icon = c.icon;
                    return (
                      <li
                        key={c.label}
                        className="flex items-center gap-3 rounded-md border border-hairline bg-paper p-4"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-soft text-brand">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            {c.label}
                          </p>
                          {c.href ? (
                            <a
                              href={c.href}
                              className="text-sm font-medium text-foreground hover:text-brand"
                            >
                              {c.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-foreground">
                              {c.value}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="micro-label mt-10 mb-4">Offices</p>
                <ul className="space-y-3">
                  {company.offices.map((o) => (
                    <li
                      key={o.city}
                      className="rounded-md border border-hairline bg-paper p-4"
                    >
                      <p className="text-xs text-muted-foreground">
                        {o.country}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">
                        {o.city}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {o.address}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <form
                  onSubmit={onSubmit}
                  className="rounded-md border border-hairline bg-paper p-6 md:p-8"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" required placeholder="Your name" />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                    />
                    <Field
                      label="Company"
                      name="company"
                      placeholder="Company name"
                    />
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="topic" className="text-xs font-medium text-foreground">
                        Topic
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        defaultValue=""
                        className="h-11 rounded-md border border-hairline bg-background px-3 text-sm text-foreground focus:border-brand focus:outline-none"
                      >
                        <option value="" disabled>
                          Select a topic
                        </option>
                        {consultationTopics.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-foreground">
                      What are you building?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="A short paragraph on the problem, the team, and any timing constraints."
                      className="w-full rounded-md border border-hairline bg-background p-3 text-sm text-foreground focus:border-brand focus:outline-none"
                    />
                  </div>

                  <ul className="mt-6 space-y-2 text-xs text-muted-foreground">
                    {[
                      "Reply within one business day",
                      "Written technical recommendation",
                      "No commitment, no follow-up spam",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-brand" />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to be contacted about your enquiry.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-brand disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Send enquiry"}
                      {!submitting && <ArrowRight className="h-4 w-4" />}
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-md border border-hairline bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none"
      />
    </div>
  );
}
