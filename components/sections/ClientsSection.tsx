import Image from "next/image";

const brands = [
  {
    name: "Coca-Cola",
    image: "/brands/Coca-Cola_Logo_0.svg",
  },
  {
    name: "NIVEA",
    image: "/brands/NIVEA_Logo_0.svg",
  },
  {
    name: "1xbet",
    image: "/brands/1xbet-seeklogo.svg",
  },
  {
    name: "IDP",
    image: "/brands/IDP.png",
  },
  {
    name: "Profee",
    image: "/brands/profee.png",
  },
  {
    name: "Sony LIV",
    image: "/brands/soneliv.jpeg",
  },
  {
    name: "Kuku FM",
    image: "/brands/kukufm.jpeg",
  },
  {
    name: "Red Bull",
    image: "/brands/redbull.svg",
  },
  {
    name: "Angel One",
    image: "/brands/Angelone.png",
  },
];

export function ClientsSection() {
  return (
    <section className="py-16 border-t border-zinc-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium uppercase text-red-600 mb-2">
            Our Clients
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative w-full h-16  transition-all duration-300"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
