<template>
  <section class="section workflow-stage" id="workflow">
    <div class="container">
      <div class="head center reveal">
        <span class="kicker">DARI ORDER HINGGA PROFIT</span>
        <h2>Kelola seluruh siklus logistik mulai dari hulu ke hilir tanpa hambatan.</h2>
      </div>

      <div class="workflow-pad reveal delay1" style="text-align: center; max-width: 600px; margin: 0 auto; background: #f6f9fd; border: 1px solid #e6edf5; border-radius: 12px; padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.03);">
        <div v-for="(item, i) in flows" :key="i">
           <h3 style="font: 800 20px Manrope; color: var(--navy); margin: 0;">{{ item.title }}</h3>
           <div v-if="i < flows.length - 1" style="font-size:18px; color:#aab8c9; margin: 10px 0;">↓</div>
        </div>
      </div>
      
      <div class="head center reveal delay2" style="margin-top: 50px;">
        <h3 style="font: 800 30px Manrope; color: var(--blue); letter-spacing: -1px;">
          Ketahui apa yang terjadi.<br>
          Ketahui berapa biayanya.<br>
          Ketahui pasti profit Anda.
        </h3>
      </div>
    </div>
  </section>
</template>

<script setup>
const flows = [
  { title: 'PELANGGAN (CUSTOMER)' },
  { title: 'PESANAN (ORDER)' },
  { title: 'PENAWARAN (QUOTATION)' },
  { title: 'SURAT TUGAS (JOB ORDER)' },
  { title: 'PENUGASAN (DISPATCH)' },
  { title: 'DAFTAR MUATAN (MANIFEST)' },
  { title: 'PENGIRIMAN (DELIVERY)' },
  { title: 'BUKTI TERIMA (POD)' },
  { title: 'TAGIHAN (INVOICE)' },
  { title: 'BIAYA (COST)' },
  { title: 'KEUNTUNGAN (PROFIT)' }
]
</script>

<style src="../assets/AppWorkflow.css" scoped></style>
