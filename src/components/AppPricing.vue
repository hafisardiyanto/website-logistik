<template>
  <section class="section" id="pricing" style="background:#f8fbff;">
    <div class="container">
      <div class="head center reveal">
        <h2>Pricing logistik yang transparan.</h2>
      </div>
      
      <div class="cards">
        <div class="card reveal">
          <h3>Starter</h3>
          <strong>Rp 999K</strong>
          <p>Untuk bisnis logistik yang sedang berkembang secara digital.</p>
        </div>
        <div class="card featured reveal delay1">
          <span class="badge">⭐ Most Popular</span>
          <h3>Business</h3>
          <strong>Rp 2.499K</strong>
          <p>Untuk operasional transportasi dengan volume dan beban lebih besar.</p>
        </div>
        <div class="card reveal delay2">
          <h3>Enterprise</h3>
          <strong>Custom</strong>
          <p>Untuk kebutuhan enterprise riil multi-cabang dan kustomisasi integrasi tertutup.</p>
        </div>
      </div>

      <div class="matrix-table reveal">
        <h3>Feature Matrix</h3>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Starter</th>
              <th>Business</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Customer Management</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td>Job Order</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td>Delivery Order</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td>Manifest</td><td class="na">—</td><td>✓</td><td>✓</td></tr>
            <tr><td>Tracking GPS</td><td class="na">—</td><td>✓</td><td>✓</td></tr>
            <tr><td>Reporting System</td><td>Basic</td><td>Advanced</td><td>Advanced</td></tr>
            <tr><td>Standard API</td><td class="na">—</td><td>✓</td><td>✓</td></tr>
            <tr><td>Custom Workflow</td><td class="na">—</td><td class="na">—</td><td>✓</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 35px;
}
.card {
  border: 1px solid var(--line);
  background: white;
  border-radius: 12px;
  padding: 35px 25px;
  position: relative;
}
.card.featured {
  border: 2px solid var(--blue);
  box-shadow: 0 20px 40px #1768e818;
  transform: translateY(-5px);
}
.badge {
  position: absolute;
  top: -12px;
  left: 20px;
  background: var(--blue);
  color: white;
  padding: 5px 12px;
  border-radius: 99px;
  font-size: 14px;
  font-weight: 800;
}
.card h3 {
  font-size: 20px;
  font-weight: 800;
  margin: 0;
}
.card strong {
  display: block;
  font-size: 32px;
  font-weight: 800;
  font-family: Manrope;
  margin: 12px 0 10px;
}
.card p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

.matrix-table {
  background: white;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 35px;
  margin-top: 40px;
  overflow-x: auto;
}
.matrix-table h3 {
  font-size: 22px;
  font-family: Manrope;
  font-weight: 800;
  margin-top: 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}
th {
  text-align: left;
  padding: 15px 10px;
  font-size: 15px;
  font-weight: 800;
  text-transform: uppercase;
  color: #798ba0;
  border-bottom: 2px solid #ebf0f7;
}
td {
  padding: 18px 10px;
  font-size: 17px;
  border-bottom: 1px solid #ebf0f7;
}
tbody tr:last-child td { border-bottom: 0; }
td:not(:first-child), th:not(:first-child) {
  text-align: center;
}
td:first-child {
  font-weight: 600;
  color: var(--ink);
}
.na {
  color: #b9c4d1;
}

@media (max-width: 950px) {
  .cards { grid-template-columns: 1fr; }
  .card.featured { transform: translateY(0); }
}
</style>
