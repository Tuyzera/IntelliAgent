import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-corporate-blue-600 via-corporate-blue-700 to-corporate-blue-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-corporate-blue-500/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-corporate-blue-600/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-white">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Transforme Seu Atendimento Agora
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
                Adquira Seu Agente de IA e revolucione a forma como sua empresa atende e vende
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-corporate-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                Comece Agora com 20% de Desconto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Ver Demonstração
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Implementação gratuita</span>
              </div>
            </div>
          </div>

          {/* Right Column - App Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/16125027/pexels-photo-16125027.jpeg"
                  alt="App Preview"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating metrics */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-float">
              <span className="text-sm font-semibold">97% Sucesso</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg animate-float-delayed">
              <span className="text-sm font-semibold">+5000 Clientes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
