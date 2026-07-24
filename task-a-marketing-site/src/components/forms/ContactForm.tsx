"use client";

import { useState, useRef, FormEvent } from "react";
import { ContactFormData, ContactFormErrors } from "@/types";
import { validateEmail } from "@/lib/utils";

const companySizes = [
  { value: "", label: "Select company size..." },
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-1000", label: "201-1,000 employees" },
  { value: "1000+", label: "1,000+ employees" },
];

const subjects = [
  { value: "", label: "Select a subject..." },
  { value: "general", label: "General Inquiry" },
  { value: "sales", label: "Sales Question" },
  { value: "support", label: "Technical Support" },
  { value: "demo", label: "Request a Demo" },
  { value: "partner", label: "Partnership Opportunity" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [serverError, setServerError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [touched, setTouched] = useState<Set<string>>(new Set());

  function validate(data: ContactFormData): ContactFormErrors {
    const errs: ContactFormErrors = {};
    if (!data.name.trim()) errs.name = "Full name is required.";
    if (!data.email.trim()) errs.email = "Email is required.";
    else if (!validateEmail(data.email)) errs.email = "Enter a valid email address.";
    if (!data.company.trim()) errs.company = "Company name is required.";
    if (!data.companySize) errs.companySize = "Please select your company size.";
    if (!data.subject) errs.subject = "Please select a subject.";
    if (!data.message.trim()) errs.message = "Message is required.";
    if (!data.consent) errs.consent = "You must agree to be contacted.";
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get("website") as string;
    if (honeypot) return;

    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      companySize: formData.get("companySize") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      consent: formData.get("consent") === "on",
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);
    setTouched(new Set(["name", "email", "company", "companySize", "subject", "message", "consent"]));

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  function handleBlur(field: string) {
    setTouched((prev) => new Set(prev).add(field));
  }

  function getError(field: keyof ContactFormErrors): string | undefined {
    return touched.has(field) ? errors[field] : undefined;
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center" role="status">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-green-600">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-900">Message sent successfully!</h3>
        <p className="mt-2 text-sm text-green-700">
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Contact form">
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
            Full name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            aria-invalid={!!getError("name")}
            aria-describedby={getError("name") ? "name-error" : undefined}
            onBlur={() => handleBlur("name")}
            className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Jane Smith"
          />
          {getError("name") && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
            Work email <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            aria-invalid={!!getError("email")}
            aria-describedby={getError("email") ? "email-error" : undefined}
            onBlur={() => handleBlur("email")}
            className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="jane@company.com"
          />
          {getError("email") && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-zinc-700">
            Company name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            autoComplete="organization"
            aria-invalid={!!getError("company")}
            aria-describedby={getError("company") ? "company-error" : undefined}
            onBlur={() => handleBlur("company")}
            className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Acme Inc."
          />
          {getError("company") && (
            <p id="company-error" className="mt-1 text-sm text-red-600" role="alert">{errors.company}</p>
          )}
        </div>

        <div>
          <label htmlFor="companySize" className="block text-sm font-medium text-zinc-700">
            Company size <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <select
            id="companySize"
            name="companySize"
            required
            aria-invalid={!!getError("companySize")}
            aria-describedby={getError("companySize") ? "companySize-error" : undefined}
            onBlur={() => handleBlur("companySize")}
            className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            {companySizes.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {getError("companySize") && (
            <p id="companySize-error" className="mt-1 text-sm text-red-600" role="alert">{errors.companySize}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-700">
          Subject <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          aria-invalid={!!getError("subject")}
          aria-describedby={getError("subject") ? "subject-error" : undefined}
          onBlur={() => handleBlur("subject")}
          className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          {subjects.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {getError("subject") && (
          <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-invalid={!!getError("message")}
          aria-describedby={getError("message") ? "message-error" : undefined}
          onBlur={() => handleBlur("message")}
          className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          placeholder="Tell us how we can help..."
        />
        {getError("message") && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">{errors.message}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          aria-invalid={!!getError("consent")}
          aria-describedby={getError("consent") ? "consent-error" : undefined}
          onBlur={() => handleBlur("consent")}
          className="mt-1 h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="consent" className="text-sm text-zinc-600">
          I agree to be contacted about VantageFlow products and services. <span aria-hidden="true" className="text-red-500">*</span>
        </label>
      </div>
      {getError("consent") && (
        <p id="consent-error" className="text-sm text-red-600" role="alert">{errors.consent}</p>
      )}

      {status === "error" && serverError && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700" role="alert">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mr-2 animate-spin">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
              <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
