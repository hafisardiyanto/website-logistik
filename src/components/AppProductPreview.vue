<template>
  <section class="section showcase" id="product">
    <div class="container center reveal">
      <h2>Lihat platform operasional Anda secara detail.</h2>
      <p style="max-width: 600px; margin: 15px auto 40px; color: var(--muted); font-size: 14px; line-height:1.7;">
        Tidak ada screenshot generik. Begini tampilan antarmuka (UI) Sistem Enterprise Logistiq secara langsung dari layar Admin.
      </p>
    </div>
    
    <div class="container">
      <div class="showcase-window reveal delay1">
        <div class="window-top">
          <div class="top-left"><b>LOGISTIQ</b></div>
          <div class="top-right">
            <span>🔔</span>
            <div class="ava">AS</div>
            <small>Admin System</small>
          </div>
        </div>
        
        <div class="window-body">
          <div class="window-sidebar">
            <button v-for="(tab, idx) in tabs" :key="idx" 
              class="side-btn" 
              :class="{ active: activeTab === idx }"
              @click="activeTab = idx">
              {{ tab.icon }} &nbsp;{{ tab.name }}
            </button>
          </div>
          
          <div class="window-content">
            <!-- Header Konten Dynamic -->
            <div class="content-head">
              <h3>{{ tabs[activeTab].name }}</h3>
              <div class="breadcrumbs">Home / {{ tabs[activeTab].name }}</div>
            </div>
            
            <div class="content-main">
              <transition name="fade" mode="out-in">
                
                <!-- 0: Dashboard -->
                <div v-if="activeTab===0" key="0">
                  <div class="grid-4" style="margin-bottom: 20px;">
                    <div class="stat-box"><span>Shipment</span><b>1,248</b></div>
                    <div class="stat-box"><span>In Transit</span><b>326</b></div>
                    <div class="stat-box"><span>SLA (%)</span><b style="color: #00b074;">98.6%</b></div>
                    <div class="stat-box"><span>Revenue</span><b style="color: #1768e8;">Rp 1.8B</b></div>
                  </div>
                  <div class="chart-block"></div>
                </div>

                <!-- 1: Job Order -->
                <div v-else-if="activeTab===1" key="1">
                  <div class="table-actions">
                    <input type="text" placeholder="Cari SO/JO ID..." class="mock-input" />
                    <button class="btn blue" style="padding: 8px 16px; font-size: 11px;">+ New JO</button>
                  </div>
                  <table class="mock-table">
                    <tr><th>JO ID</th><th>Pelanggan</th><th>Tipe Muatan</th><th>Status</th></tr>
                    <tr><td>JO-2601</td><td>PT. Sumber T</td><td>FCL 20ft</td><td><span class="st green">Approved</span></td></tr>
                    <tr><td>JO-2602</td><td>Bumi Pangan</td><td>LTL</td><td><span class="st orange">Draft</span></td></tr>
                    <tr><td>JO-2603</td><td>Mega Distro</td><td>FCL 40ft</td><td><span class="st green">Approved</span></td></tr>
                    <tr><td>JO-2604</td><td>CV. Maju</td><td>LTL</td><td><span class="st green">Approved</span></td></tr>
                  </table>
                </div>

                <!-- 2: Delivery Order -->
                <div v-else-if="activeTab===2" key="2">
                  <table class="mock-table">
                    <tr><th>DO ID</th><th>JO Ref</th><th>Asal</th><th>Tujuan</th></tr>
                    <tr><td>DO-771</td><td>JO-2601</td><td>Surabaya</td><td>Semarang</td></tr>
                    <tr><td>DO-772</td><td>JO-2601</td><td>Surabaya</td><td>Jakarta</td></tr>
                    <tr><td>DO-773</td><td>JO-2603</td><td>Gresik</td><td>Malang</td></tr>
                  </table>
                </div>

                <!-- 3: Manifest -->
                <div v-else-if="activeTab===3" key="3">
                  <div class="grid-3" style="margin-bottom: 20px;">
                    <div class="mf-box"><b>TRK-B192</b><small>Driver: Ahmad (Ready)</small></div>
                    <div class="mf-box" style="border-color: #1768e8"><b>TRK-L002</b><small>Driver: Budi (In Use)</small></div>
                    <div class="mf-box"><b>TRK-L881</b><small>Driver: Anton (Ready)</small></div>
                  </div>
                  <table class="mock-table">
                    <tr><th>MNF ID</th><th>Truk</th><th>Driver</th><th>Rute</th></tr>
                    <tr><td>MNF-091</td><td>TRK-B192</td><td>Ahmad</td><td>SBY-SMR</td></tr>
                    <tr><td>MNF-092</td><td>TRK-L002</td><td>Budi</td><td>SBY-JKT</td></tr>
                  </table>
                </div>

                <!-- 4: Tracking -->
                <div v-else-if="activeTab===4" key="4">
                  <div class="track-layout">
                    <div class="map-area"></div>
                    <div class="track-side">
                      <b>Lokasi Terakhir</b>
                      <p>Tol Transjawa KM 312</p>
                      <hr>
                      <div class="tl-item"><i></i><small>Loaded - 08:00</small></div>
                      <div class="tl-item"><i></i><small>Departed - 09:12</small></div>
                      <div class="tl-item active"><i></i><small>In Transit (Live)</small></div>
                      <div class="tl-item dim"><i></i><small>Arrived - Est 15:00</small></div>
                    </div>
                  </div>
                </div>

                <!-- 5: Finance -->
                <div v-else-if="activeTab===5" key="5">
                  <div class="grid-2" style="margin-bottom: 20px;">
                    <div class="stat-box" style="background:#eafaf3; border-color:#99e3c6;">
                      <span>Total Revenue</span><b style="color:#00b074;">Rp 825.000.000</b>
                    </div>
                    <div class="stat-box" style="background:#fef1f2; border-color:#fad5d8;">
                      <span>Operational Cost</span><b style="color:#e63946;">Rp 410.200.000</b>
                    </div>
                  </div>
                  <table class="mock-table">
                    <tr><th>INV ID</th><th>Tgl Terbit</th><th>Nilai</th><th>Status</th></tr>
                    <tr><td>INV-1090</td><td>11 Aug</td><td>Rp 15.5m</td><td><span class="st green">Paid</span></td></tr>
                    <tr><td>INV-1091</td><td>12 Aug</td><td>Rp 2.1m</td><td><span class="st orange">Unpaid</span></td></tr>
                  </table>
                </div>

              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref(0)
const tabs = [
  { name: 'Dashboard', icon: '📊' },
  { name: 'Job Order', icon: '📋' },
  { name: 'Delivery Order', icon: '📦' },
  { name: 'Manifest', icon: '📑' },
  { name: 'Tracking', icon: '📍' },
  { name: 'Finance & Invoice', icon: '💵' },
]
</script>

<style scoped>
.showcase {
  background: linear-gradient(180deg, #f3f8fd, #ffffff);
  padding: 90px 0;
}
.showcase h2 { font: 800 36px/1.2 Manrope; margin: 0; }

.showcase-window {
  border: 1px solid #c9d8e8;
  border-radius: 12px;
  background: white;
  box-shadow: 0 45px 100px rgba(7, 39, 81, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 1050px;
  margin: 0 auto;
}
.window-top {
  height: 55px;
  background: #091a31;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  font-family: inherit;
}
.top-left b { font-size: 15px; letter-spacing: 2px; }
.top-right { display: flex; align-items: center; gap: 12px; font-size: 12px; }
.ava { width: 28px; height: 28px; background: var(--cyan); color: #02233f; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 10px; }

.window-body {
  display: flex;
  height: 520px;
}
.window-sidebar {
  width: 220px;
  background: #f8fbff;
  border-right: 1px solid #dce5ef;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.side-btn {
  background: transparent;
  border: 0;
  text-align: left;
  padding: 12px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #617387;
  cursor: pointer;
  transition: all 0.2s;
}
.side-btn:hover { background: #eef3f9; color: var(--ink); }
.side-btn.active {
  background: #deebfa;
  color: var(--blue);
  font-weight: 800;
}

.window-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.content-head {
  padding: 20px 30px;
  border-bottom: 1px solid #edf2f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-head h3 { margin: 0; font-size: 18px; font-weight: 800; }
.breadcrumbs { font-size: 10px; color: #a5b6c8; }
.content-main {
  padding: 30px;
  flex: 1;
  overflow-y: auto;
  background: #fafcfe;
}

/* Reusable UI Mocks */
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
.stat-box { background: white; border: 1px solid #e1ebf5; padding: 18px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.01); }
.stat-box span { font-size: 10px; font-weight: 700; color: #7f91a5; display: block; text-transform: uppercase; margin-bottom: 8px; }
.stat-box b { font-size: 22px; font-weight: 800; font-family: Manrope; }
.chart-block { height: 260px; background: white; border: 1px solid #e1ebf5; border-radius: 8px; }

.table-actions { display: flex; justify-content: space-between; margin-bottom: 15px; }
.mock-input { border: 1px solid #dce5ef; padding: 8px 12px; font-size: 12px; border-radius: 6px; width: 250px; background: white; }

.mock-table { width: 100%; border-collapse: collapse; background: white; border: 1px solid #dce5ef; border-radius: 8px; overflow: hidden; display: table; }
.mock-table th { background: #f4f8fc; text-align: left; padding: 12px 15px; font-size: 11px; font-weight: 800; color: #738496; border-bottom: 2px solid #e5edf5; }
.mock-table td { padding: 15px; font-size: 12px; border-bottom: 1px solid #edf2f7; color: #2d3b4b; }
.st { padding: 4px 10px; border-radius: 99px; font-size: 10px; font-weight: 700; }
.st.green { background: #e6f8f1; color: #00b074; }
.st.orange { background: #fff5e6; color: #f2994a; }

.mf-box { background: white; border: 1px solid #dce5ef; padding: 15px; border-radius: 8px; border-left: 4px solid #aebfd1; }
.mf-box b { display: block; font-size: 14px; margin-bottom: 4px; }
.mf-box small { color: var(--muted); font-size: 11px; }

.track-layout { display: flex; gap: 20px; height: 350px; }
.map-area { flex: 1; background: #e6f0fa; border-radius: 8px; border: 1px solid #dce5ef; }
.track-side { width: 280px; background: white; border: 1px solid #dce5ef; border-radius: 8px; padding: 20px; }
.track-side b { font-size: 12px; }
.track-side p { font-size: 11px; color: var(--muted); margin: 4px 0 15px; }
.track-side hr { border: 0; border-top: 1px solid #edf2f7; margin-bottom: 20px; }
.tl-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 20px; }
.tl-item i { width: 12px; height: 12px; background: #c3d3e3; border-radius: 50%; box-shadow: 0 0 0 3px white, 0 0 0 4px #edf2f7; margin-top: 3px; position: relative; }
.tl-item i::after { content: ""; position: absolute; width: 2px; height: 26px; background: #edf2f7; left: 5px; top: 15px; }
.tl-item:last-child i::after { display: none; }
.tl-item small { font-size: 11px; font-weight: 600; color: #435467; }
.tl-item.active i { background: var(--blue); box-shadow: 0 0 0 3px white, 0 0 0 5px #c3dbf9; }
.tl-item.active small { color: var(--blue); font-weight: 800; }
.tl-item.dim { opacity: 0.5; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.fade-enter-from { opacity: 0; transform: translateY(5px); }
.fade-leave-to { opacity: 0; transform: translateY(-5px); }

@media (max-width: 950px) {
  .window-body { flex-direction: column; height: auto; }
  .window-sidebar { width: 100%; border-right: 0; border-bottom: 1px solid #dce5ef; flex-direction: row; flex-wrap: wrap; padding: 10px; }
  .side-btn { padding: 8px 12px; font-size: 11px; }
  .grid-4, .grid-3 { grid-template-columns: 1fr 1fr; }
  .content-main { max-height: 500px; }
}
@media (max-width: 600px) {
  .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; }
  .track-layout { flex-direction: column; height: auto; }
  .map-area { height: 200px; flex: none; }
  .track-side { width: 100%; }
}
</style>
