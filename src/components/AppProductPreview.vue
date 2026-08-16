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

<style src="../assets/AppProductPreview.css" scoped></style>

