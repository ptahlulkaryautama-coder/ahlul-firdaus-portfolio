"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  BookOpen,
  Heart,
  ShieldCheck,
  Lock,
  Sparkles,
  Info,
  MapPin,
  Phone,
  FileText,
  GraduationCap,
  Wallet
} from "lucide-react";

export default function AlIkhlasDemo() {
  const [activeMode, setActiveMode] = useState<"jamaah" | "tpq" | "supporter" | "dkm">("jamaah");

  // 1. Dynamic Prayer Schedule & Countdown State (Batam)
  const prayerTimes = [
    { name: "Subuh", time: "04:48", icon: "🌅" },
    { name: "Dzuhur", time: "12:12", icon: "☀️" },
    { name: "Ashar", time: "15:32", icon: "🌤️" },
    { name: "Maghrib", time: "18:16", icon: "🌆", isNext: true },
    { name: "Isya", time: "19:27", icon: "🌙" }
  ];

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

  // 2. TPQ Al-Mardhotillah Data
  const tpqPrograms = [
    {
      title: "Tahsin & Tajwid Al-Qur'an",
      level: "Tingkat Dasar s/d Lanjutan",
      desc: "Perbaikan makhraj huruf, kaidah tajwid, dan kelancaran tilawah anak.",
      schedule: "Senin, Rabu, Jumat • Ba'da Ashar"
    },
    {
      title: "Tahfidz Juz 30 & Doa Harian",
      level: "Tingkat Menengah",
      desc: "Target hafalan surat pendek, doa harian, dan adab islami anak sholeh.",
      schedule: "Selasa & Kamis • Ba'da Ashar"
    },
    {
      title: "Pendidikan Karakter & Sirah",
      level: "Semua Tingkat",
      desc: "Kisah teladan Rasulullah & sahabat serta pembiasaan sholat berjamaah.",
      schedule: "Sabtu Pagi • 08:30 - 10:00 WIB"
    }
  ];

  // 3. Financial Transparency Demo State
  const [selectedProgram, setSelectedProgram] = useState("Operasional & Kemakmuran Masjid");
  const [donationAmount, setDonationAmount] = useState(100000);
  const [receipt, setReceipt] = useState<{
    id: string;
    program: string;
    amount: number;
    date: string;
  } | null>(null);

  const handleSimulateDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setReceipt({
      id: "DEMO-IKHLAS-" + Math.floor(100000 + Math.random() * 900000),
      program: selectedProgram,
      amount: donationAmount,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      })
    });
  };

  return (
    <div className="bg-[#08120B] border border-[#0E3828] rounded-2xl overflow-hidden shadow-2xl mt-6 text-cream font-sans">
      {/* Privacy & Demonstration Disclaimer Banner */}
      <div className="bg-amber-950/40 border-b border-amber-500/30 px-4 sm:px-6 py-2.5 flex items-center gap-2 text-xs font-mono text-amber-300">
        <Info className="w-4 h-4 text-amber-400 shrink-0" />
        <span>
          Screens in this case study use public, redacted, or demonstration information. Sensitive banking, donor, contact, and administrative data is intentionally concealed.
        </span>
      </div>

      {/* Header Badge */}
      <div className="bg-[#0E3828]/90 px-6 py-4 border-b border-[#C9A55A]/30 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C9A55A]/20 border border-[#C9A55A]/50 flex items-center justify-center text-[#C9A55A] font-serif font-bold text-lg">
            🕌
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base text-[#F3EFE6]">
                Digital Mosque Journey Explorer
              </span>
              <span className="text-[10px] font-mono uppercase bg-[#C9A55A]/20 text-[#C9A55A] border border-[#C9A55A]/40 px-2 py-0.5 rounded-full font-bold">
                Masjid Al Ikhlas
              </span>
            </div>
            <p className="text-xs text-[#EDE9DF]/70 font-sans">
              Experience the 4 primary community pathways designed for jamaah, families, donors, and DKM.
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive Architectural Demo</span>
        </div>
      </div>

      {/* 4 Audience Mode Switcher */}
      <div className="bg-[#050D07] border-b border-[#0E3828] p-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveMode("jamaah")}
          className={`px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
            activeMode === "jamaah"
              ? "bg-[#0E3828] border border-emerald-500/60 text-emerald-300 font-bold shadow-md"
              : "text-slate-400 hover:text-slate-200 border border-transparent"
          }`}
        >
          <Clock className="w-4 h-4 text-emerald-400" />
          <span>1. Jamaah Mode</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode("tpq")}
          className={`px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
            activeMode === "tpq"
              ? "bg-[#0E3828] border border-emerald-500/60 text-emerald-300 font-bold shadow-md"
              : "text-slate-400 hover:text-slate-200 border border-transparent"
          }`}
        >
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <span>2. TPQ Family Mode</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode("supporter")}
          className={`px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
            activeMode === "supporter"
              ? "bg-[#0E3828] border border-[#C9A55A]/60 text-[#C9A55A] font-bold shadow-md"
              : "text-slate-400 hover:text-slate-200 border border-transparent"
          }`}
        >
          <Wallet className="w-4 h-4 text-[#C9A55A]" />
          <span>3. Community Supporter</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode("dkm")}
          className={`px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
            activeMode === "dkm"
              ? "bg-[#162719] border border-[#C9A55A]/60 text-[#C9A55A] font-bold shadow-md"
              : "text-slate-400 hover:text-slate-200 border border-transparent"
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-[#C9A55A]" />
          <span>4. DKM Stewardship (Protected)</span>
        </button>
      </div>

      {/* MODE 1: JAMAAH (Prayer Schedule & Countdown) */}
      {activeMode === "jamaah" && (
        <div className="p-6 space-y-6 bg-gradient-to-b from-[#0C1810] to-[#08120B]">
          <div className="text-center space-y-1 py-1 border-b border-[#0E3828]/60">
            <span className="font-serif text-xl md:text-2xl text-[#C9A55A] tracking-wide">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </span>
            <p className="text-[11px] font-mono text-[#EDE9DF]/60 uppercase tracking-widest">
              Waktu Salat Batam • Dynamic Schedule Engine
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

                <div className="mt-5 mb-3">
                  <div className="font-mono font-black text-4xl sm:text-5xl text-[#F3EFE6] tracking-tight">
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
                <span className="text-emerald-400 font-bold">Dynamic Calculation</span>
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

          {/* Location & Quick Jamaah Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#050D07] border border-[#0E3828] flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Lokasi &amp; Akses Masjid</span>
                <p className="text-[11px] text-slate-400">Kompleks Perumahan Cipta Greenville, RT 010/RW 021, Tembesi, Batam</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#050D07] border border-[#0E3828] flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#C9A55A]/10 text-[#C9A55A] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Layanan Informasi DKM</span>
                <p className="text-[11px] text-slate-400">Saluran komunikasi jamaah untuk konsultasi ibadah &amp; pendaftaran agenda</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: TPQ FAMILY (Education Portal) */}
      {activeMode === "tpq" && (
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#0E3828] pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                Islamic Education Module
              </span>
              <h4 className="font-serif font-bold text-base text-white mt-0.5">
                TPQ Al-Mardhotillah • Masjid Al Ikhlas
              </h4>
            </div>
            <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full font-bold">
              Tahun Ajaran Aktif
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tpqPrograms.map((prog, idx) => (
              <div
                key={idx}
                className="bg-[#0C1810] border border-[#0E3828] rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-emerald-500/40 transition-all"
              >
                <div>
                  <span className="text-[9px] font-mono text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                    {prog.level}
                  </span>
                  <h5 className="font-bold text-sm text-white mt-3">{prog.title}</h5>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">{prog.desc}</p>
                </div>
                <div className="pt-3 border-t border-[#0E3828] text-[11px] font-mono text-[#C9A55A] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{prog.schedule}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-xs text-white block">Portal Informasi Santri &amp; Orang Tua</strong>
                <span className="text-[11px] text-slate-400">Pengumuman kalender libur, evaluasi hafalan, dan agenda wisuda tahfidz.</span>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-500/30">
              Verified
            </span>
          </div>
        </div>
      )}

      {/* MODE 3: COMMUNITY SUPPORTER (Transparency & Donation Guidance) */}
      {activeMode === "supporter" && (
        <div className="p-6 space-y-6">
          {/* Demonstration Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#0C1810] border border-[#0E3828] p-3.5 rounded-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Kas Masjid (Publikasi)</span>
              <strong className="block font-mono text-base text-[#C9A55A] mt-1">Rp 14.850.000</strong>
              <span className="text-[8.5px] font-mono text-slate-500">Periode Berjalan</span>
            </div>
            <div className="bg-[#0C1810] border border-[#0E3828] p-3.5 rounded-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Penyaluran Sosial</span>
              <strong className="block font-mono text-base text-emerald-400 mt-1">Rp 8.200.000</strong>
              <span className="text-[8.5px] font-mono text-slate-500">Jumat Berkah &amp; Dhuafa</span>
            </div>
            <div className="bg-[#0C1810] border border-[#0E3828] p-3.5 rounded-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Kegiatan Aktif</span>
              <strong className="block font-mono text-base text-white mt-1">6 Program</strong>
              <span className="text-[8.5px] font-mono text-slate-500">Kajian &amp; TPQ</span>
            </div>
            <div className="bg-[#0C1810] border border-[#0E3828] p-3.5 rounded-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Metode Infaq</span>
              <strong className="block font-mono text-base text-white mt-1">QRIS &amp; Transfer</strong>
              <span className="text-[8.5px] font-mono text-slate-500">Rekening Resmi DKM</span>
            </div>
          </div>

          {/* Interactive Demonstration Infaq Guidance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <form onSubmit={handleSimulateDonation} className="lg:col-span-7 bg-[#050D07] p-5 rounded-2xl border border-[#0E3828] space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#C9A55A]" />
                <h4 className="font-bold text-xs text-white">Simulasi Panduan Infaq &amp; Sedekah</h4>
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                  Pilih Program Peruntukan
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full bg-[#0C1810] border border-[#0E3828] text-white text-xs rounded-xl p-2.5 focus:outline-none focus:border-[#C9A55A]"
                >
                  <option>Operasional &amp; Kemakmuran Masjid</option>
                  <option>Pendidikan TPQ Al-Mardhotillah</option>
                  <option>Jumat Berkah &amp; Santunan Sosial Warga</option>
                  <option>Pemeliharaan Fasilitas &amp; Sound System</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                  Nominal Simulasi
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[25000, 50000, 100000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setDonationAmount(amt)}
                      className={`py-2 px-3 rounded-lg text-xs font-mono border transition-all ${
                        donationAmount === amt
                          ? "bg-[#0E3828] border-[#C9A55A] text-[#C9A55A] font-bold"
                          : "bg-[#0C1810] border-[#0E3828] text-slate-400 hover:text-white"
                      }`}
                    >
                      Rp {amt.toLocaleString("id-ID")}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#C9A55A] text-[#0C1810] font-bold text-xs rounded-xl hover:bg-[#F3EFE6] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Terbitkan Tanda Terima Simulasi</span>
              </button>
            </form>

            <div className="lg:col-span-5 bg-[#050D07] p-5 rounded-2xl border border-[#0E3828] space-y-3">
              <div className="flex items-center gap-2 border-b border-[#0E3828] pb-2">
                <FileText className="w-4 h-4 text-[#C9A55A]" />
                <h4 className="font-bold text-xs text-white">Tanda Terima Digital</h4>
              </div>

              {receipt ? (
                <div className="bg-[#0C1810] border border-[#C9A55A]/40 rounded-xl p-4 space-y-2 font-mono text-xs">
                  <div className="flex justify-between items-center text-[10px] text-[#C9A55A] font-bold">
                    <span>{receipt.id}</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">DEMO VERIFIED</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    <div>Peruntukan: <strong className="text-white">{receipt.program}</strong></div>
                    <div>Nominal: <strong className="text-emerald-400 font-bold">Rp {receipt.amount.toLocaleString("id-ID")}</strong></div>
                    <div className="text-[9.5px] text-slate-500 mt-1">Tanggal: {receipt.date}</div>
                  </div>
                </div>
              ) : (
                <div className="text-center p-6 text-xs text-slate-500">
                  Pilih nominal dan klik tombol untuk menghasilkan tanda terima simulasi.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODE 4: DKM STEWARDSHIP (Protected Concept Preview) */}
      {activeMode === "dkm" && (
        <div className="p-6 space-y-6">
          <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#C9A55A] shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-[#C9A55A]">Authorized DKM Operations Workspace</h5>
              <p className="text-[11px] text-slate-300 leading-relaxed mt-1">
                Area operasional internal pengurus DKM untuk rekonsiliasi kas masjid, pencatatan transaksi masuk/keluar, dan pengelolaan warta resmi lingkungan. Tampilan visual lengkap dilindungi demi privasi tata kelola.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#0C1810] border border-[#0E3828] space-y-2">
              <span className="text-[9px] font-mono text-[#C9A55A] uppercase font-bold">Modul 01</span>
              <h6 className="text-xs font-bold text-white">Cash Ledger &amp; Reconciliation</h6>
              <p className="text-[11px] text-slate-400">Verifikasi berkala saldo rekening bank, kas fisik, dan pos anggaran masjid.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0C1810] border border-[#0E3828] space-y-2">
              <span className="text-[9px] font-mono text-[#C9A55A] uppercase font-bold">Modul 02</span>
              <h6 className="text-xs font-bold text-white">Warta &amp; Media Publisher</h6>
              <p className="text-[11px] text-slate-400">Penerbitan jadwal imam/khatib Jumat, kajian tematik, dan warta DKM ke website publik.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0C1810] border border-[#0E3828] space-y-2">
              <span className="text-[9px] font-mono text-[#C9A55A] uppercase font-bold">Modul 03</span>
              <h6 className="text-xs font-bold text-white">TPQ &amp; Santri Administration</h6>
              <p className="text-[11px] text-slate-400">Manajemen data santri, evaluasi kurikulum tahsin, dan log infaq pendidikan.</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Status Bar */}
      <div className="bg-[#050D07] px-6 py-3 border-t border-[#0E3828] flex items-center justify-between font-mono text-[10px] text-slate-400">
        <span>DIGITAL MOSQUE JOURNEY EXPLORER // MASJID AL IKHLAS</span>
        <span className="text-amber-400 font-bold">STATUS: UNDER DEVELOPMENT (PRE-LAUNCH)</span>
      </div>
    </div>
  );
}
