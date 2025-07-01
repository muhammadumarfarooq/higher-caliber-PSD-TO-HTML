"use client";

import { PORTFOLIO_ITEMS } from "@/constants/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Portfolio() {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <section
      id="portfolio"
      className="relative w-full bg-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-neutral-800 mb-12">
          Portfolio
          <span className="block w-14 h-1.5 bg-[#00bfff] mt-5 mx-auto rounded-full"></span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="group relative backdrop-blur-lg bg-white/70 border border-slate-200 
              rounded-xl p-5 shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              {/* Image */}
              <div className="aspect-video rounded-lg overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <button
                    onClick={() => setSelected(item)}
                    className="bg-white text-[#0072ff] px-4 py-2 rounded-md text-sm hover:bg-slate-100"
                  >
                    View More
                  </button>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0072ff] text-white px-4 py-2 rounded-md text-sm hover:bg-[#005fcc]"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Title */}
              <div className="text-center text-lg font-semibold text-neutral-700 mt-4">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-3xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-4">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-neutral-700 mb-4">
              {selected.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add a description in your data file."}
            </p>
            <a
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0072ff] text-white px-5 py-2 rounded-md hover:bg-[#005fcc]"
            >
              Visit Website
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
