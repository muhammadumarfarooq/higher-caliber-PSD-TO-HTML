"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    }, 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#f0faff] py-16"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">Contact Us</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 border rounded-lg px-4 py-3"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 border rounded-lg px-4 py-3"
              required
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 border rounded-lg px-4 py-3"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 border rounded-lg px-4 py-3"
            />
          </div>

          {/* Row 3 */}
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition disabled:opacity-60"
          >
            {isLoading && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
            )}
            {isLoading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
