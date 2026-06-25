"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-white dark:bg-black font-sans">

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#0F181F] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 lg:py-0">

        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #FF6012 0%, transparent 70%)", animation: "blobPulse 7s ease-in-out infinite" }}
          />
          <div
            className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #FF6012 0%, transparent 70%)", animation: "blobPulse 9s ease-in-out infinite 2s" }}
          />
          <div
            className="absolute -bottom-20 left-1/3 w-[340px] h-[340px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #ff8c42 0%, transparent 70%)", animation: "blobPulse 8s ease-in-out infinite 1s" }}
          />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#FF6012 1px, transparent 1px), linear-gradient(90deg, #FF6012 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Floating particles */}
          {[
            { top: "15%", left: "10%", size: 6, delay: "0s", dur: "4s" },
            { top: "70%", left: "8%", size: 4, delay: "1s", dur: "5s" },
            { top: "30%", left: "88%", size: 5, delay: "0.5s", dur: "6s" },
            { top: "80%", left: "80%", size: 3, delay: "2s", dur: "4.5s" },
            { top: "50%", left: "50%", size: 4, delay: "1.5s", dur: "5.5s" },
            { top: "20%", left: "60%", size: 3, delay: "3s", dur: "4s" },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#FF6012] opacity-30"
              style={{
                top: p.top, left: p.left,
                width: p.size, height: p.size,
                animation: `floatUp ${p.dur} ease-in-out infinite ${p.delay}`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

         

          {/* Headline */}
          <h1
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 mt-6 leading-[1.1]"
            style={{ animation: "fadeSlideDown 0.7s ease 0.1s both" }}
          >
            Building{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FF6012, #ff8c42, #FF6012)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}
            >
              Scalable Digital
            </span>
            <br />
            Solutions for{" "}
            <span className="text-white">Modern Businesses</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-sm sm:text-lg lg:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed px-2"
            style={{ animation: "fadeSlideDown 0.8s ease 0.2s both" }}
          >
            We help businesses build{" "}
            <span className="text-[#FF6012] font-semibold">web apps, websites, mobile apps, AI-powered MVPs</span>,{" "}
            ERP systems, Shopify stores, and scalable digital experiences tailored for growth and long-term success.
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10"
            style={{ animation: "fadeSlideDown 0.9s ease 0.3s both" }}
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span
                  className="text-2xl sm:text-3xl font-extrabold text-[#FF6012]"
                  style={{ animation: `countUp 1s ease ${0.4 + i * 0.1}s both` }}
                >
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-10"
            style={{ animation: "fadeSlideDown 1s ease 0.4s both" }}
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-[#FF6012] hover:bg-[#e0520d] text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-2"
              style={{ boxShadow: "0 0 32px rgba(255,96,18,0.45)" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
            </Link>

            <Link
              href="/contact"
              className="group border border-white/20 hover:border-[#FF6012]/60 bg-white/5 hover:bg-[#FF6012]/10 text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              {/* Calendar icon */}
              <svg className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Free Consultation
            </Link>
          </div>

    

         
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent pointer-events-none" />

        <style>{`
          @keyframes shimmer {
            0%   { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          @keyframes blobPulse {
            0%, 100% { transform: scale(1) translate(0, 0); }
            50%       { transform: scale(1.12) translate(10px, -15px); }
          }
          @keyframes floatUp {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
            50%       { transform: translateY(-18px) scale(1.3); opacity: 0.6; }
          }
          @keyframes rocketBounce {
            0%, 100% { transform: translate(0, 0) rotate(-35deg); }
            50%       { transform: translate(3px, -4px) rotate(-35deg); }
          }
          @keyframes fadeSlideDown {
            from { opacity: 0; transform: translateY(-18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes countUp {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.4; transform: scaleY(1); }
            50%       { opacity: 1; transform: scaleY(1.3); }
          }
        `}</style>
      </section>


      {/* AI-First Services Section */}
      <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left — sticky headline */}
            <div className="lg:w-[38%] lg:sticky lg:top-24">
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6012]/10 text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-6">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z"/></svg>
                AI-First Development
              </span>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F181F] leading-[1.1] mb-6">
                AI for speed.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6012 0%, #f95e77 50%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Human expertise
                </span>{" "}
                for everything else.
              </h2>

              <p className="text-gray-500 text-base leading-relaxed mb-8">
                We use tools like <span className="font-semibold text-[#0F181F]">Lovable, Cursor &amp; Replit</span> to scaffold fast, then our team handles auth, security, performance, and scale.{" "}
                <span className="font-semibold text-[#0F181F]">Zero tech debt.</span>
              </p>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-[#FF6012] font-bold text-sm hover:gap-3 transition-all duration-200"
              >
                Explore all services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right — 2×3 service cards grid */}
            <div className="lg:w-[62%] grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  iconBg: "bg-blue-50 text-blue-500",
                  tag: "AI",
                  tagColor: "bg-blue-100 text-blue-600",
                  title: "AI-Powered MVPs",
                  desc: "Idea to working product in 1–4 weeks. AI-scaffolded, engineer-hardened, investor-ready.",
                  href: "/services/ai-mvp",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  ),
                  iconBg: "bg-orange-50 text-[#FF6012]",
                  tag: "AI",
                  tagColor: "bg-orange-100 text-[#FF6012]",
                  title: "Vibe-Code Rescue",
                  desc: "Built with Lovable, Bolt, or Cursor? We fix the auth, security, and performance gaps AI left behind.",
                  href: "/services/vibe-code",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  ),
                  iconBg: "bg-indigo-50 text-indigo-500",
                  tag: "AI",
                  tagColor: "bg-indigo-100 text-indigo-600",
                  title: "AI Chatbots & RAG",
                  desc: "Custom bots trained on your data. RAG pipelines that give sourced, accurate answers.",
                  href: "/services/ai-chatbots",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                  iconBg: "bg-emerald-50 text-emerald-500",
                  tag: "AI",
                  tagColor: "bg-emerald-100 text-emerald-600",
                  title: "AI Workflow Automation",
                  desc: "Wire GPT, Claude, or custom models into your tools. Automate what slows your team down.",
                  href: "/services/ai-automation",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ),
                  iconBg: "bg-violet-50 text-violet-500",
                  tag: null,
                  tagColor: "",
                  title: "Websites That Convert",
                  desc: "Fast, SEO-first, mobile-perfect. Built to rank and convert, not just look good.",
                  href: "/services/websites",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                  iconBg: "bg-sky-50 text-sky-500",
                  tag: null,
                  tagColor: "",
                  title: "Web & Mobile Apps",
                  desc: "Full-stack apps in React, React Native, Laravel, MERN — whatever your product needs.",
                  href: "/services/apps",
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#FF6012]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${service.iconBg}`}>
                      {service.icon}
                    </div>
                    {service.tag && (
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${service.tagColor}`}>
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F181F] text-sm sm:text-base mb-1 group-hover:text-[#FF6012] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <section className="w-full py-24 px-4 lg:px-8 bg-primary text-white">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-white/80 max-w-2xl mb-10">
            Join hundreds of satisfied clients who have transformed their ideas into successful digital products with Comfygen.
          </p>
          <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-2xl flex items-center gap-2">
            Get a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}

const FAQS = [
  {
    q: "Do you handle everything from branding to website and e-commerce development?",
    a: "Yes. We're a full-stack shop, which means you're not juggling 3 different agencies who all blame each other when something breaks. You get one team, one point of contact, and one clear timeline. Branding, design, development, and launch — all handled.",
  },
  {
    q: "What's your process for delivering a project?",
    a: "Week 1 is strategy call and wireframes. Week 2–3 is design plus your feedback. Week 3–4 is development and testing. Week 4 is launch and handoff. No endless revision cycles. No surprise delays. We move fast because we ask the right questions upfront instead of guessing what you want.",
  },
  {
    q: "How long does a typical project take?",
    a: "Websites take 4 weeks. E-commerce takes 6–8 weeks. Branding takes 2 weeks. Web apps take 8–12 weeks if you need them. These are real timelines, not agency math where 4 weeks means 4 months. We hit deadlines because we don't overbook.",
  },
  {
    q: "Do you provide marketing services as well?",
    a: "Yes, but only if your foundation is solid first. We don't run ads to broken websites. We'll tell you if you need to fix your site before spending money on traffic. Then we build campaigns that actually convert.",
  },
  {
    q: "Do you build MVPs or just full-scale products?",
    a: "Both. We specialize in AI-powered MVPs that go from idea to working product in 1–4 weeks, as well as full-scale platforms built to grow. If you're a startup, we'll help you validate fast. If you're established, we'll help you scale.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. Every project includes 30 days of post-launch support. After that, you can keep us on retainer for updates, maintenance, and optimization. Or handle it yourself. Your call.",
  },
  {
    q: "What if I need ongoing updates and changes?",
    a: "We offer monthly retainers starting at $2K per month for ongoing support. Includes updates, optimizations, new pages, and priority support. Most clients stay with us because it's easier than hiring in-house and you get agency-level quality without the overhead.",
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "Both. We work with early-stage startups that need to launch fast and established businesses ready to scale. As long as you're serious about growth and have a budget to invest in quality, we're a good fit.",
  },
  {
    q: "What platforms do you build on?",
    a: "We primarily use Framer for websites and custom design work, Shopify for e-commerce backends, and modern frameworks like React for web apps. We choose tools that give you speed, flexibility, and the ability to manage things yourself after launch.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0F181F] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-12 lg:mb-16 leading-tight">
          Questions?{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #FF6012, #f95e77)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We got
          </span>{" "}
          answers.
        </h2>

        {/* Accordion */}
        <div className="divide-y divide-white/10">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
                      isOpen ? "text-[#FF6012]" : "text-white group-hover:text-[#FF6012]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-[#FF6012] bg-[#FF6012]/10 rotate-45"
                        : "border-white/20 group-hover:border-[#FF6012]/50"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-colors duration-200 ${
                        isOpen ? "text-[#FF6012]" : "text-white/60"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pt-4 pr-12">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
