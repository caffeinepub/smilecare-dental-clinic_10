import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const services = [
  {
    emoji: "🦷",
    title: "Teeth Cleaning",
    desc: "Regular professional cleaning removes plaque and tartar buildup that brushing alone can't reach. Our hygienists use ultrasonic scalers and polishing tools to leave your teeth feeling smooth, fresh, and healthy. Recommended every 6 months.",
    color: "green",
    benefits: ["Prevents cavities", "Removes stains", "Fresh breath"],
  },
  {
    emoji: "💊",
    title: "Root Canal Treatment",
    desc: "When a tooth's pulp is infected or inflamed, a root canal can save it. Using advanced anaesthesia and rotary instruments, we remove the infection, clean the canal, and seal it — leaving you pain-free with your natural tooth intact.",
    color: "blue",
    benefits: ["Saves natural tooth", "Eliminates pain", "One visit possible"],
  },
  {
    emoji: "✨",
    title: "Teeth Whitening",
    desc: "Our professional whitening treatments use clinically proven agents that lighten your teeth by up to 8 shades. Safe, fast, and long-lasting — both in-clinic and take-home options are available for your convenience.",
    color: "green",
    benefits: [
      "Up to 8 shades lighter",
      "Safe for enamel",
      "Long-lasting results",
    ],
  },
  {
    emoji: "📐",
    title: "Braces & Orthodontics",
    desc: "From traditional metal braces to invisible clear aligners, we offer personalized orthodontic treatment for children, teens, and adults. Straighten your teeth comfortably and achieve the smile you've always wanted.",
    color: "blue",
    benefits: [
      "Clear aligners available",
      "For all ages",
      "Digital treatment planning",
    ],
  },
  {
    emoji: "🔩",
    title: "Dental Implants",
    desc: "Dental implants are the gold standard for replacing missing teeth. A titanium post is placed in the jawbone, topped with a lifelike ceramic crown. The result: a permanent, natural-looking tooth that lasts a lifetime with proper care.",
    color: "green",
    benefits: [
      "Permanent solution",
      "Looks & feels natural",
      "Preserves jawbone",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(var(--ice-bg))" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-clinic-navy mb-4">
            Our Dental Services
          </h1>
          <p className="text-clinic-body max-w-xl mx-auto">
            Comprehensive care for every dental need — delivered with expertise
            and compassion.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl p-8 shadow-card hover:shadow-hero transition-shadow grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
              style={{
                backgroundColor:
                  s.color === "green"
                    ? "oklch(var(--mint-bg))"
                    : "oklch(var(--ice-bg))",
              }}
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="flex items-start gap-4 md:col-span-2">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-3xl shrink-0"
                  style={{
                    backgroundColor:
                      s.color === "green"
                        ? "oklch(var(--green-badge))"
                        : "oklch(var(--blue-badge))",
                  }}
                >
                  {s.emoji}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-clinic-navy mb-2">
                    {s.title}
                  </h2>
                  <p className="text-clinic-body text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold text-clinic-navy uppercase tracking-wider mb-1">
                  Key Benefits
                </p>
                {s.benefits.map((b) => (
                  <span
                    key={b}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white text-clinic-body inline-block w-fit"
                  >
                    ✓ {b}
                  </span>
                ))}
                <Link
                  to="/book"
                  data-ocid={`services.book.button.${i + 1}`}
                  className="mt-3 inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors w-fit"
                >
                  Book This Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
