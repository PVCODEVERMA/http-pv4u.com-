import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="text-2xl font-bold tracking-tight">Comfygen</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge AI, Blockchain, and Mobile App solutions. Your trusted partner for digital transformation.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-primary transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/mobile-app" className="text-gray-400 hover:text-primary transition-colors text-sm">Mobile App Development</Link></li>
              <li><Link href="/ai-dev" className="text-gray-400 hover:text-primary transition-colors text-sm">AI Solutions</Link></li>
              <li><Link href="/blockchain" className="text-gray-400 hover:text-primary transition-colors text-sm">Blockchain Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="font-semibold text-white">Email:</span> sales@comfygen.com
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-white">Phone:</span> +91 9587867258
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Comfygen Technologies. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
