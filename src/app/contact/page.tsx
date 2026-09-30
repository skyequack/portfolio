"use client";

import { useState } from "react";
import CyPage from "@/components/cy/CyPage";

const EMAIL = "omer.mohammd.m@gmail.com";

const channels = [
  { label: "email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "github", value: "@skyequack", href: "https://github.com/skyequack" },
  { label: "linkedin", value: "Omer Mohammed", href: "https://in.linkedin.com/in/omermohammed-" },
  { label: "instagram", value: "@skye2_d2", href: "https://instagram.com/skye2_d2" },
];

const fields = [
  { name: "name", type: "text", placeholder: "your name" },
  { name: "email", type: "email", placeholder: "you@domain.com" },
] as const;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: hand the message to the visitor's mail client.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <CyPage
      path="open ./contact"
      title="contact"
      intro="Open to robotics projects, technical challenges, research collaboration, or just trading notes on mechatronics."
      stats={[{ label: "channel", value: "OPEN" }]}
    >
      <section className="relative px-4 pb-24 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr]">
          <form onSubmit={onSubmit} className="cy-frame space-y-5 p-5 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--cy-steel)]">
              &gt; compose_message
            </p>
            {fields.map((f) => (
              <div key={f.name}>
                <label
                  htmlFor={f.name}
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-[var(--cy-dim)]"
                >
                  {f.name}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  required
                  value={form[f.name]}
                  onChange={onChange}
                  placeholder={f.placeholder}
                  className="cy-field"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-[var(--cy-dim)]"
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={onChange}
                placeholder="tell me about your project or idea"
                className="cy-field resize-none"
              />
            </div>
            <button type="submit" className="cy-btn cy-btn-solid w-full py-3">
              &gt; open_in_mail_client
            </button>
            <p className="font-mono text-[11px] text-[var(--cy-dim)]">
              Opens your email app with the message filled in.
            </p>
          </form>

          <div className="cy-frame self-start">
            <p className="border-b border-[var(--cy-line)] px-5 py-3 font-mono text-xs uppercase tracking-widest text-[var(--cy-steel)]">
              &gt; channels
            </p>
            <ul>
              {channels.map((c) => (
                <li key={c.label} className="border-b border-[var(--cy-line)] last:border-b-0">
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-[var(--cy-steel)]"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--cy-dim)] group-hover:text-[var(--cy-bg)]">
                      {c.label}
                    </span>
                    <span className="truncate text-sm text-white group-hover:text-[var(--cy-bg)]">
                      {c.value} ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </CyPage>
  );
}
