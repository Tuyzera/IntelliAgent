import { Clock, Target, Brain, Puzzle, CheckCircle, Mouse } from "lucide-react";

export default function WhyChoose() {
  const pillars = [
    {
      title: "Suporte Personalizado 24/7",
      description:
        "Atendimento especializado disponível a qualquer hora, adaptado às suas necessidades específicas.",
      icon: Clock,
    },
    {
      title: "Automação de Vendas e Atendimento ao Cliente",
      description:
        "Processos automatizados que aumentam conversões e melhoram a experiência do cliente.",
      icon: Target,
    },
    {
      title: "Inteligência Artificial Adaptativa",
      description:
        "IA que aprende continuamente com suas operações para otimizar resultados constantemente.",
      icon: Brain,
    },
    {
      title: "Integração Simples com Ferramentas Existentes",
      description:
        "Conecte facilmente com seus sistemas atuais sem interrup��ões nos processos.",
      icon: Puzzle,
    },
    {
      title: "Resultados Comprovados e Garantidos",
      description:
        "Histórico de sucesso com clientes e garantia de resultados mensuráveis.",
      icon: CheckCircle,
    },
    {
      title: "Interface Intuitiva e Fácil de Usar",
      description:
        "Design pensado para facilitar o uso, sem necessidade de treinamento complexo.",
      icon: Mouse,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-800">
              IntelliAgent
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os benefícios únicos que fazem nossa solução a escolha
            ideal para transformar seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-corporate-blue-100 to-corporate-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-corporate-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
