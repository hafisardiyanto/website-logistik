<template>
  <section class="section showcase" id="product">
    <div class="container center reveal">
      <h2>Lihat platform operasional Anda secara detail.</h2>
      <p style="max-width: 600px; margin: 15px auto 40px; color: var(--muted); font-size: 18px; line-height:1.7;">
        Transparansi 100%. Telusuri langsung antarmuka perangkat lunak berbasis cloud LOGISTIQ yang akan digunakan oleh tim operasional Anda dari ujung ke ujung.
      </p>
    </div>
    
    <div class="container">
      <div class="showcase-window reveal delay1">
        <div class="window-top">
          <div class="top-left"><b>LOGISTIQ</b><span style="opacity: 0.5; margin-left: 15px; font-size: 14px;">HQ Dashboard</span></div>
          <div class="top-search">
             <div class="search-mock">Cari AWB, Resi, atau Nama Driver...</div>
          </div>
          <div class="top-right">
            <span>⚙️</span>
            <span>🔔</span>
            <div class="ava">AS</div>
          </div>
        </div>
        
        <div class="window-body">
          <div class="window-sidebar">
            <div class="side-group">MENU UTAMA</div>
            <button v-for="(tab, idx) in tabs" :key="idx" 
              class="side-btn" 
              :class="{ active: activeTab === idx }"
              @click="activeTab = idx">
              {{ tab.icon }} &nbsp;{{ tab.name }}
            </button>
            <div class="side-group mt-auto">PENGATURAN</div>
            <button class="side-btn">👥 &nbsp;User Mgmt</button>
            <button class="side-btn">🏢 &nbsp;Branches</button>
          </div>
          
          <div class="window-content">
            <div class="content-head">
              <h3>{{ tabs[activeTab].name }}</h3>
              <div class="breadcrumbs">LOGISTIQ / {{ tabs[activeTab].name }}</div>
            </div>
            
            <div class="content-main">
              <transition name="fade" mode="out-in">
                
                <!-- 0: Dashboard -->
                <div v-if="activeTab===0" key="0">
                  <div class="grid-4" style="margin-bottom: 20px;">
                    <div class="stat-box"><span>Shipment Valid</span><b>1,248</b></div>
                    <div class="stat-box"><span>On Transit</span><b>326</b></div>
                    <div class="stat-box"><span>SLA Ratio</span><b style="color: #00b074;">98.6%</b></div>
                    <div class="stat-box"><span>Revenue (Gross)</span><b style="color: #1768e8;">Rp 1.83 B</b></div>
                  </div>
                  <div class="grid-2">
                    <div class="chart-block">
                       <span style="font-size:14px; font-weight:800; color:#cbd5e1; margin-bottom:15px; display:block;">REVENUE CHART</span>
                       <div class="chart-img"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    </div>
                    <div class="chart-block" style="display:flex; flex-direction:column;">
                       <span style="font-size:14px; font-weight:800; color:#cbd5e1; margin-bottom:15px; display:block;">RECENT SHIPMENTS</span>
                       <div class="recent-mock" v-for="i in 3" :key="i">
                         <div style="background:#e2e8f0; width:12px; height:12px; border-radius:50%;"></div>
                         <div style="flex:1;"><div style="background:#cbd5e1; height:10px; width:40%; margin-bottom:5px;"></div><div style="background:#e2e8f0; height:8px; width:30%;"></div></div>
                         <div style="background:#f1f5f9; padding:4px 8px; font-size:13px; border-radius:4px;">Detail</div>
                       </div>
                    </div>
                  </div>
                </div>

                <!-- 1: Job Order -->
                <div v-else-if="activeTab===1" key="1">
                  <div class="table-actions">
                    <div class="action-left">
                       <div class="filter-mock">Semua Status ▼</div>
                       <div class="filter-mock">Bulan Ini ▼</div>
                    </div>
                    <div class="action-right">
                       <button class="btn clear text-blue" style="font-size:15px; padding:0;">Export CSV</button>
                       <button class="btn blue" style="padding: 10px 18px; font-size: 15px;">+ New Job Order</button>
                    </div>
                  </div>
                  <table class="mock-table">
                    <tr><th>JO ID</th><th>Pelanggan</th><th>Tipe Muatan</th><th>Destinasi</th><th>Status</th><th>Aksi</th></tr>
                    <tr><td><b>JO-2601</b></td><td>PT. Sumber Teknik</td><td>FCL 20ft</td><td>Semarang, JTG</td><td><span class="st green">Approved</span></td><td><span class="act-btn">...</span></td></tr>
                    <tr><td><b>JO-2602</b></td><td>Bumi Pangan Sejehtera</td><td>LTL (Retail)</td><td>Sidoarjo, JTM</td><td><span class="st orange">Draft</span></td><td><span class="act-btn">...</span></td></tr>
                    <tr><td><b>JO-2603</b></td><td>Mega Distribusi Indo</td><td>FCL 40ft</td><td>Malang, JTM</td><td><span class="st green">Approved</span></td><td><span class="act-btn">...</span></td></tr>
                    <tr><td><b>JO-2604</b></td><td>CV. Maju Abadi</td><td>FTL (Wingbox)</td><td>Jakarta Utara</td><td><span class="st green">Approved</span></td><td><span class="act-btn">...</span></td></tr>
                    <tr><td><b>JO-2605</b></td><td>PT. Logistik Cepat</td><td>LCL (Consol)</td><td>Denpasar, BALI</td><td><span class="st gray">Canceled</span></td><td><span class="act-btn">...</span></td></tr>
                  </table>
                  <div class="pagination">
                     <span>Menampilkan 1-5 dari 142 data</span>
                     <div class="pages"> <span class="pg active">1</span> <span class="pg">2</span> <span class="pg">3</span> <span>...</span> <span class="pg">29</span> </div>
                  </div>
                </div>

                <!-- 2: Delivery Order -->
                <div v-else-if="activeTab===2" key="2">
                  <div class="table-actions">
                    <div class="filter-mock" style="width:250px;">🔍 Cari Nomor DO atau Resi...</div>
                  </div>
                  <table class="mock-table">
                    <tr><th>DO ID</th><th>JO Ref</th><th>Gudang Asal</th><th>Tujuan Akhir</th><th>Status P/U</th></tr>
                    <tr><td><b>DO-771</b></td><td><span class="ref-link">JO-2601</span></td><td>HUB SBY (R01)</td><td>Semarang DC</td><td><span class="st green">Picked Up</span></td></tr>
                    <tr><td><b>DO-772</b></td><td><span class="ref-link">JO-2601</span></td><td>HUB SBY (R01)</td><td>Kelapa Gading Plz</td><td><span class="st green">Picked Up</span></td></tr>
                    <tr><td><b>DO-773</b></td><td><span class="ref-link">JO-2603</span></td><td>Gudang Gresik</td><td>Malang Town Sq</td><td><span class="st orange">Pending</span></td></tr>
                    <tr><td><b>DO-774</b></td><td><span class="ref-link">JO-2604</span></td><td>Tanjung Mas</td><td>Jakarta Utara</td><td><span class="st green">Picked Up</span></td></tr>
                  </table>
                </div>

                <!-- 3: Manifest -->
                <div v-else-if="activeTab===3" key="3">
                  <div class="grid-3" style="margin-bottom: 25px;">
                    <div class="mf-box"><b>TRK-B192</b><small>Supir Utama: Ahmad</small><div class="trk-stat green">Tersedia</div></div>
                    <div class="mf-box" style="border-color: #1768e8; background:#f4f8fe;"><b>TRK-L002</b><small>Supir Utama: Budi</small><div class="trk-stat blue">Sedang Berjalan</div></div>
                    <div class="mf-box"><b>TRK-L881</b><small>Supir Utama: Anton</small><div class="trk-stat red">Maintenance</div></div>
                  </div>
                  <div class="mf-split">
                    <div class="mf-col">
                      <b style="font-size:16px; margin-bottom:15px; display:block;">Manifest Aktif</b>
                      <div class="mock-card" v-for="i in 2" :key="i">
                         <div style="display:flex; justify-content:space-between;"><b>MNF-09{{i}}</b><span class="st blue">In Transit</span></div>
                         <small style="color:var(--muted); display:block; margin:8px 0;">TRK-L00{{i}} • Budi Setiawan</small>
                         <div class="progress-bar"><i></i></div>
                      </div>
                    </div>
                    <div class="mf-col">
                      <b style="font-size:16px; margin-bottom:15px; display:block;">Assign Delivery (Drag & Drop)</b>
                      <div class="mock-card dashed">DO-773 (Gresik → Malang)</div>
                      <div class="mock-card dashed">DO-774 (Semarang → Jakarta)</div>
                    </div>
                  </div>
                </div>

                <!-- 4: Tracking -->
                <div v-else-if="activeTab===4" key="4">
                  <div class="track-layout">
                    <div class="map-area"></div>
                    <div class="track-side">
                      <b>Detail Shipment: MNF-091</b>
                      <p>Surabaya → Semarang Timur</p>
                      <hr>
                      <div class="tl-item"><i></i><div class="tl-t"><b>Dimuat di Gudang</b><small>12/08 - 08:00 AM</small></div></div>
                      <div class="tl-item"><i></i><div class="tl-t"><b>Berangkat (Departure)</b><small>12/08 - 09:12 AM</small></div></div>
                      <div class="tl-item active"><i></i><div class="tl-t"><b>In Transit (Live GPS)</b><small>Tol Transjawa KM 312</small></div></div>
                      <div class="tl-item dim"><i></i><div class="tl-t"><b>Tiba di Tujuan</b><small>Est: 12/08 - 15:00 PM</small></div></div>
                    </div>
                  </div>
                </div>

                <!-- 5: Finance -->
                <div v-else-if="activeTab===5" key="5">
                  <div class="grid-3" style="margin-bottom: 20px;">
                    <div class="stat-box" style="background:#fef1f2; border-color:#fad5d8;">
                      <span>Cost (Uang Jalan dll)</span><b style="color:#e63946;">Rp 410.200.000</b>
                    </div>
                    <div class="stat-box" style="background:#f0fafe; border-color:#bae6fa;">
                      <span>Revenue (Ditagihkan)</span><b style="color:#0ea5e9;">Rp 825.000.000</b>
                    </div>
                    <div class="stat-box" style="background:#f2fbf7; border-color:#a8e6cf;">
                      <span>Gross Profit</span><b style="color:#10b981;">Rp 414.800.000</b>
                    </div>
                  </div>
                  <table class="mock-table">
                    <tr><th>INV ID</th><th>Tgl Terbit</th><th>Nama Klien</th><th>O/S Tagihan</th><th>Status</th></tr>
                    <tr><td><b>INV-1090</b></td><td>11 Aug 2026</td><td>PT. Sumber Teknik</td><td>Rp 15.500.000</td><td><span class="st green">Paid</span></td></tr>
                    <tr><td><b>INV-1091</b></td><td>12 Aug 2026</td><td>Bumi Pangan</td><td>Rp 2.100.000</td><td><span class="st orange">Unpaid</span></td></tr>
                    <tr><td><b>INV-1092</b></td><td>12 Aug 2026</td><td>Mega Distribusi</td><td>Rp 48.000.000</td><td><span class="st orange">Unpaid</span></td></tr>
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
  background: white;
  padding: 100px 0;
  border-bottom: 1px solid var(--line);
}
.showcase h2 { font: 800 40px/1.2 Manrope; margin: 0; }

.showcase-window {
  border: 1px solid #d1dbec;
  border-radius: 12px;
  background: white;
  box-shadow: 0 45px 120px rgba(10, 32, 64, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
}
.window-top {
  height: 52px;
  background: #041021;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
}
.top-left b { font-size: 19px; letter-spacing: 1.5px; }
.top-search { flex: 1; display: flex; justify-content: center; }
.search-mock { width: 350px; background: rgba(255,255,255,0.08); padding: 8px 15px; border-radius: 8px; font-size: 14px; color: rgba(255,255,255,0.5); }
.top-right { display: flex; align-items: center; gap: 15px; font-size: 17px; }
.ava { width: 30px; height: 30px; background: var(--cyan); color: #02233f; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 14px; }

.window-body {
  display: flex;
  height: 600px;
}
.window-sidebar {
  width: 230px;
  background: #f8fbff;
  border-right: 1px solid #e1e9f4;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.side-group { font-size: 13px; font-weight: 800; color: #a1b0c2; margin-bottom: 5px; padding-left: 10px; }
.mt-auto { margin-top: auto; margin-bottom: 5px; }
.side-btn {
  background: transparent; border: 0; text-align: left; padding: 13px 15px;
  border-radius: 8px; font-size: 16px; font-weight: 600; color: #5a6e84;
  cursor: pointer; transition: all 0.2s;
}
.side-btn:hover { background: #eef4fc; color: var(--ink); }
.side-btn.active { background: #dceaf9; color: var(--blue); border-left: 4px solid var(--blue); font-weight: 800; }

.window-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.content-head {
  padding: 24px 35px;
  border-bottom: 1px solid #edf2f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-head h3 { margin: 0; font-size: 22px; font-weight: 800; }
.breadcrumbs { font-size: 15px; color: #a5b6c8; font-weight: 600; }
.content-main {
  padding: 35px;
  flex: 1;
  overflow-y: auto;
  background: #fdfdfe;
}

/* Reusable UI Mocks */
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.stat-box { background: white; border: 1px solid #eaeff5; padding: 22px; border-radius: 12px; box-shadow: 0 8px 24px rgba(13,38,71,0.015); }
.stat-box span { font-size: 14px; font-weight: 800; color: #7f91a5; display: block; text-transform: uppercase; margin-bottom: 10px; }
.stat-box b { font-size: 30px; font-weight: 800; font-family: Manrope; }
.chart-block { flex: 1; background: white; border: 1px solid #eaeff5; border-radius: 12px; padding: 25px; box-shadow: 0 8px 24px rgba(13,38,71,0.015); }
.chart-img { display: flex; align-items: flex-end; gap: 15px; height: 180px; }
.chart-img i { flex: 1; background: #e2e8f0; border-radius: 4px 4px 0 0; }
.chart-img i:nth-child(1) { height: 40%; } .chart-img i:nth-child(2) { height: 60%; } .chart-img i:nth-child(3) { height: 50%; } .chart-img i:nth-child(4) { height: 80%; background: var(--blue);} .chart-img i:nth-child(5) { height: 75%; } .chart-img i:nth-child(6) { height: 95%; }
.recent-mock { display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; margin-bottom: 12px; }

.table-actions { display: flex; justify-content: space-between; margin-bottom: 20px; }
.action-left { display: flex; gap: 10px; }
.filter-mock { background: white; border: 1px solid #cbd5e1; padding: 10px 14px; font-size: 15px; border-radius: 6px; color: #64748b; font-weight: 600; cursor: pointer; }
.action-right { display: flex; gap: 15px; align-items: center; }

.mock-table { width: 100%; border-collapse: collapse; background: white; border: 1px solid #eaeff5; border-radius: 10px; overflow: hidden; display: table; box-shadow: 0 4px 15px rgba(0,0,0,0.01); }
.mock-table th { background: #f8fafc; text-align: left; padding: 16px 20px; font-size: 15px; font-weight: 800; color: #64748b; border-bottom: 2px solid #e2e8f0; }
.mock-table td { padding: 18px 20px; font-size: 16px; border-bottom: 1px solid #f1f5f9; color: #334155; }
.mock-table tr:hover td { background: #f8fafc; }
.mock-table b { color: var(--ink); }

.st { padding: 5px 12px; border-radius: 99px; font-size: 14px; font-weight: 800; }
.st.green { background: #dcfce7; color: #166534; }
.st.orange { background: #fef3c7; color: #92400e; }
.st.blue { background: #dbeafe; color: #1e40af; }
.st.gray { background: #f1f5f9; color: #475569; }
.act-btn { font-size: 20px; font-weight: 800; color: #94a3b8; cursor: pointer; }
.ref-link { color: var(--blue); font-weight: 700; cursor: pointer; }

.pagination { display: flex; justify-content: space-between; align-items: center; margin-top: 20px; font-size: 15px; color: #64748b; font-weight: 600; }
.pages { display: flex; gap: 5px; }
.pg { width: 28px; height: 28px; border-radius: 6px; border: 1px solid #cbd5e1; display: grid; place-items: center; cursor: pointer; }
.pg.active { background: var(--blue); color: white; border-color: var(--blue); }

.mf-box { background: white; border: 1px solid #eaeff5; padding: 20px; border-radius: 12px; position: relative; }
.mf-box b { display: block; font-size: 20px; margin-bottom: 5px; font-family: Manrope; }
.mf-box small { color: var(--muted); font-size: 16px; }
.trk-stat { position: absolute; right: 15px; top: 15px; font-size: 13px; font-weight: 800; padding: 4px 8px; border-radius: 4px; }
.trk-stat.green { background: #dcfce7; color: #16a34a; } .trk-stat.blue { background: #eff6ff; color: #2563eb; } .trk-stat.red { background: #fee2e2; color: #dc2626; }

.mf-split { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.mf-col { background: white; border: 1px solid #eaeff5; border-radius: 12px; padding: 25px; }
.mock-card { background: white; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
.mock-card.dashed { border: 1.5px dashed #cbd5e1; color: #64748b; font-weight: 600; font-size: 16px; display: grid; place-items: center; height: 60px; background: #f8fafc; }
.progress-bar { height: 6px; background: #e2e8f0; border-radius: 99px; overflow: hidden; margin-top: 10px; }
.progress-bar i { display: block; height: 100%; width: 45%; background: var(--blue); }

.track-layout { display: flex; gap: 25px; height: 420px; }
.map-area { flex: 1; background: #eef4f9; border-radius: 12px; border: 1px solid #eaeff5; }
.track-side { width: 300px; background: white; border: 1px solid #eaeff5; border-radius: 12px; padding: 25px; }
.track-side b { font-size: 18px; }
.track-side p { font-size: 16px; color: var(--muted); margin: 6px 0 20px; }
.track-side hr { border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 25px; }
.tl-item { display: flex; align-items: flex-start; gap: 15px; margin-bottom: 25px; }
.tl-item i { width: 14px; height: 14px; background: #cbd5e1; border-radius: 50%; box-shadow: 0 0 0 4px white, 0 0 0 5px #e2e8f0; margin-top: 4px; position: relative; }
.tl-item i::after { content: ""; position: absolute; width: 2px; height: 35px; background: #e2e8f0; left: 6px; top: 16px; }
.tl-item:last-child i::after { display: none; }
.tl-t b { font-size: 16px; color: #334155; margin-bottom: 4px; }
.tl-t small { font-size: 14px; color: #94a3b8; display: block; }
.tl-item.active i { background: var(--blue); box-shadow: 0 0 0 4px white, 0 0 0 6px #bfdbfe; }
.tl-item.active .tl-t b { color: var(--blue); }
.tl-item.dim { opacity: 0.4; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.fade-enter-from { opacity: 0; transform: translateY(10px); }
.fade-leave-to { opacity: 0; transform: translateY(-10px); }

@media (max-width: 950px) {
  .window-body { flex-direction: column; height: auto; }
  .window-sidebar { width: 100%; border-right: 0; border-bottom: 1px solid #dce5ef; flex-direction: row; flex-wrap: wrap; padding: 15px; }
  .side-btn { padding: 10px 15px; font-size: 16px; }
  .grid-4, .grid-3 { grid-template-columns: 1fr 1fr; }
  .content-main { max-height: 600px; }
  .top-search { display: none; }
}
@media (max-width: 600px) {
  .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; }
  .track-layout { flex-direction: column; height: auto; }
  .map-area { height: 250px; flex: none; }
  .track-side { width: 100%; }
  .mf-split { grid-template-columns: 1fr; }
  .table-actions { flex-direction: column; gap: 15px; }
}
</style>
