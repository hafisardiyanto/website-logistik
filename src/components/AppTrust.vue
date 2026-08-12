<template>
  <div class="trust">
    <div class="container center">
      <div class="reveal">
        <span class="trust-pill">Built around real logistics workflows.</span>
        <div class="domains">
          <span>TRUCKING</span><span class="dot">•</span>
          <span>3PL</span><span class="dot">•</span>
          <span>DISTRIBUTION</span><span class="dot">•</span>
          <span>WAREHOUSE</span><span class="dot">•</span>
          <span>FREIGHT FORWARDING</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trust {
  border-bottom: 1px solid #edf1f5;
  padding: 40px 0;
  text-align: center;
  background: #fafcff;
}
.trust-pill {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #798ba0;
  font-weight: 800;
  display: block;
  margin-bottom: 25px;
}
.domains {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  color: var(--ink);
  font-weight: 800;
  font-size: 17px;
  letter-spacing: -0.5px;
  font-family: Manrope;
}
.dot {
  color: #cbd8e8;
}

@media (max-width: 600px) {
  .domains {
    font-size: 14px;
    gap: 10px;
  }
}
</style>
