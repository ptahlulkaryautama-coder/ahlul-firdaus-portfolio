"use client";

import React, { useState } from "react";
import { QrCode, Shield, GraduationCap, CheckCircle2, Users, Wallet } from "lucide-react";

export default function Cgv10Demo() {
  const [activeTab, setActiveTab] = useState<"warga" | "pengurus" | "tpq">("warga");

  // Resident State
  const [guestName, setGuestName] = useState("");
  const [visitPurpose, setVisitPurpose] = useState("Delivery");
  const [generatedPass, setGeneratedPass] = useState<{ name: string; purpose: string; code: string } | null>(null);

  // Admin / Pengurus State
  const [gateLog, setGateLog] = useState([
    { id: 1, name: "Budi Santoso", purpose: "Courier", time: "10:42", status: "Verified" },
    { id: 2, name: "Siti Rahma", purpose: "Family Visit", time: "10:50", status: "Pending" }
  ]);
  const [rtCash, setRtCash] = useState(5500000);

  // TPQ State
  const [students, setStudents] = useState([
    { id: 1, name: "Ahmad", level: "Iqra' 5", status: "Present" },
    { id: 2, name: "Fatimah", level: "Al-Qur'an Juz 15", status: "Present" },
    { id: 3, name: "Zayd", level: "Iqra' 3", status: "Absent" }
  ]);

  const generateQrPass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName) return;
    const randomCode = "CGV-" + Math.floor(100000 + Math.random() * 900000);
    setGeneratedPass({
      name: guestName,
      purpose: visitPurpose,
      code: randomCode
    });

    // Automatically append to guard gate logs as pending guest
    const newLog = {
      id: Date.now(),
      name: guestName,
      purpose: visitPurpose,
      time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }),
      status: "Pending"
    };
    setGateLog((prev) => [newLog, ...prev]);
  };

  const verifyGuest = (id: number) => {
    setGateLog((prev) =>
      prev.map((log) => (log.id === id ? { ...log, status: "Verified" } : log))
    );
  };

  const toggleAttendance = (id: number) => {
    setStudents((prev) =>
      prev.map((std) => (
        std.id === id
          ? { ...std, status: std.status === "Present" ? "Absent" : "Present" }
          : std
      ))
    );
  };

  const advanceLevel = (id: number) => {
    setStudents((prev) =>
      prev.map((std) => {
        if (std.id !== id) return std;
        let nextLevel = std.level;
        if (std.level.startsWith("Iqra'")) {
          const num = parseInt(std.level.split(" ")[1]);
          nextLevel = num < 6 ? `Iqra' ${num + 1}` : "Al-Qur'an Juz 1";
        } else if (std.level.startsWith("Al-Qur'an")) {
          const juz = parseInt(std.level.split("Juz ")[1]);
          nextLevel = `Al-Qur'an Juz ${juz + 1}`;
        }
        return { ...std, level: nextLevel };
      })
    );
  };

  return (
    <div className="w-full bg-forest-dark/90 rounded-xl border border-forest-light/40 overflow-hidden shadow-2xl mt-6">
      {/* Proposed Future Module Disclaimer Banner */}
      <div className="bg-gold-muted/10 border-b border-gold-muted/30 px-5 py-3 text-xs text-cream-dark/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-gold flex-shrink-0" />
          <span className="font-semibold text-gold">Proposed Future Module — Visitor Pass & Gate Verification Prototype</span>
        </div>
        <span className="text-[11px] text-cream-dark/70">
          Not currently connected to live guardhouse scanner or production security infrastructure.
        </span>
      </div>
      {/* Sub-tabs header */}
      <div className="bg-graphite-dark border-b border-graphite/80 flex items-center justify-between p-1">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("warga")}
            className={`px-3 py-1.5 rounded font-mono text-[10px] uppercase flex items-center gap-1.5 transition-colors ${
              activeTab === "warga"
                ? "bg-gold-muted/10 border border-gold-muted/30 text-gold-muted font-bold"
                : "text-cream-dark/50 hover:text-cream border border-transparent"
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Warga Portal</span>
          </button>
          <button
            onClick={() => setActiveTab("pengurus")}
            className={`px-3 py-1.5 rounded font-mono text-[10px] uppercase flex items-center gap-1.5 transition-colors ${
              activeTab === "pengurus"
                ? "bg-gold-muted/10 border border-gold-muted/30 text-gold-muted font-bold"
                : "text-cream-dark/50 hover:text-cream border border-transparent"
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Pengurus Cockpit</span>
          </button>
          <button
            onClick={() => setActiveTab("tpq")}
            className={`px-3 py-1.5 rounded font-mono text-[10px] uppercase flex items-center gap-1.5 transition-colors ${
              activeTab === "tpq"
                ? "bg-gold-muted/10 border border-gold-muted/30 text-gold-muted font-bold"
                : "text-cream-dark/50 hover:text-cream border border-transparent"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>TPQ Tracker</span>
          </button>
        </div>
        <span className="font-mono text-[9px] text-cream-dark/30 uppercase tracking-widest hidden sm:block pr-3">
          Interactive Mockup
        </span>
      </div>

      {/* Tab content area */}
      <div className="p-5 min-h-[300px]">
        {/* TAB 1: Resident Portal */}
        {activeTab === "warga" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-cream-dark/40 uppercase tracking-wider block">
                Resident Interface // Guest Pass Generator
              </span>
              
              <form onSubmit={generateQrPass} className="space-y-3">
                <div>
                  <label className="font-mono text-[9px] text-cream-dark/40 uppercase block mb-1">
                    GUEST FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full bg-graphite/40 border border-graphite/80 focus:border-gold-muted/80 rounded px-3 py-2 text-xs text-cream outline-none"
                  />
                </div>

                <div>
                  <label className="font-mono text-[9px] text-cream-dark/40 uppercase block mb-1">
                    VISIT PURPOSE
                  </label>
                  <select
                    value={visitPurpose}
                    onChange={(e) => setVisitPurpose(e.target.value)}
                    className="w-full bg-graphite/40 border border-graphite/80 focus:border-gold-muted/80 rounded px-3 py-2 text-xs text-cream outline-none cursor-pointer"
                  >
                    <option value="Delivery">Package Delivery / Courier</option>
                    <option value="Family Visit">Family / Friend Visit</option>
                    <option value="Maintenance">Service / Repair Worker</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-cream hover:bg-gold-muted text-deep-black font-sans text-xs tracking-wider rounded font-bold transition-all"
                >
                  Generate Temporary QR Pass
                </button>
              </form>
            </div>

            {/* Generated pass display */}
            <div className="bg-graphite/30 border border-graphite/60 p-4 rounded-lg flex flex-col items-center justify-center text-center min-h-[200px]">
              {generatedPass ? (
                <div className="space-y-3 w-full">
                  <div className="w-24 h-24 bg-white p-2 rounded-lg mx-auto flex items-center justify-center">
                    {/* Simplified mock QR code */}
                    <div className="grid grid-cols-5 gap-1 w-full h-full bg-deep-black p-1">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-sm ${
                            (i * 7 + 13) % 3 === 0 || i % 6 === 0 ? "bg-white" : "bg-deep-black"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-xs text-cream uppercase">
                      {generatedPass.name}
                    </h5>
                    <p className="text-[10px] font-mono text-gold-muted tracking-wider uppercase">
                      {generatedPass.purpose} // {generatedPass.code}
                    </p>
                  </div>
                  <div className="text-[9px] text-cream-dark/40 font-mono border-t border-graphite/40 pt-2">
                    Pass automatically synced to Guard checkpoint logs.
                  </div>
                </div>
              ) : (
                <div className="text-cream-dark/30 font-mono text-[10px] italic">
                  Generate a guest pass to preview PWA verification card...
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: Admin Cockpit */}
        {activeTab === "pengurus" && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-graphite/30 border border-graphite/60 p-3 rounded flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-mono text-cream-dark/40 block">SALDO KAS RT</span>
                  <span className="text-xs font-bold text-cream font-mono">Rp {rtCash.toLocaleString("id-ID")}</span>
                </div>
                <Wallet className="w-4 h-4 text-gold-muted shrink-0 ml-2" />
              </div>
              <div className="bg-graphite/30 border border-graphite/60 p-3 rounded flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-mono text-cream-dark/40 block">KK REGISTERED</span>
                  <span className="text-xs font-bold text-cream font-mono">250 Families</span>
                </div>
                <Users className="w-4 h-4 text-gold-muted shrink-0 ml-2" />
              </div>
              <div className="bg-graphite/30 border border-graphite/60 p-3 rounded flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-mono text-cream-dark/40 block">OUTSTANDING ISSUES</span>
                  <span className="text-xs font-bold text-amber-400 font-mono">2 Active</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 ml-2" />
              </div>
            </div>

            {/* Gate guard list */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-cream-dark/40 uppercase tracking-wider block">
                  Gate Security Guard Control Logs
                </span>
                <span className="text-[9px] text-emerald-400 font-mono animate-pulse">Live checkpoint feed</span>
              </div>

              <div className="space-y-2">
                {gateLog.map((log) => (
                  <div
                    key={log.id}
                    className="bg-graphite/20 border border-graphite/60 p-3 rounded flex items-center justify-between text-[11px]"
                  >
                    <div>
                      <span className="font-bold text-cream block">{log.name}</span>
                      <span className="text-[9px] font-mono text-cream-dark/50">
                        {log.purpose} • Arrived {log.time}
                      </span>
                    </div>
                    <div>
                      {log.status === "Verified" ? (
                        <div className="flex items-center gap-1 text-emerald-400 font-mono text-[9px] font-bold uppercase">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Access Granted</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => verifyGuest(log.id)}
                          className="px-2 py-1 bg-gold-muted/15 border border-gold-muted/40 hover:bg-gold-muted hover:text-deep-black text-gold-muted rounded text-[9px] font-mono uppercase tracking-wider transition-colors"
                        >
                          Approve Gate Open
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TPQ Tracker */}
        {activeTab === "tpq" && (
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-cream-dark/40 uppercase tracking-wider block">
              Taman Pendidikan Al-Qur'an // Student Milestones
            </span>

            <div className="border border-graphite/60 rounded-lg overflow-hidden">
              <table className="w-full text-[11px] text-left border-collapse">
                <thead>
                  <tr className="bg-graphite-dark border-b border-graphite/60 font-mono text-[9px] text-cream-dark/40 uppercase">
                    <th className="p-3">Student Name</th>
                    <th className="p-3">Current Level</th>
                    <th className="p-3">Attendance</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graphite/60 bg-graphite-dark/30">
                  {students.map((std) => (
                    <tr key={std.id} className="hover:bg-graphite/20 transition-colors">
                      <td className="p-3 font-sans font-semibold text-cream">{std.name}</td>
                      <td className="p-3">
                        <span className="bg-gold-muted/5 border border-gold-muted/20 text-gold-muted px-2 py-0.5 rounded font-mono text-[10px]">
                          {std.level}
                        </span>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => toggleAttendance(std.id)}
                          className={`font-mono text-[9px] uppercase font-bold transition-colors ${
                            std.status === "Present" ? "text-emerald-400" : "text-rose-400"
                          }`}
                        >
                          {std.status}
                        </button>
                      </td>
                      <td className="p-3 text-right space-x-2">
                        <button
                          onClick={() => advanceLevel(std.id)}
                          className="px-2 py-1 bg-graphite border border-graphite/80 hover:border-gold-muted/40 text-cream rounded text-[9px] font-mono uppercase transition-all"
                        >
                          Level Up
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-[10px] text-cream-dark/40 font-mono bg-graphite/15 p-3 rounded border border-graphite/60">
              The TPQ Tracker tracks study milestones for students and links Quran lesson completions to parental notifications.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
