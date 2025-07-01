"use client";

import { SERVICES } from "@/constants/services";
import { motion } from "framer-motion";
import Image from "next/image";

export function Services() {
  return (
    <section id="services" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-neutral-800 mb-12">
          Our Services
          <span className="block w-14 h-1.5 bg-[#00bfff] mt-5 mx-auto rounded-full"></span>
        </h2>

        <div className="mb-16 max-w-3xl mx-auto text-center text-[16px] text-[#5c5c5c] leading-relaxed">
          "Our services are designed to elevate your brand through innovative
          web development, captivating design, and result-driven marketing
          strategies."
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="group relative backdrop-blur-md bg-white/70 border border-slate-200 
                rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all flex flex-col gap-4"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <h3 className="text-lg font-bold text-neutral-800">
                  {service.title}
                </h3>
              </div>

              <p className="text-[15px] text-neutral-700 leading-relaxed">
                {service.description ||
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
