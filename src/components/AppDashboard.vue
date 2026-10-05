<template>
  <section class="dashboard-visibility text-center" id="dashboard">
    <div class="container">
      <div class="reveal">
        <span class="dash-kicker">OPERATIONAL VISIBILITY</span>
        <h2 class="dash-title">Satu Tampilan untuk Melihat Seluruh Operasional Anda.</h2>
        <p class="dash-desc">Dapatkan visibility terhadap order, shipment, armada, delivery, revenue, biaya, dan profitability dalam satu dashboard yang mudah dipahami.</p>
        <p class="dash-support">Tidak perlu menunggu laporan manual. LOGISTIQ membantu management dan tim operasional memahami kondisi bisnis berdasarkan data yang terhubung.</p>
      </div>
      
      <div class="dash-visual reveal-dash mx-auto">
        <div class="dash-wrapper">
          <img src="/7.jpg" alt="LOGISTIQ Dashboard" class="img-dash shadow-xl" />
          
          <!-- Floating UI cards -->
          <div class="float-card float-1 reveal-float1">
             <b>Active Shipments</b>
             <div class="fl-row">
               <span class="fl-tag">SHP-001</span>
               <span class="fl-status in-transit">In Transit</span>
             </div>
          </div>
          
          <div class="float-card float-2 reveal-float2">
             <b>Fleet Status</b>
             <div class="fl-stats">
               <div><small>Available</small><span>42</span></div>
               <div><small>Maintenance</small><span>8</span></div>
             </div>
          </div>
          
          <div class="float-card float-3 reveal-float3">
             <b>Profit Margin</b>
             <div class="fl-big">18.2%</div>
          </div>
        </div>
      </div>
      
      <!-- 3 Value Propositions -->
      <div class="val-props reveal delay3">
        <div class="val-box">
          <div class="val-icon">👁️</div>
          <h3>Operational Overview</h3>
          <p>Lihat kondisi operasional secara menyeluruh dalam satu tampilan.</p>
        </div>
        <div class="val-box">
          <div class="val-icon">⚡</div>
          <h3>Real-Time Monitoring</h3>
          <p>Pantau shipment dan aktivitas operasional berdasarkan status terbaru.</p>
        </div>
        <div class="val-box">
          <div class="val-icon">📈</div>
          <h3>Business Performance</h3>
          <p>Hubungkan aktivitas operasional dengan revenue, cost, dan profitability.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    document.querySelector('.dash-visual')?.classList.add('show-dash');
    document.querySelector('.float-1')?.classList.add('show-float');
    document.querySelector('.float-2')?.classList.add('show-float');
    document.querySelector('.float-3')?.classList.add('show-float');
  }, 400);
});
</script>

<style src="../assets/AppDashboard.css" scoped></style>
