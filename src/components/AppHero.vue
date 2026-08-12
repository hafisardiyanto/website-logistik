<template>
  <section class="hero" id="home">
    <div class="container hero-grid">
      <div class="reveal">
        <span class="pill">✦ Platform Operasional Logistik</span>
        <h1>Jalankan logistik <span>tanpa terkacaukan operasional.</span></h1>
        <p>
          Satu-satunya perangkat lunak tingkat bisnis yang mengelola pesanan, armada, jadwal, dan arus kas dalam satu jalinan mulus yang mudah digunakan oleh seluruh lapisan.
        </p>
        <div class="actions">
          <button class="btn blue btn-lg" @click="scrollToId('contact')">
            Jadwalkan Demo
          </button>
        </div>
      </div>
      
      <div class="visual reveal delay2">
        <div class="orb"></div>
        <div class="dashboard-mockup">
          <div class="mockup-header">
            <b>Operational Overview</b>
            <span class="mockup-dots"><i></i><i></i><i></i></span>
          </div>
          
          <div class="mockup-kpis">
            <div class="kpi-box">
              <span class="kpi-value text-blue">{{ shipmentCount.toLocaleString() }}</span>
              <span class="kpi-label">Shipments</span>
            </div>
            <div class="kpi-box">
              <span class="kpi-value text-green">98.6%</span>
              <span class="kpi-label">SLA Met</span>
            </div>
            <div class="kpi-box">
              <span class="kpi-value text-ink">126</span>
              <span class="kpi-label">In Transit</span>
            </div>
          </div>
          
          <div class="mockup-chart-wrapper">
            <div class="chart-header">Volume / 7 Days</div>
            <div class="chart-bars">
              <div class="bar" style="height: 40%"></div>
              <div class="bar" style="height: 65%"></div>
              <div class="bar" style="height: 50%"></div>
              <div class="bar" style="height: 85%"></div>
              <div class="bar" style="height: 70%"></div>
              <div class="bar" style="height: 95%"></div>
              <div class="bar text-blue" style="height: 100%"></div>
            </div>
          </div>
          
          <div class="mockup-recent">
            <div class="chart-header">Recent Shipments</div>
            <div class="recent-item">
              <div class="status-dot green"></div>
              <div><b>SHP-8091</b><span>Delivered to JKT</span></div>
              <small>Just now</small>
            </div>
            <div class="recent-item">
              <div class="status-dot blue"></div>
              <div><b>SHP-8092</b><span>In Transit (Tol Cipali)</span></div>
              <small>15m ago</small>
            </div>
            <div class="recent-item">
              <div class="status-dot red"></div>
              <div><b>SHP-8093</b><span>Delayed (Weather)</span></div>
              <small>1h ago</small>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const shipmentCount = ref(0)
const targetShipment = 1248

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Numeral animation
onMounted(() => {
  const duration = 2000;
  const steps = 60;
  const stepTime = duration / steps;
  let currentStep = 0;
  
  const timer = setInterval(() => {
    currentStep++;
    shipmentCount.value = Math.floor((targetShipment / steps) * currentStep);
    if(currentStep >= steps) {
      shipmentCount.value = targetShipment;
      clearInterval(timer);
    }
  }, stepTime);
});
</script>

<style scoped>
.hero {
  padding: 88px 0 70px;
  background: linear-gradient(180deg, #f0f7ff, #fff 80%);
  overflow: hidden;
  position: relative;
}
.hero:after {
  content: "";
  position: absolute;
  width: 620px;
  height: 620px;
  right: -180px;
  top: -130px;
  background: radial-gradient(circle, #e0f0ff, transparent 66%);
  pointer-events: none;
}
.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 65px;
  align-items: center;
}
.hero h1 {
  font: 800 62px/1.05 Manrope;
  letter-spacing: -2.5px;
  margin: 20px 0;
}
.hero h1 span {
  color: var(--blue);
  display: block;
}
.hero p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--muted);
  max-width: 500px;
}
.btn-lg {
  padding: 14px 28px;
  font-size: 14px;
}
.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 30px;
}
.visual {
  height: 480px;
  position: relative;
}
.orb {
  position: absolute;
  inset: 0 0 0 40px;
  border-radius: 50%;
  background: radial-gradient(circle at 60% 40%, #e8f4ff, transparent 65%);
}
.dashboard-mockup {
  position: absolute;
  top: 20px;
  right: -20px;
  width: 100%;
  height: 420px;
  border: 1px solid #dce7f3;
  border-radius: 16px;
  background: white;
  box-shadow: 0 35px 80px #0634671e;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.mockup-header {
  height: 45px;
  background: #091d36;
  color: #fff;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
}
.mockup-dots i {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2b4465;
  margin-left: 6px;
}
.mockup-kpis {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 24px;
  gap: 20px;
  background: #fafcff;
  border-bottom: 1px solid #eef3f9;
}
.kpi-box {
  background: white;
  border: 1px solid #e2edf8;
  padding: 18px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px #11427c08;
}
.kpi-value {
  display: block;
  font: 800 28px Manrope;
  margin-bottom: 5px;
}
.text-blue { color: var(--blue); }
.text-green { color: #00b074; }
.text-ink { color: var(--ink); }
.kpi-label {
  font-size: 11px;
  font-weight: 700;
  color: #7d8fabaa;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mockup-chart-wrapper {
  padding: 24px;
  flex: 1;
}
.chart-header {
  font-size: 10px;
  font-weight: 800;
  color: #8c9eae;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
}
.chart-bars {
  display: flex;
  align-items: flex-end;
  height: 70px;
  gap: 12px;
}
.bar {
  flex: 1;
  background: #e4edf8;
  border-radius: 4px 4px 0 0;
  transition: all 1s ease;
}
.bar.text-blue { background: linear-gradient(0deg, #1768e8, #6bb5ff); }

.mockup-recent {
  padding: 0 24px 24px;
}
.recent-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 0;
  border-bottom: 1px solid #f1f5fa;
}
.recent-item:last-child { border: 0; }
.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.status-dot.green { background: #00b074; box-shadow: 0 0 0 3px #00b0742f; }
.status-dot.blue { background: #1768e8; box-shadow: 0 0 0 3px #1768e82f; }
.status-dot.red { background: #ff5264; box-shadow: 0 0 0 3px #ff52642f; }
.recent-item b { font-size: 11px; display: block; color: var(--ink); }
.recent-item span { font-size: 10px; color: var(--muted); }
.recent-item small { margin-left: auto; font-size: 9px; color: #a1b0c0; }

@media (max-width: 950px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .hero {
    padding: 60px 0 35px;
  }
  .hero h1 {
    font-size: 42px;
    letter-spacing: -1.5px;
  }
  .visual {
    height: 440px;
  }
  .dashboard-mockup {
    width: 95%;
    right: 0;
  }
  .mockup-kpis {
    padding: 16px;
    gap: 10px;
  }
  .kpi-box {
    padding: 12px 6px;
  }
  .kpi-value {
    font-size: 20px;
  }
  .kpi-label {
    font-size: 9px;
  }
}
</style>
