import { MessageSquare, User, TrendingUp, Link, Zap, Bot, BarChart3, Settings } from 'lucide-react';

export default function Features() {
  const mainFeature = {
    title: 'Atendimento ao Cliente Automatizado',
    description: 'Revolucione seu atendimento com IA que compreende e responde clientes 24/7 com precisão humana.',
    icon: MessageSquare,
  };

  const features = [
    {
      title: 'Assistente Pessoal Inteligente',
      description: 'IA personalizada que aprende suas preferências e otimiza seu fluxo de trabalho.',
      icon: User,
    },
    {
      title: 'Vendas Automatizadas e Personalizadas',
      description: 'Automatize processos de venda com abordagens personalizadas para cada cliente.',
      icon: TrendingUp,
    },
    {
      title: 'Integração com CRMs e Ferramentas de Vendas',
      description: 'Conecte facilmente com Salesforce, HubSpot e outras ferramentas existentes.',
      icon: Link,
    },
    {
      title: 'Respostas Rápidas e Precisas',
      description: 'Obtenha respostas instantâneas e precisas para todas as consultas dos clientes.',
      icon: Zap,
    },
    {
      title: 'Chatbots com IA para Suporte Imediato',
      description: 'Chatbots inteligentes que resolvem problemas complexos automaticamente.',
      icon: Bot,
    },
    {
      title: 'Automação de Processos Comerciais',
      description: 'Automatize tarefas repetitivas e foque no que realmente importa.',
      icon: Settings,
    },
    {
      title: 'Análise Preditiva de Vendas',
      description: 'Previsões precisas de vendas baseadas em dados e machine learning.',
      icon: BarChart3,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Features
          </h2>
        </div>

        {/* Main Feature Card */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-corporate-blue-50 to-corporate-blue-100 rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-corporate-blue-600 rounded-2xl flex items-center justify-center">
                  <mainFeature.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {mainFeature.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {mainFeature.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-corporate-blue-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-corporate-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
