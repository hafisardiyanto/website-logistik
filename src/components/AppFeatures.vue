<template>
  <section class="section">
    <div class="container">
      <div class="head center reveal">
        <h2 style="font-size: 32px; font-weight: 800; font-family: Manrope;">Fitur platform operasional Anda secara detail.</h2>
      </div>
      <div class="features-list">
        
        <div class="feat reveal">
          <div class="icon">🖥️</div>
          <div>
            <h3>Dashboard</h3>
            <p>Monitor seluruh operasi keuangan dan perjalanan dari satu layar utama.</p>
          </div>
        </div>
        
        <div class="feat reveal delay1">
          <div class="icon">📋</div>
          <div>
            <h3>Job Order</h3>
            <p>Kelola seluruh pekerjaan dan permintaan pengiriman dari klien secara teratur.</p>
          </div>
        </div>

        <div class="feat reveal delay2">
          <div class="icon">📦</div>
          <div>
            <h3>Delivery Order</h3>
            <p>Kontrol detail pengiriman dan tujuan secara akurat sebelum truk berangkat.</p>
          </div>
        </div>

        <div class="feat reveal">
          <div class="icon">📑</div>
          <div>
            <h3>Manifest</h3>
            <p>Tautkan dan alokasikan kendaraan, driver, area, serta shipment.</p>
          </div>
        </div>

        <div class="feat reveal delay1">
          <div class="icon">📍</div>
          <div>
            <h3>Tracking</h3>
            <p>Ketahui posisi (GPS) dan status riil shipment tepat ketika perjalanan terjadi.</p>
          </div>
        </div>

        <div class="feat reveal delay2">
          <div class="icon">🧾</div>
          <div>
            <h3>Cost & Billing</h3>
            <p>Hubungkan langsung biaya operasional (uang jalan) dengan pendapatan akhir (Invoice).</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.features-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.feat {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 25px;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--line);
}
.icon {
  font-size: 24px;
}
.feat h3 {
  font-size: 15px;
  font-family: Manrope;
  font-weight: 800;
  margin: 0 0 6px;
}
.feat p {
  font-size: 11px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 950px) {
  .features-list { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .features-list { grid-template-columns: 1fr; }
}
</style>
