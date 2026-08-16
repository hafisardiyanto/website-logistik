
<template>
  <section class="section" id="product" style="background:#07172b; color:white; padding:100px 0;">
    <div class="container center">
      <div class="reveal">
        <span style="color:#5dd7ff; font-weight:800; font-size:12px; letter-spacing:1px; text-transform:uppercase;">Product Showcase</span>
        <h2 style="font-size: 38px; font-weight: 800; font-family: Manrope; margin: 10px 0;">See Your Entire Logistics Operation in One View</h2>
        <p style="font-size: 16px; color: #a9b9cd; max-width: 700px; margin: 0 auto; line-height:1.7;">
          From daily operations to business performance, LOGISTIQ gives your team the visibility they need.
        </p>
      </div>
      
      <div class="product-tabs reveal delay1" style="margin-top: 40px;">
         
         <div class="tabs-header" style="display:flex; justify-content:center; flex-wrap:wrap; gap:10px; margin-bottom:30px;">
            <button v-for="tab in tabs" :key="tab.id" :class="['tab-btn', activeTab === tab.id ? 'active' : '']" @click="switchTab(tab)">
              {{ tab.name }}
            </button>
         </div>

         
         <div class="tab-content" style="background:#0f2944; border:1px solid #183a5b; border-radius:16px; min-height:450px; display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:0 30px 60px rgba(0,0,0,0.5); padding:20px; width: 100%; max-width: 900px; margin: 0 auto; overflow:hidden;">
            <!-- UI Visualizer -->
            <img :src="currentImg" :alt="currentAlt" style="width:100%; max-width:100%; border-radius:8px; display:block; object-fit: cover;" @error="$event.target.src='https://placehold.co/900x500/0f2944/5dd7ff.png?text=LOGISTIQ+'+activeTab+'+UI'" />
         </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'

const activeTab = ref('dashboard')

// NOTE: Ensure generated/uploaded files exist at /public/assets/dashboard.png etc. 
const tabs = [
  { id: 'dashboard', name: 'Dashboard', img: '/assets/dashboard-mockup.png', alt: 'LOGISTIQ logistics management dashboard showing shipment, revenue, cost and profit performance' },
  { id: 'job-order', name: 'Job Order', img: '/assets/joborder-mockup.png', alt: 'LOGISTIQ Job Order creation and scheduling interface' },
  { id: 'tracking', name: 'Tracking', img: '/assets/tracking-mockup.png', alt: 'LOGISTIQ live driver tracking and delivery mapping' },
  { id: 'profit', name: 'Profit & Loss', img: '/assets/profit-mockup.png', alt: 'LOGISTIQ real-time operational cost and profit analytic charts' }
]

const currentAlt = ref(tabs[0].alt)
const currentImg = ref(tabs[0].img)

const switchTab = (tab) => {
  activeTab.value = tab.id
  currentImg.value = tab.img
  currentAlt.value = tab.alt
}
</script>

<style scoped>
.tab-btn {
  background: transparent;
  border: 1px solid #183a5b;
  color: #7891ad;
  padding: 10px 18px;
  border-radius: 99px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
}
.tab-btn:hover { background: #0f2944; color: white; }
.tab-btn.active {
  background: var(--blue);
  color: white;
  border-color: var(--blue);
}
</style>
<style src="../assets/AppProductPreview.css" scoped></style>
