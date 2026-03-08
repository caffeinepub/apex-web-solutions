import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Facebook,
  FileText,
  Home,
  Instagram,
  Linkedin,
  Loader2,
  Menu,
  Palette,
  Search,
  Smartphone,
  Star,
  Twitter,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Navbar ─────────────────────────────────────────────────────────────────

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy shadow-navy py-3" : "bg-transparent py-5"
      }`}
      style={{
        backgroundColor: isScrolled ? "oklch(0.18 0.04 255)" : undefined,
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-1 group"
          data-ocid="nav.link"
        >
          <span className="font-display text-2xl font-extrabold text-white tracking-tight leading-none">
            Apex
          </span>
          <span
            className="w-2 h-2 rounded-full mb-3 -ml-0.5 group-hover:scale-125 transition-transform"
            style={{ backgroundColor: "oklch(0.62 0.22 250)" }}
          />
          <span className="font-display text-2xl font-light text-white/70 tracking-tight leading-none ml-1">
            Web Solutions
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors tracking-wide"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" data-ocid="nav.primary_button">
            <Button
              className="rounded-full px-6 font-semibold text-white border-0 shadow-accent-glow hover:shadow-none transition-shadow"
              style={{ backgroundColor: "oklch(0.62 0.22 250)" }}
            >
              Get Started
            </Button>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden text-white p-2 rounded-lg transition-colors hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-4 shadow-navy"
          style={{ backgroundColor: "oklch(0.18 0.04 255)" }}
        >
          <nav className="container mx-auto px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                className="w-full rounded-full font-semibold text-white"
                style={{ backgroundColor: "oklch(0.62 0.22 250)" }}
                data-ocid="nav.primary_button"
                onClick={() => {
                  setMobileOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Deep navy overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.98 0 0 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0 0 / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container mx-auto px-4 md:px-8 py-24 flex flex-col items-center text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-8 border"
          style={{
            backgroundColor: "oklch(0.62 0.22 250 / 0.15)",
            borderColor: "oklch(0.62 0.22 250 / 0.4)",
            color: "oklch(0.85 0.12 250)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "oklch(0.78 0.16 85)" }}
          />
          AI-Powered Web Design Agency
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl">
          Build Your Dream Website.{" "}
          <span className="gradient-text">Convert More Clients.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-body">
          Premium web design for real estate agents and ambitious businesses —
          powered by AI, built to convert.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#contact" data-ocid="hero.primary_button">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-bold text-white shadow-accent-glow hover:shadow-none transition-all hover:scale-105 border-0"
              style={{
                backgroundColor: "oklch(0.78 0.16 85)",
                color: "oklch(0.12 0.02 60)",
              }}
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a href="#portfolio" data-ocid="hero.secondary_button">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-semibold bg-transparent hover:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}
            >
              View Our Work
            </Button>
          </a>
        </div>

        {/* Floating stat badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <div
            className="animate-float flex items-center gap-2.5 rounded-xl px-5 py-3 border text-white shadow-navy"
            style={{
              backgroundColor: "oklch(0.22 0.06 255 / 0.85)",
              borderColor: "oklch(0.62 0.22 250 / 0.35)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{ backgroundColor: "oklch(0.62 0.22 250)" }}
            >
              200+
            </span>
            <span className="text-sm font-medium text-white/90">
              Sites Built
            </span>
          </div>
          <div
            className="animate-float-delayed flex items-center gap-2.5 rounded-xl px-5 py-3 border text-white shadow-navy"
            style={{
              backgroundColor: "oklch(0.22 0.06 255 / 0.85)",
              borderColor: "oklch(0.78 0.16 85 / 0.35)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: "oklch(0.78 0.16 85)",
                color: "oklch(0.12 0.02 60)",
              }}
            >
              98%
            </span>
            <span className="text-sm font-medium text-white/90">
              Client Satisfaction
            </span>
          </div>
          <div
            className="animate-float flex items-center gap-2.5 rounded-xl px-5 py-3 border text-white shadow-navy"
            style={{
              backgroundColor: "oklch(0.22 0.06 255 / 0.85)",
              borderColor: "oklch(0.62 0.22 250 / 0.35)",
              backdropFilter: "blur(12px)",
              animationDelay: "0.8s",
            }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{ backgroundColor: "oklch(0.62 0.22 250)" }}
            >
              7d
            </span>
            <span className="text-sm font-medium text-white/90">
              Avg. Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────

const services = [
  {
    icon: Code2,
    title: "Custom Website Design",
    description:
      "Tailor-made websites that reflect your brand and convert visitors into loyal clients.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Solutions",
    description:
      "Smart AI features that automate, personalize, and enhance your site for maximum performance.",
  },
  {
    icon: Home,
    title: "Real Estate Websites",
    description:
      "IDX integration, property search, and lead capture — purpose-built for real estate agents.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Rank higher on Google and get found by exactly the clients you're looking for.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description:
      "High-converting single pages for campaigns, listings, or offers that drive real results.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
      data-ocid="services.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{
              backgroundColor: "oklch(0.62 0.22 250 / 0.08)",
              color: "oklch(0.62 0.22 250)",
            }}
          >
            <Zap className="w-3.5 h-3.5" />
            Our Capabilities
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: "oklch(0.18 0.04 255)" }}
          >
            What We Build For You
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "oklch(0.45 0.02 255)" }}
          >
            From concept to launch, we craft digital experiences that look
            stunning and perform even better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border"
                style={{ borderColor: "oklch(0.88 0.015 255)" }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "oklch(0.62 0.22 250 / 0.1)" }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "oklch(0.62 0.22 250)" }}
                  />
                </div>

                {/* Hover accent border */}
                <div
                  className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: "oklch(0.62 0.22 250)" }}
                />

                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: "oklch(0.18 0.04 255)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.45 0.02 255)" }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* Filler CTA card */}
          <div
            className="rounded-2xl p-8 flex flex-col items-start justify-between lg:col-span-1 md:col-span-2 lg:col-auto"
            style={{ backgroundColor: "oklch(0.18 0.04 255)" }}
          >
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "oklch(0.78 0.16 85 / 0.2)" }}
              >
                <Star
                  className="w-6 h-6"
                  style={{ color: "oklch(0.78 0.16 85)" }}
                />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Not sure what you need?
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Book a free 30-minute discovery call and let us recommend the
                perfect solution for your business.
              </p>
            </div>
            <a href="#contact" className="mt-6">
              <Button
                className="rounded-full px-5 font-semibold text-white border-0"
                style={{
                  backgroundColor: "oklch(0.78 0.16 85)",
                  color: "oklch(0.12 0.02 60)",
                }}
              >
                Free Consultation
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Most sites delivered in 7–14 days. We move fast without cutting corners.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description:
      "Cutting-edge design that stands out in any market and makes an impression.",
  },
  {
    icon: Cpu,
    title: "AI Support",
    description:
      "AI-enhanced features built directly into your site for smarter performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Pixel-perfect on every device — phone, tablet, and desktop alike.",
  },
];

function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.18 0.04 255)" }}
      data-ocid="whyus.section"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ backgroundColor: "oklch(0.62 0.22 250)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ backgroundColor: "oklch(0.78 0.16 85)" }}
      />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border"
            style={{
              borderColor: "oklch(0.62 0.22 250 / 0.35)",
              color: "oklch(0.85 0.12 250)",
              backgroundColor: "oklch(0.62 0.22 250 / 0.1)",
            }}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Our Edge
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Agencies Choose Apex
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            We combine speed, creativity, and technology to deliver results that
            matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "oklch(0.22 0.06 255 / 0.5)",
                  borderColor: "oklch(0.35 0.06 255 / 0.6)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "oklch(0.78 0.16 85 / 0.15)" }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "oklch(0.78 0.16 85)" }}
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div
          className="mt-16 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border"
          style={{
            backgroundColor: "oklch(0.22 0.06 255 / 0.4)",
            borderColor: "oklch(0.35 0.06 255 / 0.5)",
          }}
        >
          {[
            { value: "200+", label: "Websites Launched" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "7–14d", label: "Average Turnaround" },
            { value: "5★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display text-3xl md:text-4xl font-extrabold mb-1"
                style={{ color: "oklch(0.78 0.16 85)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-white/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ───────────────────────────────────────────────────────────────

const portfolioItems = [
  {
    image: "/assets/generated/portfolio-realestate.dim_800x500.jpg",
    title: "LuxuryHomes Pro",
    category: "Real Estate",
    description:
      "Full IDX website with lead capture for a top Miami agent. 3x more inquiries in 90 days.",
    id: "portfolio.item.1",
  },
  {
    image: "/assets/generated/portfolio-ecommerce.dim_800x500.jpg",
    title: "StyleShop Boutique",
    category: "E-Commerce",
    description:
      "Modern online store with seamless checkout, dynamic product catalog, and mobile-first UX.",
    id: "portfolio.item.2",
  },
  {
    image: "/assets/generated/portfolio-corporate.dim_800x500.jpg",
    title: "Meridian Consulting",
    category: "Corporate",
    description:
      "Brand-driven landing page with 3x conversion rate improvement over previous site.",
    id: "portfolio.item.3",
  },
];

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-white"
      data-ocid="portfolio.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{
              backgroundColor: "oklch(0.62 0.22 250 / 0.08)",
              color: "oklch(0.62 0.22 250)",
            }}
          >
            <Star className="w-3.5 h-3.5" />
            Featured Work
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: "oklch(0.18 0.04 255)" }}
          >
            Our Recent Work
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.45 0.02 255)" }}
          >
            Explore some of our latest projects — each one designed to drive
            real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border"
              style={{ borderColor: "oklch(0.88 0.015 255)" }}
              data-ocid={item.id}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.18 0.04 255 / 0.7)" }}
                >
                  <a
                    href="#contact"
                    className="flex items-center gap-2 font-semibold text-white text-sm px-5 py-2.5 rounded-full border border-white/50 hover:bg-white hover:text-navy transition-colors"
                    style={{ color: "white" }}
                  >
                    Get Similar Site <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <Badge
                  className="mb-3 text-xs font-semibold rounded-full px-3 py-1"
                  style={{
                    backgroundColor: "oklch(0.62 0.22 250 / 0.1)",
                    color: "oklch(0.62 0.22 250)",
                    border: "none",
                  }}
                >
                  {item.category}
                </Badge>
                <h3
                  className="font-display text-xl font-bold mb-2"
                  style={{ color: "oklch(0.18 0.04 255)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.45 0.02 255)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold text-white"
              style={{ backgroundColor: "oklch(0.18 0.04 255)" }}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "Apex built us a stunning real estate website that tripled our lead volume in 60 days. Absolutely worth every penny.",
    name: "Sarah M.",
    role: "Real Estate Agent",
    location: "Miami, FL",
    initials: "SM",
    id: "testimonials.item.1",
  },
  {
    quote:
      "The AI-powered features they added to our site have automated 40% of our client intake process. Game-changing.",
    name: "James T.",
    role: "Business Owner",
    location: "New York, NY",
    initials: "JT",
    id: "testimonials.item.2",
  },
  {
    quote:
      "From concept to launch in 10 days. The design is clean, modern, and our clients love it. Highly recommend Apex.",
    name: "Priya K.",
    role: "Marketing Director",
    location: "Austin, TX",
    initials: "PK",
    id: "testimonials.item.3",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ backgroundColor: "oklch(0.96 0.008 255)" }}
      data-ocid="testimonials.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{
              backgroundColor: "oklch(0.62 0.22 250 / 0.08)",
              color: "oklch(0.62 0.22 250)",
            }}
          >
            <Star className="w-3.5 h-3.5" />
            Client Stories
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: "oklch(0.18 0.04 255)" }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.45 0.02 255)" }}
          >
            Real results from real businesses. Here's what our clients have
            experienced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              data-ocid={item.id}
            >
              {/* Quote mark */}
              <div
                className="text-6xl font-display leading-none mb-4 select-none"
                style={{ color: "oklch(0.62 0.22 250 / 0.25)" }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                  <Star
                    key={k}
                    className="w-4 h-4 fill-current"
                    style={{ color: "oklch(0.78 0.16 85)" }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-base leading-relaxed flex-1 mb-6 font-medium"
                style={{ color: "oklch(0.25 0.03 255)" }}
              >
                {item.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.18 0.04 255)" }}
                >
                  {item.initials}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "oklch(0.18 0.04 255)" }}
                  >
                    {item.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.55 0.02 255)" }}
                  >
                    {item.role} · {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

const pricingTiers = [
  {
    name: "Starter",
    price: "$997",
    description:
      "Perfect for agents and small businesses getting started online.",
    features: [
      "5-page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "30-day support",
    ],
    cta: "Get Started",
    popular: false,
    ocid: "pricing.starter.button",
  },
  {
    name: "Professional",
    price: "$2,497",
    description:
      "Everything you need to dominate your market and convert more leads.",
    features: [
      "Everything in Starter",
      "Up to 15 pages",
      "Advanced SEO optimization",
      "AI Chat Widget",
      "Lead capture system",
      "Blog / CMS integration",
      "90-day priority support",
    ],
    cta: "Get Started",
    popular: true,
    ocid: "pricing.pro.button",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Full-service solution for agencies and high-volume real estate teams.",
    features: [
      "Full custom solution",
      "Unlimited pages",
      "Full AI integration",
      "IDX/MLS for Real Estate",
      "Priority support",
      "Monthly maintenance",
    ],
    cta: "Contact Us",
    popular: false,
    ocid: "pricing.enterprise.button",
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-white"
      data-ocid="pricing.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{
              backgroundColor: "oklch(0.62 0.22 250 / 0.08)",
              color: "oklch(0.62 0.22 250)",
            }}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: "oklch(0.18 0.04 255)" }}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.45 0.02 255)" }}
          >
            No hidden fees. Everything you need to get online and start
            converting visitors into clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                tier.popular
                  ? "shadow-accent-glow"
                  : "shadow-card hover:shadow-card-hover"
              }`}
              style={{
                backgroundColor: tier.popular
                  ? "oklch(0.18 0.04 255)"
                  : "white",
                border: tier.popular
                  ? "2px solid oklch(0.62 0.22 250 / 0.6)"
                  : "1px solid oklch(0.88 0.015 255)",
              }}
            >
              {tier.popular && (
                <div
                  className="text-center py-2 text-xs font-bold tracking-widest uppercase"
                  style={{
                    backgroundColor: "oklch(0.62 0.22 250)",
                    color: "white",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3
                    className={`font-display text-xl font-bold mb-1 ${
                      tier.popular ? "text-white" : ""
                    }`}
                    style={
                      !tier.popular
                        ? { color: "oklch(0.18 0.04 255)" }
                        : undefined
                    }
                  >
                    {tier.name}
                  </h3>
                  <div
                    className={`font-display text-4xl font-extrabold mb-2 ${
                      tier.popular ? "" : ""
                    }`}
                    style={{
                      color: tier.popular
                        ? "oklch(0.78 0.16 85)"
                        : "oklch(0.18 0.04 255)",
                    }}
                  >
                    {tier.price}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: tier.popular
                        ? "oklch(0.7 0.04 255)"
                        : "oklch(0.55 0.02 255)",
                    }}
                  >
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{
                          color: tier.popular
                            ? "oklch(0.78 0.16 85)"
                            : "oklch(0.62 0.22 250)",
                        }}
                      />
                      <span
                        className="text-sm"
                        style={{
                          color: tier.popular
                            ? "oklch(0.82 0.02 255)"
                            : "oklch(0.35 0.02 255)",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" data-ocid={tier.ocid}>
                  <Button
                    className="w-full rounded-full py-6 font-bold text-base transition-all border-0"
                    style={
                      tier.popular
                        ? {
                            backgroundColor: "oklch(0.78 0.16 85)",
                            color: "oklch(0.12 0.02 60)",
                          }
                        : tier.name === "Enterprise"
                          ? {
                              backgroundColor: "transparent",
                              border: "2px solid oklch(0.18 0.04 255)",
                              color: "oklch(0.18 0.04 255)",
                            }
                          : {
                              backgroundColor: "oklch(0.18 0.04 255)",
                              color: "white",
                            }
                    }
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitContactLead(
          form.name,
          form.email,
          form.phone,
          form.message,
        );
      }
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Message sent! We'll be in touch within 24 hours.", {
        duration: 5000,
      });
    } catch {
      toast.error(
        "Something went wrong. Please try again or email us directly.",
        {
          duration: 5000,
        },
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.18 0.04 255)" }}
      data-ocid="contact.section"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ backgroundColor: "oklch(0.78 0.16 85)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ backgroundColor: "oklch(0.62 0.22 250)" }}
      />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border"
              style={{
                borderColor: "oklch(0.78 0.16 85 / 0.4)",
                color: "oklch(0.78 0.16 85)",
                backgroundColor: "oklch(0.78 0.16 85 / 0.1)",
              }}
            >
              <Zap className="w-3.5 h-3.5" />
              Free Consultation
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg text-white/65">
              Tell us about your project and get a free consultation — no
              obligation.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 md:p-10 space-y-5"
            style={{
              backgroundColor: "oklch(0.22 0.06 255 / 0.5)",
              border: "1px solid oklch(0.35 0.06 255 / 0.6)",
              backdropFilter: "blur(12px)",
            }}
            noValidate
          >
            {submitted && (
              <div
                className="rounded-xl p-4 flex items-center gap-3 text-sm font-medium"
                style={{
                  backgroundColor: "oklch(0.35 0.18 145 / 0.2)",
                  border: "1px solid oklch(0.55 0.18 145 / 0.5)",
                  color: "oklch(0.78 0.14 145)",
                }}
                data-ocid="contact.success_state"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                Your message has been sent! We'll reach out within 24 hours.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-sm font-semibold mb-2 text-white/80"
                  htmlFor="contact-name"
                >
                  Full Name *
                </label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/35 focus:border-accent focus:bg-white/15 transition-colors h-12"
                  data-ocid="contact.name.input"
                  autoComplete="name"
                />
                {errors.name && (
                  <p
                    className="text-xs mt-1.5 flex items-center gap-1"
                    style={{ color: "oklch(0.72 0.2 27)" }}
                    data-ocid="contact.error_state"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-2 text-white/80"
                  htmlFor="contact-email"
                >
                  Email Address *
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/35 focus:border-accent focus:bg-white/15 transition-colors h-12"
                  data-ocid="contact.email.input"
                  autoComplete="email"
                />
                {errors.email && (
                  <p
                    className="text-xs mt-1.5"
                    style={{ color: "oklch(0.72 0.2 27)" }}
                    data-ocid="contact.error_state"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-semibold mb-2 text-white/80"
                htmlFor="contact-phone"
              >
                Phone Number *
              </label>
              <Input
                id="contact-phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/35 focus:border-accent focus:bg-white/15 transition-colors h-12"
                data-ocid="contact.phone.input"
                autoComplete="tel"
              />
              {errors.phone && (
                <p
                  className="text-xs mt-1.5"
                  style={{ color: "oklch(0.72 0.2 27)" }}
                  data-ocid="contact.error_state"
                >
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-semibold mb-2 text-white/80"
                htmlFor="contact-message"
              >
                Tell Us About Your Project *
              </label>
              <Textarea
                id="contact-message"
                placeholder="I'm a real estate agent looking for a website with IDX integration..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/35 focus:border-accent focus:bg-white/15 transition-colors resize-none"
                data-ocid="contact.message.textarea"
              />
              {errors.message && (
                <p
                  className="text-xs mt-1.5"
                  style={{ color: "oklch(0.72 0.2 27)" }}
                  data-ocid="contact.error_state"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full rounded-full py-6 text-base font-bold border-0 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
              style={{
                backgroundColor: "oklch(0.78 0.16 85)",
                color: "oklch(0.12 0.02 60)",
              }}
              data-ocid="contact.submit_button"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Twitter, label: "Twitter/X", href: "#", ocid: "footer.link" },
    { icon: Linkedin, label: "LinkedIn", href: "#", ocid: "footer.link" },
    { icon: Instagram, label: "Instagram", href: "#", ocid: "footer.link" },
    { icon: Facebook, label: "Facebook", href: "#", ocid: "footer.link" },
  ];

  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: "oklch(0.12 0.03 255)" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b"
          style={{ borderColor: "oklch(0.25 0.04 255)" }}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-1 group"
            data-ocid="footer.link"
          >
            <span className="font-display text-2xl font-extrabold text-white tracking-tight leading-none">
              Apex
            </span>
            <span
              className="w-2 h-2 rounded-full mb-3 -ml-0.5"
              style={{ backgroundColor: "oklch(0.62 0.22 250)" }}
            />
            <span className="font-display text-2xl font-light text-white/50 tracking-tight leading-none ml-1">
              Web Solutions
            </span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/55 hover:text-white text-sm font-medium transition-colors"
                data-ocid="footer.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all hover:bg-white/10"
                  data-ocid={social.ocid}
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/35">
          <p>© {year} Apex Web Solutions. All rights reserved.</p>
          <p>
            Built with ♥ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
