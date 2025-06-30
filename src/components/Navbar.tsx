"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/constants/nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r  from-white to-[#e3f6ff]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-24">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/logo.png"
            alt="High Caliber Logo"
            width={200}
            height={200}
          />
        </Link>

        <nav className="flex gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-blue-600 hover:text-black text-[18px] font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
