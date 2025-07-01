"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CLIENT_LOGOS = [
  { src: "/assets/ribbon-icon/Image 9@2x.png", alt: "Naspers" },
  { src: "/assets/ribbon-icon/Image 10@2x.png", alt: "WordPress" },
  { src: "/assets/ribbon-icon/Image 11@2x.png", alt: "Man Mo" },
  { src: "/assets/ribbon-icon/Image 9@2x.png", alt: "Naspers" },
  { src: "/assets/ribbon-icon/Image 10@2x.png", alt: "WordPress" },
];

export function ClientLogos() {
  return (
    <section className="w-full bg-[#25aff2] py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-10"
        >
          Our Clients & Partners
          <span className="block w-14 h-1.5 bg-white mt-4 mx-auto rounded-full"></span>
        </motion.h3>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-16"
        >
          {CLIENT_LOGOS.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={50}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
