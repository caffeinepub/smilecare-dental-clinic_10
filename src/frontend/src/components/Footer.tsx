import { Link } from "@tanstack/react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "oklch(0.195 0.048 228)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🦷</span>
              <span className="font-bold text-xl tracking-tight">
                SmileCare
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "oklch(0.78 0.022 220)" }}
            >
              Your trusted dental partner for the whole family. We bring smiles
              to life with compassionate, expert care.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "oklch(0.35 0.06 228)" }}
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "oklch(0.35 0.06 228)" }}
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    fill="oklch(0.195 0.048 228)"
                  />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    stroke="oklch(0.195 0.048 228)"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "oklch(0.35 0.06 228)" }}
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Book Appointment", to: "/book" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "oklch(0.78 0.022 220)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Teeth Cleaning",
                "Root Canal",
                "Teeth Whitening",
                "Braces & Orthodontics",
                "Dental Implants",
              ].map((s) => (
                <li key={s}>
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.78 0.022 220)" }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Contact & Hours
            </h3>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "oklch(0.78 0.022 220)" }}
            >
              <li>📍 123 Health Street, Medical Colony, New Delhi - 110001</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ care@smilecare.in</li>
              <li className="pt-2">
                <span className="font-semibold text-white block mb-1">
                  Clinic Hours
                </span>
                Mon–Sat: 9:00 AM – 8:00 PM
                <br />
                Sunday: 10:00 AM – 4:00 PM
              </li>
              <li className="pt-2">
                <span className="font-semibold text-red-400 block">
                  🚨 Emergency
                </span>
                +91 98765 00000 (24/7)
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm"
          style={{
            borderColor: "oklch(0.35 0.04 228)",
            color: "oklch(0.65 0.02 220)",
          }}
        >
          <span>© {year} SmileCare Dental Clinic. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.button"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-hero text-white hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <span className="sr-only">Chat on WhatsApp</span>
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M11.999 2C6.477 2 2 6.477 2 11.999c0 1.988.568 3.84 1.551 5.407L2 22l4.75-1.508A9.957 9.957 0 0011.999 22C17.522 22 22 17.523 22 12c0-5.522-4.478-10-10.001-10zm0 18.18a8.168 8.168 0 01-4.162-1.135l-.299-.178-3.1.985.943-3.05-.193-.31A8.18 8.18 0 013.819 12c0-4.507 3.672-8.18 8.18-8.18S20.18 7.493 20.18 12c0 4.508-3.673 8.18-8.181 8.18z" />
        </svg>
      </a>
    </footer>
  );
}
