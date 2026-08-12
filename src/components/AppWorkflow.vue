<template>
  <section class="section workflow-stage" id="workflow">
    <div class="container">
      <div class="head center reveal">
        <span class="kicker">Satu Perjalanan</span>
        <h2>Satu platform.</h2>
      </div>

      <div class="workflow-pad">
        <div class="flow-track reveal delay1">
          <div class="flow-item" v-for="(item, i) in flows" :key="i">
            <div class="flow-num">{{ item.num }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <div class="flow-arrow" v-if="i < flows.length - 1">→</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const flows = [
  { num: '01', title: 'Order', desc: 'Sistem menangkap permintaan pelanggan.' },
  { num: '02', title: 'Job Order', desc: 'Ubah permintaan menjadi pekerjaan operasional.' },
  { num: '03', title: 'Delivery Order', desc: 'Atur detail pengiriman, customer & muatan.' },
  { num: '04', title: 'Manifest', desc: 'Kelompokkan berdasarkan armada & rute.' },
  { num: '05', title: 'Shipment', desc: 'Operasi pengangkutan dan logistik muatan.' },
  { num: '06', title: 'Delivery', desc: 'Pantau perjalanan hingga sampai riil lapangan.' },
  { num: '07', title: 'POD', desc: 'Dokumentasi bukti pengiriman instan.' },
  { num: '08', title: 'Billing', desc: 'Sinkronisasi profit tagihan.' }
]
</script>

<style scoped>
.workflow-stage {
  background: white;
}
.workflow-pad {
  overflow-x: auto;
  padding: 20px 0 30px;
  /* Hide scrollbar for cleaner look */
  scrollbar-width: thin;
  scrollbar-color: #d1d8e1 transparent;
}
.flow-track {
  display: flex;
  gap: 12px;
  min-width: 1400px; /* Force horizontal scrolling if container is small */
  padding: 0 10px;
}
.flow-item {
  flex: 1;
  background: #fdfdfe;
  border: 1px solid #ebf0f7;
  padding: 22px 18px;
  border-radius: 12px;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
}
.flow-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px #123d700d;
  border-color: #d3e1f2;
}
.flow-num {
  font-size: 14px;
  font-weight: 800;
  color: var(--blue);
  background: #eef5ff;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 5px;
  margin-bottom: 12px;
}
.flow-item h3 {
  font-family: inherit;
  font-size: 17px;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 6px;
}
.flow-item p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}
.flow-arrow {
  position: absolute;
  right: -13px;
  top: 40px;
  color: #c7d5e4;
  font-family: Arial;
  font-size: 18px;
}
</style>
