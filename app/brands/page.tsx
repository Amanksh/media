"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const brands = [
  {
    name: "Nike",
    logo: "/brands/nike.svg",
    category: "Sports & Lifestyle",
    description: "Global leader in athletic footwear and apparel",
  },
  {
    name: "Apple",
    logo: "/brands/apple.svg",
    category: "Technology",
    description: "Innovative consumer electronics and software",
  },
  {
    name: "Coca-Cola",
    logo: "/brands/coca-cola.svg",
    category: "Beverages",
    description: "World's leading beverage company",
  },
  {
    name: "Amazon",
    logo: "/brands/amazon.svg",
    category: "E-commerce",
    description: "Global online retail and technology company",
  },
  {
    name: "Samsung",
    logo: "/brands/samsung.svg",
    category: "Electronics",
    description: "Leading consumer electronics manufacturer",
  },
  {
    name: "Adidas",
    logo: "/brands/adidas.svg",
    category: "Sports & Lifestyle",
    description: "Global sportswear and lifestyle brand",
  },
];

const testimonials = [
  {
    quote:
      "Working with Solv Media transformed our influencer marketing strategy. The results exceeded our expectations.",
    name: "Sarah Johnson",
    title: "Marketing Director, Nike",
  },
  {
    quote:
      "The team's expertise in influencer marketing helped us reach new audiences and increase brand awareness.",
    name: "Michael Chen",
    title: "Brand Manager, Apple",
  },
  {
    quote:
      "Solv Media's data-driven approach and creative campaigns delivered exceptional ROI for our brand.",
    name: "Emily Rodriguez",
    title: "Digital Marketing Lead, Coca-Cola",
  },
  {
    quote:
      "Their understanding of the influencer landscape and ability to create authentic content is unmatched.",
    name: "David Kim",
    title: "Social Media Manager, Samsung",
  },
];

const words = [
  {
    text: "Trusted",
  },
  {
    text: "by",
  },
  {
    text: "Leading",
  },
  {
    text: "Brands",
    className: "text-red-600",
  },
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <BackgroundBeams />
        <div className="relative z-10 text-center">
          <TypewriterEffect words={words} />
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto px-4">
            Join the ranks of industry leaders who trust us to elevate their
            brand through strategic influencer partnerships
          </p>
        </div>
      </div>

      {/* Brands Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="px-3 py-1 text-sm bg-red-600/10 text-red-600 border-red-600/20 rounded-full mb-4">
              Our Partners
            </Badge>
            <TextGenerateEffect
              words="Leading Brands We've Worked With"
              className="text-3xl md:text-5xl font-bold mb-4"
            />
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We've partnered with some of the world's most recognized brands to
              create impactful influencer marketing campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-zinc-200 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="h-16 w-16 rounded-lg bg-zinc-100 flex items-center justify-center mb-4 group-hover:bg-red-600/10 transition-colors">
                      <div className="h-8 w-8 bg-zinc-200 rounded"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
                    <Badge className="mb-2 bg-red-600/10 text-red-600 border-red-600/20">
                      {brand.category}
                    </Badge>
                    <p className="text-zinc-600">{brand.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <Badge className="px-3 py-1 text-sm bg-red-600/10 text-red-600 border-red-600/20 rounded-full mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Partners Say
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Hear from brands that have experienced the power of our influencer
              marketing solutions
            </p>
          </div>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <WavyBackground
          className="max-w-4xl mx-auto"
          colors={["#dc2626", "#ef4444", "#f87171"]}
          backgroundFill="white"
        >
          <div className="relative z-10 text-center">
            <Badge className="px-3 py-1 text-sm bg-red-600/10 text-red-600 border-red-600/20 rounded-full mb-4">
              Get Started
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Network of Leading Brands?
            </h2>
            <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
              Partner with us to create impactful influencer marketing campaigns
              that drive results
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Contact Us
            </Button>
          </div>
        </WavyBackground>
      </section>
    </div>
  );
}
