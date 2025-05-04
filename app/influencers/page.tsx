"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FaInstagram, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { IconType } from "react-icons";

const categories = [
  { id: "all", name: "All" },
  { id: "fashion", name: "Fashion" },
  { id: "tech", name: "Tech" },
  { id: "gaming", name: "Gaming" },
  { id: "lifestyle", name: "Lifestyle" },
  { id: "food", name: "Food" },
  { id: "travel", name: "Travel" },
  { id: "fitness", name: "Fitness" },
];

const words = [
  { text: "Discover" },
  { text: "Top" },
  { text: "Influencers" },
  { text: "Across" },
  { text: "Categories", className: "text-red-600" },
];

type Platform = "instagram" | "youtube" | "tiktok" | "twitter";

interface Influencer {
  id: number;
  name: string;
  category: string;
  followers: string;
  platforms: {
    name: Platform;
    url: string;
  }[];
  image: string;
  engagement: string;
}

// Mock data for influencers
const influencers: Influencer[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    category: "fashion",
    followers: "1.2M",
    platforms: [
      { name: "instagram", url: "https://instagram.com/sarahjohnson" },
      { name: "youtube", url: "https://youtube.com/@sarahjohnson" },
    ],
    image: "/influencers/sarah.jpg",
    engagement: "4.8%",
  },
  {
    id: 2,
    name: "Tech Guru",
    category: "tech",
    followers: "850K",
    platforms: [
      { name: "youtube", url: "https://youtube.com/@techguru" },
      { name: "twitter", url: "https://twitter.com/techguru" },
    ],
    image: "/influencers/tech.jpg",
    engagement: "5.2%",
  },
  {
    id: 3,
    name: "Gaming Pro",
    category: "gaming",
    followers: "2.1M",
    platforms: [
      { name: "twitter", url: "https://twitter.com/gamingpro" },
      { name: "youtube", url: "https://youtube.com/@gamingpro" },
    ],
    image: "/influencers/gaming.jpg",
    engagement: "6.1%",
  },
  // Add more mock data as needed
];

const platformIcons: Record<
  Platform,
  { icon: IconType; color: string; hoverColor: string }
> = {
  instagram: {
    icon: FaInstagram,
    color: "text-[#E1306C]",
    hoverColor: "hover:text-[#C13584]",
  },
  youtube: {
    icon: FaYoutube,
    color: "text-[#FF0000]",
    hoverColor: "hover:text-[#CC0000]",
  },
  tiktok: {
    icon: FaTiktok,
    color: "text-[#000000]",
    hoverColor: "hover:text-[#333333]",
  },
  twitter: {
    icon: FaTwitter,
    color: "text-[#1DA1F2]",
    hoverColor: "hover:text-[#0D8BD9]",
  },
};

export default function InfluencersPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredInfluencers =
    selectedCategory === "all"
      ? influencers
      : influencers.filter(
          (influencer) => influencer.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <div className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <BackgroundBeams />
        <div className="relative flex flex-col items-center justify-center z-10 text-center">
          <TypewriterEffect words={words} />
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto px-4">
            Find the perfect influencer for your brand from our curated list of
            top creators
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <FiFilter className="text-red-600" />
              <h3 className="text-lg font-semibold">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  className={`${
                    selectedCategory === category.id
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "hover:bg-red-50"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Influencer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInfluencers.map((influencer) => (
              <motion.div
                key={influencer.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-48 bg-zinc-100">
                    {/* Add actual image here */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">
                        {influencer.name}
                      </h3>
                      <Badge className="mt-1 bg-red-600">
                        {influencer.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-zinc-600">Followers</p>
                        <p className="font-semibold">{influencer.followers}</p>
                      </div>
                      <div>
                        <p className="text-sm text-zinc-600">Engagement</p>
                        <p className="font-semibold">{influencer.engagement}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {influencer.platforms.map((platform) => {
                        const {
                          icon: Icon,
                          color,
                          hoverColor,
                        } = platformIcons[platform.name];
                        return (
                          <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-4  rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors ${color} ${hoverColor}`}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>

                    {/* <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                      View Profile
                    </Button> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
