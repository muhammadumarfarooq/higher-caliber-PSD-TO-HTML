import { NAV_ITEMS } from "@/constants/nav";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#003B5C] text-white py-10">
      <div className="flex justify-between max-w-7xl mx-auto mt-28 px-6 gap-12 items-start">
        {/* Left Section: Logo + Description */}
        <div className="flex flex-col md:flex-row items-start gap-20 ml-4">
          <div className="relative w-fit">
            {/* Diamond Image */}
            <Image
              src="/assets/footer-diamond.png"
              alt="High Caliber Logo"
              width={320}
              height={300}
              className="object-contain"
            />

            {/* Heading overlay */}
            <h1 className="absolute inset-0 flex items-center justify-center text-[#94e7ff] text-[37px] font-extrabold leading-[43px] w-[394px] text-center tracking-[12px]">
              High Caliber <br /> Visuals
            </h1>
          </div>
          <p className="text-lg leading-relaxed max-w-md">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.
          </p>
        </div>

        {/* Center Section: Pages */}
        <div className="text-center mr-20">
          <h4 className="text-xl font-semibold mb-4">Pages</h4>
          <ul className="space-y-2">
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
      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-300">
        &copy; {new Date().getFullYear()} High Caliber Visuals. All rights
        reserved.
      </div>
    </footer>
  );
}
