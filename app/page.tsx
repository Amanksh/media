import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Campaign data for the parallax hero
const campaigns = [
  {
    title: "Fashion Influencer Campaign",
    link: "/campaigns/fashion",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Tech Product Launch",
    link: "/campaigns/tech",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Beauty Brand Promotion",
    link: "/campaigns/beauty",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Food & Lifestyle",
    link: "/campaigns/food",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Travel Experience",
    link: "/campaigns/travel",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Fitness Challenge",
    link: "/campaigns/fitness",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Gaming Promotion",
    link: "/campaigns/gaming",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Music Release",
    link: "/campaigns/music",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "App Launch Campaign",
    link: "/campaigns/app",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Sustainable Products",
    link: "/campaigns/sustainable",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Home Decor Collection",
    link: "/campaigns/home",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Educational Content",
    link: "/campaigns/education",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Luxury Brand Awareness",
    link: "/campaigns/luxury",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Sports Endorsement",
    link: "/campaigns/sports",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Parenting Products",
    link: "/campaigns/parenting",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
                WE HARNESS THE POWER OF CREATORS TO DRIVE TRUE HUMAN INFLUENCE
              </h1>
              <p className="mt-6 text-lg text-zinc-700 max-w-xl">
                Solv Media is the best influencer marketing agency in India
                which provides the top influencer marketing platform to help
                brands & visionary marketers leverage social media influencers.
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
              <div className="mt-12">
                <p className="text-sm font-medium uppercase text-zinc-500 mb-4">
                  Official Partners
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                  {["Meta", "TikTok", "YouTube", "Twitch", "Snapchat"].map(
                    (partner) => (
                      <div key={partner} className="text-zinc-400 font-medium">
                        {partner}
                      </div>
                    )
                  )}
                </div>
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

      {/* Clients Section */}
      <section className="py-16 border-t border-zinc-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-lg font-medium uppercase text-red-600 mb-2">
              Our Clients
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              "Coca-Cola",
              "Saudi",
              "Google",
              "Snapchat",
              "Essence Mediacom",
              "Ogilvy",
            ].map((client, i) => (
              <div key={i} className="text-zinc-400 font-medium">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-lg font-medium uppercase text-red-600 mb-2">
              Our Services
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Influencer Marketing Solutions
            </h3>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your
              influencer marketing campaigns
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Influencer Discovery",
                description:
                  "Find the perfect influencers for your brand based on audience demographics, engagement rates, and content quality.",
              },
              {
                title: "Campaign Strategy",
                description:
                  "Develop comprehensive campaign strategies aligned with your marketing objectives and target audience.",
              },
              {
                title: "Content Creation",
                description:
                  "Collaborate with influencers to create authentic, engaging content that resonates with their audience.",
              },
              {
                title: "Campaign Management",
                description:
                  "End-to-end campaign management from briefing influencers to tracking deliverables and timelines.",
              },
              {
                title: "Performance Analytics",
                description:
                  "Detailed reporting and analytics to measure campaign performance and ROI.",
              },
              {
                title: "Long-term Partnerships",
                description:
                  "Develop ongoing relationships with influencers for sustained brand advocacy and authentic promotion.",
              },
            ].map((service, i) => (
              <Card key={i} className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <div className="h-5 w-5 bg-red-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-zinc-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Influencer Grid */}
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

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Elevate Your Brand with Influencer Marketing?
            </h2>
            <p className="text-zinc-200 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of brands that have transformed their marketing
              strategy with our influencer campaigns.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white uppercase font-medium">
                Get in Touch
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 uppercase font-medium"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold">
                  Solv<span className="text-red-600">Media</span>
                </span>
              </Link>
              <p className="text-zinc-600 mb-6">
                India's leading influencer marketing agency connecting brands
                with the right influencers.
              </p>
              <div className="flex gap-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 rounded-full text-zinc-600 hover:text-red-600"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 rounded-full text-zinc-600 hover:text-red-600"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 rounded-full text-zinc-600 hover:text-red-600"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 rounded-full text-zinc-600 hover:text-red-600"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-zinc-600 hover:text-red-600">
                    Influencer Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-600 hover:text-red-600">
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-600 hover:text-red-600">
                    Brand Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-600 hover:text-red-600">
                    Campaign Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-600 hover:text-red-600">
                    Analytics & Reporting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-zinc-600 hover:text-red-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-600 hover:text-red-600">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-600 hover:text-red-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-600 hover:text-red-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-600 hover:text-red-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-zinc-600">
                <li>Email: info@solvmedia.com</li>
                <li>Phone: +91 1234567890</li>
                <li>Address: Mumbai, India</li>
              </ul>
              <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2023 Solv Media. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-zinc-500 hover:text-red-600 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-zinc-500 hover:text-red-600 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-zinc-500 hover:text-red-600 text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
