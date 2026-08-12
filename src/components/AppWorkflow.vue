<template>
  <section class="section workflow-stage" id="workflow">
    <div class="container">
      <div class="head center reveal">
        <span class="kicker">Workflow Terintegrasi</span>
        <h2>Skema alur kerja logistik terstruktur.</h2>
      </div>

      <div class="workflow-container reveal delay1">
        <div class="flow-steps">
          <button 
            v-for="(step, index) in steps" 
            :key="index"
            class="step-btn"
            :class="{ active: activeStep === index }"
            @click="activeStep = index"
          >
            <div class="step-num">{{ index + 1 }}</div>
            <span>{{ step.title }}</span>
          </button>
        </div>
        
        <div class="flow-content-box">
          <transition name="fade" mode="out-in">
            <div :key="activeStep" class="content-anim">
              <div class="content-icon">{{ steps[activeStep].icon }}</div>
              <h3>{{ steps[activeStep].title }}</h3>
              <p>{{ steps[activeStep].desc }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeStep = ref(1)

const steps = [
  { title: "Order (Request)", icon: "👥", desc: "Sistem menangkap permintaan pelanggan secara otomatis atau manual sebagai titik awal perjalanan logistik." },
  { title: "Job Order", icon: "📋", desc: "Kelola permintaan pengiriman dan buat pekerjaan operasional secara terstruktur (siapa, ke mana, dan detail kargo)." },
  { title: "Delivery Order (DO)", icon: "📦", desc: "Perkuat dan petakan armada pengiriman sebelum keberangkatan untuk menjamin kesesuaian kapasitas muatan." },
  { title: "Manifest", icon: "📑", desc: "Atur kendaraan, driver, rute, dan muatan dalam satu proses pemberangkatan final." },
  { title: "Shipment Tracking", icon: "📍", desc: "Pantau status pengiriman secara real-time via GPS beserta log update waktu perjalanannya." },
  { title: "Delivery", icon: "🚚", desc: "Barang sampai ditujuan dengan koordinasi lapangan yang sangat minim hambatan." },
  { title: "POD (Proof of Delivery)", icon: "✓", desc: "Ambil foto bukti terima dan tanda tangan digital. Dokumen langsung terunggah sinkron ke sistem." },
  { title: "Invoice & Billing", icon: "₨", desc: "Data final langsung dialirkan ke tim keuangan. Buat tagihan akurat tanpa harus melakukan crosscheck manual lagi." },
]
</script>

<style scoped>
.workflow-stage {
  background: #f8fbff;
  border-bottom: 1px solid var(--line);
}
.workflow-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  background: white;
  border: 1px solid #e1e9f4;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 25px 60px #123d7009;
}
.flow-steps {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-right: 1px solid #eef2f7;
  padding-right: 15px;
}
.step-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 15px;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 10px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  color: #6c7e94;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
}
.step-btn:hover {
  background: #f4f8fe;
  color: var(--ink);
}
.step-btn.active {
  background: #e9f2ff;
  border-color: #c9e0ff;
  color: var(--blue);
}
.step-num {
  width: 22px;
  height: 22px;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-size: 10px;
  background: #e2ecf9;
  color: #7b91ab;
}
.step-btn.active .step-num {
  background: var(--blue);
  color: white;
}

.flow-content-box {
  display: flex;
  align-items: center;
  padding: 30px;
}
.content-icon {
  font-size: 55px;
  margin-bottom: 25px;
}
.content-anim h3 {
  font: 800 28px Manrope;
  margin: 0 0 15px;
}
.content-anim p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--muted);
  max-width: 500px;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 950px) {
  .workflow-container {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  .flow-steps {
    border-right: none;
    border-bottom: 1px solid #eef2f7;
    padding-right: 0;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .flow-content-box {
    padding: 20px 0 0;
  }
}
@media (max-width: 600px) {
  .flow-steps {
    grid-template-columns: 1fr;
  }
  .content-anim h3 {
    font-size: 24px;
  }
  .content-icon {
    font-size: 45px;
  }
}
</style>
