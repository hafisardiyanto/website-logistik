<template>
  <div class="trust">
    <div class="container">
      <p>Dirancang untuk tim yang memindahkan produk dalam skala besar</p>
      <div class="brandrow">
        <span>LOGITRANS</span>
        <span>MOVECO</span>
        <span>FLEETLY</span>
        <span>WAREX</span>
        <span>DELIVR</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trust {
  border-top: 1px solid #edf1f5;
  border-bottom: 1px solid #edf1f5;
  padding: 23px 0;
}
.trust .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
}
.trust p {
  font-size: 9px;
  color: #8996a7;
  margin: 0;
}
.brandrow {
  display: flex;
  gap: 35px;
  color: #8290a2;
  font-weight: 700;
  font-size: 12px;
}
@media (max-width: 600px) {
  .trust .container {
    display: block;
  }
  .brandrow {
    margin-top: 15px;
    gap: 17px;
    flex-wrap: wrap;
  }
}
</style>
