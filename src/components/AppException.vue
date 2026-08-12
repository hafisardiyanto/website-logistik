<template>
  <section class="section exception-stage">
    <div class="container exception-grid">
      <div class="reveal">
        <span class="kicker text-orange">EXCEPTION MANAGEMENT</span>
        <h2 style="font-size: 32px; font-weight: 800; font-family: Manrope; margin-bottom: 20px;">
          Tahu <span style="font-style: italic; color: var(--blue)">kenapa</span> barang terlambat, bukan hanya tahu barang terlambat.
        </h2>
        <p style="color: var(--muted); font-size: 14px; line-height: 1.8;">
          Jangan sekadar melacak lokasi GPS. Aplikasi kami secara cerdas mendeteksi *business problem* 
          layaknya keterlambatan armada karena kustomer tidak ada di tempat maupun faktor kendala cuaca.
        </p>
      </div>

      <div class="exception-mockup reveal delay1">
        <div class="mock-hdr">
          <div class="dot red"></div> <b>Delayed Shipment Alert</b>
        </div>
        <div class="mock-body">
          <div class="shp-num">SHP-2026-00881</div>
          <div class="route">Gresik → Jakarta</div>
          
          <div class="warning-box">
            <span class="icon">⚠</span>
            <div>
              <b>Status: Delay (Terjeda)</b>
              <span>Alasan: Customer / Penerima tidak bisa dihubungi di lokasi.</span>
            </div>
          </div>
          
          <div class="action-btns">
            <button class="btn full">Reschedule</button>
            <button class="btn outline full text-blue">Contact Customer</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exception-stage {
  background: #fbfdff;
  border-top: 1px solid var(--line);
  padding: 90px 0;
}
.exception-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 70px;
  align-items: center;
}
.text-orange { color: #f26b21; background: #ffeee5; }
.exception-mockup {
  background: white;
  border-radius: 12px;
  border: 1px solid #f6cfd3;
  box-shadow: 0 35px 80px #d64a591e;
  overflow: hidden;
}
.mock-hdr {
  background: #fff8f8;
  border-bottom: 1px solid #f9e2e5;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.dot.red { width: 10px; height: 10px; border-radius: 50%; background: #ff3b53; }
.mock-hdr b { font-size: 12px; color: #bc2033; }
.mock-body { padding: 25px; }
.shp-num { font: 800 18px Manrope; }
.route { font-size: 11px; color: var(--muted); margin: 4px 0 20px; }
.warning-box {
  background: #fff4f5;
  border: 1px solid #fdd6da;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  margin-bottom: 25px;
}
.warning-box .icon { font-size: 18px; color: #e63946; }
.warning-box b { font-size: 12px; display: block; color: #a41d2a; }
.warning-box span { font-size: 11px; color: #cb4653; display: block; margin-top: 4px;}
.action-btns { display: flex; gap: 10px; }
.btn.full { flex: 1; padding: 12px; font-size: 12px; }

@media (max-width: 950px) {
  .exception-grid { grid-template-columns: 1fr; }
}
</style>
