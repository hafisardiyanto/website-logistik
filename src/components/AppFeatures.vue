<template>
  <section class="section" id="features">
    <div class="container">
      <div class="head center reveal">
        <h2 style="font-size: 36px; font-weight: 800; font-family: Manrope; letter-spacing: -1.5px;">Dirancang memecahkan kerumitan setiap lini bisnis Anda.</h2>
      </div>
      
      <div class="layers-grid">
      
        <!-- Layer 1 -->
        <div class="layer-card reveal">
          <h3 style="border-bottom: 2px solid var(--blue); padding-bottom: 10px; margin-bottom: 15px; font-family: Manrope; font-weight: 800;">1. Operasional</h3>
          <p style="font-size:12px; color:var(--muted); margin-bottom:15px;">Untuk kemudahan tim operasional:</p>
          <ul class="layer-list">
            <li>Pesanan Pelanggan</li><li>Penawaran Harga</li><li>Surat Tugas (Job Order)</li><li>Manifest / Rute</li><li>Surat Jalan (DO)</li><li>Kelola Armada & Sopir</li><li>Penugasan Langsung</li><li>Pelacakan Real-time</li><li>Bukti Terima Tervalidasi</li><li>Manajemen Gudang</li>
          </ul>
        </div>

        <!-- Layer 2 -->
        <div class="layer-card reveal delay1">
          <h3 style="border-bottom: 2px solid var(--green); padding-bottom: 10px; margin-bottom: 15px; font-family: Manrope; font-weight: 800;">2. Finansial</h3>
          <p style="font-size:12px; color:var(--muted); margin-bottom:15px;">Untuk perapian tim keuangan:</p>
          <ul class="layer-list">
            <li>Master Tarif</li><li>Pendapatan (Revenue)</li><li>Biaya Uang Jalan (Cost)</li><li>Biaya Pihak Ketiga</li><li>Penerbitan Tagihan (Invoice)</li><li>Hutang Usaha (AP)</li><li>Piutang Pelanggan (AR)</li><li>Laporan Laba Rugi</li><li>Profit Per Surat Jalan</li>
          </ul>
        </div>

        <!-- Layer 3 -->
        <div class="layer-card reveal delay2">
          <h3 style="border-bottom: 2px solid orange; padding-bottom: 10px; margin-bottom: 15px; font-family: Manrope; font-weight: 800;">3. Manajemen</h3>
          <p style="font-size:12px; color:var(--muted); margin-bottom:15px;">Untuk supervisi bos & manajer:</p>
          <ul class="layer-list">
            <li>Dashboard Utama</li><li>Tren Pendapatan</li><li>Analisis Biaya</li><li>Kesehatan Margin Profit</li><li>Utilisasi Armada Kendaraan</li><li>Performa Pengiriman (SLA)</li><li>Analisis Retensi Klien</li><li>Performa Vendor/Mitra</li><li>Produktivitas Tiap Cabang</li>
          </ul>
        </div>

        <!-- Layer 4 -->
        <div class="layer-card reveal delay3">
          <h3 style="border-bottom: 2px solid var(--navy); padding-bottom: 10px; margin-bottom: 15px; font-family: Manrope; font-weight: 800;">4. Kelas Korporat</h3>
          <p style="font-size:12px; color:var(--muted); margin-bottom:15px;">Untuk skala bisnis besar & grup:</p>
          <ul class="layer-list">
            <li>Multi-Perusahaan</li><li>Banyak Area/Cabang</li><li>Multi-Gudang Terpisah</li><li>Multi-Pengguna Akses</li><li>Kontrol Hak Akses Ketat</li><li>Alur Persetujuan Bertingkat</li><li>Log Riwayat Aktivitas</li><li>Integrasi API Terbuka</li><li>Koneksi ke Sistem ERP</li><li>Portal Pelanggan Eksternal</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<style src="../assets/AppFeatures.css" scoped></style>
<style scoped>
.layers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.layer-card {
  background: white;
  border: 1px solid var(--line);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
}
.layer-list {
  list-style: none;
  padding: 0;
  font-size: 13px;
  line-height: 1.8;
  color: var(--navy);
  font-weight: 500;
}
.layer-list li { margin-bottom: 6px; }
.layer-list li::before { content: "✓ "; color: var(--blue); font-weight: bold; margin-right: 5px; }

@media (max-width: 950px) {
  .layers-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .layers-grid { grid-template-columns: 1fr; }
}
</style>
