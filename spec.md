# SmileCare Dental Clinic Website

## Current State
New project. Empty backend actor, no frontend pages yet.

## Requested Changes (Diff)

### Add
- Full multi-page dental clinic website with 6 pages + footer
- Appointment booking form stored in backend
- Patient testimonials stored in backend
- WhatsApp floating chat button
- Trust badges and hygiene assurance section
- Mobile-responsive layout
- SEO meta tags

### Modify
- N/A (new project)

### Remove
- N/A

## Implementation Plan

### Backend
- `submitAppointment(name, phone, email, date, service)` -> stores appointment
- `getTestimonials()` -> returns list of testimonials (seeded)
- `submitTestimonial(name, rating, review)` -> stores new testimonial

### Frontend Pages
1. **Home** - Hero with CTA, quick services overview, trust badges, hygiene assurance
2. **About Us** - Clinic intro, doctor profile, mission/vision
3. **Services** - 5 services each with icon + description
4. **Appointments** - Booking form (name, phone, email, date, service)
5. **Testimonials** - Patient reviews with star ratings
6. **Contact** - Address, phone, email, Google Maps embed

### Shared
- Sticky navigation bar with links to all pages
- Footer with social media, clinic hours, emergency contact
- Floating WhatsApp button
- Color palette: white (#FFFFFF), blue (#1E6FBF / #2A9DE0), light green (#4CAF88)
- SEO: meta description and keywords on all pages
