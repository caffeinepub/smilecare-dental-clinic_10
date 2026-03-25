import { Eye, Target } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <main>
      {/* Hero banner */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(var(--ice-bg))" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
              style={{
                backgroundColor: "oklch(var(--green-badge))",
                color: "oklch(0.45 0.12 148)",
              }}
            >
              About SmileCare
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-clinic-navy mb-5">
              We Care About Your Smile
            </h1>
            <p className="text-clinic-body max-w-2xl mx-auto text-base leading-relaxed">
              For over a decade, SmileCare Dental Clinic has been New Delhi's
              trusted home for comprehensive family dental care — combining
              cutting-edge technology with warm, personalized treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-clinic-navy mb-4">
              Our Story
            </h2>
            <p className="text-clinic-body mb-4">
              SmileCare was founded in 2010 with a simple mission: to provide
              dental care that genuinely improves lives. Starting with a single
              consultation room in Medical Colony, we have grown into a
              full-service clinic serving over 10,000 patients annually.
            </p>
            <p className="text-clinic-body mb-4">
              We believe dental visits shouldn't be feared. Our team invests
              time in each patient — explaining procedures, answering questions,
              and ensuring comfort at every step. Whether it's a child's first
              check-up or a complex implant procedure, every patient receives
              the same standard of excellence.
            </p>
            <p className="text-clinic-body">
              Today, SmileCare is equipped with the latest digital X-rays, laser
              dentistry tools, and CAD/CAM crown fabrication — all under one
              roof.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 grid grid-cols-2 gap-4"
            style={{ backgroundColor: "oklch(var(--mint-bg))" }}
          >
            {[
              { num: "15+", label: "Years of Excellence" },
              { num: "10K+", label: "Happy Patients" },
              { num: "5", label: "Expert Dentists" },
              { num: "99%", label: "Patient Satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-5 text-center shadow-card"
              >
                <p
                  className="text-2xl font-bold mb-1"
                  style={{ color: "oklch(var(--primary))" }}
                >
                  {stat.num}
                </p>
                <p className="text-xs text-clinic-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(var(--ice-bg))" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-clinic-navy text-center mb-12">
            Meet Our Lead Dentist
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <img
              src="/assets/generated/doctor-profile.dim_400x500.jpg"
              alt="Dr. Arjun Sharma"
              className="w-full object-cover"
              style={{ maxHeight: "420px" }}
            />
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-clinic-navy mb-1">
                Dr. Arjun Sharma
              </h3>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "oklch(var(--primary))" }}
              >
                BDS, MDS – Oral Surgery
              </p>
              <p className="text-sm text-clinic-body mb-4">
                15+ Years Experience
              </p>
              <p className="text-sm text-clinic-body leading-relaxed mb-4">
                Dr. Arjun Sharma is a highly regarded oral surgeon with
                expertise in complex extractions, implants, and maxillofacial
                procedures. He completed his MDS from AIIMS Delhi and has
                trained at international centers in Singapore and Germany.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Implantology", "Oral Surgery", "Cosmetic Dentistry"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "oklch(var(--green-badge))",
                        color: "oklch(0.45 0.12 148)",
                      }}
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-clinic-navy text-center mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "oklch(var(--mint-bg))" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                style={{
                  backgroundColor: "oklch(var(--green-badge))",
                  color: "oklch(0.45 0.12 148)",
                }}
              >
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-clinic-navy mb-3">
                Our Mission
              </h3>
              <p className="text-clinic-body leading-relaxed">
                To deliver exceptional, affordable dental care to every member
                of the family — fostering a culture where oral health is valued,
                dental anxiety is eliminated, and every smile is celebrated. We
                are committed to continuous education, ethical practice, and
                community service.
              </p>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "oklch(var(--blue-badge))" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                style={{
                  backgroundColor: "oklch(var(--blue-badge))",
                  color: "oklch(0.35 0.1 220)",
                  border: "2px solid oklch(0.8 0.04 220)",
                }}
              >
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-clinic-navy mb-3">
                Our Vision
              </h3>
              <p className="text-clinic-body leading-relaxed">
                To be India's most trusted dental clinic network — recognized
                for our patient-first approach, cutting-edge technology, and
                measurable improvements in the oral health of communities we
                serve. We envision a future where every Indian has access to
                world-class dental care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
