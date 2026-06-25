"use client";
import Link from "next/link";
import React, { useState } from "react";
import BookDemo from "./BookDemo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(prev => prev === section ? null : section);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileSection(null);
  };

  return (
    <>
      {/* Top Bar (Scrolls away) */}
      <div className="bg-[#FF6012] text-[#FFFFFF] py-2 hidden md:block w-full z-40 relative">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between text-xs font-medium">
          {/* Left Side: Contact Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              help@webelogy.com
            </div>
            <div className="w-px h-4 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              E-66, Guru Nanak Pura, Jail Road, New Delhi-110058
            </div>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80 transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg></a>
            <div className="w-px h-3 bg-white/40"></div>
            <a href="#" className="hover:text-white/80 transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
            <div className="w-px h-3 bg-white/40"></div>
            <a href="#" className="hover:text-white/80 transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg></a>
          </div>
        </div>
      </div>

      {/* Main Nav (Sticky) */}
      <header className="sticky top-0 w-full z-50 bg-white text-gray-900 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">Comfygen</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full">

            <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors flex items-center h-full">
              Home
            </Link>

            <Link href="/about" className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors flex items-center h-full">
              About Us
            </Link>

            {/* Services Mega Menu */}
            <div className="mega-menu-group relative h-full flex items-center cursor-pointer">
              <span className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </span>
              <div className="mega-menu-content absolute top-20 left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-2xl rounded-xl p-8 border border-gray-100 flex gap-8">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-4 text-primary border-b border-gray-100 pb-2">App Development</h3>
                  <ul className="space-y-3">
                    <li><Link href="/services/mobile-app" className="text-sm text-gray-600 hover:text-primary transition-all">Mobile App Development</Link></li>
                    <li><Link href="/services/ios-app" className="text-sm text-gray-600 hover:text-primary transition-all">iOS App Development</Link></li>
                    <li><Link href="/services/android-app" className="text-sm text-gray-600 hover:text-primary transition-all">Android App Development</Link></li>
                    <li><Link href="/services/react-native" className="text-sm text-gray-600 hover:text-primary transition-all">React Native Development</Link></li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-4 text-primary border-b border-gray-100 pb-2">Emerging Tech</h3>
                  <ul className="space-y-3">
                    <li><Link href="/services/ai-dev" className="text-sm text-gray-600 hover:text-primary transition-all">AI Development</Link></li>
                    <li><Link href="/services/blockchain" className="text-sm text-gray-600 hover:text-primary transition-all">Blockchain Development</Link></li>
                    <li><Link href="/services/full-stack" className="text-sm text-gray-600 hover:text-primary transition-all">Full Stack Development</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors flex items-center h-full">
              Pricing Plan
            </Link>

            <div className="flex items-center h-full">
              <BookDemo />
            </div>

            <Link href="/contact" className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors flex items-center h-full">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA (Optional, since Contact/Demo are already in links, but we can keep a highlighted CTA) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg shadow-primary/30">
                Get Started →
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-zinc-950 shadow-xl border-t border-gray-100 dark:border-zinc-800 flex flex-col p-4 max-h-[calc(100vh-80px)] overflow-y-auto">

          {/* Mobile Link: Home */}
          <Link href="/" onClick={closeMobileMenu} className="py-4 px-4 text-base font-semibold border-b border-gray-100 dark:border-zinc-800 hover:text-primary">
            Home
          </Link>

          {/* Mobile Link: About Us */}
          <Link href="/about" onClick={closeMobileMenu} className="py-4 px-4 text-base font-semibold border-b border-gray-100 dark:border-zinc-800 hover:text-primary">
            About Us
          </Link>

          {/* Mobile Accordion: Services */}
          <div className="border-b border-gray-100 dark:border-zinc-800">
            <button
              className="w-full py-4 px-4 text-left text-base font-semibold flex justify-between items-center hover:text-primary transition-colors"
              onClick={() => toggleMobileSection('services')}
            >
              Services
              <svg className={`w-5 h-5 transition-transform ${expandedMobileSection === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {expandedMobileSection === 'services' && (
              <div className="pl-8 pr-4 pb-4 space-y-4 bg-gray-50 dark:bg-zinc-900 rounded-lg mb-2">
                <div className="pt-2">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">App Development</span>
                  <ul className="mt-2 space-y-3">
                    <li><Link href="/services/mobile-app" onClick={closeMobileMenu} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary block">Mobile App Development</Link></li>
                    <li><Link href="/services/ios-app" onClick={closeMobileMenu} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary block">iOS App Development</Link></li>
                    <li><Link href="/services/android-app" onClick={closeMobileMenu} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary block">Android App Development</Link></li>
                    <li><Link href="/services/react-native" onClick={closeMobileMenu} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary block">React Native Development</Link></li>
                  </ul>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-zinc-700">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">Emerging Tech</span>
                  <ul className="mt-2 space-y-3">
                    <li><Link href="/services/ai-dev" onClick={closeMobileMenu} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary block">AI Development</Link></li>
                    <li><Link href="/services/blockchain" onClick={closeMobileMenu} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary block">Blockchain Development</Link></li>
                    <li><Link href="/services/full-stack" onClick={closeMobileMenu} className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary block">Full Stack Development</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Link: Pricing Plan */}
          <Link href="/pricing" onClick={closeMobileMenu} className="py-4 px-4 text-base font-semibold border-b border-gray-100 dark:border-zinc-800 hover:text-primary">
            Pricing Plan
          </Link>

          {/* Mobile Link: Book a Demo */}
          <div className="py-4 px-4 border-b border-gray-100 dark:border-zinc-800">
            <BookDemo onOpen={closeMobileMenu} />
          </div>

          {/* Mobile Link: Contact */}
          <Link href="/contact" onClick={closeMobileMenu} className="py-4 px-4 text-base font-semibold border-b border-gray-100 dark:border-zinc-800 hover:text-primary">
            Contact
          </Link>

          {/* Mobile CTA */}
          <div className="pt-8 pb-4 px-4">
            <Link href="/contact" onClick={closeMobileMenu}>
              <button className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary/30 flex justify-center items-center gap-2">
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </Link>
          </div>
        </div>
      )}
      </header>
    </>
  );
}
