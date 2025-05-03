import Image from "next/image";
import { Button } from "@/components/ui/button";

export function InfluencerGridSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-lg font-medium uppercase text-red-600 mb-2">
            Our Network
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Connect with Top Influencers
          </h3>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Access our extensive network of influencers across various niches
            and platforms
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-lg aspect-[3/4]"
            >
              <Image
                src={`/placeholder.svg?height=${300 + i * 10}&width=${
                  250 + i * 10
                }`}
                alt="Influencer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-white"></div>
                  <div className="text-white font-medium">@username</div>
                </div>
                <div className="text-sm text-white/80">
                  Fashion & Lifestyle • 250K followers
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="border-zinc-300 text-zinc-900 uppercase font-medium"
          >
            View All Influencers
          </Button>
        </div>
      </div>
    </section>
  );
}
