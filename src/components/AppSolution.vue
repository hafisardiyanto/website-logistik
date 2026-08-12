<template>
  <section class="solution-wrap">
    <div class="container container-sm text-center">
      <div class="reveal">
        <h2 class="big-statement">One Platform.<br><span>One Workflow.</span></h2>
        <p>
          LOGISTIQ menggantikan pecahan tumpukan aplikasi Anda dengan sebuah lapisan infrastruktur 
          yang merangkai keseluruhan proses perusahaan. Semuanya ada di sini.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution-wrap {
  padding: 90px 0;
  background: linear-gradient(135deg, #091a31, #06101f);
  color: white;
  text-align: center;
}
.container-sm {
  max-width: 650px;
  margin: 0 auto;
}
.big-statement {
  font: 800 60px/1 Manrope;
  letter-spacing: -2px;
  margin: 0 0 20px;
}
.big-statement span {
  color: var(--cyan);
}
.solution-wrap p {
  font-size: 14px;
  line-height: 1.9;
  color: #9ab0c5;
}

@media (max-width: 600px) {
  .big-statement {
    font-size: 42px;
  }
}
</style>
