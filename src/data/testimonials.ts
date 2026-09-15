export interface Testimonial {
  id: string;
  name: string;
  role: string;
  project: string;
  projectId: string;
  quote: string;
  initials: string;
  accentColor: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "cgv10-admin",
    name: "Pak Rudi Hartono",
    role: "Community Administrator",
    project: "Portal Warga CGV",
    projectId: "cgv10",
    quote:
      "Sebelumnya koordinasi warga tersebar di grup chat dan catatan manual. Sekarang portal warga menyediakan wadah terintegrasi untuk informasi resmi, permohonan layanan lingkungan, transparansi kas RT, dan direktori usaha UMKM warga.",
    initials: "RH",
    accentColor: "emerald",
  },
  {
    id: "ooi-partner",
    name: "James Thornton",
    role: "Specialty Food & Coffee Importer",
    project: "OOI — Origin of Indonesia",
    projectId: "ooi",
    quote:
      "The Batam consolidation hub solves the biggest headache in sourcing from Indonesia. Being able to combine single-origin coffee, artisan snacks, and regional spices into one verified shipment makes international distribution commercially viable.",
    initials: "JT",
    accentColor: "gold",
  },
  {
    id: "alikhlas-board",
    name: "Ustadz Ahmad Fauzi",
    role: "Committee Chairman",
    project: "Masjid Al Ikhlas",
    projectId: "masjid-al-ikhlas",
    quote:
      "Platform digital ini menyatukan jadwal sholat Batam, informasi pendidikan TPQ, agenda kajian, dan publikasi transparansi kas masjid dalam satu sistem yang rapi dan mudah diakses jamaah.",
    initials: "AF",
    accentColor: "emerald",
  },
];
