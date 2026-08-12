<template>
  <section class="section" id="features">
    <div class="container">
      <div class="head center reveal">
        <span class="kicker">Fitur Fungsional Utama</span>
        <h2>Kapabilitas menyeluruh untuk semua departemen.</h2>
      </div>
      <div class="features">
        <div class="feature reveal">
          <div class="icon">💻</div>
          <h3>Dashboard</h3>
          <p>Visibilitas langsung (real-time) tingkat tinggi atas kinerja dan profit operasi harian.</p>
        </div>
        <div class="feature reveal delay1">
          <div class="icon">📋</div>
          <h3>Job Order</h3>
          <p>Saring semua permintaan pelanggan menjadi perintah kerja logistik tertata.</p>
        </div>
        <div class="feature reveal delay2">
          <div class="icon">📦</div>
          <h3>Delivery Order</h3>
          <p>Pemrosesan surat jalan beserta persetujuan dokumen pengiriman yang simpel.</p>
        </div>
        <div class="feature reveal delay3">
          <div class="icon">📑</div>
          <h3>Manifest</h3>
          <p>Kompilasi daftar pengiriman untuk manajemen alokasi truk yang efisien.</p>
        </div>
        <div class="feature reveal">
          <div class="icon">📍</div>
          <h3>Tracking</h3>
          <p>Telusuri kordinat kendaraan dan status bongkar muat tepat di lapangan.</p>
        </div>
        <div class="feature reveal delay1">
          <div class="icon">💵</div>
          <h3>Cost (Biaya)</h3>
          <p>Rekam seluruh klaim operasional, biaya tambahan, uang jalan, hingga pengawalan secara utuh.</p>
        </div>
        <div class="feature reveal delay2">
          <div class="icon">🧾</div>
          <h3>Invoice</h3>
          <p>Hasilkan tagihan bersih tanpa perlu re-hitung lagi via sistem penagihan tervalidasi.</p>
        </div>
        <div class="feature reveal delay3">
          <div class="icon">📊</div>
          <h3>Reporting</h3>
          <p>Eksport berbagai laporan KPI armada maupun performa cabang dalam 1 kali klik.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}
.feature {
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: white;
  transition: 0.2s;
}
.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 35px #123d7008;
  border-color: #c7daf4;
}
.icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #edf5ff;
  display: grid;
  place-items: center;
  font-size: 21px;
}
.feature h3 {
  font-size: 15px;
  margin: 16px 0 7px;
  font-weight: 800;
}
.feature p {
  font-size: 11px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 950px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
