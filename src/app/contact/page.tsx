"use client";

import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(fields: {
  name: string;
  email: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.message.trim()) errors.message = "Message is required.";
  return errors;
}

const interestOptions = [
  { value: "", label: "Select an area of interest" },
  { value: "Performance Advisory", label: "Performance Advisory" },
  { value: "Risk Advisory", label: "Risk Advisory" },
  { value: "Integrated Advisory", label: "Integrated Advisory (Both)" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate({ name, email, message });
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          interest,
          message,
          company: honeypot,
        }),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const fieldBase =
    "w-full border-b border-mcg-sage/30 bg-transparent px-0 py-3 font-body text-[16px] text-mcg-green placeholder:text-mcg-sage/50 focus:border-mcg-gold focus:outline-none";

  return (
    <section className="bg-mcg-bone px-5 pt-32 pb-24 md:px-12 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[680px]">
        {/* Copy above the form */}
        <div className="mb-12 text-center">
          <span className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-sage">
            Contact
          </span>
          <h1 className="mt-4">Begin a Conversation.</h1>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Mission Clarity Group works with a limited number of clients each
            year. Tell us what you are walking into, and we will respond
            personally and in confidence.
          </p>
        </div>

        {/* Form */}
        <div className="border border-mcg-green/15 p-8 md:p-12">
          {status === "sent" ? (
            <p className="font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-green">
              Thank you. We will respond personally and in confidence.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="space-y-8">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-[12px] font-medium uppercase tracking-[0.1em] text-mcg-sage"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldBase}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      role="alert"
                      className="mt-2 font-body text-[13px] text-mcg-gold"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-[12px] font-medium uppercase tracking-[0.1em] text-mcg-sage"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldBase}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="mt-2 font-body text-[13px] text-mcg-gold"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Area of Interest */}
                <div>
                  <label
                    htmlFor="interest"
                    className="block font-body text-[12px] font-medium uppercase tracking-[0.1em] text-mcg-sage"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className={`${fieldBase} cursor-pointer appearance-none rounded-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%236B7355%22%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%236B7355%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_0_center] bg-no-repeat pr-6`}
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-[12px] font-medium uppercase tracking-[0.1em] text-mcg-sage"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you are walking into."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${fieldBase} resize-none`}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="mt-2 font-body text-[13px] text-mcg-gold"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {status === "error" && (
                <p
                  role="alert"
                  className="mt-6 font-body text-[14px] text-mcg-green"
                >
                  Something went wrong sending your message. Please try again in
                  a moment.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-10 w-full rounded-[2px] bg-mcg-green px-6 py-3 font-body text-[15px] font-medium text-mcg-bone transition-opacity hover:opacity-70 disabled:opacity-50"
              >
                {status === "sending"
                  ? "Sending..."
                  : "Request a Confidential Conversation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
