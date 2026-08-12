<template>
  <section class="hero" id="home">
    <div class="container hero-grid">
      <div class="reveal">
        <span class="pill-sm">Platform Operasional Logistik</span>
        <h1>Jalankan logistik <span>tanpa kekacauan.</span></h1>
        <p>
          Kelola Job Order, Delivery Order, Manifest, Shipment, Tracking, 
          hingga Billing dalam satu platform mandiri yang terstruktur.
        </p>
        <div class="actions">
          <button class="btn blue btn-lg cta-btn shadow" @click="scrollToId('contact')">
            Jadwalkan Demo
          </button>
          <a class="btn outline btn-lg cta-btn btn-secondary" href="#workflow">
            Lihat Cara Kerja ↓
          </a>
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
              <span class="kpi-value text-green">{{ slaAnim.toFixed(1) }}%</span>
              <span class="kpi-label">SLA</span>
            </div>
            <div class="kpi-box">
              <span class="kpi-value text-ink">{{ transitAnim }}</span>
              <span class="kpi-label">In Transit</span>
            </div>
          </div>
          
          <div class="mockup-chart-wrapper">
            <div class="chart-header">Analytics Chart</div>
            <div class="chart-bars" :class="{ 'animating': mounted }">
              <div class="bar" style="--height: 40%"></div>
              <div class="bar" style="--height: 65%"></div>
              <div class="bar" style="--height: 50%"></div>
              <div class="bar" style="--height: 85%"></div>
              <div class="bar" style="--height: 70%"></div>
              <div class="bar" style="--height: 95%"></div>
              <div class="bar text-blue" style="--height: 100%">
                <div class="bar-tooltip">Revenue Up</div>
              </div>
            </div>
          </div>
          
          <div class="mockup-recent">
            <div class="chart-header">Recent Shipments</div>
            <div class="recent-list">
              <div class="recent-item hoverable" style="--delay: 0.1s">
                <div class="status-dot green"></div>
                <div><b>SHP-8091</b><span>Delivered</span></div>
                <small>Baru saja</small>
              </div>
              <div class="recent-item hoverable" style="--delay: 0.2s">
                <div class="status-dot blue pulsing"></div>
                <div><b>SHP-8092</b><span>In Transit</span></div>
                <small>15m lalu</small>
              </div>
              <div class="recent-item hoverable" style="--delay: 0.3s">
                <div class="status-dot red"></div>
                <div><b>SHP-8093</b><span>Delayed</span></div>
                <small>1j lalu</small>
              </div>
            </div>
          </div>
          
          <div class="notification-pop" :class="{ 'show-pop': showNotification }">
            <div class="icon">🔔</div>
            <div class="pop-text">
              <b>Manifest MNF-102 selesai</b>
              <span>12 DO dialokasikan ke TRK-01.</span>
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
const slaAnim = ref(0)
const transitAnim = ref(0)

const targetShipment = 1248
const targetSla = 98.6
const targetTransit = 326
const mounted = ref(false)
const showNotification = ref(false)

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  setTimeout(() => mounted.value = true, 500);

  const duration = 2000;
  const steps = 60;
  const stepTime = duration / steps;
  let currentStep = 0;
  
  const timer = setInterval(() => {
    currentStep++;
    shipmentCount.value = Math.floor((targetShipment / steps) * currentStep);
    slaAnim.value = (targetSla / steps) * currentStep;
    transitAnim.value = Math.floor((targetTransit / steps) * currentStep);

    if(currentStep >= steps) {
      shipmentCount.value = targetShipment;
      slaAnim.value = targetSla;
      transitAnim.value = targetTransit;
      clearInterval(timer);
    }
  }, stepTime);

  setTimeout(() => showNotification.value = true, 3500);
  setTimeout(() => showNotification.value = false, 7500);
});
</script>

<style scoped>
.hero {
  padding: 80px 0;
  background: white;
  overflow: hidden;
  position: relative;
}
.hero-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 75px;
  align-items: center;
}
.pill-sm {
  font-size: 15px; font-weight: 800; letter-spacing: 1px; color: var(--blue);
  text-transform: uppercase; background: #eef5ff; padding: 7px 14px;
  border-radius: 99px; display: inline-block; margin-bottom: 25px;
}
.hero h1 { font: 800 66px/1.05 Manrope; letter-spacing: -2.5px; margin: 0 0 25px; }
.hero h1 span { color: var(--blue); display: block; }
.hero p { font-size: 20px; line-height: 1.8; color: var(--muted); max-width: 500px; }
.btn-lg { padding: 16px 32px; font-size: 18px; }
.cta-btn { border-radius: 99px; font-weight: 800; display: inline-block;}
.btn.shadow { box-shadow: 0 15px 30px #1768e833; }
.btn-secondary:hover { background: #fdfdfe; border-color: #d8e5f2; color: var(--blue); }
.actions { display: flex; gap: 15px; flex-wrap: wrap; margin-top: 35px; }

/* Dashboard */
.visual { height: 490px; position: relative; }
.orb {
  position: absolute; inset: -20px -20px 0 20px; border-radius: 50%;
  background: radial-gradient(circle at 60% 40%, #d4eaff, transparent 65%);
}
.dashboard-mockup {
  position: absolute; top: 10px; right: -30px; width: 100%; height: 460px;
  border: 1px solid #dce7f3; border-radius: 12px; background: white;
  box-shadow: 0 45px 100px #06346718; display: flex; flex-direction: column; overflow: hidden;
}
.mockup-header {
  height: 45px; background: #fdfdfe; border-bottom: 1px solid #eef3f9;
  padding: 0 20px; display: flex; align-items: center; justify-content: space-between; font-size: 15px; font-weight: 700;
}
.mockup-dots i {
  display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #dde5ef; margin-left: 7px;
}
.mockup-dots i:nth-child(1) { background: #ff5264; }
.mockup-dots i:nth-child(2) { background: #ffbd2d; }
.mockup-dots i:nth-child(3) { background: #00ca62; }

.mockup-kpis { display: grid; grid-template-columns: repeat(3, 1fr); padding: 24px; gap: 20px; background: #fafcff; border-bottom: 1px solid #eef3f9; }
.kpi-box { background: white; border: 1px solid #e2edf8; padding: 16px; border-radius: 10px; text-align: center; box-shadow: 0 8px 25px rgba(17,66,124,0.02); transition: all 0.3s ease; }
.kpi-box:hover { transform: translateY(-4px); border-color: #bad3f3; box-shadow: 0 15px 35px rgba(23,104,232,0.08); }
.kpi-value { display: block; font: 800 31px Manrope; margin-bottom: 5px; }
.text-blue { color: var(--blue); } .text-green { color: #00b074; } .text-ink { color: var(--ink); }
.kpi-label { font-size: 13px; font-weight: 800; color: #7d8fab; text-transform: uppercase; letter-spacing: 1px; }

.mockup-chart-wrapper { padding: 24px; flex: 1; }
.chart-header { font-size: 14px; font-weight: 800; color: #8c9eae; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
.chart-bars { display: flex; align-items: flex-end; height: 80px; gap: 14px; }
.bar { flex: 1; background: #e4edf8; border-radius: 4px 4px 0 0; height: 0; transition: height 1.5s cubic-bezier(0.1, 0.9, 0.2, 1); position: relative; }
.chart-bars.animating .bar { height: var(--height); }
.bar:nth-child(1) { transition-delay: 0.1s; }
.bar:nth-child(2) { transition-delay: 0.2s; }
.bar:nth-child(3) { transition-delay: 0.3s; }
.bar:nth-child(4) { transition-delay: 0.4s; }
.bar:nth-child(5) { transition-delay: 0.5s; }
.bar:nth-child(6) { transition-delay: 0.6s; }
.bar:nth-child(7) { transition-delay: 0.7s; }
.bar.text-blue { background: linear-gradient(0deg, #1768e8, #6bb5ff); }
.bar-tooltip { position: absolute; top: -30px; left: 50%; transform: translateX(-50%) scale(0.8); background: var(--ink); color: white; font-size: 13px; padding: 4px 8px; border-radius: 4px; opacity: 0; transition: 0.2s; pointer-events: none; }
.bar.text-blue:hover .bar-tooltip { opacity: 1; transform: translateX(-50%) scale(1); }

.mockup-recent { padding: 0 24px 24px; }
.recent-item { display: flex; align-items: center; gap: 14px; padding: 10px 14px; border: 1px solid transparent; border-radius: 8px; margin-bottom: 5px; transition: all 0.2s ease; animation: slideUp 0.5s ease-out both; animation-delay: var(--delay); }
.recent-item:hover { background: white; border-color: #d8e5f2; transform: translateY(-3px); box-shadow: 0 10px 25px rgba(17,52,93,0.06); }
@keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.status-dot { width: 10px; height: 10px; border-radius: 50%; }
.status-dot.green { background: #00b074; }
.status-dot.blue { background: #1768e8; }
.status-dot.red { background: #ff5264; }
.status-dot.pulsing { animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(23,104,232,0.4); } 70% { box-shadow: 0 0 0 6px rgba(23,104,232,0); } 100% { box-shadow: 0 0 0 0 rgba(23,104,232,0); } }
.recent-item b { font-size: 15px; display: block; color: var(--ink); }
.recent-item span { font-size: 14px; color: var(--muted); }
.recent-item small { margin-left: auto; font-size: 13px; color: #a1b0c0; }

.notification-pop { position: absolute; top: 60px; right: 20px; background: white; border: 1px solid #dce7f3; padding: 14px; border-radius: 12px; box-shadow: 0 20px 45px rgba(7,42,80,0.12); border-left: 4px solid var(--blue); display: flex; align-items: center; gap: 12px; opacity: 0; transform: translateY(-10px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); pointer-events: none; }
.notification-pop.show-pop { opacity: 1; transform: translateY(0); }
.notification-pop .icon { font-size: 22px; }
.pop-text b { font-size: 15px; display: block; }
.pop-text span { font-size: 13px; color: var(--muted); }

@media (max-width: 950px) { .hero-grid { grid-template-columns: 1fr; } }
@media (max-width: 600px) { .hero { padding: 50px 0 35px; } .hero h1 { font-size: 44px; } .visual { height: 480px; } .dashboard-mockup { width: 95%; right: 0; } .mockup-kpis { padding: 16px; gap: 10px; } .kpi-box { padding: 12px 6px; } .kpi-value { font-size: 22px; } .notification-pop { right: 5%; } }
</style>
