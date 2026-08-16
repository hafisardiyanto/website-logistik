<template>
  <section class="section alt" id="about">
    <div class="container">
      <div class="head center reveal">
        <h2 style="font: 800 38px/1.2 Manrope; letter-spacing: -1px; margin-bottom:50px;">Built Around the Way Logistics Businesses Actually Work</h2>
      </div>
      
      <div class="values-grid">
        <div class="val-card reveal">
          <div class="icon" style="background:#ebf4ff; color:var(--blue); font-size:24px; border-radius:12px; width:50px; height:50px; display:flex; align-items:center; justify-content:center; margin-bottom:15px;">♾️</div>
          <h3 style="font: 800 18px Manrope; margin-bottom:8px;">End-to-End</h3>
          <p style="font-size:14px; color:var(--muted); line-height:1.6;">Dari order hingga tuntas terangkum di invoice.</p>
        </div>
        
        <div class="val-card reveal delay1">
          <div class="icon" style="background:#e4f8f0; color:var(--green); font-size:24px; border-radius:12px; width:50px; height:50px; display:flex; align-items:center; justify-content:center; margin-bottom:15px;">👁️</div>
          <h3 style="font: 800 18px Manrope; margin-bottom:8px;">Real-Time Visibility</h3>
          <p style="font-size:14px; color:var(--muted); line-height:1.6;">Pantau operasional tanpa menunggu laporan manual.</p>
        </div>
        
        <div class="val-card reveal delay2">
          <div class="icon" style="background:#ffeeef; color:var(--red); font-size:24px; border-radius:12px; width:50px; height:50px; display:flex; align-items:center; justify-content:center; margin-bottom:15px;">💸</div>
          <h3 style="font: 800 18px Manrope; margin-bottom:8px;">Cost Control</h3>
          <p style="font-size:14px; color:var(--muted); line-height:1.6;">Ketahui setiap pergerakan biaya pasti pada tiap pengiriman.</p>
        </div>

        <div class="val-card reveal">
          <div class="icon" style="background:#fffcf0; color:orange; font-size:24px; border-radius:12px; width:50px; height:50px; display:flex; align-items:center; justify-content:center; margin-bottom:15px;">📈</div>
          <h3 style="font: 800 18px Manrope; margin-bottom:8px;">Profitability</h3>
          <p style="font-size:14px; color:var(--muted); line-height:1.6;">Ketahui keuntungan nyata dari setiap satu dokumen Job Order.</p>
        </div>

        <div class="val-card reveal delay1">
          <div class="icon" style="background:#f4f4fa; color:#625bbb; font-size:24px; border-radius:12px; width:50px; height:50px; display:flex; align-items:center; justify-content:center; margin-bottom:15px;">🏢</div>
          <h3 style="font: 800 18px Manrope; margin-bottom:8px;">Multi-Branch</h3>
          <p style="font-size:14px; color:var(--muted); line-height:1.6;">Kelola operasional dan performa dari berbagai lokasi cabang.</p>
        </div>

        <div class="val-card reveal delay2">
          <div class="icon" style="background:#eaf2f8; color:var(--navy); font-size:24px; border-radius:12px; width:50px; height:50px; display:flex; align-items:center; justify-content:center; margin-bottom:15px;">⚙️</div>
          <h3 style="font: 800 18px Manrope; margin-bottom:8px;">Enterprise Ready</h3>
          <p style="font-size:14px; color:var(--muted); line-height:1.6;">Diperkuat role, permission, approval, audit log, & integrasi API.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.val-card {
  background: white;
  border: 1px solid var(--line);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.02);
}
@media (max-width: 850px) {
  .values-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .values-grid { grid-template-columns: 1fr; }
}
</style>
<style src="../assets/AppAbout.css" scoped></style>
