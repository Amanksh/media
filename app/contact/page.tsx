"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { useState } from "react";
import { toast } from "sonner";

const words = [
  {
    text: "Get",
  },
  {
    text: "in",
  },
  {
    text: "Touch",
  },
  {
    text: "With",
  },
  {
    text: "Us",
    className: "text-red-600",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/yourusername",
    color: "text-pink-600",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/company/buzznova-media/",
    color: "text-blue-600",
  },
  {
    name: "WhatsApp",
    icon: RiWhatsappLine,
    url: "https://wa.me/yournumber",
    color: "text-green-600",
  },
  {
    name: "Email",
    icon: MdEmail,
    url: "mailto:social@buzznova.media",
    color: "text-red-600",
  },
];

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <div className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <BackgroundBeams />
        <div className="relative flex flex-col items-center justify-center z-10 text-center">
          <TypewriterEffect words={words} />
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto px-4">
            We'd love to hear from you. Connect with us through any of these
            channels or send us a message directly.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Social Links */}
            <div>
              <Badge className="px-3 py-1 text-sm bg-red-600/10 text-red-600 border-red-600/20 rounded-full mb-4">
                Connect With Us
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Follow Us On Social Media
              </h2>
              <p className="text-zinc-600 mb-8">
                Stay updated with our latest news and updates by following us on
                social media.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-shadow">
                      <CardContent className="flex flex-col justify-center items-center ">
                        <social.icon
                          className={`md:text-2xl ${social.color}`}
                        />
                        <span className="font-medium">{social.name}</span>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Badge className="px-3 py-1 text-sm bg-red-600/10 text-red-600 border-red-600/20 rounded-full mb-4">
                Send Us a Message
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
