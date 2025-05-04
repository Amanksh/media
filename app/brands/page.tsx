"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
  { name: "Red Bull", logo: "/brands/redbull.svg" },
  { name: "Profee", logo: "/brands/profee.png" },
  { name: "IDP", logo: "/brands/IDP.png" },
  { name: "Kuku FM", logo: "/brands/kukufm.jpeg" },
  { name: "Sony LIV", logo: "/brands/soneliv.jpeg" },
  { name: "1xBet", logo: "/brands/1xbet-seeklogo.svg" },
  { name: "Angel One", logo: "/brands/Angelone.png" },
  { name: "NIVEA", logo: "/brands/NIVEA_Logo_0.svg" },
  { name: "Coca-Cola", logo: "/brands/Coca-Cola_Logo_0.svg" },
];

const testimonials = [
  {
    quote:
      "Working with BuzzNova Media transformed our influencer marketing strategy. The results exceeded our expectations.",

    title: "Marketing Director, Angel One",
  },
  {
    quote:
      "Solv Media's data-driven approach and creative campaigns delivered exceptional ROI for our brand.",

    title: "Digital Marketing Lead, Coca-Cola",
  },
  {
    quote:
      "Their understanding of the influencer landscape and ability to create authentic content is unmatched.",

    title: "Social Media Manager, Kuku FM",
  },
  {
    quote:
      "Their understanding of the influencer landscape and ability to create authentic content is unmatched.",

    title: "Social Media Manager, Sony LIV",
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group relative aspect-square bg-gray-50 rounded-lg p-6 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg" />
              </div>
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
            <a
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md inline-flex items-center"
            >
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </WavyBackground>
      </section>
    </div>
  );
}
