import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Oliveira",
      location: "Brasil",
      rating: 5,
      text: "Implementamos o Agente de IA no atendimento ao cliente e a diferença foi imediata! Aumentou nossa produtividade e os clientes estão mais satisfeitos.",
      avatar:
        "https://images.pexels.com/photos/6204232/pexels-photo-6204232.jpeg",
    },
    {
      name: "João Santos",
      location: "Brasil",
      rating: 5,
      text: "O agente de IA que usamos para automatizar nossas vendas tem sido essencial. A solução não só aumentou nossas conversões, como também reduziu o tempo de resposta.",
      avatar:
        "https://images.pexels.com/photos/33258804/pexels-photo-33258804.jpeg",
    },
    {
      name: "Ana Costa",
      location: "Brasil",
      rating: 5,
      text: "Excelente ferramenta! A integração com o nosso CRM foi super simples e o suporte 24/7 realmente fez a diferença para nossa equipe.",
      avatar:
        "https://images.pexels.com/photos/7693223/pexels-photo-7693223.jpeg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus resultados com
            IntelliAgent
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
