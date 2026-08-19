"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  Wallet,
  Calendar as CalendarIcon,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Heart,
  Grid,
  Calendar,
  Sparkles,
  QrCode,
  ShieldCheck,
  Building2,
  FileText
} from "lucide-react";

export default function AlIkhlasDemo() {
  const [activeTab, setActiveTab] = useState<"salat" | "transparansi" | "agenda">("salat");

  // 1. Prayer Times & Countdown State
  const [selectedCity, setSelectedCity] = useState("Batam (Cipta Greenville)");
  const prayerTimes = [
    { name: "Subuh", time: "04:48", icon: "🌅" },
    { name: "Dzuhur", time: "12:12", icon: "☀️" },
    { name: "Ashar", time: "15:32", icon: "🌤️" },
    { name: "Maghrib", time: "18:16", icon: "🌆", isNext: true },
    { name: "Isya", time: "19:27", icon: "🌙" }
  ];

  // Countdown timer simulation
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 42, seconds: 15 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Financial Transparency & Donation Simulation State
  const [selectedProgram, setSelectedProgram] = useState("Operasional Masjid");
  const [donationAmount, setDonationAmount] = useState(100000);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [receipt, setReceipt] = useState<{
    id: string;
    donor: string;
    program: string;
    amount: number;
    date: string;
  } | null>(null);

  const [ledgerStats, setLedgerStats] = useState({
    danaMasuk: 12850000,
    danaTerpakai: 7650000,
    kegiatanActive: 18,
    relawanCount: 34
  });

  const handleSimulateDonation = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseInt(customAmount) : donationAmount;
    if (!finalAmount || finalAmount <= 0) return;

    const newReceipt = {
      id: "INV-IKHLAS-" + Math.floor(100000 + Math.random() * 900000),
      donor: donorName.trim() || "Hamba Allah (Anonim)",
      program: selectedProgram,
      amount: finalAmount,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setReceipt(newReceipt);
    setLedgerStats((prev) => ({
      ...prev,
      danaMasuk: prev.danaMasuk + finalAmount
    }));
  };

  // 3. Agenda & Program Calendar State
  const [agendaView, setAgendaView] = useState<"grid" | "cal">("grid");
  const programs = [
    {
      id: 1,
      title: "Tahsin & Tafsir Al-Qur'an Pekanan",
      category: "Ilmu & Pendidikan",
      schedule: "Setiap Selasa & Kamis • Ba'da Maghrib",
      speaker: "Ustadz H. Ahmad Ridwan, Lc.",
      status: "Berjalan"
    },
    {
      id: 2,
      title: "TPA Al Ikhlas (Anak & Remaja)",
      category: "Pendidikan Anak",
      schedule: "Senin - Jumat • 16:00 - 17:30 WIB",
      speaker: "Tim Pengajar TPA",
      status: "Aktif"
    },
    {
      id: 3,
      title: "Jumat Berkah & Dapur Utang Warga",
      category: "Pelayanan Sosial",
      schedule: "Setiap Jumat • Ba'da Salat Jumat",
      speaker: "Tim Keakhiran & Pemuda",
      status: "Mingguan"
    }
  ];

  const calendarEvents = [
    { day: 14, title: "Kajian Subuh Tematik", type: "Kajian" },
    { day: 16, title: "Penyaluran Santunan Anak Yatim", type: "Sosial" },
    { day: 20, title: "Gotong Royong & Bersih Masjid", type: "Komunitas" },
    { day: 24, title: "Tabligh Akbar Menyambut Ramadan", type: "Acara Utama" }
  ];

  return (
    <div className="bg-[#0C1810] border border-[#0E3828]/80 rounded-2xl overflow-hidden shadow-2xl mt-6 text-cream">
      {/* Ecosystem Header Badge */}
      <div className="bg-[#0E3828]/90 px-6 py-4 border-b border-[#C9A55A]/30 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C9A55A]/20 border border-[#C9A55A]/50 flex items-center justify-center text-[#C9A55A] font-serif font-bold text-lg">
            🕌
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base text-[#F3EFE6]">
                Masjid Al Ikhlas Ecosystem
              </span>
              <span className="text-[10px] font-mono uppercase bg-[#C9A55A]/20 text-[#C9A55A] border border-[#C9A55A]/40 px-2 py-0.5 rounded-full font-bold">
                Batam
              </span>
            </div>
            <p className="text-xs text-[#EDE9DF]/70 font-sans">
              Digital Infrastructure • Live Prayer, Financial Ledger & Community Hub
            </p>
          </div>
        </div>

        <a
          href="https://bespoke-sundae-408c0c.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C9A55A] text-[#0C1810] font-sans text-xs font-bold hover:bg-[#F3EFE6] transition-colors"
        >
          <span>Open Live Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Sub-tab Navigation */}
      <div className="bg-[#08120B] border-b border-[#0E3828] p-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab("salat")}
          className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
            activeTab === "salat"
              ? "bg-[#0E3828] border border-[#C9A55A]/60 text-[#C9A55A] font-bold shadow-md"
              : "text-[#EDE9DF]/60 hover:text-[#F3EFE6] border border-transparent"
          }`}
        >
          <Clock className="w-4 h-4 text-[#C9A55A]" />
          <span>1. Waktu Salat & Countdown</span>
        </button>

        <button
          onClick={() => setActiveTab("transparansi")}
          className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
            activeTab === "transparansi"
              ? "bg-[#0E3828] border border-[#C9A55A]/60 text-[#C9A55A] font-bold shadow-md"
              : "text-[#EDE9DF]/60 hover:text-[#F3EFE6] border border-transparent"
          }`}
        >
          <Wallet className="w-4 h-4 text-[#C9A55A]" />
          <span>2. Ledger Transparansi & Donasi</span>
        </button>

        <button
          onClick={() => setActiveTab("agenda")}
          className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
            activeTab === "agenda"
              ? "bg-[#0E3828] border border-[#C9A55A]/60 text-[#C9A55A] font-bold shadow-md"
              : "text-[#EDE9DF]/60 hover:text-[#F3EFE6] border border-transparent"
          }`}
        >
          <CalendarIcon className="w-4 h-4 text-[#C9A55A]" />
          <span>3. Program & Agenda Hub</span>
        </button>
      </div>

      {/* Tab Content 1: Prayer Schedule & Countdown */}
      {activeTab === "salat" && (
        <div className="p-6 space-y-6 bg-gradient-to-b from-[#0C1810] to-[#08120B]">
          {/* Bismillah Header */}
          <div className="text-center space-y-1 py-2 border-b border-[#0E3828]/60">
            <span className="font-serif text-xl md:text-2xl text-[#C9A55A] tracking-wide">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </span>
            <p className="text-[11px] font-mono text-[#EDE9DF]/60 uppercase tracking-widest">
              Waktu Salat Batam • Cipta Greenville Tembesi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Live Countdown Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0E3828] to-[#072218] border border-[#C9A55A]/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A55A]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9A55A] bg-[#C9A55A]/10 px-2.5 py-1 rounded-full border border-[#C9A55A]/30 font-bold">
                  MENUJU SALAT MAGHRIB
                </span>

                <div className="mt-6 mb-4">
                  <div className="font-mono font-black text-4xl md:text-5xl text-[#F3EFE6] tracking-tight">
                    {String(timeLeft.hours).padStart(2, "0")}:
                    {String(timeLeft.minutes).padStart(2, "0")}:
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <p className="text-xs text-[#C9A55A] font-sans mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C9A55A] animate-ping" />
                    Waktu Salat Berikutnya: <strong className="text-white">Maghrib (18:16 WIB)</strong>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#EDE9DF]/70">
                <span>Wilayah: Batam, Kepulauan Riau</span>
                <span className="text-[#C9A55A] font-bold">Live API Sync</span>
              </div>
            </div>

            {/* Prayer Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {prayerTimes.map((item) => (
                <div
                  key={item.name}
                  className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                    item.isNext
                      ? "bg-[#0E3828] border-[#C9A55A] shadow-lg shadow-[#C9A55A]/10 ring-1 ring-[#C9A55A]"
                      : "bg-[#08120B]/80 border-[#0E3828] hover:border-[#0E3828]/80"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="mt-4">
                    <span className="text-[11px] font-mono text-[#EDE9DF]/60 uppercase block">
                      {item.name}
                    </span>
                    <strong className={`font-mono text-xl ${item.isNext ? "text-[#C9A55A]" : "text-white"}`}>
                      {item.time}
                    </strong>
                  </div>
                  {item.isNext && (
                    <span className="text-[9px] font-mono uppercase text-[#C9A55A] font-bold mt-2 block">
                      Berikutnya
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 2: Financial Transparency & Donation Simulator */}
      {activeTab === "transparansi" && (
        <div className="p-6 space-y-6">
          {/* Transparency Summary Widgets */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#0E3828]/40 border border-[#0E3828] p-4 rounded-xl">
              <span className="text-[10px] font-mono text-[#EDE9DF]/60 uppercase">Dana Masuk (Bulan Ini)</span>
              <strong className="block font-mono text-xl text-[#C9A55A] mt-1">
                Rp {ledgerStats.danaMasuk.toLocaleString("id-ID")}
              </strong>
            </div>

            <div className="bg-[#0E3828]/40 border border-[#0E3828] p-4 rounded-xl">
              <span className="text-[10px] font-mono text-[#EDE9DF]/60 uppercase">Dana Terpakai (Disalurkan)</span>
              <strong className="block font-mono text-xl text-emerald-400 mt-1">
                Rp {ledgerStats.danaTerpakai.toLocaleString("id-ID")}
              </strong>
            </div>

            <div className="bg-[#0E3828]/40 border border-[#0E3828] p-4 rounded-xl">
              <span className="text-[10px] font-mono text-[#EDE9DF]/60 uppercase">Program/Kegiatan Aktif</span>
              <strong className="block font-mono text-xl text-white mt-1">
                {ledgerStats.kegiatanActive} Program
              </strong>
            </div>

            <div className="bg-[#0E3828]/40 border border-[#0E3828] p-4 rounded-xl">
              <span className="text-[10px] font-mono text-[#EDE9DF]/60 uppercase">Relawan Komunitas</span>
              <strong className="block font-mono text-xl text-white mt-1">
                {ledgerStats.relawanCount} Warga
              </strong>
            </div>
          </div>

          {/* Allocation Progress Bar */}
          <div className="bg-[#08120B] p-4 rounded-xl border border-[#0E3828] space-y-2">
            <div className="flex justify-between text-xs font-mono text-[#EDE9DF]/80">
              <span>Alokasi Keuangan & Pertanggungjawaban Bulanan</span>
              <span className="text-[#C9A55A] font-bold">
                {Math.round((ledgerStats.danaTerpakai / ledgerStats.danaMasuk) * 100)}% Disalurkan
              </span>
            </div>
            <div className="h-3 w-full bg-[#0C1810] rounded-full overflow-hidden border border-[#0E3828]">
              <div
                className="h-full bg-gradient-to-r from-[#0E3828] via-[#C9A55A] to-emerald-400 transition-all duration-500 rounded-full"
                style={{ width: `${Math.min(100, (ledgerStats.danaTerpakai / ledgerStats.danaMasuk) * 100)}%` }}
              />
            </div>
          </div>

          {/* Interactive Donation Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <form onSubmit={handleSimulateDonation} className="lg:col-span-7 bg-[#08120B] p-6 rounded-2xl border border-[#0E3828] space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-[#C9A55A]" />
                <h4 className="font-sans font-bold text-sm text-white">Simulasi Infaq / Dukungan Masjid</h4>
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#EDE9DF]/70 uppercase block mb-1.5">
                  Pilih Category Peruntukan
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full bg-[#0C1810] border border-[#0E3828] text-white text-xs rounded-xl p-3 focus:outline-none focus:border-[#C9A55A]"
                >
                  <option>Operasional Masjid (Listrik & Kebersihan)</option>
                  <option>Pendidikan Anak (TPA & Material Belajar)</option>
                  <option>Fasilitas Jamaah (Karpet, AC & Wudhu)</option>
                  <option>Sosial Warga & Jumat Berkah</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#EDE9DF]/70 uppercase block mb-1.5">
                  Nominal Infaq (Nominal Pilihan)
                </label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[25000, 50000, 100000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setDonationAmount(amt);
                        setCustomAmount("");
                      }}
                      className={`py-2 px-3 rounded-lg text-xs font-mono border transition-all ${
                        donationAmount === amt && !customAmount
                          ? "bg-[#0E3828] border-[#C9A55A] text-[#C9A55A] font-bold"
                          : "bg-[#0C1810] border-[#0E3828] text-[#EDE9DF]/70 hover:text-white"
                      }`}
                    >
                      Rp {amt.toLocaleString("id-ID")}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  placeholder="Atau masukkan nominal custom (Rp)"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full bg-[#0C1810] border border-[#0E3828] text-white text-xs rounded-xl p-3 focus:outline-none focus:border-[#C9A55A]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#EDE9DF]/70 uppercase block mb-1.5">
                  Nama Dermawan / Hamba Allah
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Ahmad Hidayat (Kosongkan jika anonim)"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full bg-[#0C1810] border border-[#0E3828] text-white text-xs rounded-xl p-3 focus:outline-none focus:border-[#C9A55A]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#C9A55A] text-[#0C1810] font-sans font-bold text-xs rounded-xl hover:bg-[#F3EFE6] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C9A55A]/10"
              >
                <Sparkles className="w-4 h-4" />
                <span>Proses Simulasi & Buat Tanda Terima Digital</span>
              </button>
            </form>

            {/* Live Instant Receipt Output */}
            <div className="lg:col-span-5 bg-[#08120B] p-6 rounded-2xl border border-[#0E3828] space-y-4">
              <div className="flex items-center gap-2 border-b border-[#0E3828] pb-3">
                <FileText className="w-4 h-4 text-[#C9A55A]" />
                <h4 className="font-sans font-bold text-sm text-white">Preview Tanda Terima Transparansi</h4>
              </div>

              {receipt ? (
                <div className="bg-[#0C1810] border border-[#C9A55A]/40 rounded-xl p-5 space-y-3 font-mono text-xs text-[#EDE9DF] relative">
                  <div className="flex justify-between items-start border-b border-[#0E3828] pb-3">
                    <div>
                      <span className="text-[10px] text-[#C9A55A] font-bold block">TANDA TERIMA RESMI</span>
                      <strong className="text-white text-sm">{receipt.id}</strong>
                    </div>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
                      VERIFIED
                    </span>
                  </div>

                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-[#EDE9DF]/50">Donatur:</span>
                      <span className="text-white font-bold">{receipt.donor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#EDE9DF]/50">Peruntukan:</span>
                      <span className="text-[#C9A55A]">{receipt.program}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#EDE9DF]/50">Nominal:</span>
                      <span className="text-emerald-400 font-bold text-sm">
                        Rp {receipt.amount.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px] text-[#EDE9DF]/40 pt-2 border-t border-[#0E3828]">
                      <span>Waktu:</span>
                      <span>{receipt.date}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-center gap-2 text-[10px] text-[#C9A55A] bg-[#0E3828]/40 p-2 rounded-lg border border-[#0E3828]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Terverifikasi di Buku Kas Publik Masjid</span>
                  </div>
                </div>
              ) : (
                <div className="bg-[#0C1810] border border-[#0E3828] rounded-xl p-8 text-center space-y-2">
                  <QrCode className="w-8 h-8 text-[#C9A55A]/40 mx-auto" />
                  <p className="text-xs text-[#EDE9DF]/60 font-sans">
                    Isi formulir di sebelah kiri dan klik tombol simulasi untuk menerbitkan tanda terima digital instan.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 3: Program & Agenda Hub */}
      {activeTab === "agenda" && (
        <div className="p-6 space-y-6">
          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-[#0E3828] pb-4">
            <div>
              <h4 className="font-sans font-bold text-sm text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#C9A55A]" />
                <span>Program & Agenda Kemakmuran Masjid</span>
              </h4>
              <p className="text-xs text-[#EDE9DF]/60 font-sans">
                Kegiatan rutin, TPA, kajian keislaman, dan agenda sosial warga Greenville.
              </p>
            </div>

            {/* View Switcher */}
            <div className="flex items-center gap-1 bg-[#08120B] border border-[#0E3828] p-1 rounded-xl">
              <button
                onClick={() => setAgendaView("grid")}
                className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  agendaView === "grid"
                    ? "bg-[#0E3828] text-[#C9A55A] font-bold"
                    : "text-[#EDE9DF]/60 hover:text-white"
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Program Grid</span>
              </button>
              <button
                onClick={() => setAgendaView("cal")}
                className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  agendaView === "cal"
                    ? "bg-[#0E3828] text-[#C9A55A] font-bold"
                    : "text-[#EDE9DF]/60 hover:text-white"
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Kalender Agenda</span>
              </button>
            </div>
          </div>

          {/* Program Grid View */}
          {agendaView === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {programs.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-[#08120B] border border-[#0E3828] rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-[#C9A55A]/50 transition-all group"
                >
                  <div>
                    <span className="text-[9px] font-mono text-[#C9A55A] uppercase tracking-wider bg-[#C9A55A]/10 border border-[#C9A55A]/30 px-2 py-0.5 rounded-full font-bold">
                      {prog.category}
                    </span>
                    <h5 className="font-serif font-bold text-base text-white mt-3 group-hover:text-[#C9A55A] transition-colors">
                      {prog.title}
                    </h5>
                    <p className="text-xs text-[#EDE9DF]/70 font-sans mt-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C9A55A]" />
                      {prog.schedule}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#0E3828] flex items-center justify-between text-xs text-[#EDE9DF]/60">
                    <span>{prog.speaker}</span>
                    <span className="text-emerald-400 font-mono font-bold text-[10px]">{prog.status}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Calendar View Simulation */
            <div className="bg-[#08120B] border border-[#0E3828] rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#C9A55A]">
                <strong>Bulan Ini • Agenda Kegiatan</strong>
                <span>4 Event Mendatang</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {calendarEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0C1810] border border-[#0E3828] p-4 rounded-xl flex items-center gap-4 hover:border-[#C9A55A]/60 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0E3828] border border-[#C9A55A]/40 flex flex-col items-center justify-center text-[#C9A55A] shrink-0 font-mono">
                      <span className="text-[10px] text-[#EDE9DF]/60">TGL</span>
                      <strong className="text-base text-white font-bold">{evt.day}</strong>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-[#C9A55A] uppercase font-bold">
                        {evt.type}
                      </span>
                      <h6 className="font-sans font-bold text-xs text-white leading-snug">
                        {evt.title}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer Status Bar */}
      <div className="bg-[#08120B] px-6 py-3 border-t border-[#0E3828] flex items-center justify-between font-mono text-[10px] text-[#EDE9DF]/50">
        <span>ARCHITECTURAL DEMO // MASJID AL IKHLAS DIGITAL PRESENCE</span>
        <span>STATUS: LIVE & OPERATIONAL</span>
      </div>
    </div>
  );
}
