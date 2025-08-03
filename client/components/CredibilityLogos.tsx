export default function CredibilityLogos() {
  const partners = [
    { name: "Microsoft", logo: "Microsoft" },
    { name: "Amazon", logo: "Amazon" },
    { name: "Google", logo: "Google" },
    { name: "Salesforce", logo: "Salesforce" },
    { name: "HubSpot", logo: "HubSpot" },
  ];

  return (
    <section className="py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">
            Confiado por empresas líderes
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-12 px-6 text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
