"use client";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import React, { useState, useRef, FormEvent } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_ENV_LOCAL_SERVICEID!,
        process.env.NEXT_PUBLIC_ENV_LOCAL_TEMPLATEID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_ENV_LOCAL_PUBLICKEY!
      );

      alert("Message successfully sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-white bg-[#151615] w-full gap-3 lg:gap-5 p-3 lg:p-6 h-[calc(100vh-50px)] lg:h-full lg:w-[450px] flex flex-col items-center">
      <h1 className="text-3xl font-bold">Get in Touch</h1>

      <div className="flex space-x-6">
        <Link
          href="https://www.linkedin.com/in/abdul-rahmon-ibn-qozeem-7a128b237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#ffcc00] hover:text-[#f4b400] transition-colors"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://x.com/young__techie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#ffcc00] hover:text-[#f4b400] transition-colors"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://wa.me/+2349020674910"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#ffcc00] hover:text-[#f4b400] transition-colors"
        >
          <FaWhatsapp />
        </Link>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-gray-800 flex flex-col gap-3 p-4 rounded-lg w-full max-w-md shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center">Leave a Message</h2>

        <div className="">
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-1 bg-[#151615] border border-gray-600 rounded focus:border-[#ffcc00] outline-none"
            required
          />
        </div>

        <div className="">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-1 bg-[#151615] border border-gray-600 rounded focus:border-[#ffcc00] outline-none"
            required
          />
        </div>

        <div className="">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full h-[100px] max-h-[100px] min-h-[100px] p-1 bg-[#151615] border border-gray-600 rounded focus:border-[#ffcc00] outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#ffcc00] text-[#151615] font-semibold py-2 rounded hover:bg-[#e6b800] transition-colors"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
