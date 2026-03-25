import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useBookAppointment } from "../hooks/useQueries";

const SERVICE_OPTIONS = [
  "Teeth Cleaning",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Braces / Orthodontics",
  "Dental Implants",
];

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
  });
  const [success, setSuccess] = useState(false);
  const mutation = useBookAppointment();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync({
        name: form.name,
        phone: form.phone,
        email: form.email,
        preferredDate: form.date,
        service: form.service,
      });
      setSuccess(true);
      setForm({ name: "", phone: "", email: "", date: "", service: "" });
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
            Book an Appointment
          </h1>
          <p className="text-clinic-body max-w-xl mx-auto">
            Fill out the form below and we'll confirm your appointment within 2
            hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
              data-ocid="book.success_state"
            >
              <CheckCircle
                className="w-16 h-16 mx-auto mb-4"
                style={{ color: "oklch(var(--primary))" }}
              />
              <h2 className="text-2xl font-bold text-clinic-navy mb-2">
                Appointment Request Sent!
              </h2>
              <p className="text-clinic-body mb-6">
                Thank you! We'll confirm your appointment within 2 hours via
                phone or email.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Book Another
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="rounded-2xl shadow-card p-8 sm:p-10"
              style={{ backgroundColor: "oklch(var(--mint-bg))" }}
              data-ocid="book.form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-clinic-navy"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Ravi Kumar"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="bg-white border-border"
                    data-ocid="book.name.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-clinic-navy"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="bg-white border-border"
                    data-ocid="book.phone.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-clinic-navy"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="ravi@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="bg-white border-border"
                    data-ocid="book.email.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="date"
                    className="text-sm font-medium text-clinic-navy"
                  >
                    Preferred Date *
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, date: e.target.value }))
                    }
                    className="bg-white border-border"
                    data-ocid="book.date.input"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <Label className="text-sm font-medium text-clinic-navy">
                    Select Service *
                  </Label>
                  <Select
                    required
                    value={form.service}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, service: v }))
                    }
                  >
                    <SelectTrigger
                      className="bg-white border-border"
                      data-ocid="book.service.select"
                    >
                      <SelectValue placeholder="Choose a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {mutation.isError && (
                <p
                  className="mt-4 text-sm text-destructive"
                  data-ocid="book.error_state"
                >
                  Something went wrong. Please try again.
                </p>
              )}

              <div className="mt-6">
                <p className="text-xs text-clinic-body mb-4 text-center">
                  📞 We'll confirm your appointment within 2 hours via phone or
                  email.
                </p>
                <Button
                  type="submit"
                  disabled={mutation.isPending || !form.service}
                  className="w-full rounded-full bg-primary text-white font-semibold text-sm py-3 hover:bg-primary/90 transition-colors"
                  data-ocid="book.submit_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    "Book Now"
                  )}
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
}
