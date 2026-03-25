import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSubmitContactForm } from "../hooks/useQueries";

const CONTACT_ITEMS = [
  {
    label: "Address",
    value: "123 Health Street, Medical Colony, New Delhi - 110001",
  },
  { label: "Phone", value: "+91 98765 43210" },
  { label: "Email", value: "care@smilecare.in" },
  {
    label: "Hours",
    value: "Mon–Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 4:00 PM",
  },
];

function ContactIcon({ label }: { label: string }) {
  if (label === "Address") return <MapPin className="w-5 h-5" />;
  if (label === "Phone") return <Phone className="w-5 h-5" />;
  if (label === "Email") return <Mail className="w-5 h-5" />;
  return <Clock className="w-5 h-5" />;
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const mutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(form);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      // error handled by mutation.isError
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
            Contact Us
          </h1>
          <p className="text-clinic-body max-w-xl mx-auto">
            Have a question or need to reach us? We're here Monday through
            Sunday.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-clinic-navy mb-8">
              Get In Touch
            </h2>
            <div className="space-y-6">
              {CONTACT_ITEMS.map((item, i) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
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
                    <ContactIcon label={item.label} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-clinic-body mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-clinic-navy whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-card">
              <iframe
                src="https://maps.google.com/maps?q=New+Delhi&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                title="SmileCare Dental Clinic Location"
                allowFullScreen
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-clinic-navy mb-8">
              Send Us a Message
            </h2>
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-14 rounded-2xl"
                style={{ backgroundColor: "oklch(var(--mint-bg))" }}
                data-ocid="contact.success_state"
              >
                <CheckCircle
                  className="w-12 h-12 mx-auto mb-3"
                  style={{ color: "oklch(var(--primary))" }}
                />
                <h3 className="font-bold text-clinic-navy mb-2">
                  Message Sent!
                </h3>
                <p className="text-sm text-clinic-body mb-4">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="text-sm text-primary underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 shadow-card space-y-5"
                style={{ backgroundColor: "oklch(var(--ice-bg))" }}
                data-ocid="contact.form"
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
                    placeholder="Ravi Kumar"
                    className="bg-white"
                    data-ocid="contact.name.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-clinic-navy">
                    Email Address *
                  </Label>
                  <Input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="ravi@example.com"
                    className="bg-white"
                    data-ocid="contact.email.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-clinic-navy">
                    Message *
                  </Label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="How can we help you?"
                    rows={5}
                    className="bg-white"
                    data-ocid="contact.message.textarea"
                  />
                </div>
                {mutation.isError && (
                  <p
                    className="text-sm text-destructive"
                    data-ocid="contact.error_state"
                  >
                    Could not send your message. Please try again.
                  </p>
                )}
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full rounded-full bg-primary text-white font-semibold"
                  data-ocid="contact.submit_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
