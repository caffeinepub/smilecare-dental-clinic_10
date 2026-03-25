import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useAddTestimonial, useGetTestimonials } from "../hooks/useQueries";
import type { Testimonial } from "../hooks/useQueries";

const AVATAR_COLORS = [
  "oklch(0.68 0.1 148)",
  "oklch(0.55 0.1 220)",
  "oklch(0.72 0.12 180)",
  "oklch(0.65 0.13 50)",
  "oklch(0.60 0.12 300)",
];

const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Mehta",
    rating: BigInt(5),
    review:
      "I had been putting off my root canal for months out of fear. Dr. Sharma made it completely painless and was so reassuring throughout. Best dental experience I've ever had!",
    date: BigInt(Date.now() * 1_000_000),
  },
  {
    name: "Arun Kapoor",
    rating: BigInt(5),
    review:
      "Got my teeth whitened here and the results are incredible — 7 shades lighter in one session! The clinic is spotlessly clean and the staff are friendly and professional.",
    date: BigInt(Date.now() * 1_000_000 - 7 * 24 * 3600 * 1e9),
  },
  {
    name: "Sunita & Raj Sharma",
    rating: BigInt(5),
    review:
      "We've been bringing our kids here for 5 years. The team is amazing with children — my 7-year-old actually looks forward to dental visits now!",
    date: BigInt(Date.now() * 1_000_000 - 14 * 24 * 3600 * 1e9),
  },
  {
    name: "Vikram Nair",
    rating: BigInt(4),
    review:
      "Had two dental implants placed here. The procedure was smooth, recovery was minimal, and the implants look exactly like my natural teeth. Highly recommend!",
    date: BigInt(Date.now() * 1_000_000 - 21 * 24 * 3600 * 1e9),
  },
  {
    name: "Deepa Verma",
    rating: BigInt(5),
    review:
      "The clear aligner treatment transformed my smile in just 8 months! The team monitored my progress closely every step of the way. Absolutely worth it.",
    date: BigInt(Date.now() * 1_000_000 - 30 * 24 * 3600 * 1e9),
  },
  {
    name: "Mohan Das",
    rating: BigInt(5),
    review:
      "Emergency visit on a Sunday — they accommodated me right away. Cracked tooth fixed perfectly. The emergency care at SmileCare is truly exceptional.",
    date: BigInt(Date.now() * 1_000_000 - 45 * 24 * 3600 * 1e9),
  },
];

const STAR_POSITIONS = [1, 2, 3, 4, 5];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_POSITIONS.map((pos) => (
        <Star
          key={pos}
          className="w-4 h-4"
          fill={pos <= rating ? "oklch(var(--gold))" : "none"}
          style={{
            color: pos <= rating ? "oklch(var(--gold))" : "oklch(0.75 0 0)",
          }}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: { testimonial: Testimonial; index: number }) {
  const initials = testimonial.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  const date = new Date(
    Number(testimonial.date) / 1_000_000,
  ).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-card flex flex-col gap-4"
      data-ocid={`testimonials.item.${index + 1}`}
    >
      <StarRating rating={Number(testimonial.rating)} />
      <p className="text-sm text-clinic-body leading-relaxed flex-1">
        "{testimonial.review}"
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-clinic-navy">
            {testimonial.name}
          </p>
          <p className="text-xs text-clinic-body">{date}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsPage() {
  const { data: backendTestimonials, isLoading } = useGetTestimonials();
  const addMutation = useAddTestimonial();
  const [form, setForm] = useState({ name: "", rating: "5", review: "" });
  const [submitted, setSubmitted] = useState(false);

  const testimonials =
    backendTestimonials && backendTestimonials.length > 0
      ? backendTestimonials
      : SAMPLE_TESTIMONIALS;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addMutation.mutateAsync({
        name: form.name,
        rating: BigInt(Number(form.rating)),
        review: form.review,
      });
      setSubmitted(true);
      setForm({ name: "", rating: "5", review: "" });
    } catch {
      // handled by mutation state
    }
  };

  return (
    <main>
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(var(--ice-bg))" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-clinic-navy mb-4">
            What Our Patients Say
          </h1>
          <p className="text-clinic-body max-w-xl mx-auto">
            Thousands of happy smiles — here's what some of them have to share.
          </p>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "oklch(var(--mint-bg))" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {isLoading ? (
            <div
              className="flex justify-center py-20"
              data-ocid="testimonials.loading_state"
            >
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={t.name} testimonial={t} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Share Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-[600px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-clinic-navy text-center mb-2">
            Share Your Experience
          </h2>
          <p className="text-clinic-body text-center text-sm mb-8">
            Had a great visit? We'd love to hear from you!
          </p>
          {submitted ? (
            <div
              className="text-center py-10 rounded-2xl"
              style={{ backgroundColor: "oklch(var(--mint-bg))" }}
              data-ocid="testimonials.success_state"
            >
              <p className="text-2xl mb-2">🙏</p>
              <p className="font-semibold text-clinic-navy">
                Thank you for your review!
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm text-primary underline"
              >
                Write another review
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 shadow-card space-y-5"
              style={{ backgroundColor: "oklch(var(--ice-bg))" }}
              data-ocid="testimonials.form"
            >
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-clinic-navy">
                  Your Name *
                </Label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Priya Mehta"
                  className="bg-white"
                  data-ocid="testimonials.name.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-clinic-navy">
                  Rating *
                </Label>
                <div className="flex gap-2">
                  {["1", "2", "3", "4", "5"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, rating: r }))}
                      className="w-9 h-9 rounded-full text-sm font-semibold transition-all"
                      style={{
                        backgroundColor:
                          form.rating === r ? "oklch(var(--primary))" : "white",
                        color:
                          form.rating === r
                            ? "white"
                            : "oklch(var(--body-text))",
                        border: "1.5px solid oklch(var(--border))",
                      }}
                      data-ocid={`testimonials.rating.${r}.toggle`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-clinic-navy">
                  Your Review *
                </Label>
                <Textarea
                  required
                  value={form.review}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, review: e.target.value }))
                  }
                  placeholder="Tell us about your experience at SmileCare..."
                  rows={4}
                  className="bg-white"
                  data-ocid="testimonials.review.textarea"
                />
              </div>
              {addMutation.isError && (
                <p
                  className="text-sm text-destructive"
                  data-ocid="testimonials.error_state"
                >
                  Could not submit your review. Please try again.
                </p>
              )}
              <Button
                type="submit"
                disabled={addMutation.isPending}
                className="w-full rounded-full bg-primary text-white font-semibold"
                data-ocid="testimonials.submit_button"
              >
                {addMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Submitting...
                  </>
                ) : (
                  "Submit Review"
                )}
              </Button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
