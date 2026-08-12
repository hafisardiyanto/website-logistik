<template>
  <section class="section dashboard-section" id="analytics">
    <div class="container dashboard-grid">
      <div class="dash-large reveal">
        <div class="dash-top">
          <b>Analitik LOGISTIQ</b><span>● Live · Baru saja diperbarui</span>
        </div>
        <div class="dash-content">
          <div class="dark-metrics">
            <div class="dark-metric">
              <small>Revenue</small><b>Rp 4.5B</b>
            </div>
            <div class="dark-metric">
              <small>Shipment</small><b>12,840</b>
            </div>
            <div class="dark-metric">
              <small>SLA</small><b>98.6%</b>
            </div>
            <div class="dark-metric">
              <small>Cost</small><b>Rp 1.2B</b>
            </div>
            <div class="dark-metric highlight">
              <small>Profit (Gross)</small><b>Rp 3.3B</b>
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
      <div class="reveal delay2">
        <span class="kicker" style="color: #5dd7ff">Analytics (Business Intelligence)</span>
        <h2>Lihat kesehatan bisnis di balik setiap surat jalan.</h2>
        <p>
          Anda sedang duduk di pucuk pimpinan. Jangan menebak-nebak kondisi margin.
          Akses ringkasan visual mendalam atas pendapatan, pengiriman, pemenuhan SLA 
          hingga struktur margin kotor profit dalam satu klik.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dashboard-section {
  background: #07172b;
  color: white;
  padding-bottom: 120px;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
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
  margin-top: 20px;
}
.dash-large {
  height: 385px;
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
  padding: 18px;
}
.dark-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.dark-metric {
  flex: 1;
  padding: 12px;
  border: 1px solid #183a5b;
  background: #0f2944;
  border-radius: 8px;
  min-width: 90px;
}
.dark-metric.highlight {
  background: #113f28;
  border-color: #1a6840;
}
.dark-metric.highlight b { color: #52dda5; }
.dark-metric small {
  display: block;
  color: #8199b3;
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.dark-metric.highlight small { color: #80c8a6; }
.dark-metric b {
  font-size: 17px;
  font-weight: 800;
}
.dark-chart {
  height: 190px;
  margin-top: 15px;
  display: flex;
  align-items: end;
  gap: 8px;
  border: 1px solid #183653;
  background: #0d243d;
  border-radius: 8px;
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
    gap: 7px;
  }
  .dark-metric {
    min-width: 80px;
    padding: 8px;
  }
  .dark-metric b { font-size: 13px; }
  .dash-large {
    height: 340px;
  }
}
</style>
