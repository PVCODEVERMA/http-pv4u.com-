"use client";
import Link from "next/link";
import { useState } from "react";

// ── Static particles (avoids SSR hydration mismatch) ──────────────────────
const PARTICLES = [
  { top: "6%",  left: "4%",  size: 2, opacity: 0.4 },
  { top: "13%", left: "18%", size: 1, opacity: 0.3 },
  { top: "4%",  left: "38%", size: 2, opacity: 0.5 },
  { top: "20%", left: "62%", size: 1, opacity: 0.3 },
  { top: "10%", left: "79%", size: 2, opacity: 0.4 },
  { top: "33%", left: "91%", size: 1, opacity: 0.25 },
  { top: "48%", left: "2%",  size: 1, opacity: 0.2 },
  { top: "58%", left: "14%", size: 2, opacity: 0.35 },
  { top: "68%", left: "28%", size: 1, opacity: 0.3 },
  { top: "78%", left: "52%", size: 2, opacity: 0.3 },
  { top: "72%", left: "68%", size: 1, opacity: 0.4 },
  { top: "86%", left: "83%", size: 2, opacity: 0.3 },
  { top: "40%", left: "46%", size: 1, opacity: 0.2 },
  { top: "27%", left: "9%",  size: 1, opacity: 0.3 },
  { top: "93%", left: "23%", size: 2, opacity: 0.35 },
];

const SERVICES = [
  { icon: "🌐", title: "Web Development",      desc: "High-performance websites & web apps built for scale and speed." },
  { icon: "📱", title: "Mobile Apps",           desc: "iOS & Android apps that users love to open every day." },
  { icon: "🤖", title: "AI Solutions",          desc: "GPT-powered chatbots, workflow automation & AI MVPs." },
  { icon: "🛒", title: "eCommerce",             desc: "Shopify & custom stores engineered to convert." },
  { icon: "🎨", title: "UI/UX Design",          desc: "Pixel-perfect interfaces that feel premium and modern." },
  { icon: "📊", title: "Digital Marketing",     desc: "SEO, paid ads & campaigns that drive measurable results." },
  { icon: "⚙️", title: "ERP Systems",           desc: "Custom enterprise solutions that streamline operations." },
  { icon: "🔗", title: "API Integration",       desc: "Seamless third-party and custom API connectivity." },
];

const PROCESS = [
  { step: "01", title: "Discovery",    desc: "We deep-dive into your goals, audience, and competition to map out winning strategy." },
  { step: "02", title: "Design",       desc: "Pixel-perfect wireframes and prototypes — you see it before we build it." },
  { step: "03", title: "Development",  desc: "Clean, scalable code with modern frameworks, reviewed at every stage." },
  { step: "04", title: "Launch & Grow",desc: "Deploy, monitor, optimize — and scale confidently as your business grows." },
];

const TEAM = [
  { name: "Rahul Sharma",  role: "CEO & Founder",    initials: "RS", color: "#FF6012" },
  { name: "Priya Singh",   role: "Lead Designer",    initials: "PS", color: "#e0520d" },
  { name: "Amit Kumar",    role: "Full Stack Dev",   initials: "AK", color: "#c7450b" },
  { name: "Sneha Patel",   role: "AI Engineer",      initials: "SP", color: "#FF6012" },
  { name: "Vikram Joshi",  role: "Mobile Dev",       initials: "VJ", color: "#e0520d" },
  { name: "Neha Gupta",    role: "Project Manager",  initials: "NG", color: "#c7450b" },
];

const REVIEWS = [
  { name: "James Wilson",  company: "TechStart Inc.",  stars: 5, text: "Absolutely incredible work. They delivered our entire platform in 3 weeks. The quality is outstanding and the team communication was flawless." },
  { name: "Sarah Chen",    company: "GrowthLab",       stars: 5, text: "Best development team we've worked with. On time, on budget, and the results speak for themselves. Highly recommended." },
  { name: "Mike Rodriguez",company: "E-Commerce Co.",  stars: 5, text: "Our Shopify store conversion rate went up 340% after their redesign. Mind-blowing results in just 4 weeks." },
  { name: "Ananya Kapoor", company: "HealthTech",      stars: 5, text: "They built our entire AI-powered app from scratch in 4 weeks. Truly remarkable capability and a pleasure to work with." },
];

const INDUSTRIES = [
  { icon: "🏥", label: "Healthcare" },
  { icon: "🛍️", label: "Retail" },
  { icon: "🏦", label: "Finance" },
  { icon: "🎓", label: "Education" },
  { icon: "🏗️", label: "Real Estate" },
  { icon: "🍽️", label: "Restaurant" },
  { icon: "🚀", label: "Startups" },
  { icon: "⚖️", label: "Legal" },
];

const STATS = [
  { value: "500+",  label: "Projects Delivered" },
  { value: "1030+", label: "Happy Clients" },
  { value: "120+",  label: "Team Members" },
  { value: "10+",   label: "Years Experience" },
];

const AWARDS = [
  { icon: "🏆", label: "Clutch Top Agency 2024" },
  { icon: "⭐", label: "GoodFirms Top Dev" },
  { icon: "🥇", label: "AppFutura Award" },
  { icon: "🌟", label: "Trustpilot 5★" },
  { icon: "🔝", label: "Upwork Top Rated+" },
  { icon: "✅", label: "ISO Certified" },
];

const PRESS   = ["TechCrunch", "Forbes", "Entrepreneur", "Inc.", "Business Insider", "Wired"];
const TECHS   = ["React", "Next.js", "Node.js", "Laravel", "Shopify", "AWS", "Firebase", "MongoDB"];

const FAQS = [
  { q: "Do you handle everything from branding to website and e-commerce development?", a: "Yes. We're a full-stack shop — branding, design, development, and launch all handled by one team, one contact, and one clear timeline. No finger-pointing between agencies." },
  { q: "What's your process for delivering a project?",                                  a: "Week 1: Strategy & wireframes. Week 2–3: Design & your feedback. Week 3–4: Development & testing. Week 4: Launch & handoff. Real timelines, not agency math." },
  { q: "How long does a typical project take?",                                           a: "Websites: 4 weeks. eCommerce: 6–8 weeks. Branding: 2 weeks. Web apps: 8–12 weeks. We hit deadlines because we don't overbook our team." },
  { q: "Do you build MVPs or just full-scale products?",                                  a: "Both. AI-powered MVPs from idea to working product in 1–4 weeks, and full-scale platforms built to grow. We validate fast and scale smart." },
  { q: "Do you provide post-launch support?",                                             a: "Yes. Every project includes 30 days of post-launch support. After that, retainer options are available. Or handle it yourself — your call." },
  { q: "Do you work with startups or only established businesses?",                       a: "Both. Early-stage startups who need to launch fast, and established businesses ready to scale. As long as you're serious about growth, we're a great fit." },
];

// ── Brand gradient bg used in dark sections ────────────────────────────────
const DARK_BG = { background: "linear-gradient(135deg, #080d1f 0%, #0d1535 100%)" } as const;

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans" style={{ background: "#080d1f" }}>

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden min-h-[90dvh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-20" style={DARK_BG}>

        {/* Background glow & particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #FF6012 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #4f46e5 0%, transparent 65%)" }} />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(#FF6012 1px,transparent 1px),linear-gradient(90deg,#FF6012 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
          {PARTICLES.map((p, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{ top: p.top, left: p.left, width: p.size, height: p.size, opacity: p.opacity }} />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">

          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 border border-white/25 rounded-full px-5 py-2 text-xs sm:text-sm text-white/70 backdrop-blur-sm">
            Building Brands <strong className="text-white font-bold">Worldwide.</strong>
          </div>

          {/* Tagline with decorative lines */}
          <div className="flex items-center gap-3 w-full max-w-2xl justify-center">
            <div className="h-px bg-white/25 flex-1 max-w-[60px] sm:max-w-[120px]" />
            <p className="text-[9px] sm:text-[11px] font-bold tracking-[0.25em] text-white/50 uppercase whitespace-nowrap">
              Accelerating Businesses Beyond Boundaries
            </p>
            <div className="h-px bg-white/25 flex-1 max-w-[60px] sm:max-w-[120px]" />
          </div>

          {/* Main headline */}
          <h1 className="font-black uppercase leading-[0.9] tracking-tight">
            <span className="block text-[clamp(2.4rem,10vw,7rem)] text-white">
              Building Websites
            </span>
            <span
              className="block text-[clamp(2rem,9.5vw,6.5rem)]"
              style={{ WebkitTextStroke: "2px #FF6012", color: "transparent" }}
            >
              Generating Leads!
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/60 max-w-3xl leading-relaxed">
            We are an India-based team of{" "}
            <span className="text-[#FF6012] font-semibold">Web Developers, Web Designers</span>, and{" "}
            <span className="text-[#FF6012] font-semibold">Mobile App Developers</span>{" "}
            (Android & iOS), working together to bring your ideas to life. From websites that look great
            and perform brilliantly, to campaigns that drive the right traffic, build real connections,
            and deliver measurable results — everything we do is{" "}
            <span className="text-[#FF6012] font-semibold">shaped around your business goals</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <Link href="/contact"
              className="bg-[#FF6012] hover:bg-[#e0520d] text-white px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2"
              style={{ boxShadow: "0 0 30px rgba(255,96,18,0.45)" }}>
              Start Your Project →
            </Link>
            <Link href="/portfolio"
              className="border border-white/25 hover:border-[#FF6012]/60 bg-white/5 hover:bg-[#FF6012]/10 text-white px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 1b. ABOUT THE ENGINEER ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#ffffff] py-8 sm:py-12 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">

          {/* Top heading */}
          <div className="mb-8 sm:mb-12">
            <p className="text-3xl sm:text-4xl lg:text-5xl text-[#888] font-light leading-tight tracking-tight">
              A modern engineer&rsquo;s approach
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl text-[#111] font-black leading-tight tracking-tight mt-1">
              to building great apps.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">

            {/* Left — photo card */}
            <div className="w-full max-w-[280px] sm:max-w-[300px] lg:w-1/3 flex-shrink-0 mx-auto lg:mx-0">
              <div className="relative">

                {/* Floating badge */}
                <div className="absolute -top-3 left-6 z-10 bg-white border border-[#111] text-[#111] text-[11px] font-semibold px-3 py-1.5 tracking-wide shadow-sm">
                  beyond tellerrand
                </div>

                {/* Photo frame */}
                <div className="relative border-2 border-[#111] overflow-hidden rounded-md"
                  style={{ filter: "grayscale(100%) contrast(1.05)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/engineer_portrait.jpeg"
                    alt="Junald Jamel — Software Engineer"
                    className="w-full object-cover object-top"
                    style={{ aspectRatio: "4/4.5" }}
                  />

                  {/* Social icon row — bottom-right overlay */}
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    {[
                      /* YouTube */
                      <svg key="yt" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>,
                      /* Instagram */
                      <svg key="ig" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.7 1.7 4.8 4.8.1 1.3.1 1.6.1 4.9s0 3.6-.1 4.8c-.2 3.2-1.6 4.7-4.8 4.8-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.2-.2-4.7-1.6-4.8-4.8C2.2 15.6 2.2 15.3 2.2 12s0-3.6.1-4.8C2.5 3.9 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.4 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.4 0 8.7 0 12s0 3.6.1 4.9C.3 21.3 2.7 23.7 7.1 23.9 8.4 24 8.7 24 12 24s3.6 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.3.1-1.6.1-4.9s0-3.6-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.6 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>,
                      /* LinkedIn */
                      <svg key="li" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1a3.8 3.8 0 0 1 3.4-1.9c3.6 0 4.2 2.4 4.2 5.4v6.3zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13H3.5V9h3.6v11.4zM22.2 0H1.8A1.8 1.8 0 0 0 0 1.8v20.4A1.8 1.8 0 0 0 1.8 24h20.4A1.8 1.8 0 0 0 24 22.2V1.8A1.8 1.8 0 0 0 22.2 0z"/></svg>,
                    ].map((icon, idx) => (
                      <button
                        key={idx}
                        className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Caption below photo */}
                <div className="mt-4">
                  <p className="font-bold text-[#111] text-sm">Junald Jamel</p>
                  <p className="text-gray-500 text-xs mt-0.5 flex items-center gap-2">
                    Software Engineer
                    <span className="text-gray-400">→</span>
                    building mobile apps
                  </p>
                </div>
              </div>
            </div>

            {/* Right — bio copy */}
            <div className="lg:w-2/3 pt-2">
              <p className="text-[#111] font-bold text-sm sm:text-base leading-relaxed mb-4">
                I wrote my first line of code over half a decade ago — and never looked back.
              </p>
              <p className="text-[#444] text-sm sm:text-base leading-relaxed mb-5">
                What started as tinkering with apps grew into a passion for building mobile experiences
                people love. I now develop for iOS, Android, and cross-platform, using the best tools to
                deliver high-quality apps.
              </p>
              <p className="text-[#111] font-bold text-sm sm:text-base leading-relaxed mb-4">
                Good work is quiet. Bad work is loud.
              </p>
              <p className="text-[#444] text-sm sm:text-base leading-relaxed">
                If it draws attention for the wrong reasons, it&rsquo;s unfinished. I refine until it simply
                works, letting the experience speak for itself.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 2. TOGETHER / WHY US ═════════════════════════════════════════════ */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

            {/* Left copy */}
            <div className="lg:w-1/2">
              <span className="text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-3 block">Why Choose Us</span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#080d1f] leading-tight mb-5 uppercase">
                Together{" "}
                <span className="text-[#FF6012]">We Build</span>{" "}
                More Than Websites
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7">
                We're not just developers — we're your growth partners. Every project is built with strategy, speed, and scalability in mind. When you win, we win.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Full-stack development from design to deployment",
                  "AI-powered tools integrated into your workflow",
                  "Mobile-first, SEO-optimised, performance-tuned",
                  "Transparent process with weekly progress updates",
                  "30-day post-launch support included",
                  "Dedicated project manager for every client",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-[#FF6012]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#FF6012]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF6012] hover:bg-[#e0520d] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                style={{ boxShadow: "0 4px 20px rgba(255,96,18,0.35)" }}>
                Get Free Consultation →
              </Link>
            </div>

            {/* Right — stats card */}
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden p-8" style={DARK_BG}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "500+", label: "Projects Done",       icon: "🚀" },
                    { value: "98%",  label: "Client Satisfaction",  icon: "⭐" },
                    { value: "10+",  label: "Years Experience",     icon: "🏆" },
                    { value: "24/7", label: "Support Available",    icon: "💬" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl sm:text-3xl font-black text-[#FF6012]">{stat.value}</div>
                      <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-[#FF6012]/10 border border-[#FF6012]/30 rounded-2xl p-4 text-center">
                  <p className="text-[#FF6012] font-bold text-sm">🔥 Currently accepting new clients for July 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. REVIEWS THAT BUILD TRUST ══════════════════════════════════════ */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={DARK_BG}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-3 block">Testimonials</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight">
              Reviews That{" "}
              <span style={{ WebkitTextStroke: "2px #FF6012", color: "transparent" }}>Build Trust!</span>
            </h2>
          </div>
          <style>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(calc(-100% - 1.25rem)); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          `}</style>
          <div className="flex overflow-hidden w-full pb-4 gap-5 group">
            {[...Array(3)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-5 shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
                {REVIEWS.map((r, i) => (
                  <div key={i} className="w-[260px] sm:w-[300px] shrink-0 bg-white/5 border border-white/10 hover:border-[#FF6012]/40 rounded-2xl p-5 transition-all duration-200 flex flex-col">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(r.stars)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-[#FF6012]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 flex-1">"{r.text}"</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                      <div className="w-8 h-8 rounded-full bg-[#FF6012] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold">{r.name}</p>
                        <p className="text-white/40 text-[10px]">{r.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. BUILT FOR EVERY INDUSTRY ══════════════════════════════════════ */}
      <section className="w-full bg-[#f8f9ff] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-3 block">Industries We Serve</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#080d1f] uppercase leading-tight">
              Built For Every{" "}
              <span className="text-[#FF6012]">Business</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-4">
              From startups to enterprises — we've delivered digital solutions across every major industry.
            </p>
          </div>

          {/* Industry icons */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-10">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl bg-white border border-gray-100 hover:border-[#FF6012]/30 hover:shadow-md transition-all duration-200 cursor-default">
                <span className="text-2xl sm:text-3xl">{ind.icon}</span>
                <span className="text-[10px] sm:text-xs font-semibold text-[#080d1f] text-center">{ind.label}</span>
              </div>
            ))}
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#FF6012]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-bold text-[#080d1f] text-sm sm:text-base mb-1">{s.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. OUR PROCESS ═══════════════════════════════════════════════════ */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={DARK_BG}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-3 block">How We Work</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase">
              Our{" "}
              <span style={{ WebkitTextStroke: "2px #FF6012", color: "transparent" }}>Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:border-[#FF6012]/40 rounded-2xl p-6 transition-all duration-200">
                <div className="text-5xl font-black text-[#FF6012]/20 mb-3 leading-none">{step.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. FEATURED IN ═══════════════════════════════════════════════════ */}
      {/* <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 sm:mb-8">Featured In</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 items-center">
            {PRESS.map((name, i) => (
              <span key={i} className="text-lg sm:text-xl font-black text-gray-300 hover:text-[#FF6012] transition-colors duration-200 cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══ 7. MEET THE TEAM ═════════════════════════════════════════════════ */}
      {/* <section className="w-full bg-[#f8f9ff] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-3 block">Our People</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#080d1f] uppercase">
              Meet The{" "}
              <span className="text-[#FF6012]">Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl mb-3 flex items-center justify-center font-black text-xl text-white group-hover:scale-105 transition-transform duration-200"
                  style={{ background: `linear-gradient(135deg, ${member.color}, #ff8c42)` }}
                >
                  {member.initials}
                </div>
                <p className="font-bold text-[#080d1f] text-xs sm:text-sm">{member.name}</p>
                <p className="text-gray-400 text-[10px] sm:text-xs">{member.role}</p>
              </div>
            ))}
          </div>
         
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { value: "320+", label: "Total Team Size" },
              { value: "10+",  label: "Years Together" },
              { value: "30+",  label: "Tech Stacks" },
              { value: "48h",  label: "Avg Response Time" },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 text-center hover:border-[#FF6012]/30 hover:shadow-md transition-all duration-200">
                <div className="text-3xl font-black text-[#FF6012] mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══ 8. OUR IMPACT IN NUMBERS ═════════════════════════════════════════ */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={DARK_BG}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-3 block">Numbers Don't Lie</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase">
              Our Impact{" "}
              <span style={{ WebkitTextStroke: "2px #FF6012", color: "transparent" }}>In Numbers</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center border border-white/10 rounded-2xl p-6 bg-white/5 hover:border-[#FF6012]/40 transition-all duration-200">
                <div className="text-4xl sm:text-5xl font-black text-[#FF6012] mb-2">{stat.value}</div>
                <div className="text-white/50 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. WHAT OUR CLIENTS SAY ══════════════════════════════════════════ */}
      {/* <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-3 block">Client Love</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#080d1f] uppercase">
              What Our{" "}
              <span className="text-[#FF6012]">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-[#f8f9ff] rounded-2xl p-5 border border-gray-100 hover:border-[#FF6012]/30 hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.stars)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#FF6012]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 flex-1">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#FF6012] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-[#080d1f] text-xs font-semibold">{r.name}</p>
                    <p className="text-gray-400 text-[10px]">{r.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══ 10. AWARDS & RECOGNITION ═════════════════════════════════════════ */}
      <section className="w-full bg-[#f8f9ff] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-3 block">Our Achievements</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#080d1f] uppercase">
              Awards &{" "}
              <span className="text-[#FF6012]">Recognition</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {AWARDS.map((award, i) => (
              <div key={i} className="bg-white border border-gray-100 hover:border-[#FF6012]/30 rounded-2xl p-4 text-center hover:shadow-md transition-all duration-200">
                <div className="text-2xl mb-2">{award.icon}</div>
                <p className="text-[10px] sm:text-xs font-bold text-[#080d1f] leading-tight">{award.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 11. HAVE A PROJECT IN MIND (CTA) ═════════════════════════════════ */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={DARK_BG}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-3 block">Let's Build Together</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-4">
            Have A Project{" "}
            <span style={{ WebkitTextStroke: "2px #FF6012", color: "transparent" }}>In Mind?</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Tell us about your idea. We'll get back to you within 24 hours with a free consultation and proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="bg-[#FF6012] hover:bg-[#e0520d] text-white px-10 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2"
              style={{ boxShadow: "0 0 30px rgba(255,96,18,0.4)" }}>
              Get Free Quote →
            </Link>
            <Link href="/portfolio"
              className="border border-white/25 hover:border-[#FF6012]/60 bg-white/5 hover:bg-[#FF6012]/10 text-white px-10 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 12. CARRYING CREDIBILITY / TECH STACK ════════════════════════════ */}
      <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 sm:mb-8">
            Carrying Credibility — Trusted By 1000+ Businesses Worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 items-center">
            {TECHS.map((tech, i) => (
              <span key={i} className="text-sm font-black text-gray-400 hover:text-[#FF6012] transition-colors duration-200 cursor-default px-3 py-1.5 rounded-lg border border-gray-100 hover:border-[#FF6012]/30">
                {tech}
              </span>
            ))}
          </div>
          {/* Press logos row */}
          <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-6 sm:gap-10 items-center">
            {PRESS.map((name, i) => (
              <span key={i} className="text-base sm:text-lg font-black text-gray-300 hover:text-[#FF6012] transition-colors duration-200 cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 13. FAQ ══════════════════════════════════════════════════════════ */}
      <FaqSection />

    </div>
  );
}

// ── FAQ Accordion ──────────────────────────────────────────────────────────
function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #080d1f 0%, #0d1535 100%)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[#FF6012] text-xs font-bold uppercase tracking-widest mb-3 block">FAQ</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight">
            Questions?{" "}
            <span style={{ WebkitTextStroke: "2px #FF6012", color: "transparent" }}>We Got</span>{" "}
            Answers.
          </h2>
        </div>

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
                  <span className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${isOpen ? "text-[#FF6012]" : "text-white group-hover:text-[#FF6012]"}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-[#FF6012] bg-[#FF6012]/10 rotate-45" : "border-white/20 group-hover:border-[#FF6012]/50"}`}>
                    <svg className={`w-3.5 h-3.5 transition-colors duration-200 ${isOpen ? "text-[#FF6012]" : "text-white/60"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <div className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pt-4 pr-12">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
