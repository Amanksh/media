import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Target,
  BarChart3,
  Users,
  Search as SearchIcon,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Influencer Discovery & Outreach",
    description: "Find and connect with the perfect influencers for your brand",
    icon: Search,
    features: [
      "Finding the right influencers (nano, micro, macro, or celebrity)",
      "Vetting for audience authenticity and brand fit",
      "Negotiating partnerships and pricing",
    ],
  },
  {
    id: 2,
    title: "Campaign Strategy & Planning",
    description: "Create impactful campaigns that drive results",
    icon: Target,
    features: [
      "Customized influencer campaign strategy",
      "Goal setting (brand awareness, engagement, sales, etc.)",
      "Platform selection (Instagram, YouTube, TikTok, etc.)",
    ],
  },
  {
    id: 3,
    title: "Campaign Management & Execution",
    description: "Seamless campaign execution from start to finish",
    icon: BarChart3,
    features: [
      "End-to-end coordination of live campaigns",
      "Scheduling posts and timelines",
      "Real-time monitoring of performance",
    ],
  },
  {
    id: 4,
    title: "User-Generated Content (UGC) Campaigns",
    description: "Leverage authentic content from your community",
    icon: Users,
    features: [
      "Encouraging organic posts from real customers",
      "Licensing and repurposing content",
    ],
  },
  {
    id: 5,
    title: "SEO",
    description: "Boost your online visibility and reach",
    icon: SearchIcon,
    features: [
      "Search engine optimization strategies",
      "Content optimization",
      "Performance tracking and analytics",
    ],
  },
  {
    id: 6,
    title: "Social Media Management",
    description: "Manage your social media presence with ease",
    icon: SearchIcon,
    features: [
      "Social media strategy development",
      "Posting and managing brand-owned channels",
      "Community engagement and DMs",
      "Calendar planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
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
              From influencer discovery to campaign execution, we provide
              end-to-end solutions to help your brand thrive in the digital
              landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-zinc-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2"></div>
                      <span className="text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
