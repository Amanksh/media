import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
              WE HARNESS THE POWER OF CREATORS TO DRIVE TRUE HUMAN INFLUENCE
            </h1>
            <p className="mt-6 text-lg text-zinc-700 max-w-xl">
              Solv Media is the best influencer marketing agency in India which
              provides the top influencer marketing platform to help brands &
              visionary marketers leverage social media influencers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white uppercase font-medium">
                For Brands
              </Button>
              <Button
                variant="outline"
                className="border-zinc-300 text-zinc-900 uppercase font-medium"
              >
                For Creators
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[3/4] md:aspect-[4/5]">
              <img
                src="/hero-2.webp"
                alt="Influencer marketing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 -z-10">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50,250 C150,350 250,350 350,250 C450,150 350,50 250,50 C150,50 50,150 50,250 Z"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="1"
                />
                <path
                  d="M70,230 C170,330 230,330 330,230 C430,130 330,70 230,70 C130,70 70,130 70,230 Z"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="1"
                />
                <path
                  d="M90,210 C190,310 210,310 310,210 C410,110 310,90 210,90 C110,90 90,110 90,210 Z"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
