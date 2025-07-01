"use client";

import { MotionSection } from "./MotionSection";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  return (
    <MotionSection>
      <section
        id="contact"
        className="w-full bg-[#eef9ff] py-24 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-center text-neutral-800 mb-12">
            Contact <span className="text-[#333]">Us</span>
            <span className="block w-14 h-1.5 bg-[#00bfff] mt-5 mx-auto rounded-full"></span>
          </h2>

          {/* Form */}
          <form
            action="https://formspree.io/f/{your-id}" // replace {your-id}
            method="POST"
            className="backdrop-blur-lg bg-white/70 border border-slate-200 rounded-xl p-8 shadow-md space-y-6"
          >
            {/* Inputs Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                name="firstName"
                placeholder="First Name"
                required
                className="border border-blue-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                required
                className="border border-blue-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
              />
              <Input
                name="email"
                placeholder="Email"
                required
                type="email"
                className="border border-blue-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
              />
              <Input
                name="phone"
                placeholder="Phone #"
                required
                className="border border-blue-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
              />
            </div>

            {/* Message */}
            <Textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="border border-blue-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
            />

            {/* Submit */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#00bfff] hover:bg-[#00a6e6] px-10 py-3 text-lg rounded-md"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </MotionSection>
  );
}
