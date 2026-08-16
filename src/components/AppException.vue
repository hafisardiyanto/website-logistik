<template>
  <section class="section exception-stage">
    <div class="container exception-grid">
      <div class="reveal">
        <span class="kicker text-orange">EXCEPTION MANAGEMENT</span>
        <h2 style="font-size: 36px; font-weight: 800; font-family: Manrope; margin-bottom: 20px;">
          Tahu <span style="font-style: italic; color: var(--blue)">kenapa</span> barang terlambat, bukan hanya tahu barang terlambat.
        </h2>
        <p style="color: var(--muted); font-size: 18px; line-height: 1.8;">
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

<style src="../assets/AppException.css" scoped></style>

