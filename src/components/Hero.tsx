"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { InfoBoxes } from "./InfoBoxes";

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex flex-col gap-16 md:gap-24 items-center justify-between max-w-7xl mx-auto px-6 py-24 overflow-hidden bg-gradient-to-r from-white to-[#e3f6ff]"
    >
      <div className="absolute top-[3%] left-[-78.5%] w-[1100px] h-[460px] opacity-30 z-0">
        <Image
          src="/assets/dots.png"
          alt="dots"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute right-[-100px] bottom-[-100px] w-[300px] h-[320px] bg-gradient-to-br from-blue-100 via-white to-transparent blur-2xl rounded-full opacity-40 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="flex gap-4 ml-10 md:ml-16">
            <div className="w-16 h-[240px] bg-gradient-to-b from-[#00c6ff] to-[#0072ff]"></div>

            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#0073f3]">
                Become the <br /> Expert of your Industry
              </h1>
              <p className="mt-2 text-lg text-[#6f6f6f] font-semibold">
                Give Brilliance to Your Brand <br /> With Exceptional E-Commerce
                <br />
                Development
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <Image
            src="/assets/header-slider-img.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="relative z-10 w-full">
        <InfoBoxes />
      </div>
    </section>
  );
}
