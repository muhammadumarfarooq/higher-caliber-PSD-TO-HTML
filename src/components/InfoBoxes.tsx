import { INFO_BOXES } from "@/constants/infoBoxes";
import { MotionSection } from "./MotionSection";

export function InfoBoxes() {
  return (
    <MotionSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10">
        {INFO_BOXES.map((box) => (
          <div
            key={box.label}
            className="group bg-white h-[270px] w-[270px] transition-all border hover:border-[#00aaff] shadow-sm hover:shadow-md p-6 flex flex-col items-center justify-center gap-4 relative"
          >
            <img src={box.icon} alt={box.label} className="w-32 h-32" />

            <p className="text-center text-lg font-medium text-gray-700">
              {box.label}
            </p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
