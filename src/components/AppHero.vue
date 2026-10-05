<template>
  <section class="hero" id="home">
    <div class="container hero-grid">
      <div class="hero-content reveal">
        <span class="hero-kicker">LOGISTIQ — Logistics Management Platform</span>
        <h1 class="hero-title">Kelola Seluruh Operasional Logistik. Dari Order hingga Profit.</h1>
        <p class="hero-desc">
          Satukan order, planning, dispatch, tracking, delivery, billing, dan profitability dalam satu platform untuk membantu tim logistik bekerja lebih cepat, terukur, dan terkendali.
        </p>
        
        <div class="actions">
          <button class="btn blue btn-lg cta-btn shadow" @click="scrollToId('contact')">Request a Demo</button>
          <a class="btn outline btn-lg cta-btn outline-btn" href="#product" @click.prevent="scrollToId('product')">Explore Platform</a>
        </div>
        
        <p class="hero-support">Satu platform untuk operasional, fleet, warehouse, dan management.</p>
      </div>
      
      <div class="hero-visual reveal-dash">
        <div class="glow-bg"></div>
        <div class="visual-wrapper">
          <img src="/Dashboard.jpg" alt="LOGISTIQ Dashboard Modern" class="hero-img shadow-lg" />
          
          <div class="floating-badge badge-1 reveal-kpi1">
            <span class="icon">📈</span>
            <div><b>Revenue up 14%</b><small>This Month</small></div>
          </div>
          <div class="floating-badge badge-2 reveal-kpi2">
            <span class="icon">🚚</span>
            <div><b>326 Shipments</b><small>In Transit</small></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  // Reveal animation handled by parent IntersectionObserver via .reveal class for hero content.
  // The dashboard animations are handled in CSS with delays assuming they animate unconditionally 
  // or via the same IntersectionObserver. We can use native CSS animations for the dashboard.
  setTimeout(() => {
    document.querySelector('.hero-visual')?.classList.add('show-dash');
    document.querySelector('.badge-1')?.classList.add('show-kpi');
    document.querySelector('.badge-2')?.classList.add('show-kpi');
  }, 300);
})
</script>

<style src="../assets/AppHero.css" scoped></style>
