import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function FooterSection() {
  return (
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
              India's leading influencer marketing agency connecting brands with
              the right influencers.
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
            <Link href="#" className="text-zinc-500 hover:text-red-600 text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-red-600 text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-red-600 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
