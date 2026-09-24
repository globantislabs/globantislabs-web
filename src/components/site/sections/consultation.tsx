"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { consultationTopics, company } from "@/lib/site-data";
import { Container, Section } from "../primitives";
import { useToast } from "@/hooks/use-toast";

/**
 * Consultation — final home section.
 * A working form that POSTs to /api/contact. No newsletter fluff.
 */
export function Consultation() {
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
    <Section className="bg-background">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — copy */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4 }}
              className="micro-label mb-4"
            >
              Free 30-minute consultation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="display text-3xl text-foreground md:text-4xl lg:text-5xl"
            >
              Tell us what you're building.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              No deck, no sales script. A senior engineer will review your
              situation and give you a written recommendation — whether or not
              you decide to work with us.
            </motion.p>

            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              {[
                "Reply within one business day",
                "Written technical recommendation",
                "No commitment, no follow-up spam",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-md border border-hairline bg-paper p-4">
              <p className="micro-label mb-2">Prefer email?</p>
              <a
                href={company.emailHref}
                className="text-sm font-medium text-foreground hover:text-brand"
              >
                {company.email}
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
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
                  rows={5}
                  required
                  placeholder="A short paragraph on the problem, the team, and any timing constraints."
                  className="w-full rounded-md border border-hairline bg-background p-3 text-sm text-foreground focus:border-brand focus:outline-none"
                />
              </div>

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
          </div>
        </div>
      </Container>
    </Section>
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
