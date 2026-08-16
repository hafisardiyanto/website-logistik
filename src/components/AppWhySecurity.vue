<template>
  <section class="section" id="enterprise" style="background:#f9fafb; padding:100px 0;">
    <div class="container">
      <div class="head center reveal">
        <span style="font-weight:800; font-size:12px; letter-spacing:1px; color:#3b5998; text-transform:uppercase;">Enterprise Capability</span>
        <h2 style="font-size:36px; font-weight:800; font-family:Manrope; margin: 10px 0;">Sistem tangguh untuk mengelola ratusan cabang.</h2>
        <p style="color:var(--muted); font-size:16px; margin-top:10px; max-width:600px; margin-left:auto; margin-right:auto;">
          Aman. Transparan. Dan mudah tersambung dengan ekosistem perangkat lunak perusahaan Anda.
        </p>
      </div>

      <div class="tech-box reveal delay1" style="margin-top:50px; background:white; border:1px solid #e1e7f0; border-radius:16px; box-shadow:0 15px 30px rgba(0,0,0,0.02); display:grid; grid-template-columns:repeat(2, 1fr); max-width:800px; margin-left:auto; margin-right:auto;">
        
        <div class="tech-col" style="padding:40px; border-right:1px solid #e1e7f0;">
          <div class="icon-head" style="font-weight:800; color:var(--navy); font-size:15px; margin-bottom:20px;">🛡️ SECURITY & GOVERNANCE</div>
          <ul style="list-style:none; padding:0; font-size:15px; color:var(--muted); line-height:2;">
            <li style="margin-bottom:10px;">✓ Multi Branch & Multi Company</li>
            <li style="margin-bottom:10px;">✓ Role-Based Access Control (RBAC)</li>
            <li style="margin-bottom:10px;">✓ Audit Trail (Log Aktivitas User)</li>
            <li>✓ Approval Workflow Berjenjang</li>
          </ul>
        </div>
        
        <div class="tech-col" style="padding:40px;">
          <div class="icon-head" style="font-weight:800; color:var(--navy); font-size:15px; margin-bottom:20px;">🔗 INTEGRATION & API</div>
          <ul style="list-style:none; padding:0; font-size:15px; color:var(--muted); line-height:2;">
            <li style="margin-bottom:10px;">✓ Dokumentasi API Terbuka</li>
            <li style="margin-bottom:10px;">✓ Custom ERP Integration (SAP, Odoo, dll)</li>
            <li style="margin-bottom:10px;">✓ Bank & Payment Gateway Integration</li>
            <li>✓ Webhook Notification Engine</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 650px) {
  .tech-box { grid-template-columns: 1fr !important; }
  .tech-col:first-child { border-right: none !important; border-bottom: 1px solid #e1e7f0; }
}
</style>
<style src="../assets/AppWhySecurity.css" scoped></style>
