"use client";

import { NAV_ITEMS } from "@/constants/nav";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#003B5C] text-white py-10"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Logo and Description */}
        <div className="flex flex-col gap-6 max-w-md">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/footer-diamond.png"
              alt="High Caliber Logo"
              width={150}
              height={150}
            />
            <h2 className="text-4xl font-extrabold text-[#94e7ff]">
              High Caliber Visuals
            </h2>
          </div>
          <p className="text-base text-slate-300">
            Helping brands grow through exceptional web development, stunning
            designs, and impactful marketing. Let’s craft something incredible
            together.
          </p>
        </div>

        {/* Pages */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold">Pages</h4>
          <ul
            className="
              grid 
              grid-cols-2 
              sm:grid-cols-3 
              gap-x-8 gap-y-3 
              text-base
            "
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-[#00c6ff] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-6 pt-6 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} High Caliber Visuals. All rights
        reserved.
      </div>
    </motion.footer>
  );
}
