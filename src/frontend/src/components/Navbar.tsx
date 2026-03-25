import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-xs">
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🦷</span>
          <span className="font-bold text-lg text-clinic-navy tracking-tight">
            SmileCare
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "_")}.link`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-clinic-body"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button (desktop) */}
        <div className="hidden md:block">
          <Link
            to="/book"
            data-ocid="nav.book_appointment.button"
            className="inline-flex items-center px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-clinic-body hover:bg-background transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.menu.toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2 border-b border-border last:border-0 ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-clinic-body"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                data-ocid="nav.mobile_book.button"
                className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
