import { Button } from './ui/button';
import { Play, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-corporate-blue-50 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-corporate-blue-100/20 via-transparent to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                A Solução Inteligente que Vai{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-800">
                  Impulsionar
                </span>{' '}
                Seus Resultados
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Tecnologia avançada que otimiza seu trabalho, aumenta a produtividade e gera resultados.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-corporate-blue-600 hover:bg-corporate-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Comece Agora com 20% de Desconto
              </Button>
              
              <Button variant="outline" className="border-2 border-corporate-blue-600 text-corporate-blue-600 hover:bg-corporate-blue-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Assista à Demonstração
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-corporate-blue-600" />
                <span className="font-semibold text-gray-900">97%</span>
              </div>
              <span>de satisfação entre nossos usuários</span>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="relative">
            <div className="relative z-10 animate-fadeInRight">
              <div className="bg-white rounded-2xl shadow-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/16125027/pexels-photo-16125027.jpeg"
                  alt="AI Dashboard Interface"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-corporate-blue-600 text-white px-4 py-2 rounded-lg shadow-lg animate-float">
              <span className="text-sm font-semibold">97% Eficiência</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-float-delayed">
              <span className="text-sm font-semibold">+200% ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
