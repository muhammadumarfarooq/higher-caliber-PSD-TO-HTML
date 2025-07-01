"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { InfoBoxes } from "./InfoBoxes";

export function Hero() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section
      id="about"
      className="relative flex flex-col gap-16 md:gap-24 items-center justify-between max-w-7xl mx-auto px-6 py-40 overflow-hidden bg-gradient-to-r from-white to-[#e3f6ff]"
    >
      {/* Background Dots */}
      <div className="absolute top-[8%] left-[-78.5%] w-[1100px] h-[460px] opacity-30 z-0">
        <Image
          src="/assets/dots.png"
          alt="dots"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating Blobs */}
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-gradient-to-br from-blue-100 to-white blur-3xl rounded-full opacity-50 z-0"
      />

      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 15, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-80px] left-[-80px] w-96 h-96 bg-gradient-to-br from-[#c5f1ff] to-white blur-3xl rounded-full opacity-60 z-0"
      />

      <motion.div
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] right-[-40px] w-40 h-40 bg-gradient-to-br from-blue-50 to-white blur-2xl rounded-full opacity-40 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="flex gap-4 ml-10 md:ml-16">
            <div className="w-16 h-[240px] bg-gradient-to-b from-[#00c6ff] to-[#0072ff]"></div>

            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text">
                Build. Grow. Thrive. <br />
                With High Caliber Visuals
              </h1>
              <p className="mt-4 text-lg md:text-xl text-[#5a5a5a] font-medium leading-relaxed">
                Empower your brand with brilliant web development, elegant
                design, and powerful marketing strategies.
              </p>

              <div className="mt-8 flex gap-6">
                <button className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white px-8 py-3 rounded-lg shadow-md hover:scale-105 transition">
                  Get a Quote
                </button>
                <button className="border-2 border-[#00c6ff] text-[#00c6ff] px-8 py-3 rounded-lg hover:bg-[#e3f6ff] transition">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Parallax + Floating Hero Image */}
        <motion.div
          style={{ y: yImage }}
          animate={{
            x: [0, -20, 20, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="flex-1"
        >
          <Image
            src="/assets/header-slider-img.png"
            alt="Hero Image"
            width={750}
            height={750}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* InfoBoxes */}
      <div className="relative z-10 w-full">
        <InfoBoxes />
      </div>
    </section>
  );
}
