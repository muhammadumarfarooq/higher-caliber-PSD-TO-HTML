"use client";

import { INFO_BOXES } from "@/constants/infoBoxes";
import { motion } from "framer-motion";

export function InfoBoxes() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {INFO_BOXES.map((box) => (
          <motion.div
            key={box.label}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="group backdrop-blur-lg bg-white/60 border border-white/40 rounded-xl hover:border-[#00aaff] hover:shadow-lg transition-all p-6 flex flex-col items-center justify-center gap-4"
          >
            <img
              src={box.icon}
              alt={box.label}
              className="w-24 h-24 group-hover:scale-105 transition-transform"
            />
            <p className="text-center text-lg font-semibold text-gray-700">
              {box.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
