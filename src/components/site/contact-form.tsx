"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
      toast({
        title: "Message sent",
        description: "Thanks for reaching out. We'll reply within one business day.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-line bg-white p-10 text-center shadow-lift">
        <span className="flex size-16 items-center justify-center rounded-full border border-brand/20 bg-cream">
          <CheckCircle2 className="size-8 text-brand" aria-hidden />
        </span>
        <h3 className="text-display-sm font-bold text-ink">Thank you!</h3>
        <p className="max-w-sm text-sm leading-relaxed text-body">
          Your message has been received. One of our specialists will get back to you shortly.
        </p>
        <Button
          variant="outline"
          onClick={() => setDone(false)}
          className="btn-lift mt-2 rounded-full border-ink/15 bg-transparent text-ink transition-colors hover:border-brand hover:bg-cream hover:text-brand"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className={compact ? "space-y-5" : "grid gap-5 sm:grid-cols-2"}>
        <Field name="name" placeholder="Name" required />
        <Field name="email" type="email" placeholder="Email" required />
        <Field name="phone" placeholder="Phone" />
        <Field name="company" placeholder="Your Company Name" />
      </div>
      <Textarea
        name="message"
        placeholder="Write Your Message Here"
        required
        rows={compact ? 4 : 5}
        className="min-h-[120px] resize-none rounded-full border-line bg-white px-5 py-3.5 text-sm placeholder:text-body/60 focus-visible:border-brand/50 focus-visible:ring-brand/40"
      />
      <Button
        type="submit"
        disabled={loading}
        className="btn-lift h-12 w-full gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow-flame transition-all hover:bg-brand-dark focus-visible:ring-brand/40 sm:w-auto"
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Send className="size-4" />
        )}
        Submit Now
      </Button>
    </form>
  );
}

function Field({
  name,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
      required={required}
      className="h-12 rounded-full border-line bg-white px-5 text-sm placeholder:text-body/60 focus-visible:border-brand/50 focus-visible:ring-brand/40"
    />
  );
}
