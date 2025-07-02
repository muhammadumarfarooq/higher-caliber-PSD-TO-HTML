"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#003B5C] text-white pt-12 pb-6"
    >
      <div className="max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-12 mx-16">
        {/* Left Section */}
        <div className="flex flex-col gap-4 max-w-[480px]">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/footer-diamond.png"
              alt="High Caliber Logo"
              width={60}
              height={60}
            />
          </div>
          <p className="text-base text-slate-300 leading-relaxed">
            Helping brands grow through exceptional web development, stunning
            designs, and impactful marketing. Let’s craft something incredible
            together.
          </p>
        </div>

        {/* Right Section: Company and Support */}
        <div className="flex flex-col sm:flex-row gap-32">
          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-[#00c6ff]">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00c6ff]">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#00c6ff]">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="hover:text-[#00c6ff]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00c6ff]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#00c6ff]">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} High Caliber Visuals. All rights
        reserved.
      </div>
    </motion.footer>
  );
}
