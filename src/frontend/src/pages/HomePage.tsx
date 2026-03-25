import { Link } from "@tanstack/react-router";
import { Award, CheckCircle, Shield, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    emoji: "🦷",
    title: "Teeth Cleaning",
    desc: "Professional plaque removal for healthy, bright teeth and fresh breath.",
    color: "green",
  },
  {
    emoji: "💊",
    title: "Root Canal",
    desc: "Painless treatment to save infected or damaged teeth and relieve pain.",
    color: "blue",
  },
  {
    emoji: "✨",
    title: "Teeth Whitening",
    desc: "Advanced whitening for a brighter, more confident smile in one visit.",
    color: "green",
  },
  {
    emoji: "📐",
    title: "Braces & Orthodontics",
    desc: "Straighten teeth with modern braces and clear aligners for all ages.",
    color: "blue",
  },
  {
    emoji: "🔩",
    title: "Dental Implants",
    desc: "Permanent tooth replacement that looks, feels, and functions naturally.",
    color: "green",
  },
];

const trustBadges = [
  {
    icon: <Shield className="w-6 h-6" />,
    label: "ISO Certified",
    sub: "International Standards",
  },
  {
    icon: <Award className="w-6 h-6" />,
    label: "10+ Years Experience",
    sub: "Expert Care",
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "10,000+ Patients",
    sub: "Happy Smiles",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    label: "Hygiene Assured",
    sub: "Sterilized Equipment",
  },
];

const hygienePoints = [
  "Full sterilization of all instruments between patients",
  "Single-use gloves, masks, and protective equipment",
  "Hospital-grade disinfection of all surfaces and chairs",
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
              style={{
                backgroundColor: "oklch(var(--green-badge))",
                color: "oklch(0.45 0.12 148)",
              }}
            >
              🦷 Trusted Dental Care in New Delhi
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Your Smile,{" "}
              <span style={{ color: "oklch(var(--primary))" }}>
                Our Priority
              </span>
            </h1>
            <p className="text-base text-clinic-body mb-8 max-w-lg">
              SmileCare provides expert, compassionate dental care for the whole
              family. From routine cleanings to complex procedures — we make
              every visit comfortable and stress-free.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/book"
                data-ocid="hero.book_appointment.primary_button"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors shadow-card"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                data-ocid="hero.learn_more.secondary_button"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-border text-clinic-body font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-2xl -rotate-3 opacity-30"
              style={{ backgroundColor: "oklch(var(--primary) / 0.15)" }}
            />
            <img
              src="/assets/generated/hero-patient.dim_1200x700.jpg"
              alt="Happy patient at SmileCare Dental Clinic"
              className="relative rounded-2xl shadow-hero w-full object-cover"
              style={{ maxHeight: "460px" }}
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-white border-y border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((b, i) => (
              <div
                key={b.label}
                className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor:
                      i % 2 === 0
                        ? "oklch(var(--green-badge))"
                        : "oklch(var(--blue-badge))",
                    color:
                      i % 2 === 0
                        ? "oklch(0.45 0.12 148)"
                        : "oklch(0.35 0.1 220)",
                  }}
                >
                  {b.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm text-clinic-navy">
                    {b.label}
                  </p>
                  <p className="text-xs text-clinic-body">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(var(--mint-bg))" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-clinic-navy mb-3">
              Our Dental Services
            </h2>
            <p className="text-clinic-body max-w-xl mx-auto">
              Comprehensive dental care tailored to your needs — from preventive
              to cosmetic treatments.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-hero transition-shadow group"
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4"
                  style={{
                    backgroundColor:
                      s.color === "green"
                        ? "oklch(var(--green-badge))"
                        : "oklch(var(--blue-badge))",
                  }}
                >
                  {s.emoji}
                </div>
                <h3 className="font-semibold text-clinic-navy mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-clinic-body leading-relaxed mb-4">
                  {s.desc}
                </p>
                <Link
                  to="/services"
                  className="text-sm font-semibold hover:underline transition-colors"
                  style={{ color: "oklch(var(--primary))" }}
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-clinic-navy mb-4">
              Your Safety is Our Promise
            </h2>
            <p className="text-clinic-body mb-6">
              We maintain the highest hygiene standards, ensuring every patient
              receives care in a safe, clean environment. Our clinic follows
              strict infection control protocols at every step.
            </p>
            <ul className="space-y-3">
              {hygienePoints.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: "oklch(var(--primary))" }}
                  />
                  <span className="text-sm text-clinic-body">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: "oklch(var(--ice-bg))" }}
          >
            <div className="text-6xl mb-4">🏥</div>
            <h3 className="text-xl font-bold text-clinic-navy mb-2">
              Sterilization Guaranteed
            </h3>
            <p className="text-clinic-body text-sm">
              Every instrument is sterilized in our autoclave before use. We use
              hospital-grade disinfectants and disposable equipment wherever
              possible.
            </p>
            <Link
              to="/book"
              data-ocid="hygiene.book.button"
              className="mt-6 inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
