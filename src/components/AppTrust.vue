<template>
  <div class="trust">
    <div class="container center">
      <div class="reveal">
        <span class="trust-pill">Telah dipercaya oleh operasi logistik modern.</span>
        <div class="metrics">
          <div class="metric">
            <b>1,000+</b>
            <span>Shipment Managed</span>
          </div>
          <div class="metric">
            <b>50+</b>
            <span>Active Users</span>
          </div>
          <div class="metric">
            <b>98.6%</b>
            <span>SLA Achievement</span>
          </div>
          <div class="metric">
            <b>24/7</b>
            <span>Operational Visibility</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trust {
  border-bottom: 1px solid #edf1f5;
  padding: 50px 0;
  text-align: center;
  background: #fafcff;
}
.trust-pill {
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #798ba0;
  font-weight: 800;
  display: block;
  margin-bottom: 35px;
}
.metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}
.metric b {
  font-family: Manrope;
  font-weight: 800;
  font-size: 36px;
  color: var(--ink);
  display: block;
  margin-bottom: 5px;
  line-height: 1;
}
.metric span {
  font-size: 15px;
  font-weight: 700;
  color: var(--muted);
}

@media (max-width: 950px) {
  .metrics {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 35px;
  }
}
@media (max-width: 600px) {
  .metrics {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
}
</style>
