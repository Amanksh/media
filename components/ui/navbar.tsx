"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/brands", label: "Brands" },
    { href: "/influencers", label: "Influencers" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4">
      <div className="container">
        <div className="flex items-center justify-between max-w-5xl mx-auto bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full border border-zinc-200 dark:border-zinc-800 px-6 py-3 shadow-sm">
          <div className="flex flex-col items-center justify-center leading-none select-none">
            <div className="flex items-center space-x-1">
              <span
                className="text-xl font-extrabold text-[#ff3131] tracking-wider font-sans"
                style={{
                  fontFamily:
                    "Fredoka One, Baloo, Arial Rounded MT Bold, Arial, sans-serif",
                }}
              >
                BUZZ
              </span>
              <span className="relative inline-block">
                <span
                  className="block text-xl font-extrabold text-[#ff3131] tracking-wider font-sans"
                  style={{
                    fontFamily:
                      "Fredoka One, Baloo, Arial Rounded MT Bold, Arial, sans-serif",
                  }}
                >
                  NOVA
                </span>
                <span className="absolute left-1/6 -translate-x-1/5 -top-1 w-5 h-1 bg-[#ff3131] rounded-full"></span>
              </span>
            </div>
            <span className="text-[10px] tracking-[0.3em] text-black font-serif mt-1">
              MEDIA
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-bold transition-colors hover:text-red-600",
                    isActive ? "text-red-600" : "text-zinc-900 dark:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href={"/contact"}
              className="bg-red-600 p-2 px-3  hover:bg-red-700 text-white rounded-full text-sm font-bold hidden md:flex"
            >
              Get in Touch
            </Link>
            <Button
              variant="outline"
              className="md:hidden border-zinc-300 dark:border-zinc-700 p-2 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col items-center justify-center leading-none select-none">
              <div className="flex items-center space-x-1">
                <span
                  className="text-xl font-extrabold text-[#ff3131] tracking-wider font-sans"
                  style={{
                    fontFamily:
                      "Fredoka One, Baloo, Arial Rounded MT Bold, Arial, sans-serif",
                  }}
                >
                  BUZZ
                </span>
                <span className="relative inline-block">
                  <span
                    className="block text-xl font-extrabold text-[#ff3131] tracking-wider font-sans"
                    style={{
                      fontFamily:
                        "Fredoka One, Baloo, Arial Rounded MT Bold, Arial, sans-serif",
                    }}
                  >
                    N
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 -top-1 w-5 h-1 bg-[#ff3131] rounded-full"></span>
                </span>
                <span
                  className="text-xl font-extrabold text-[#ff3131] tracking-wider font-sans"
                  style={{
                    fontFamily:
                      "Fredoka One, Baloo, Arial Rounded MT Bold, Arial, sans-serif",
                  }}
                >
                  OVA
                </span>
              </div>
              <span className="text-[10px] tracking-[0.3em] text-black font-serif mt-1">
                MEDIA
              </span>
            </div>
            <Button
              variant="outline"
              className="border-zinc-300 dark:border-zinc-700 p-2 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-bold transition-colors hover:text-red-600 py-2",
                    isActive ? "text-red-600" : "text-zinc-900 dark:text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 mt-auto">
            <Link
              href={"/contact"}
              className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
