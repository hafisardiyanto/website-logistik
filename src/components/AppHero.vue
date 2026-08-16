<template>
  <section class="hero" id="home">
    <div class="container hero-grid">
      <div class="reveal">
        
        <h1 style="font-size:42px; font-weight: 800; font-family: Manrope; margin-bottom:15px;">Kelola Seluruh Operasional Logistik. Dari Order hingga Profit.</h1>
        <p>
          Dari Order → Planning → Dispatch → Tracking → Delivery → Billing → Profitability, LOGISTIQ menyatukan seluruh operasional logistik dalam satu sistem.
        </p>
        <div class="actions">
          <button class="btn blue btn-lg cta-btn shadow" @click="scrollToId('contact')">Request a Demo</button>
          <a class="btn outline btn-lg cta-btn btn-secondary" href="#product">Explore Platform</a>
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

<style src="../assets/AppHero.css" scoped></style>

