import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              <span className="font-bold text-white">IntelliAgent</span> © 2025
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm">Redes:</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
