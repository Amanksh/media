import { Card, CardContent } from "@/components/ui/card";

const services = [
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
];

export function ServicesSection() {
  return (
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
          {services.map((service, i) => (
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
  );
}
