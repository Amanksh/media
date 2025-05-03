import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
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
  );
}
