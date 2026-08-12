<template>
  <section class="section dashboard-section" id="dashboard">
    <div class="container dashboard-grid">
      <div class="reveal">
        <span class="kicker" style="color: #5dd7ff">Dasbor aplikasi Anda</span>
        <h2>Melihat secara nyata bisnis di balik setiap pengiriman.</h2>
        <p>
          Pantau aktivitas Pesanan (Job Order), Surat Jalan (Delivery Order), Manifes, Armada,
          Pengemudi, biaya pengeluaran, serta tagihan dari satu layar operasional raksasa.
        </p>
        <ul class="checks">
          <li>Visibilitas pengiriman secara real-time</li>
          <li>Analitik performa operasional tingkat lanjut</li>
          <li>Visibilitas biaya operasional dan margin penghasilan</li>
          <li>Akses berdasarkan peran/tugas (RBAC) dan jejak audit (Log)</li>
          <li>Laporan yang bisa diekspor & arsitektur yang Siap Terintegrasi API</li>
        </ul>
        <button class="btn blue" @click="scrollToId('contact')">
          Minta demonstrasi dasbor →
        </button>
      </div>
      <div class="dash-large reveal delay2">
        <div class="dash-top">
          <b>Analitik LOGISTIQ</b><span>● Live · Baru saja diperbarui</span>
        </div>
        <div class="dash-content">
          <div class="dark-metrics">
            <div class="dark-metric">
              <small>Total Kiriman</small><b>12,840</b>
            </div>
            <div class="dark-metric">
              <small>Tingkat Tepat Waktu</small><b>96.8%</b>
            </div>
            <div class="dark-metric">
              <small>Armada Aktif</small><b>184</b>
            </div>
            <div class="dark-metric">
              <small>Biaya Berjalan</small><b>Rp 1.2B</b>
            </div>
          </div>
          <div class="dark-chart">
            <i style="height: 38%"></i><i style="height: 54%"></i>
            <i style="height: 46%"></i><i style="height: 68%"></i>
            <i style="height: 60%"></i><i style="height: 80%"></i>
            <i style="height: 73%"></i><i style="height: 90%"></i>
            <i style="height: 78%"></i><i style="height: 95%"></i>
            <i style="height: 85%"></i><i style="height: 98%"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.dashboard-section {
  background: #07172b;
  color: white;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 65px;
  align-items: center;
}
.dashboard-section h2 {
  font: 800 39px/1.15 Manrope;
  letter-spacing: -1.5px;
}
.dashboard-section p {
  font-size: 13px;
  line-height: 1.8;
  color: #a9b9cd;
}
.checks {
  list-style: none;
  padding: 0;
}
.checks li {
  font-size: 11px;
  color: #d8e5f4;
  margin: 15px 0;
}
.checks li:before {
  content: "✓";
  color: var(--cyan);
  margin-right: 10px;
  font-weight: 800;
}
.dash-large {
  height: 365px;
  border: 1px solid #1b3859;
  background: #0a1d34;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 30px 70px #0005;
}
.dash-top {
  height: 40px;
  border-bottom: 1px solid #1b3552;
  padding: 0 14px;
  display: flex;
  align-items: center;
  font-size: 9px;
}
.dash-top span {
  margin-left: auto;
  color: #7891ad;
}
.dash-content {
  padding: 15px;
}
.dark-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
}
.dark-metric {
  padding: 9px;
  border: 1px solid #183a5b;
  background: #0f2944;
  border-radius: 7px;
}
.dark-metric small {
  display: block;
  color: #8199b3;
  font-size: 6px;
}
.dark-metric b {
  font-size: 14px;
}
.dark-chart {
  height: 180px;
  margin-top: 10px;
  display: flex;
  align-items: end;
  gap: 6px;
  border: 1px solid #183653;
  background: #0d243d;
  border-radius: 8px;
  padding: 12px;
}
.dark-chart i {
  flex: 1;
  background: linear-gradient(#4c9cff, #225ea5);
  border-radius: 3px 3px 0 0;
}

@media (max-width: 950px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .dark-metrics {
    grid-template-columns: repeat(2, 1fr);
  }
  .dash-large {
    height: 310px;
  }
}
</style>
