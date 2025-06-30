import Image from "next/image";

export function ClientLogos() {
  return (
    <section className="w-full bg-[#25aff2] py-2">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-20">
        <Image
          src="/assets/ribbon-icon/Image 9@2x.png"
          alt="Naspers"
          width={120}
          height={50}
        />
        <Image
          src="/assets/ribbon-icon/Image 10@2x.png"
          alt="WordPress"
          width={200}
          height={50}
        />
        <Image
          src="/assets/ribbon-icon/Image 11@2x.png"
          alt="Man Mo"
          width={240}
          height={50}
        />
        <Image
          src="/assets/ribbon-icon/Image 9@2x.png"
          alt="Naspers"
          width={120}
          height={50}
        />
        <Image
          src="/assets/ribbon-icon/Image 10@2x.png"
          alt="WordPress"
          width={200}
          height={50}
        />
      </div>
    </section>
  );
}
