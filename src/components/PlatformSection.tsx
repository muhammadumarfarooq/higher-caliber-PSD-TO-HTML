import Image from "next/image";

export function PlatformSection() {
  return (
    <section className="relative w-full bg-white py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-5 z-0">
        <Image
          src="/assets/platform-bg.png"
          alt="Background"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-neutral-800 mb-10 text-center">
          Platform for Development
          <span className="block w-14 h-1.5 bg-[#00bfff] mt-5 mx-auto"></span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row mx-3 items-center">
          {/* Left Image */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/platform-for-development-img.png"
              width={600}
              height={600}
              alt="Platform"
              className="object-contain"
            />
          </div>

          {/* Right Text */}
          <div className="max-w-[500px] ">
            <h3>
              <span className="text-[42px] text-[#00bfff] font-extrabold">
                Shopify
              </span>{" "}
              <span className="text-[30px] text-[#4d4d4d] font-semibold">
                Web Development
              </span>
            </h3>
            <p className="mt-6 text-lg text-[#5a5a5a] text-justify leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
