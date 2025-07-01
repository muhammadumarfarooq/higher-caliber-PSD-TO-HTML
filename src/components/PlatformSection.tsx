"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PlatformSection() {
  return (
    <section
      id="development"
      className="relative w-full bg-white py-20 overflow-hidden"
    >
      {/* ✅ Background dots or subtle texture */}
      <div className="absolute inset-0 opacity-5 z-0">
        <Image
          src="/assets/platform-bg.png"
          alt="Background"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ✅ Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-neutral-800 mb-10 text-center"
        >
          Platform for Development
          <span className="block w-14 h-1.5 bg-[#00bfff] mt-4 mx-auto"></span>
        </motion.h2>

        {/* ✅ Content */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/platform-for-development-img.png"
              width={600}
              height={600}
              alt="Platform"
              className="object-contain"
            />
          </motion.div>

          {/* Right Side Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-lg w-full"
          >
            <h3>
              <span className="text-[42px] text-[#00bfff] font-extrabold">
                Shopify
              </span>{" "}
              <span className="text-[30px] text-[#4d4d4d] font-semibold">
                Web Development
              </span>
            </h3>
            <p className="mt-6 text-lg text-[#5a5a5a] text-justify leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
