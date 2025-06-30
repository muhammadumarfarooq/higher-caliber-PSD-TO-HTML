import { MotionSection } from "./MotionSection";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  return (
    <MotionSection>
      <section className="w-full bg-[#eef9ff] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-center">
            Contact <span className="text-[#333]">us</span>
          </h2>
          <div className="w-14 h-1 bg-[#00bfff] mx-auto mb-10"></div>

          <form
            action="https://formspree.io/f/{your-id}"
            method="POST"
            className="space-y-6"
          >
            {/* Top Input Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                name="firstName"
                placeholder="First name"
                className="w-full border border-blue-200 rounded-md px-4 py-3 focus:outline-none"
              />
              <Input
                name="lastName"
                placeholder="Last name"
                className="w-full border border-blue-200 rounded-md px-4 py-3 focus:outline-none"
              />
              <Input
                name="email"
                placeholder="Email"
                className="w-full border border-blue-200 rounded-md px-4 py-3 focus:outline-none"
              />
              <Input
                name="phone"
                placeholder="Phone #"
                className="w-full border border-blue-200 rounded-md px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Message Box */}
            <Textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full border border-blue-200 rounded-md px-4 py-3 focus:outline-none"
            />

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#1abcfb] hover:bg-[#0aaee8] px-12 py-3 text-lg"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </section>
    </MotionSection>
  );
}
