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
    role: "Estate Manager",
    project: "CGV10 Portal Warga",
    projectId: "cgv10",
    quote:
      "Sebelumnya kami pakai WhatsApp dan spreadsheet untuk tagih iuran 500+ keluarga. Sekarang semua otomatis — tagihan terkirim, QR pass aktif, dan laporan keuangan bisa dilihat semua warga. Transparansi yang selama ini kami butuhkan.",
    initials: "RH",
    accentColor: "purple",
  },
  {
    id: "ooi-partner",
    name: "Budi Setiawan",
    role: "Export Operations Lead",
    project: "Origin Of Indonesia",
    projectId: "ooi",
    quote:
      "The escrow flow Ahlul designed gave our international buyers the confidence to transact without hesitation. The compliance document generator alone saves us 3–4 hours per shipment. This is exactly what Indonesian exporters have been missing.",
    initials: "BS",
    accentColor: "gold",
  },
  {
    id: "alikhlas-board",
    name: "Ustadz Ahmad Fauzi",
    role: "Committee Chairman",
    project: "Masjid Al Ikhlas",
    projectId: "masjid-al-ikhlas",
    quote:
      "Sistem digital ini mengubah cara jemaah berinteraksi dengan masjid. Donasi lebih mudah, jadwal sholat selalu akurat, dan yang paling penting — laporan keuangan kami sekarang 100% terbuka untuk publik. Amanah dalam genggaman teknologi.",
    initials: "AF",
    accentColor: "emerald",
  },
];
