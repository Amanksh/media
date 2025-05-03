export function ClientsSection() {
  return (
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
  );
}
