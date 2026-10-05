<template>
  <section class="industries" id="industries">
    <div class="container container-lg">
      <div class="reveal text-center">
        <span class="ind-kicker">BUILT FOR EVERY LOGISTICS BUSINESS</span>
        <h2 class="ind-title">Sistem yang Dirancang untuk Industri Anda.</h2>
        <p class="ind-desc">LOGISTIQ membantu berbagai jenis perusahaan logistik dan supply chain melakukan transformasi digital pada operasional mereka.</p>
      </div>

      <!-- TABS NAVIGATION -->
      <div class="tab-nav reveal delay1">
        <button 
          v-for="(ind, index) in industries" 
          :key="index"
          class="tab-btn" 
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          {{ ind.name }}
        </button>
      </div>

      <!-- TABS CONTENT -->
      <div class="tab-content-wrapper reveal delay2">
        <transition name="fade" mode="out-in">
          <div :key="activeTab" class="tab-pane">
            <div class="tab-text">
              <h3>{{ industries[activeTab].title }}</h3>
              <p>{{ industries[activeTab].description }}</p>
              <ul class="tab-features">
                <li v-for="feat in industries[activeTab].features" :key="feat">
                  <span class="chk">✓</span> {{ feat }}
                </li>
              </ul>
              <div style="margin-top: 30px;">
                <button class="btn blue" @click.prevent="scrollToId('contact')">Learn More</button>
              </div>
            </div>
            <div class="tab-image">
              <img :src="industries[activeTab].image" :alt="industries[activeTab].name" class="shadow-lg" />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const activeTab = ref(0)

const industries = [
  {
    name: "Logistics & Freight",
    title: "Mendukung Skala Bisnis Logistik Anda.",
    description: "Kelola operasional logistics dan freight forwarding Anda secara modern. Dari pengecekan order, penjadwalan, loading, hingga POD elektronik, tingkatkan SLA dan keandalan perusahaan Anda di mata customer.",
    features: [
      "End-to-End Operational Flow",
      "Freight Management & Tracking",
      "Digital Proof of Delivery"
    ],
    image: "/1.jpg"
  },
  {
    name: "Trucking",
    title: "Manajemen Armada yang Tangguh.",
    description: "LOGISTIQ diciptakan untuk menjaga produktivitas truk dan pengemudi Anda. Optimasi jadwal armada, kurangi idle time, dan pantau rasio profitabilitas per perjalanan dengan lebih transparan.",
    features: [
      "Fleet & Driver Management",
      "Dispatch Optimization",
      "Operational Cost Tracking"
    ],
    image: "/2.jpg"
  },
  {
    name: "Distribution",
    title: "Distribusikan Barang dengan Cepat & Akurat.",
    description: "Distribusi multikota atau pengiriman harian kini jauh lebih terorganisir. Rencanakan rute distribusi terbaik, pantau perpindahan logistik secara live, dan raih kepuasan pelanggan dengan visibilitas.",
    features: [
      "Route & Delivery Planning",
      "Live Tracking Dashboard",
      "Customer Fulfillment visibility"
    ],
    image: "/3.jpg"
  },
  {
    name: "Warehouse",
    title: "Inventaris Selalu Terkontrol.",
    description: "Hindari kekacauan dalam gudang Anda. Pantau masuk-keluarnya barang secara rinci, tempatkan inventory Anda pada alokasi yang tepat, dan kelola proses inbound/outbound harian tanpa masalah.",
    features: [
      "Inbound & Outbound Control",
      "Inventory Visibility",
      "Storage Allocation"
    ],
    image: "/4.jpg"
  },
  {
    name: "Manufacturing",
    title: "Logistik Pabrik, Terintegrasi Langsung.",
    description: "Bagi perusahan manufaktur, logistik dan supply chain adalah urat nadi bisnis. LOGISTIQ membantu menyeimbangkan supply material raw dengan pergerakan finish good keluar dari pabrik menuju gudang hingga distribusi.",
    features: [
      "Supply Chain Connection",
      "Material Handling Sync",
      "Manufacturing to Warehouse Flow"
    ],
    image: "/5.jpg"
  }
]
</script>

<style src="../assets/AppIndustries.css" scoped></style>
