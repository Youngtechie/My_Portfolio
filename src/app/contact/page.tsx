'use client'
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Message sent!");
    setForm({ fullName: "", email: "", message: "" });
  };

  return (
    <section className="text-white bg-[#151615] w-full gap-3 lg:gap-5 p-3 lg:p-6 h-[calc(100vh-50px)] lg:h-full lg:w-[450px] flex flex-col items-center">
      <h1 className="text-3xl font-bold">Get in Touch</h1>

      <div className="flex space-x-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#ffcc00] hover:text-[#f4b400] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#ffcc00] hover:text-[#f4b400] transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="https://wa.me/+2349020674910"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#ffcc00] hover:text-[#f4b400] transition-colors"
        >
          <FaWhatsapp />
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 flex flex-col gap-3 p-4 rounded-lg w-full max-w-md shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center">
          Leave a Message
        </h2>

        <div className="">
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
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
          className="w-full bg-[#ffcc00] text-[#151615] font-semibold py-2 rounded hover:bg-[#e6b800] transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
