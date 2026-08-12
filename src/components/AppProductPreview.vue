<template>
  <section class="section preview-section" id="product">
    <div class="container center">
      <div class="reveal">
        <span class="kicker text-blue">Satu platform untuk seluruh operasi distribusi</span>
        <h2 style="font-size: 38px; margin-bottom: 40px; font-weight: 800; font-family: Manrope;">Satu sumber kebenaran untuk tim Anda.</h2>
      </div>
      
      <div class="preview-wrap reveal delay1">
        <div class="sidebar">
          <div class="logo-text"><b>LOGISTIQ</b></div>
          <button 
            v-for="(tab, i) in tabs" 
            :key="i"
            class="tab-btn"
            :class="{ active: activeTab === i }"
            @click="activeTab = i"
          >
            {{ tab }}
          </button>
        </div>
        <div class="main-screen">
          <div class="screen-header">
            <b>{{ tabs[activeTab] }}</b>
            <span>Administrator</span>
          </div>
          <div class="screen-body">
            <transition name="fade" mode="out-in">
              <div v-if="activeTab === 0" key="0">
                <div class="mock-grid-3">
                  <div class="mock-box"></div><div class="mock-box"></div><div class="mock-box"></div>
                </div>
                <div class="mock-chart"></div>
              </div>
              <div v-else-if="activeTab === 1" key="1">
                <div class="mock-row flex-end"><div class="mock-btn"></div></div>
                <div class="mock-table">
                  <div class="mock-head"></div>
                  <div class="mock-tr"></div><div class="mock-tr"></div><div class="mock-tr"></div>
                  <div class="mock-tr"></div><div class="mock-tr"></div>
                </div>
              </div>
              <div v-else-if="activeTab === 2" key="2">
                <div style="display: flex; gap: 20px;">
                  <div class="mock-panel" style="flex: 1">
                    <div class="mock-map"></div>
                  </div>
                  <div class="mock-panel" style="width: 250px">
                    <div class="mock-text" style="width: 60%"></div>
                    <div class="mock-text" style="width: 80%"></div>
                    <div class="mock-timeline">
                      <i></i><i></i><i></i><i></i>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="activeTab === 3" key="3">
                <div class="mock-grid-2">
                  <div class="mock-box"></div>
                  <div class="mock-box"></div>
                </div>
                <div class="mock-table mt">
                  <div class="mock-head"></div>
                  <div class="mock-tr"></div><div class="mock-tr"></div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['Dashboard Operasional', 'Manajemen Job Order', 'Shipment Tracking', 'Finance & Billing']
const activeTab = ref(0)
</script>

<style scoped>
.preview-section {
  background: linear-gradient(180deg, #f0f7ff, #ffffff);
  border-bottom: 1px solid var(--line);
}
.kicker.text-blue {
  color: var(--blue);
  background: #eef5ff;
}
.preview-wrap {
  display: flex;
  max-width: 980px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 45px 100px #123d702d, 0 0 0 1px #d3e1f0;
  background: white;
  min-height: 520px;
}
.sidebar {
  width: 240px;
  background: #091a31;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.logo-text {
  color: white;
  font: 800 16px Manrope;
  letter-spacing: 2px;
  margin-bottom: 30px;
  padding-left: 10px;
}
.tab-btn {
  background: transparent;
  border: 0;
  color: #798ea7;
  padding: 12px 14px;
  text-align: left;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}
.tab-btn:hover {
  background: #102745;
  color: white;
}
.tab-btn.active {
  background: var(--blue);
  color: white;
}
.main-screen {
  flex: 1;
  background: #f6f9fc;
  display: flex;
  flex-direction: column;
}
.screen-header {
  height: 60px;
  background: white;
  border-bottom: 1px solid #e1e9f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  font-size: 14px;
}
.screen-header span {
  font-size: 11px;
  color: var(--muted);
  background: #f0f3f7;
  padding: 6px 12px;
  border-radius: 99px;
}
.screen-body {
  padding: 24px;
  flex: 1;
  overflow: hidden;
}

/* Mock Utilities */
.mock-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 15px; }
.mock-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.mock-box { height: 90px; background: white; border-radius: 8px; border: 1px solid #e9edf3; }
.mock-chart { height: 260px; background: white; border-radius: 8px; border: 1px solid #e9edf3; }
.mock-row { display: flex; margin-bottom: 15px; }
.flex-end { justify-content: flex-end; }
.mock-btn { width: 120px; height: 35px; background: var(--blue); border-radius: 6px; }
.mock-table { background: white; border: 1px solid #e9edf3; border-radius: 8px; overflow: hidden; }
.mock-head { height: 40px; background: #f0f3f7; border-bottom: 1px solid #e9edf3; }
.mock-tr { height: 45px; border-bottom: 1px solid #f0f3f7; }
.mock-tr:last-child { border: 0; }
.mock-panel { background: white; border: 1px solid #e9edf3; border-radius: 8px; padding: 20px; height: 360px; }
.mock-map { background: #e5f1ff; height: 100%; border-radius: 4px; }
.mock-text { height: 12px; background: #edf2f7; border-radius: 4px; margin-bottom: 10px; }
.mock-timeline { margin-top: 30px; display: flex; flex-direction: column; gap: 15px; }
.mock-timeline i { height: 30px; border-left: 2px solid #dde5f0; margin-left: 5px; position: relative; }
.mock-timeline i:before { content:""; position: absolute; left: -6px; top: -5px; width: 10px; height: 10px; background: #b0c9e6; border-radius: 50%; }
.mock-timeline i:last-child { border-color: transparent; }
.mt { margin-top: 15px; }

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 950px) {
  .preview-wrap {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
  }
  .logo-text { display: none; }
  .tab-btn { padding: 8px 12px; font-size: 11px; }
}
@media (max-width: 600px) {
  .screen-body { padding: 15px; }
  .mock-grid-3 { grid-template-columns: 1fr; }
  .mock-grid-2 { grid-template-columns: 1fr; }
  .mock-panel { height: auto; }
}
</style>
