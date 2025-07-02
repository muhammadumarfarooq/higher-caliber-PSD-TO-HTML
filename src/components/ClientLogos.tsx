"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  {
    title: "Shopify",
    lightSrc: "/assets/client-logos/shopify1.png",
    href: "https://shopify.com",
  },
  {
    title: "Webflow",
    lightSrc: "/assets/client-logos/Webflow.png",
    href: "https://webflow.com",
  },
  {
    title: "Slack",
    lightSrc: "/assets/client-logos/slack.png",
    href: "https://slack.com",
  },
  {
    title: "Notion",
    lightSrc: "/assets/client-logos/Notion.png",
    href: "https://notion.so",
  },
  {
    title: "Figma",
    lightSrc: "/assets/client-logos/Figma.png",
    href: "https://figma.com",
  },
  {
    title: "Zapier",
    lightSrc: "/assets/client-logos/Zapier.png",
    href: "https://zapier.com",
  },
];

export function ClientLogos() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold uppercase text-muted-foreground tracking-wide"
        >
          Trusted by leading brands & partners
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center"
        >
          {clientLogos.map((logo) => (
            <motion.a
              key={logo.title}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={logo.title}
              whileHover={{ scale: 1.08 }}
              className="transition grayscale hover:grayscale-0 opacity-80 hover:opacity-100 duration-300"
            >
              <div className="flex items-center justify-center h-[120px] w-[160px]">
                <Image
                  src={logo.lightSrc}
                  alt={`${logo.title} logo`}
                  width={140}
                  height={50}
                  className="object-contain h-full w-full dark:hidden"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
