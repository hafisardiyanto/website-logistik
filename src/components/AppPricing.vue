<template>
  <section class="section" id="pricing">
    <div class="container">
      <div class="head center reveal">
        <span class="kicker">Harga & Paket Layanan</span>
        <h2>Mulai dari yang simpel. Kembangkan saat Anda siap.</h2>
        <p>
          Pilih paket yang paling sesuai dengan tingkat operasional logistik Anda.
          Untuk paket tingkat Enterprise, semua fitur bisa kami personalisasikan.
        </p>
      </div>
      <div class="pricing-toggle">
        <button class="toggle" :class="{ active: mode === 'monthly' }" @click="mode = 'monthly'">
          Bulanan
        </button>
        <button class="toggle" :class="{ active: mode === 'yearly' }" @click="mode = 'yearly'">
          Tahunan · Hemat 20%
        </button>
      </div>
      <div class="pricing">
        <div class="price reveal">
          <h3>Pemula (Starter)</h3>
          <p class="desc">
            Bagi tim operasional kecil yang baru memulai proses digitalisasi pengiriman.
          </p>
          <strong>{{ mode === 'yearly' ? 'Rp 799K' : 'Rp 999K' }} <small>/ bulan</small></strong>
          <button class="btn outline price-btn" @click="scrollToId('contact')">
            Mulai sekarang
          </button>
          <ul>
            <li>Catatan Pesanan & Surat Jalan</li>
            <li>Dasbor Analisis Dasar</li>
            <li>Data Induk Armada & Pengemudi</li>
            <li>Akses Maksimal 5 pengguna</li>
            <li>Dukungan IT via Email</li>
          </ul>
        </div>
        <div class="price featured reveal delay1">
          <span class="popular">PALING POPULER</span>
          <h3>Bisnis</h3>
          <p class="desc">Cocok menampung semua perusahaan logistik yang mulai berkembang pesat.</p>
          <strong>{{ mode === 'yearly' ? 'Rp 1.999K' : 'Rp 2.499K' }} <small>/ bulan</small></strong>
          <button class="btn blue price-btn" @click="scrollToId('contact')">
            Jadwalkan Demo
          </button>
          <ul>
            <li>Seluruh fitur paket Pemula</li>
            <li>Manifes & Daftar Kemasan Logistik (PL)</li>
            <li>Pelacakan Langsung & analitik</li>
            <li>Alur kerja Biaya & Tagihan</li>
            <li>Akses Maksimal 25 pengguna</li>
          </ul>
        </div>
        <div class="price reveal delay2">
          <h3>Perusahaan Besar (Enterprise)</h3>
          <p class="desc">
            Didedikasikan untuk rantai pasok dengan kerumitan sangat tinggi dan multi-unit.
          </p>
          <strong>Nego / Kustom</strong>
          <button class="btn dark price-btn" @click="scrollToId('contact')">
            Hubungi Bagian Penjualan
          </button>
          <ul>
            <li>Seluruh fitur paket Bisnis</li>
            <li>Beragam Cabang & Otoritas RBAC Tingkat Tinggi</li>
            <li>Dukungan Integrasi ke API Sistem Lain</li>
            <li>Alur kerja operasional terkustomisasi</li>
            <li>Dukungan Prioritas (Priority Support)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const mode = ref('monthly')

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.pricing-toggle {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: -15px 0 35px;
}
.toggle {
  padding: 8px 13px;
  border: 1px solid #d5e1ef;
  background: white;
  border-radius: 999px;
  font-size: 10px;
  color: #63738a;
  cursor: pointer;
}
.toggle.active {
  background: #eaf3ff;
  color: var(--blue);
  border-color: #bdd5f3;
}
.pricing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  align-items: stretch;
}
.price {
  border: 1px solid var(--line);
  border-radius: 15px;
  padding: 27px;
  background: white;
  position: relative;
}
.price.featured {
  border: 1.5px solid #6ca4f4;
  box-shadow: 0 20px 50px #1768e814;
}
.popular {
  position: absolute;
  top: -11px;
  right: 20px;
  background: var(--blue);
  color: white;
  border-radius: 99px;
  padding: 5px 9px;
  font-size: 8px;
  font-weight: 800;
}
.price h3 {
  font-size: 15px;
  margin: 0;
}
.price .desc {
  font-size: 10px;
  color: var(--muted);
  min-height: 35px;
}
.price strong {
  font: 800 29px Manrope;
  display: block;
  margin: 17px 0 4px;
}
.price strong small {
  font: 500 10px "DM Sans";
  color: var(--muted);
}
.price .price-btn {
  width: 100%;
  margin: 12px 0 14px;
}
.price ul {
  list-style: none;
  padding: 0;
  border-top: 1px solid var(--line);
  padding-top: 14px;
}
.price li {
  font-size: 10px;
  color: #5f7088;
  margin: 11px 0;
}
.price li:before {
  content: "✓";
  color: var(--green);
  font-weight: 800;
  margin-right: 8px;
}

@media (max-width: 950px) {
  .pricing {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .pricing {
    grid-template-columns: 1fr;
  }
}
</style>
