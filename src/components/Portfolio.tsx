import { PORTFOLIO_ITEMS } from "@/constants/portfolio";
import { MotionSection } from "./MotionSection";

export function Portfolio() {
  return (
    <MotionSection>
      <section className="relative w-full text-center items-center justify-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-neutral-800 mb-10 text-center">
            Portfolio
            <span className="block w-14 h-1.5 bg-[#00bfff] mt-5 mx-auto"></span>
          </h2>

          {/* Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:scale-105 transition-transform w-[280px]"
              >
                <div className="aspect-video bg-gray-100 rounded-t-xl w-full"></div>
                <div className="p-4 text-center font-medium text-neutral-700">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionSection>
  );
}
