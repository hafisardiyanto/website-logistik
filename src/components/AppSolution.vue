<template>
  <section class="solution-wrap" style="padding: 100px 0; background: #06101f; color: white;">
    <div class="container text-center">
      <div class="reveal">
        <h2 style="font: 800 48px/1.1 Manrope; margin-bottom: 25px;">One Platform. One Source of Truth.</h2>
        <p style="font-size: 18px; color: #9ab0c5; max-width: 700px; margin: 0 auto 50px;">
          Satukan seluruh proses bisnis logistik dalam satu platform — dari customer order hingga delivery, invoicing, cost control, dan profitability.
        </p>
      </div>

      <div class="reveal delay1" style="display:flex; flex-wrap:wrap; justify-content:center; gap: 10px; font-size:12px; font-weight:700; color:#cbdcf0; align-items:center;">
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">CUSTOMER</div> <span>→</span>
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">ORDER</div> <span>→</span>
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">QUOTATION</div> <span>→</span>
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">JOB ORDER</div> <span>→</span>
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">SCHEDULING</div> <span>→</span>
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">DISPATCH</div> <br class="mobile-break"> <span>→</span>
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">MANIFEST</div> <span>→</span>
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">DELIVERY</div> <span>→</span>
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">POD</div> <span>→</span>
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">INVOICE</div> <span>→</span>
        <div style="background:#0a1d35; padding: 10px 15px; border-radius: 8px; border:1px solid #143054;">COST</div> <span>→</span>
        <div style="background:var(--blue); color:white; padding: 10px 15px; border-radius: 8px; box-shadow:0 5px 15px rgba(23,104,232,0.4);">PROFIT</div>
      </div>
      
      <div class="reveal delay2" style="margin-top: 80px; max-width:800px; margin-left:auto; margin-right:auto; text-align:left; background: #0a1b31; padding: 40px; border-radius: 16px; border: 1px solid #143054;">
         <h3 style="font: 800 28px Manrope; color:#5dd7ff; margin:0 0 15px;">Aplikasi Pengiriman Barang untuk Bisnis Logistik</h3>
         <p style="font-size: 15px; color:#a9b9cd; line-height: 1.8; margin-bottom:25px;">
           LOGISTIQ membantu perusahaan mengelola proses pengiriman barang mulai dari menerima order, mengatur jadwal, menugaskan armada dan driver, memantau pengiriman, membuat proof of delivery, hingga menagihkan customer.
         </p>
         <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; font-size:13px; color:#fff;">
           <div>✓ Customer Management</div>
           <div>✓ Order Management</div>
           <div>✓ Delivery Scheduling</div>
           <div>✓ Fleet Management</div>
           <div>✓ Driver Management</div>
           <div>✓ Job Order</div>
           <div>✓ Manifest</div>
           <div>✓ Delivery Order</div>
           <div>✓ Tracking</div>
           <div>✓ Proof of Delivery</div>
           <div>✓ Customer Invoice</div>
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 800px) {
  .mobile-break { display: block; width: 100%; height: 0; }
  span { display:none; }
}
</style>
