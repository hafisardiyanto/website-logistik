<template>
  <section class="section profit-stage">
    <div class="container profit-grid">
      <div class="profit-mockup reveal">
        
        <div class="mock-hdr">
          <b>Profitability Calculator</b>
        </div>
        <div class="mock-body">
          <div class="row">
            <span>Shipment Revenue</span>
            <b>Rp 3.500.000</b>
          </div>
          <div class="row">
            <span>Operational Cost (BBM, Tol, Uang Jalan)</span>
            <b class="text-red">- Rp 2.150.000</b>
          </div>
          <hr />
          <div class="row total">
            <span>Gross Profit</span>
            <b>Rp 1.350.000</b>
          </div>
          <div class="margin-badge">
            Margin: <b>38.57%</b>
          </div>
        </div>

      </div>
      
      <div class="reveal delay2">
        <span class="kicker text-green">KEUANGAN REAL-TIME</span>
        <h2 style="font-size: 36px; font-weight: 800; font-family: Manrope; margin-bottom: 20px;">
          From shipment to profitability.
        </h2>
        <p style="color: var(--muted); font-size: 18px; line-height: 1.8;">
          Jangan cuma tahu posisi (GPS) barang di mana. Pahami pasti <b>berapa banyak yang dihasilkan</b> oleh barang tersebut di setiap surat jalan secara otomatis. Jadikan platform Anda sebuah ERP Logistik mandiri.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profit-stage {
  background: white;
  padding: 90px 0;
}
.profit-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 80px;
  align-items: center;
}
.text-green { color: #10a875; background: #e6f8f1; }
.profit-mockup {
  background: #fdfdfe;
  border: 1px solid #e1e9f4;
  border-radius: 12px;
  box-shadow: 0 45px 90px #123d701a;
  overflow: hidden;
}
.mock-hdr {
  background: #f8fbff;
  border-bottom: 1px solid #eff3f9;
  padding: 16px 25px;
  font-size: 16px;
}
.mock-body { padding: 25px; }
.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 17px;
}
.row span { color: var(--muted); }
.text-red { color: #e63946; }
hr {
  border: 0;
  border-bottom: 2px dashed #dde7f3;
  margin: 25px 0 15px;
}
.row.total {
  font-size: 20px;
}
.row.total b {
  font-family: Manrope;
  font-weight: 800;
  color: #10a875;
}
.margin-badge {
  background: #e6f8f1;
  color: #0b8c60;
  display: inline-block;
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 15px;
}

@media (max-width: 950px) {
  .profit-grid { grid-template-columns: 1fr; gap: 50px; }
  .profit-mockup { order: 2; width: 100%; max-width: 400px; margin: 0 auto; }
}
</style>
