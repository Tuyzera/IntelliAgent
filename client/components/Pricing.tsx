import { Button } from "./ui/button";
import { Check, Clock } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Plano Básico",
      originalPrice: "R$ 99,00",
      promotionalPrice: "R$ 69,00",
      annualPrice: "R$ 828,00",
      description: "Ideal para pequenas empresas ou empreendedores iniciantes que precisam automatizar apenas algumas tarefas, como o atendimento básico ao cliente ou vendas.",
      features: [
        "1 Agente de IA",
        "Suporte 24/7",
        "Integração com 1 CRM",
        "Relatórios mensais de desempenho",
      ],
      popular: false,
    },
    {
      name: "Plano Profissional",
      originalPrice: "R$ 299,00",
      promotionalPrice: "R$ 199,00",
      annualPrice: "R$ 2.388,00",
      description: "Para empresas em crescimento que buscam automação mais robusta e integração com várias ferramentas.",
      features: [
        "Até 3 Agentes de IA",
        "Suporte prioritário 24/7",
        "Integração com até 3 CRMs",
        "Relatórios detalhados e personalizados",
        "Automação de vendas e análise de dados",
      ],
      popular: true,
    },
    {
      name: "Plano Empresarial",
      originalPrice: "R$ 799,00",
      promotionalPrice: "R$ 499,00",
      annualPrice: "R$ 5.988,00",
      description: "Ideal para empresas de médio a grande porte que querem aproveitar ao máximo o potencial da IA e da automação em todas as suas operações.",
      features: [
        "Agentes de IA ilimitados",
        "Suporte 24/7 com atendimento exclusivo",
        "Integração com CRMs e ferramentas personalizadas",
        "Relatórios e análises avançadas",
        "Treinamento e consultoria personalizados",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-800">
              Aproveite a Promoção!
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferta por tempo limitado. Garanta o preço promocional nos 3 primeiros meses!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                plan.popular
                  ? "border-corporate-blue-500 ring-2 ring-corporate-blue-500 ring-opacity-50"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-corporate-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-gray-500 line-through">
                      {plan.originalPrice}
                    </span>
                    <span className="text-4xl font-bold text-red-600">
                      {plan.promotionalPrice}
                    </span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-1 text-red-600 text-sm font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Oferta por tempo limitado!</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500">
                    Duração da Promoção: 3 primeiros meses com preço promocional
                  </p>
                  <p className="text-sm text-corporate-blue-600 font-semibold mt-2">
                    Ou {plan.annualPrice}/ano com 2 meses grátis
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-corporate-blue-600 hover:bg-corporate-blue-700 text-white"
                    : "bg-corporate-blue-100 hover:bg-corporate-blue-200 text-corporate-blue-700"
                }`}
              >
                Assine Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
