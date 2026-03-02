"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ─── SERVICE TAB DATA ─── */
const services = [
  {
    id: "engine",
    label: "Engine",
    icon: "🔧",
    description:
      "From minor tune-ups to complete engine overhauls, we diagnose and fix engine problems right the first time.",
    items: [
      "Engine Diagnostics & Computer Scan",
      "Tune-Ups & Performance Optimization",
      "Timing Belt & Chain Replacement",
      "Head Gasket Repair",
      "Engine Rebuild & Replacement",
      "Cooling System & Radiator Service",
    ],
    note: "Most engine diagnostics completed same day.",
  },
  {
    id: "brakes",
    label: "Brakes",
    icon: "🛑",
    description:
      "Your safety is non-negotiable. We inspect, repair, and replace every component of your braking system.",
    items: [
      "Brake Pad & Shoe Replacement",
      "Rotor Resurfacing & Replacement",
      "Brake Line Inspection & Repair",
      "ABS Diagnostics & Repair",
      "Brake Fluid Flush",
      "Emergency Brake Service",
    ],
    note: "Free brake inspection with any service.",
  },
  {
    id: "transmission",
    label: "Transmission",
    icon: "⚙️",
    description:
      "Transmission issues can be complex. We provide honest assessments and expert repairs to get you shifting smoothly.",
    items: [
      "Transmission Fluid Service",
      "Transmission Repair & Rebuild",
      "Clutch Replacement",
      "Torque Converter Service",
      "Differential Repair",
      "Driveline Service",
    ],
    note: "Honest diagnostics — we never upsell what you don't need.",
  },
  {
    id: "electrical",
    label: "Electrical",
    icon: "⚡",
    description:
      "Modern vehicles rely on complex electrical systems. We have the tools and expertise to diagnose any issue.",
    items: [
      "Battery Testing & Replacement",
      "Alternator & Starter Repair",
      "Wiring Diagnosis & Repair",
      "Computer Diagnostic Scan",
      "Lighting & Accessory Installation",
      "Sensor Replacement",
    ],
    note: "State-of-the-art diagnostic equipment.",
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: "🛢️",
    description:
      "Preventive maintenance saves you money. Keep your car running at peak performance with regular service.",
    items: [
      "Oil Change (Conventional & Synthetic)",
      "Air & Cabin Filter Replacement",
      "Tire Rotation & Balancing",
      "Fluid Checks & Top-Off",
      "Belt & Hose Inspection",
      "Multi-Point Vehicle Inspection",
    ],
    note: "Quick turnaround — most maintenance done in under an hour.",
  },
  {
    id: "diagnostics",
    label: "Diagnostics",
    icon: "📊",
    description:
      "Check engine light on? Strange noise? We use advanced diagnostic tools to pinpoint the exact problem.",
    items: [
      "Check Engine Light Diagnosis",
      "OBD-II Computer Scan",
      "Performance Testing",
      "Emissions System Diagnosis",
      "Noise & Vibration Analysis",
      "Pre-Purchase Vehicle Inspection",
    ],
    note: "Know exactly what's wrong before spending a dime.",
  },
];

/* ─── TESTIMONIAL DATA ─── */
const testimonials = [
  {
    name: "Mike D.",
    rating: 5,
    text: "Best mechanic in Lakewood, hands down. Charlie diagnosed my engine issue in 20 minutes when two other shops couldn't figure it out. Fair prices and honest work.",
  },
  {
    name: "Sarah T.",
    rating: 5,
    text: "I've been bringing my cars here for years. They always explain what needs to be done and never try to sell me things I don't need. Truly trustworthy.",
  },
  {
    name: "David R.",
    rating: 5,
    text: "My transmission was slipping and I was worried about a huge bill. Charlie gave me an honest assessment and the repair cost half what the dealer quoted. Highly recommend!",
  },
  {
    name: "Rachel K.",
    rating: 5,
    text: "Fast, professional, and affordable. Got my brakes done here and the whole experience was seamless. They even gave me a ride while my car was being worked on.",
  },
  {
    name: "James L.",
    rating: 5,
    text: "Charlie and his team are the real deal. They treat every car like it's their own. Five stars isn't enough — they deserve ten.",
  },
  {
    name: "Linda M.",
    rating: 5,
    text: "Finally found a mechanic I can trust. No surprise charges, no runaround. They fixed my electrical issue that two other shops couldn't solve.",
  },
];

/* ─── FAQ DATA ─── */
const faqs = [
  {
    question: "How quickly can you diagnose my car?",
    answer:
      "Most diagnostic scans are completed within 30-60 minutes. For complex issues, we may need a few hours, but we'll always give you a timeline upfront.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Walk-ins are welcome, but appointments are recommended to ensure we can serve you promptly. Call us at (848) 222-1964 to schedule.",
  },
  {
    question: "What brands and models do you work on?",
    answer:
      "We service all makes and models — domestic and foreign. From Honda and Toyota to Ford and Chevy, we've seen it all.",
  },
  {
    question: "Do you provide estimates before starting work?",
    answer:
      "Always. We diagnose the issue, explain what needs to be done, and give you a clear estimate before turning a single wrench. No surprises.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept cash, all major credit cards, and debit cards. We want to make paying for your repair as easy as possible.",
  },
  {
    question: "Do you offer any warranties on repairs?",
    answer:
      "Yes. All our repairs come with a warranty on parts and labor. We stand behind our work 100%.",
  },
];

/* ─── SCROLL REVEAL HOOK ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return ref;
}

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

/* ─── STAR COMPONENT ─── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  const [activeTab, setActiveTab] = useState("engine");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeService = services.find((s) => s.id === activeTab)!;

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "How It Works" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ───────────── NAVIGATION ───────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg"
            : "bg-primary"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <Image
                src="/logo-white.png"
                alt="Charlies Auto Service"
                width={160}
                height={50}
                className="h-9 w-auto md:h-11"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:8482221964"
                className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-accent-light hover:shadow-lg"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (848) 222-1964
              </a>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              <a
                href="tel:8482221964"
                className="flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-bold text-white"
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full py-3 text-left text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ───────────── HERO SPLIT ───────────── */}
      <section className="relative min-h-screen bg-primary pt-16 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-0 lg:px-8">
          {/* Left — Copy */}
          <div className="flex flex-col items-center text-center md:items-start md:py-24 md:text-left">
            <div className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              <Stars count={5} />
              <span>5.0 on Google</span>
            </div>
            <h1 className="animate-fade-up-delay-1 mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Honest Auto Repair{" "}
              <span className="text-accent">You Can Trust</span>
            </h1>
            <p className="animate-fade-up-delay-2 mb-8 max-w-lg text-lg text-white/70">
              Lakewood&apos;s most trusted mechanic. Expert diagnostics, fair
              prices, and repairs done right the first time. No surprises, no
              runaround.
            </p>
            <div className="animate-fade-up-delay-3 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:8482221964"
                className="group flex items-center justify-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
              >
                <svg
                  className="h-6 w-6 transition-transform group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (848) 222-1964
              </a>
              <button
                onClick={() => scrollTo("#services")}
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                View Services
              </button>
            </div>
            <div className="animate-fade-up-delay-4 mt-8 flex items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free Estimates
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Same-Day Service
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                All Makes & Models
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="animate-fade-up-delay-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/hero.png"
                alt="Professional auto mechanic at Charlies Auto Service"
                width={700}
                height={500}
                className="h-[300px] w-full object-cover md:h-[500px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-xl md:-bottom-6 md:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">Warranty</p>
                  <p className="text-xs text-text-light">On All Repairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── SERVICES — TABBED (SIGNATURE) ───────────── */}
      <section id="services" className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">
                What We Do
              </p>
              <h2 className="mb-4 text-3xl font-extrabold text-primary sm:text-4xl">
                Expert Repair Services
              </h2>
              <p className="mx-auto max-w-2xl text-text-light">
                From routine maintenance to major repairs, we handle it all with
                the expertise and honesty you deserve.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            {/* Tab Buttons — scrollable on mobile */}
            <div className="scrollbar-hide mb-8 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:gap-3 md:overflow-visible md:pb-0">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all md:px-6 md:py-3.5 md:text-base ${
                    activeTab === service.id
                      ? "bg-accent text-white shadow-lg shadow-accent/25"
                      : "bg-white text-text-light shadow-sm hover:bg-white hover:text-primary hover:shadow-md"
                  }`}
                >
                  <span className="text-lg">{service.icon}</span>
                  {service.label}
                </button>
              ))}
            </div>
          </RevealSection>

          {/* Tab Content Panel */}
          <RevealSection>
            <div
              key={activeTab}
              className="tab-content-enter rounded-2xl bg-white p-6 shadow-lg md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-2">
                {/* Left — Description */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-3xl">{activeService.icon}</span>
                    <h3 className="text-2xl font-extrabold text-primary">
                      {activeService.label} Service
                    </h3>
                  </div>
                  <p className="mb-6 text-lg leading-relaxed text-text-light">
                    {activeService.description}
                  </p>
                  <div className="rounded-xl bg-blue/5 border border-blue/10 p-4">
                    <p className="flex items-start gap-2 text-sm font-medium text-blue">
                      <svg className="mt-0.5 h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {activeService.note}
                    </p>
                  </div>
                </div>

                {/* Right — Service List */}
                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-3">
                    {activeService.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="mt-1 h-5 w-5 shrink-0 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href="tel:8482221964"
                      className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white transition-all hover:bg-accent-light hover:shadow-lg"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call For a Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ───────────── STAT BAR ───────────── */}
      <section className="bg-primary py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "15+", label: "Years in Business" },
                { number: "10,000+", label: "Cars Serviced" },
                { number: "5.0", label: "Google Rating" },
                { number: "100%", label: "Satisfaction Guarantee" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="mb-1 text-3xl font-extrabold text-accent sm:text-4xl md:text-5xl">
                    {stat.number}
                  </p>
                  <p className="text-sm font-medium text-white/60 md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ───────────── PROCESS TIMELINE ───────────── */}
      <section id="process" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">
                Simple & Easy
              </p>
              <h2 className="mb-4 text-3xl font-extrabold text-primary sm:text-4xl">
                How It Works
              </h2>
              <p className="mx-auto max-w-2xl text-text-light">
                Getting your car fixed shouldn&apos;t be complicated. Here&apos;s our
                straightforward process.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Call or Drop Off",
                  description:
                    "Give us a call at (848) 222-1964 or bring your car to our shop at 125 Main St, Lakewood. Walk-ins welcome.",
                  icon: (
                    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "We Diagnose",
                  description:
                    "Our certified mechanics run a thorough diagnostic and give you an honest assessment with a clear estimate. No hidden fees.",
                  icon: (
                    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "You Drive",
                  description:
                    "We fix it right the first time, guaranteed. Get back on the road with confidence, backed by our warranty on all repairs.",
                  icon: (
                    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Step connector line */}
                  {i < 2 && (
                    <div className="absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 translate-x-full bg-accent/20 md:block" />
                  )}
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                    {step.icon}
                  </div>
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
                    Step {step.step}
                  </div>
                  <h3 className="mb-3 text-xl font-extrabold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-light">{step.description}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <section id="reviews" className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">
                Customer Reviews
              </p>
              <h2 className="mb-4 text-3xl font-extrabold text-primary sm:text-4xl">
                What Our Customers Say
              </h2>
              <p className="mx-auto max-w-2xl text-text-light">
                Don&apos;t just take our word for it. See why Lakewood drivers
                trust Charlies Auto Service.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <Stars count={t.rating} />
                  <p className="mt-4 mb-6 text-text-light leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{t.name}</p>
                      <p className="text-xs text-text-light">Verified Customer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ───────────── SHOP / ABOUT STRIP ───────────── */}
      <section className="relative overflow-hidden bg-primary">
        <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 md:h-[400px]">
            <Image
              src="/shop.png"
              alt="Inside Charlies Auto Service — clean, professional auto repair facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent md:from-transparent md:to-primary/80" />
          </div>
          {/* Content */}
          <div className="px-6 py-12 md:px-12 md:py-16 lg:px-20">
            <RevealSection>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">
                Our Shop
              </p>
              <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
                A Shop You Can Trust
              </h2>
              <p className="mb-6 text-white/60 leading-relaxed">
                Our clean, well-equipped facility at 125 Main St is built for
                one thing: getting your car fixed right. With professional-grade
                lifts, advanced diagnostic tools, and a team that treats every
                vehicle like their own, you&apos;re in good hands.
              </p>
              <ul className="space-y-3">
                {[
                  "Professional-grade equipment & lifts",
                  "Advanced computer diagnostic tools",
                  "Clean, organized workspace",
                  "Comfortable waiting area",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <svg className="h-5 w-5 shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ACCORDION ───────────── */}
      <section id="faq" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">
                Got Questions?
              </p>
              <h2 className="mb-4 text-3xl font-extrabold text-primary sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="pr-4 text-base font-semibold text-primary md:text-lg">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-5 text-text-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ───────────── CTA SECTION ───────────── */}
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <RevealSection>
            <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Car Trouble? <span className="text-accent">We&apos;ve Got You.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60">
              Don&apos;t wait for a small problem to become a big one. Call
              Charlies Auto Service today for honest diagnostics and expert
              repairs.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:8482221964"
                className="group flex items-center gap-3 rounded-xl bg-accent px-10 py-5 text-xl font-bold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
              >
                <svg
                  className="h-7 w-7 transition-transform group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (848) 222-1964
              </a>
              <div className="text-white/40">
                <p className="text-sm">Mon-Fri: 8am - 6pm</p>
                <p className="text-sm">125 Main St, Lakewood, NJ 08701</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="border-t border-gray-800 bg-[#0F0F1E] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Image
                src="/logo-white.png"
                alt="Charlies Auto Service"
                width={140}
                height={44}
                className="mb-4 h-10 w-auto"
              />
              <p className="text-sm text-white/40 leading-relaxed">
                Lakewood&apos;s trusted auto repair shop. Honest diagnostics,
                expert repairs, and fair prices since day one.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white/60">
                Quick Links
              </p>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="block text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white/60">
                Contact
              </p>
              <div className="space-y-3 text-sm text-white/40">
                <a
                  href="tel:8482221964"
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (848) 222-1964
                </a>
                <div className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  125 Main St, Lakewood, NJ 08701
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mon-Fri: 8am - 6pm
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Charlies Auto Service. All rights
              reserved. Built by{" "}
              <a
                href="https://maivenai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-accent"
              >
                Maiven
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ───────────── STICKY MOBILE CTA ───────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-primary p-3 md:hidden">
        <a
          href="tel:8482221964"
          className="flex items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-lg font-extrabold text-white transition-all active:scale-95"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now &mdash; (848) 222-1964
        </a>
      </div>
      {/* Bottom padding for sticky CTA on mobile */}
      <div className="h-16 md:hidden" />
    </>
  );
}
