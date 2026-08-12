<template>
  <section class="section alt preview-section" id="product">
    <div class="container center">
      <div class="reveal">
        <span class="kicker">See the platform in action.</span>
        <h2 style="font-size: 34px; margin-bottom: 25px; font-weight: 800; font-family: Manrope;">Satu platform untuk seluruh operasi logistik.</h2>
      </div>
      
      <div class="preview-wrap reveal delay1">
        <div class="main-screen">
          <div class="screen-header">
            <b>LOGISTIQ APP</b>
            <div class="mockup-dots" style="transform: scale(0.8)"><i></i><i></i><i></i></div>
          </div>
          <div class="screen-body">
            <transition name="fade" mode="out-in">
              <!-- Dashboard -->
              <div v-if="activeTab === 0" key="0">
                <div class="screen-title">Operational Dashboard</div>
                <div class="mock-grid-4">
                  <div class="mock-val"><b>1,248</b><span>Shipment</span></div>
                  <div class="mock-val"><b>326</b><span>In Transit</span></div>
                  <div class="mock-val"><b>98.6%</b><span>SLA</span></div>
                  <div class="mock-val"><b>Rp 1.8B</b><span>Revenue</span></div>
                </div>
                <div class="mock-chart mt"></div>
              </div>
              <!-- Job Order -->
              <div v-else-if="activeTab === 1" key="1">
                <div class="screen-title">Manajemen Job Order</div>
                <div class="mock-row flex-end"><div class="mock-btn"></div></div>
                <div class="mock-table">
                  <div class="mock-head"></div>
                  <div class="mock-tr"></div><div class="mock-tr"></div><div class="mock-tr"></div>
                  <div class="mock-tr"></div>
                </div>
              </div>
              <!-- Manifest -->
              <div v-else-if="activeTab === 2" key="2">
                <div class="screen-title">Pengaturan Manifestasi & Rute</div>
                <div style="display: flex; gap: 20px;">
                  <div class="mock-panel" style="flex: 1"><div class="mock-map"></div></div>
                  <div class="mock-panel" style="width: 250px">
                    <div class="mock-text" style="width: 60%"></div>
                    <div class="mock-text" style="width: 80%"></div>
                    <div class="mock-timeline"><i></i><i></i><i></i><i></i></div>
                  </div>
                </div>
              </div>
              <!-- Finance -->
              <div v-else-if="activeTab === 3" key="3">
                <div class="screen-title">Finance & Billing</div>
                <div class="mock-grid-2">
                  <div class="mock-chart" style="height: 120px;"></div>
                  <div class="mock-chart" style="height: 120px;"></div>
                </div>
                <div class="mock-table mt">
                  <div class="mock-head"></div>
                  <div class="mock-tr"></div><div class="mock-tr"></div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div class="tabs">
          <button v-for="(tab, i) in tabs" :key="i" class="tab-btn" :class="{ active: activeTab === i }" @click="activeTab = i">
            {{ tab }}
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const tabs = ['Dashboard', 'Job order', 'Manifest / Rute', 'Finance / Billing']
const activeTab = ref(0)
</script>

<style scoped>
.preview-section {
  background: white;
  border-bottom: 1px solid var(--line);
  padding: 80px 0;
}
.preview-wrap {
  max-width: 900px;
  margin: 0 auto;
}
.main-screen {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 45px 100px #123d701d, 0 0 0 1px #d3e1f0;
  background: #fdfdfe;
  min-height: 480px;
  display: flex;
  flex-direction: column;
}
.screen-header {
  height: 45px;
  background: #091a31;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 11px;
}
.mockup-dots i {
  display: inline-block;
  width: 12px; height: 12px; border-radius: 50%;
  background: #dde5ef; margin-left: 8px;
}
.mockup-dots i:nth-child(1) { background: #ff5264; }
.mockup-dots i:nth-child(2) { background: #ffbd2d; }
.mockup-dots i:nth-child(3) { background: #00ca62; }
.screen-body {
  padding: 24px;
  flex: 1;
  background: #f5f8fc;
  text-align: left;
}
.screen-title {
  font-size: 17px; font-weight: 800; font-family: Manrope; margin-bottom: 20px;
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}
.tab-btn {
  background: #fff;
  border: 1px solid #dce4ed;
  color: #5d6e82;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.02);
}
.tab-btn:hover { border-color: #bad2ec; }
.tab-btn.active {
  background: var(--blue);
  color: white;
  border-color: var(--blue);
}

/* Utilities */
.mock-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.mock-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.mock-val { background: white; padding: 15px; border-radius: 8px; border: 1px solid #e1eaf3; }
.mock-val b { font-size: 18px; display: block; font-family: Manrope; font-weight: 800;}
.mock-val span { font-size: 10px; color: var(--muted); }
.mock-chart { height: 200px; background: white; border-radius: 8px; border: 1px solid #e1eaf3; }
.mock-row { display: flex; margin-bottom: 15px; }
.flex-end { justify-content: flex-end; }
.mock-btn { width: 120px; height: 35px; background: var(--blue); border-radius: 6px; }
.mock-table { background: white; border: 1px solid #e1eaf3; border-radius: 8px; overflow: hidden; }
.mock-head { height: 40px; background: #eef3f9; border-bottom: 1px solid #e1eaf3; }
.mock-tr { height: 45px; border-bottom: 1px solid #eef3f9; }
.mock-panel { background: white; border: 1px solid #e1eaf3; border-radius: 8px; padding: 20px; height: 300px; }
.mock-map { background: #eaf3ff; height: 100%; border-radius: 4px; border: 1px solid #d1e3f8; }
.mock-text { height: 12px; background: #edf2f7; border-radius: 4px; margin-bottom: 10px; }
.mock-timeline { margin-top: 30px; display: flex; flex-direction: column; gap: 15px; }
.mock-timeline i { height: 30px; border-left: 2px solid #dde5f0; margin-left: 5px; position: relative; }
.mock-timeline i:before { content:""; position: absolute; left: -6px; top: -5px; width: 10px; height: 10px; background: #b0c9e6; border-radius: 50%; }
.mt { margin-top: 15px; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 600px) {
  .mock-grid-4, .mock-grid-2 { grid-template-columns: 1fr 1fr; }
  .mock-panel { height: auto; }
  .main-screen { min-height: 400px; }
}
</style>
