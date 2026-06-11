"use client";
import { FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

type Status = { type: "success" | "error"; message: string } | null;

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
        "service_ppfm9gx",
        "contact_form",
        formRef.current!,
        "FWrgeHDJIQuot0T05"
      );
      setStatus({ type: "success", message: "Message sent! I'll be in touch soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", message: "Failed to send. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#151615] text-white flex items-center justify-center pt-[150px] lg:pt-0 lg:h-[600px] h-full lg:overflow-hidden overflow-scroll">
      <div className="w-full max-w-[460px] bg-[#1a1b1a] border border-[#2e2f2e] lg:h-full">

        {/* Header strip with gold left accent */}
        <div className="border-l-[3px] border-[#ffcc00] lg:rounded-none px-7 pt-7">
          <h1 className="text-2xl font-semibold tracking-tight">Get in Touch</h1>
          <p className="text-sm text-[#888] mt-1">I&#39;ll get back to you as soon as possible.</p>

          {/* Social links */}
          <div className="flex gap-3 mt-5 pb-5 border-b border-[#2a2b2a]">
            {[
              { href: "https://www.linkedin.com/in/abdul-rahmon-ibn-qozeem-7a128b237", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://x.com/Noble_Sentinel_", icon: <FaTwitter />, label: "X" },
              { href: "https://wa.me/+2349020674910", icon: <FaWhatsapp />, label: "WhatsApp" },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#2e2f2e] text-[#aaa] text-sm hover:border-[#ffcc00] hover:text-[#ffcc00] transition-colors"
              >
                {icon}{label}
              </Link>
            ))}
          </div>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-4">
          {[
            { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
            { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-bold uppercase tracking-widest text-[#888] mb-1.5">
                {label}
              </label>
              <input
                id={id}
                name={id}
                type={type}
                value={form[id as keyof typeof form]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className="w-full px-3 py-2.5 bg-[#111211] border border-[#2e2f2e] rounded-lg text-sm text-white placeholder-[#444] focus:border-[#ffcc00] outline-none transition-colors"
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-[#888] mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="What's on your mind?"
              required
              className="w-full px-3 py-2.5 bg-[#111211] border border-[#2e2f2e] rounded-lg text-sm text-white placeholder-[#444] focus:border-[#ffcc00] outline-none transition-colors resize-none h-24 min-h-24 max-h-24"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#ffcc00] text-[#111] font-semibold text-sm rounded-lg hover:bg-[#e6b800] disabled:bg-[#b89a00] disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className={`text-sm px-3 py-2.5 rounded-lg border text-center ${
              status.type === "success"
                ? "bg-[#0d2b1a] border-[#1a5c35] text-[#4cdf8a]"
                : "bg-[#2b0d0d] border-[#5c1a1a] text-[#df4c4c]"
            }`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;