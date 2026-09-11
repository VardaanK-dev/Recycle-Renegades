"use client";

import { useState } from "react";
import type { Dict } from "@/lib/i18n";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FEEDBACK_ENDPOINT = "https://formsubmit.co/ajax/recycle.renegades%40proton.me";

export function FeedbackForm({ dict }: { dict: Dict }) {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  const validate = (form: FormValues): FormErrors => {
    const next: FormErrors = {};
    if (form.name.trim().length < 2) {
      next.name = dict.feedback.form.errorName;
    }
    if (!emailPattern.test(form.email.trim())) {
      next.email = dict.feedback.form.errorEmail;
    }
    if (form.subject.trim().length < 3) {
      next.subject = dict.feedback.form.errorSubject;
    }
    if (form.message.trim().length < 10) {
      next.message = dict.feedback.form.errorMessage;
    }
    return next;
  };

  const handleChange = (
    field: keyof FormValues,
    value: string,
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      const firstField = document.querySelector<HTMLElement>("[aria-invalid='true']");
      firstField?.focus();
      return;
    }

    if (honey.trim().length > 0) {
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          _subject: "Recycle Renegades website feedback",
          _template: "table",
          _captcha: "false",
          _url: window.location.href,
          _honey: honey,
        }),
      });

      let ok = response.ok;
      try {
        const data = (await response.json()) as { success?: unknown };
        if ("success" in data) {
          ok = data.success === true || data.success === "true";
        }
      } catch {
        ok = response.ok;
      }

      if (!ok) {
        throw new Error("FormSubmit did not accept the submission.");
      }

      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
      setHoney("");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    `h-11 w-full rounded-md border bg-card px-3.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${
      hasError
        ? "border-destructive focus:border-destructive focus:ring-destructive/40"
        : "border-border focus:border-ring focus:ring-ring/40"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-6 sm:p-8"
    >
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="feedback-honey">Leave this field empty</label>
        <input
          id="feedback-honey"
          type="text"
          name="_honey"
          value={honey}
          onChange={(event) => setHoney(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="feedback-name" className="text-sm font-medium">
            {dict.feedback.form.name} <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="feedback-name"
            name="name"
            type="text"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            placeholder={dict.feedback.form.namePlaceholder}
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "feedback-name-error" : undefined}
            className={inputClass(Boolean(errors.name))}
          />
          {errors.name && (
            <p id="feedback-name-error" role="alert" className="text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="feedback-email" className="text-sm font-medium">
            {dict.feedback.form.email} <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="feedback-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder={dict.feedback.form.emailPlaceholder}
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "feedback-email-error" : undefined}
            className={inputClass(Boolean(errors.email))}
          />
          {errors.email && (
            <p id="feedback-email-error" role="alert" className="text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="feedback-subject" className="text-sm font-medium">
            {dict.feedback.form.subject} <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="feedback-subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={(event) => handleChange("subject", event.target.value)}
            placeholder={dict.feedback.form.subjectPlaceholder}
            aria-invalid={errors.subject ? true : undefined}
            aria-describedby={errors.subject ? "feedback-subject-error" : undefined}
            className={inputClass(Boolean(errors.subject))}
          />
          {errors.subject && (
            <p id="feedback-subject-error" role="alert" className="text-xs text-destructive">
              {errors.subject}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="feedback-message" className="text-sm font-medium">
            {dict.feedback.form.message} <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <textarea
            id="feedback-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => handleChange("message", event.target.value)}
            placeholder={dict.feedback.form.messagePlaceholder}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "feedback-message-error" : undefined}
            className={`w-full rounded-md border bg-card px-3.5 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${
              errors.message
                ? "border-destructive focus:border-destructive focus:ring-destructive/40"
                : "border-border focus:border-ring focus:ring-ring/40"
            }`}
          />
          {errors.message && (
            <p id="feedback-message-error" role="alert" className="text-xs text-destructive">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {status === "success" && (
        <p
          role="status"
          className="mt-5 rounded-md border border-primary/30 bg-accent px-4 py-3 text-sm font-medium text-primary"
        >
          {dict.feedback.form.success}
        </p>
      )}
      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
        >
          {dict.feedback.form.errorGeneric}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? dict.feedback.form.sending : dict.feedback.form.submit}
      </button>
    </form>
  );
}