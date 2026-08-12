<template>
  <section class="section dashboard-section" id="analytics">
    <div class="container dashboard-grid">
      <div class="dash-large reveal">
        <div class="dash-top">
          <b>Analitik Keuangan & Performa</b>
        </div>
        <div class="dash-content">
          <div class="sample-label">※ Sample operational data</div>
          <div class="dark-metrics">
            <div class="dark-metric">
              <small>Shipment</small><b>12,840</b>
            </div>
            <div class="dark-metric">
              <small>SLA</small><b>98.6%</b>
            </div>
            <div class="dark-metric">
              <small>In Transit</small><b>126</b>
            </div>
            <div class="dark-metric highlight">
              <small>Revenue</small><b>Rp 1.82 M</b>
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
      <div class="reveal delay1">
        <span class="kicker" style="color: #5dd7ff">BUSINESS ANALYTICS</span>
        <h2>Lihat kesehatan margin dari setiap surat jalan pengiriman.</h2>
        <p>
          Ekstrak insight operasional secara otomatis. Dapatkan laporan grafik atas tren kenaikan volume Anda serta profitabilitas antar rute yang sangat lengkap.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dashboard-section {
  background: #07172b;
  color: white;
  padding-top: 100px;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 65px;
  align-items: center;
}
.dashboard-section h2 {
  font: 800 38px/1.2 Manrope;
  letter-spacing: -1.5px;
}
.dashboard-section p {
  font-size: 17px;
  line-height: 1.8;
  color: #a9b9cd;
  margin-top: 20px;
}
.dash-large {
  border: 1px solid #1b3859;
  background: #0a1d34;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 30px 70px #0005;
}
.dash-top {
  height: 40px;
  border-bottom: 1px solid #1b3552;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 15px;
}
.dash-content {
  padding: 24px;
}
.sample-label {
  font-size: 13px;
  color: #5b7999;
  margin-bottom: 12px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
}
.dark-metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.dark-metric {
  padding: 20px;
  border: 1px solid #183a5b;
  background: #0f2944;
  border-radius: 10px;
}
.dark-metric.highlight {
  background: #113f28;
  border-color: #1a6840;
}
.dark-metric.highlight b { color: #52dda5; }
.dark-metric small {
  display: block;
  color: #8199b3;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.dark-metric.highlight small { color: #80c8a6; }
.dark-metric b {
  font-size: 28px;
  font-weight: 800;
  font-family: Manrope;
}
.dark-chart {
  height: 130px;
  margin-top: 15px;
  display: flex;
  align-items: end;
  gap: 8px;
  border: 1px solid #183653;
  background: #0d243d;
  border-radius: 10px;
  padding: 16px;
}
.dark-chart i {
  flex: 1;
  background: linear-gradient(#4c9cff, #225ea5);
  border-radius: 4px 4px 0 0;
}

@media (max-width: 950px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .dark-metrics {
    gap: 8px;
  }
  .dark-metric {
    padding: 15px;
  }
  .dark-metric b { font-size: 24px; }
}
</style>
