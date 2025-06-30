import { SERVICES } from "@/constants/services";

export function Services() {
  return (
    <section className="py-20">
      <div className="mb-20 text-center mx-56">
        <h2 className="text-4xl font-bold mb-10">
          Our Services
          <span className="block w-14 h-1.5 bg-[#00bfff] mt-5 mx-auto"></span>
        </h2>
        <p className="text-center text-[16px] text-[#5c5c5c]">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="bg-[#f8fbfd] rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col gap-4"
          >
            <div className="flex items-start gap-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12"
              />
              <h3 className="text-lg font-bold text-neutral-800">
                {service.title}
              </h3>
            </div>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
