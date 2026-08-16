<template>
  <section class="section" id="features" style="background:#f9fafb;">
    <div class="container">
      
      <div class="layers-grid">
        <div class="layer-card reveal">
          <h3 style="border-bottom: 2px solid var(--blue); padding-bottom: 10px; margin-bottom: 15px; font-family: Manrope; font-weight: 800;">Sales</h3>
          <ul class="layer-list">
            <li>Customer</li><li>Quotation</li><li>Contract</li><li>Pricing</li>
          </ul>
        </div>

        <div class="layer-card reveal delay1">
          <h3 style="border-bottom: 2px solid var(--green); padding-bottom: 10px; margin-bottom: 15px; font-family: Manrope; font-weight: 800;">Operations</h3>
          <ul class="layer-list">
            <li>Customer Order</li><li>Job Order</li><li>Manifest</li><li>Delivery Order</li><li>Scheduling</li><li>Tracking</li><li>POD</li>
          </ul>
        </div>

        <div class="layer-card reveal delay2">
          <h3 style="border-bottom: 2px solid orange; padding-bottom: 10px; margin-bottom: 15px; font-family: Manrope; font-weight: 800;">Finance</h3>
          <ul class="layer-list">
            <li>Revenue</li><li>Operational Cost</li><li>Vendor Cost</li><li>Invoice</li><li>Account Receivable</li><li>Profit & Loss</li>
          </ul>
        </div>

        <div class="layer-card reveal delay3">
          <h3 style="border-bottom: 2px solid var(--navy); padding-bottom: 10px; margin-bottom: 15px; font-family: Manrope; font-weight: 800;">Management</h3>
          <ul class="layer-list">
            <li>Dashboard</li><li>KPI</li><li>Reports</li><li>Branch Performance</li><li>Customer Performance</li><li>Vendor Performance</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="../assets/AppFeatures.css" scoped></style>
<style scoped>
.layers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.layer-card {
  background: white;
  border: 1px solid var(--line);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
}
.layer-list {
  list-style: none;
  padding: 0;
  font-size: 14px;
  line-height: 2;
  color: var(--navy);
  font-weight: 600;
}
.layer-list li { margin-bottom: 6px; border-bottom:1px solid #f1f5f9; }
.layer-list li::before { content: "✓ "; color: var(--blue); font-weight: bold; margin-right: 5px; }

@media (max-width: 950px) {
  .layers-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .layers-grid { grid-template-columns: 1fr; }
}
</style>
