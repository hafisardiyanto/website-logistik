<template>
  <section class="section alt problems" id="masalah">
    <div class="container center">
      <div class="reveal">
        <span class="kicker text-red">Masih mengelola logistik dengan Excel, WhatsApp, dan sistem terpisah?</span>
        <h2 style="font-size: 38px; font-weight: 800; font-family: Manrope; margin-top:10px;">Customer & Order Berantakan</h2>
        <p class="subtitle" style="font-size:16px;">Data customer dan pesanan tersebar di Excel, WhatsApp, atau sistem berbeda.</p>
      </div>

      <div class="cards-grid" style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top:40px; text-align:left;">
        <div class="card reveal delay1" style="padding:25px; background:white; border:1px solid var(--line); border-radius:12px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="font-size: 30px; margin-bottom: 15px;">📅</div>
          <h3 style="font-size:16px; margin:0 0 10px; font-family:Manrope; font-weight:800;">Jadwal Sulit Dikontrol</h3>
          <p style="font-size:13px; color:var(--muted); line-height:1.6; margin:0;">Sulit mengetahui pengiriman mana yang akan berjalan, tertunda, atau selesai.</p>
        </div>
        <div class="card reveal delay2" style="padding:25px; background:white; border:1px solid var(--line); border-radius:12px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="font-size: 30px; margin-bottom: 15px;">💸</div>
          <h3 style="font-size:16px; margin:0 0 10px; font-family:Manrope; font-weight:800;">Biaya Tidak Terlihat</h3>
          <p style="font-size:13px; color:var(--muted); line-height:1.6; margin:0;">Sulit mengetahui berapa biaya sebenarnya untuk setiap pengiriman.</p>
        </div>
        <div class="card reveal delay3" style="padding:25px; background:white; border:1px solid var(--line); border-radius:12px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="font-size: 30px; margin-bottom: 15px;">🧾</div>
          <h3 style="font-size:16px; margin:0 0 10px; font-family:Manrope; font-weight:800;">Invoice Terlambat</h3>
          <p style="font-size:13px; color:var(--muted); line-height:1.6; margin:0;">Data pengiriman kerap belum siap untuk menjadi tagihan (invoice) customer.</p>
        </div>
        <div class="card reveal delay1" style="padding:25px; background:white; border:1px solid var(--line); border-radius:12px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="font-size: 30px; margin-bottom: 15px;">🙈</div>
          <h3 style="font-size:16px; margin:0 0 10px; font-family:Manrope; font-weight:800;">Manajemen Data Buta</h3>
          <p style="font-size:13px; color:var(--muted); line-height:1.6; margin:0;">Pimpinan harus repot menunggu laporan manual untuk mengecek kondisi bisnis.</p>
        </div>
      </div>
      
      <div class="reveal center" style="margin-top: 50px;">
        <h3 style="font-size:24px; font-weight:800; font-family:Manrope; color:var(--blue);">LOGISTIQ connects every part of your logistics operation.</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 950px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 600px) {
  .cards-grid { grid-template-columns: 1fr !important; }
}
</style>
<style src="../assets/AppProblems.css" scoped></style>
