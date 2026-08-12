<template>
  <section class="section faq-section" id="faq">
    <div class="container center">
      <div class="reveal">
        <h2 style="font-size: 36px; font-weight: 800; font-family: Manrope; margin-bottom: 40px;">Frequently Asked Questions</h2>
      </div>
      
      <div class="faq-list reveal delay1">
        <div class="faq-item">
          <b>Apakah LOGISTIQ cocok untuk perusahaan 3PL?</b>
          <p>Ya, LOGISTIQ dirancang untuk membantu mengelola customer, order, shipment, manifest, tracking, biaya, dan billing dalam satu rangkaian platform.</p>
        </div>
        <div class="faq-item">
          <b>Apakah bisa digunakan multi-cabang (multi-branch)?</b>
          <p>Tentu. Untuk akun Enterprise, Anda dapat mengisolasi hak akses ke cabang-cabang tertentu sambil tetap membiarkan kantor pusat memantau seluruh kinerja secara agregat.</p>
        </div>
        <div class="faq-item">
          <b>Apakah tersedia API Integration untuk aplikasi internal klien?</b>
          <p>Kami menyediakan standar REST API untuk keperluan penarikan Job Order atau pengiriman status tracking kembali (webhook) ke situs brand eksternal kustomer Anda.</p>
        </div>
        <div class="faq-item">
          <b>Apakah bisa melayani Custom Workflow logistik khusus?</b>
          <p>Bisa, melalui skema Enterprise. Tim insinyur perangkat lunak dari kami akan memetakan proses Anda (custom development module) hingga sesuai sebelum deploy akhir.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  background: white;
}
.faq-list {
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
}
.faq-item {
  border-bottom: 1px solid var(--line);
  padding: 25px 0;
}
.faq-item:first-child {
  border-top: 1px solid var(--line);
}
.faq-item b {
  font-size: 19px;
  font-weight: 800;
  font-family: Manrope;
  display: block;
  margin-bottom: 10px;
}
.faq-item p {
  font-size: 17px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
}
</style>
