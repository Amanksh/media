import Image from "next/image";
import { Button } from "@/components/ui/button";

const influencers = [
  {
    id: 1,
    image: "/creators/nischay.webp",
    username: "@triggeredinsan",
    category: "Gaming",
    followers: "11M",
  },
  {
    id: 2,
    image: "/creators/anshu.webp",
    username: "@gamerfleetog",
    category: "Gaming",
    followers: "2M",
  },
  {
    id: 3,
    image: "/creators/rony.webp",
    username: "@therawknee",
    category: "Gaming",
    followers: "8M",
  },
  {
    id: 4,
    image: "/creators/lokesh.webp",
    username: "@lokeshraj07",
    category: "Gaming",
    followers: "7M",
  },
  {
    id: 5,
    image: "/creators/apeksha.jpg",
    username: "@apekshagurnani",
    category: "Fashion and Lifestyle",
    followers: "177K",
  },
  {
    id: 6,
    image: "/creators/ukrider.jpeg",
    username: "@ukrider07",
    category: "Lifestyle",
    followers: "11M",
  },
  {
    id: 7,
    image: "/creators/sagar.jpeg",
    username: "@maxtern",
    category: "Gaming",
    followers: "1M",
  },
];

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
          {influencers.map((influencer) => (
            <div
              key={influencer.id}
              className="relative w-[300px] h-[300px] group overflow-hidden rounded-lg aspect-[3/4]"
            >
              <Image
                src={influencer.image}
                alt={influencer.username}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-white"></div>
                  <div className="text-white font-medium">
                    {influencer.username}
                  </div>
                </div>
                <div className="text-sm text-white/80">
                  {influencer.category} • {influencer.followers} followers
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          {/* <Button
            variant="outline"
            className="border-zinc-300 text-zinc-900 uppercase font-medium"
          >
            View All Influencers
          </Button> */}
        </div>
      </div>
    </section>
  );
}
