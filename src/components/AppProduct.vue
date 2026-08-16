<template>
  <section class="section" id="solutions" style="padding-top:100px;">
    <div class="container">
      <div class="head center reveal">
        <h2 style="font-size: 38px; font-weight: 800; font-family: Manrope;">Solutions Built for Every Logistics Operation</h2>
      </div>

      <div class="solutions-grid">
        
        <div class="solution-card reveal">
          <div class="icon">🚛</div>
          <h3 style="font:800 20px Manrope; margin: 15px 0 10px;">Transportation</h3>
          <span style="display:inline-block; margin-bottom:15px; font-weight:700; color:var(--blue); font-size:13px;">Software manajemen trucking & transportasi</span>
          <p style="font-size:14px; color:var(--muted); line-height:1.7;">Kelola customer, order, Job Order, armada, driver, jadwal, manifest, delivery, biaya operasional, dan tracking.</p>
          <a href="#" class="learn-more">Learn more →</a>
        </div>

        <div class="solution-card reveal delay1">
          <div class="icon">🌎</div>
          <h3 style="font:800 20px Manrope; margin: 15px 0 10px;">Freight Forwarding</h3>
          <span style="display:inline-block; margin-bottom:15px; font-weight:700; color:var(--green); font-size:13px;">Kelola freight forwarding dalam satu platform</span>
          <p style="font-size:14px; color:var(--muted); line-height:1.7;">Kelola shipment, customer, vendor, dokumen, transportasi, dan billing.</p>
          <a href="#" class="learn-more">Learn more →</a>
        </div>

        <div class="solution-card reveal delay2">
          <div class="icon">🏭</div>
          <h3 style="font:800 20px Manrope; margin: 15px 0 10px;">Warehouse</h3>
          <span style="display:inline-block; margin-bottom:15px; font-weight:700; color:orange; font-size:13px;">Kontrol gudang secara terintegrasi</span>
          <p style="font-size:14px; color:var(--muted); line-height:1.7;">Kelola inbound, outbound, inventory, storage location, dan pergerakan barang.</p>
          <a href="#" class="learn-more">Learn more →</a>
        </div>

        <div class="solution-card reveal delay3">
          <div class="icon">📦</div>
          <h3 style="font:800 20px Manrope; margin: 15px 0 10px;">Distribution</h3>
          <span style="display:inline-block; margin-bottom:15px; font-weight:700; color:var(--navy); font-size:13px;">Optimalkan distribusi hingga tujuan</span>
          <p style="font-size:14px; color:var(--muted); line-height:1.7;">Kelola delivery planning, route, driver, shipment, dan last-mile delivery.</p>
          <a href="#" class="learn-more">Learn more →</a>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 50px;
}
.solution-card {
  padding: 35px;
  border: 1px solid var(--line);
  background: white;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  border-color: #cbdcf0;
}
.icon {
  font-size: 32px;
}
.learn-more {
  display: inline-block;
  margin-top: 20px;
  color: var(--navy);
  font-weight: 800;
  font-size: 14px;
}
.learn-more:hover { color: var(--blue); }

@media (max-width: 768px) {
  .solutions-grid { grid-template-columns: 1fr; }
}
</style>
