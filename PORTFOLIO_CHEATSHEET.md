# Portfolio Master Knowledge & Interview Cheat Sheet
> **For**: Ahlul Firdaus  
> **Purpose**: Panduan lengkap penjelasan isi portfolio dalam bahasa yang mudah dipahami. Gunakan ini jika ada klien, recruiter, atau mitra yang bertanya tentang project, teknologi, atau konsep sistem di websitemu.

---

## 📍 Part 1: Identitas & Gelar Profesional

### 1. Apa itu "Digital Systems Architect"?
* **Penjelasan Sederhana**: Seperti arsitek bangunan yang menggambar cetak biru rumah sebelum tukang bekerja, seorang **Systems Architect** mendesain bagaimana seluruh sistem komputer, database, pembayaran, dan aplikasi saling terhubung secara aman dan efisien sebelum kode ditulis.
* **Jawaban saat ditanya**: *"Saya tidak hanya mengetik kodingan halaman web, tapi mendesain alur bisnis, database, keamanan, dan integrasi pembayaran dari awal sampai sistem bisa berjalan otomatis."*

### 2. Apa itu "Full-Stack Engineer"?
* **Penjelasan Sederhana**: Engineer yang menguasai dua sisi aplikasi:
  - **Front-End (Tampilan)**: Apa yang dilihat dan diklik pengguna di layar HP/Laptop.
  - **Back-End (Mesin Belakang)**: Server, database, dan logika bisnis yang menyimpan data dan memproses transaksi.
* **Jawaban saat ditanya**: *"Saya menangani dari desain tampilan depan (UI/UX) sampai database dan logika server di belakang."*

---

## 📍 Part 2: Penjelasan Detail 6 Project Utama

---

### 🚢 Project 1: OOI — Origin Of Indonesia (B2B Export System)

* **Topik Utama**: Platform Ekspor B2B & Sistem Escrow.
* **Masalah yang Dipecahkan**: 
  Produser lokal di Indonesia (seperti pembuat kopi, kelapa sawit, rempah) takut ditipu pembeli luar negeri jika barang dikirim duluan. Sebaliknya, pembeli luar negeri takut menyetor uang duluan karena takut barang tak dikirim.
* **Solusi yang Kamu Buat**:
  Sistem transaksi berbasis **Escrow (Rekening Bersama Digital)**:
  1. Pembeli luar negeri menyetor uang ke rekening Escrow terunci.
  2. Sistem memeriksa otomatis dokumen Bea Cukai (Bea Cukai API) & jadwal kapal.
  3. Setelah kapal berangkat dan dokumen valid, uang Escrow dicairkan bertahap ke produser lokal (30% saat loading, 60% saat kapal berangkat, 10% setelah barang sampai).

* **Cara Menjelaskannya ke Klien**:
  > *"OOI adalah platform ekspor B2B. Masalah terbesar ekspor adalah rasa saling percaya antara pembeli asing dan petani/pabrik lokal. Saya membangun sistem Escrow (rekening bersama) otomatis yang mengunci pembayaran dan mencairkan uangnya hanya ketika dokumen pelabuhan & kapal terverifikasi."*

* **Teknologi**: React, Node.js, GraphQL, PostgreSQL, Escrow Logic.

---

### 🏠 Project 2: CGV10 Portal Warga (Community System)

* **Topik Utama**: Aplikasi Manajemen Perumahan & Pos Satpam.
* **Masalah yang Dipecahkan**: 
  Iuran warga 500+ rumah dicatat manual di buku/Excel yang rawan hilang. Pengumuman tertimbun di grup WhatsApp. Satpam di pintu gerbang mencatat tamu manual di buku yang lambat dan rawan penyusup.
* **Solusi yang Kamu Buat**:
  Aplikasi Perumahan Berbasis PWA (bisa di-install di HP tanpa PlayStore):
  1. **Tagihan Otomatis**: Warga dapat notifikasi tagihan iuran tiap tanggal 1 dan bayar via QRIS/Transfer.
  2. **QR Code Pintu Gerbang**: Warga bisa buat QR Pass sementara untuk tamunya. Satpam tinggal scan QR dari tablet di pos satpam (langsung terverifikasi dalam 6 detik).
  3. **Tombol Darurat (Panic Button)**: Satu klik di HP warga mengirim sinyal bahaya langsung ke tablet satpam.

* **Cara Menjelaskannya ke Klien**:
  > *"CGV10 mengubah pengurusan perumahan dari buku manual ke sistem digital. Warga bayar iuran via QRIS, laporan keuangan bisa dipantau transparan oleh semua warga, dan satpam di gerbang menggunakan scanner QR Code untuk verifikasi tamu."*

* **Teknologi**: Next.js, Supabase, TypeScript, Tailwind CSS, PWA.

---

### 🕌 Project 3: Masjid Al Ikhlas Digital Presence (Philanthropy Hub)

* **Topik Utama**: Hub Keuangan Transparan & Jadwal Sholat Real-Time.
* **Masalah yang Dipecahkan**: 
  Kurangnya transparansi laporan infaq/sedekah masjid dan jamaah muda kurang terhubung dengan agenda kegiatan masjid.
* **Solusi yang Kamu Buat**:
  1. **Buku Kas Transparan**: Grafik mingguan yang menampilkan 100% uang masuk dan pengeluaran (perbaikan, santunan anak yatim, pendidikan).
  2. **Jadwal Sholat Batam Real-Time**: Sync otomatis waktu sholat wilayah Batam dengan hitung mundur sholat berikutnya.
  3. **Donasi Digital**: Scan QRIS langsung dengan bukti transfer digital.

* **Cara Menjelaskannya ke Klien**:
  > *"Project ini berfokus pada transparansi dana publik. Jamaah bisa melihat laporan kas masjid secara terbuka tiap minggu dari HP mereka dan berdonasi secara contactless."*

* **Teknologi**: HTML5, Tailwind CSS, SVG Design System, Netlify.

---

### 📊 Project 4: OneEcos (SaaS Operations Cockpit)

* **Topik Utama**: Dashboard Operasional Berkerapatan Tinggi (High-Density UI).
* **Masalah yang Dipecahkan**: 
  Pemilik bisnis e-commerce/SaaS pusing harus membuka 10 tab berbeda (Tokopedia, Shopee, Facebook Ads, Bank) hanya untuk melihat profit dan stok barang harian.
* **Solusi yang Kamu Buat**:
  Dashboard "Cockpit" dalam 1 layar gelap (Dark Mode) tanpa perlu scroll panjang. Semua angka penting, chart tren, status stok, dan log transaksi langsung terlihat dalam 1 tampilan.

* **Cara Menjelaskannya ke Klien**:
  > *"OneEcos adalah dashboard khusus pebisnis. Seperti kokpit pesawat terbang, semua indikator keuangan, penjualan e-commerce, dan stok diringkas dalam satu layar berdesain gelap yang nyaman di mata."*

* **Teknologi**: React, Recharts, Framer Motion, Tailwind CSS.

---

### 🏬 Project 5: PT. Corum — Sustainability Reporting System

* **Topik Utama**: Platform Dashboard ESG & Laporan Keberlanjutan Industri (Pabrik Batam).
* **Masalah yang Dipecahkan**: 
  Pengumpulan data laporan ESG/Laporan Keberlanjutan tahunan (SRP2026) sangat terfragmentasi di 7 departemen berbeda (Finance, Facilities, EHS, HR, Procurement, QC, IT) yang menggunakan file Excel bertebaran dan rawan salah input.
* **Solusi yang Kamu Buat**:
  1. **Dashboard Laporan ESG Terpusat**: Menggabungkan 23 parameter audit lingkungan (listrik kWh, air m³, bahan baku resin MT, solar forklift L, limbah B3/DOE, HR, & audit K3) dalam 1 layar visual.
  2. **Protokol Sync JSON Offline-First**: Setiap Penanggung Jawab (PIC) Departemen bisa mengisi data di HP/Laptop tanpa internet, mengunduh file `.json`, dan menggabungkannya (merge) otomatis ke master laporan tanpa crash.
  3. **Cetak Laporan Audit PDF**: Fitur cetak laporan siap audit langsung dari browser via tombol Export PDF.

* **Cara Menjelaskannya ke Klien**:
  > *"PT. Corum adalah sistem laporan keberlanjutan (ESG) pabrik industri. Sebelumnya tiap departemen membuat laporan manual di Excel yang membingungkan saat diaudit. Saya membangun dashboard terpusat berbasis web yang menggabungkan data 7 departemen, menyajikan grafik tren penggunaan energi & bahan baku secara real-time, dan bisa langsung dicetak ke PDF untuk audit resmi."*

* **Teknologi**: HTML5, JavaScript, Chart.js, Tailwind CSS, LocalStorage Sync Engine, CSS Print.

---

### 🏡 Project 6: Rumah Ringkas — Keuangan Keluarga

* **Topik Utama**: Sistem Manajamen Keuangan Rumah Tangga & Budgeting Amplop Digital.
* **Masalah yang Dipecahkan**: 
  Keuangan keluarga berantakan karena pencatatan manual di grup WhatsApp, tidak tahu berapa total kekayaan bersih (Net Worth) karena uang tersebar di banyak bank/e-wallet (BCA, GoPay, Jago, Bareksa), dan jatan belanja bulanan sering kebobolan.
* **Solusi yang Kamu Buat**:
  1. **"Catat Cepat" AI Input**: Cukup ketik kalimat sehari-hari (misal: *"Makan siang 25rb pakai GoPay"*, *"Gaji masuk 12jt"*), sistem otomatis mendeteksi nominal, kategori, dan akunnya.
  2. **Sistem Amplop Budgeting**: Menetapkan jatan bulanan/mingguan per kategori (Makan, Transport, Listrik, Anak) dengan indikator visual amplop yang terisi otomatis.
  3. **Wealth Hub & Net Worth Calculator**: Menghitung kekayaan bersih keluarga secara real-time (Aset Tunai + Bank + E-Wallet + Investasi dikurangi Utang & Cicilan).

* **Cara Menjelaskannya ke Klien**:
  > *"Rumah Ringkas adalah aplikasi PWA keuangan keluarga. Anggota keluarga bisa mencatat transaksi hanya dengan mengetik kalimat biasa seperti di WhatsApp. Aplikasi ini menerapkan metode Amplop untuk mengunci budget belanja, dan secara otomatis menghitung Total Kekayaan Bersih (Net Worth) keluarga dari berbagai akun bank dan e-wallet dalam satu tampilan."*

* **Teknologi**: React 19, Recharts, Tailwind CSS, Lucide React, LocalStorage Sync, PWA.

---

## 📍 Part 3: Kamus Istilah Teknologi (Technical Terms Dictionary)

Gunakan daftar ini saat seseorang menanyakan istilah teknis yang ada di websitemu:

| Istilah di Web | Penjelasan Bahasa Awam | Contoh Penggunaan / Analogi |
|---|---|---|
| **Next.js 16** | Framework React modern tercanggih buatan Vercel untuk membuat website super cepat & SEO friendly. | Seperti mesin mobil balap terbaru yang hemat bahan bakar tapi sangat kencang. |
| **React** | Library JavaScript buatan Facebook untuk membuat komponen tampilan web yang interaktif tanpa reload halaman. | Tombol seperti Like Facebook yang berubah tanpa membuat browser refresh. |
| **TypeScript** | Bahasa pemograman JavaScript yang diberi aturan ketat agar tidak ada error typo saat pengkodean. | Seperti pemeriksaan ejaan otomatis agar kode bebas dari bug tersembunyi. |
| **Tailwind CSS v4** | Alat styling visual modern untuk mengatur warna, font, tata letak, dan animasi web dengan rapi. | Seperti kuas cat & peralatan interior desainer versi digital. |
| **Supabase / PostgreSQL** | Database (tempat penyimpanan data) kelas dunia yang sangat cepat dan aman. | Seperti lemari arsip digital berkecepatan tinggi dengan kunci enkripsi. |
| **Escrow System** | Rekening penampungan sementara yang menahan uang transaksi sampai kedua belah pihak memenuhi syarat. | Seperti pialang resmi yang memegang uang sampai barang diperiksa. |
| **API (Application Programming Interface)** | Jembatan penghubung yang membuat dua aplikasi berbeda bisa saling berkomunikasi. | Seperti pelayan restoran yang menyampaikan pesananmu ke dapur dan membawa makanan kembali. |
| **Webhook** | Notifikasi instan dari satu sistem ke sistem lain saat ada peristiwa terjadi. | Seperti lonceng pintu rumah yang berbunyi otomatis saat ada tamu datang. |
| **PWA (Progressive Web App)** | Website yang bisa di-install di HP seperti aplikasi buatan PlayStore/AppStore. | Website yang terasa & berfungsi seperti aplikasi native HP. |
| **Glassmorphism** | Gaya desain UI modern dengan efek kaca transparan buram (frosted glass) dan batas menyala halus. | Tampilan menu iPhone/Mac terbaru yang elegan & tembus pandang. |
| **SEO (Search Engine Optimization)** | Teknik agar website mudah ditemukan di halaman pertama Google. | Papan petunjuk arah yang membuat toko mudah ditemukan pembeli di jalan utama. |
| **LCP < 0.8s** | *Largest Contentful Paint*: Ukuran kecepatan load website. Angka di bawah 0.8 detik artinya website terbuka **seketika**. | Membuka buku yang sudah terbuka di depan mata. |

---

## 📍 Part 4: Cara Menjelaskan Layanan & Harga (Services Pitch)

Jika calon klien bertanya: **"Layanan apa saja yang kamu tawarkan dan berapa biayanya?"**

Jawab dengan 3 Pilihan berikut:

### Option 1: System Audit & Consultation (Rp 7,5 Juta / $500)
> *"Pilihan ini cocok kalau Bapak/Ibu sudah punya aplikasi atau sistem lama yang lambat, sering error, atau bingung mau mulai dari mana. Saya akan memeriksa kode, database, dan membuatkan Cetak Biru (Blueprint) perbaikannya dalam 3–5 hari."*

### Option 2: Full B2B / SaaS Ecosystem Build (Rp 25 Juta / $1,800) — *Paling Banyak Dipilih*
> *"Ini paket lengkap pembuatan aplikasi dari nol. Saya desain tampilannya, bangun databasenya, integrasikan payment gateway (QRIS/Transfer/Escrow), dan luncurkan sampai siap pakai dalam 3–6 minggu dengan garansi maintenance 30 hari."*

### Option 3: Fractional CTO Retainer (Rp 15 Juta/bulan / $1,000/bln)
> *"Cocok untuk perusahaan yang butuh pendampingan arsitek IT senior setiap minggu tanpa harus merekrut CTO tetap berkaji ratusan juta per tahun."*

---

## 📍 Part 5: Pertanyaan Wawancara Paling Sering (FAQ)

### Q: "Mengapa saya harus memilih kamu dibandingkan jasa pembuatan web murah 1-2 juta di internet?"
**Jawaban Handal**:
> *"Web murah biasanya menggunakan template pas-pasan yang lambat, rawan diretas, dan tidak bisa dikustomisasi saat bisnis Bapak berkembang. Saya membangun **Sistem Digital kustom** yang didesain khusus sesuai alur kerja bisnis Anda, cepat di bawah 0.8 detik, aman, dan siap menangani ribuan pengguna tanpa crash."*

### Q: "Berapa lama proses pembuatan aplikasi biasanya?"
**Jawaban Handal**:
> *"Untuk konsultasi dan audit biasanya 3–5 hari. Untuk pembuatan sistem atau dashboard penuh (seperti OOI/CGV10) rata-rata memakan waktu 3 sampai 6 minggu, tergantung kompleksitas fitur yang disepakati."*

### Q: "Apakah websitenya nanti bisa saya kelola sendiri?"
**Jawaban Handal**:
> *"Tentu. Setiap sistem yang saya bangun dilengkapi dengan Dashboard Admin yang intuitif. Anda bisa menambah data, mengecek laporan transaksi, dan mengatur akses staf dengan mudah."*

---

## 💡 Ringkasan Siap Pakai

Jika ditanya secara singkat **siapa kamu**:
> *"Nama saya **Ahlul Firdaus**. Saya seorang **Digital Systems Architect & Full-Stack Builder** berbasis di **Batam**. Saya berpengalaman membangun aplikasi web, sistem ekspor B2B, portal komunitas, dan dashboard operasional perusahaan dari tahap strategi hingga siap dipakai."*
