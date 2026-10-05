<template>
  <section class="case-study" id="casestudies">
    <div class="container container-lg">
      <div class="reveal text-center">
        <span class="uc-kicker">USE CASE</span>
        <h2 class="uc-title">Dari Order hingga Profit, Semua Terhubung</h2>
        <p class="uc-desc">
          Bayangkan satu proses pengiriman yang melibatkan customer, tim operasional, armada, driver, warehouse, hingga finance. Dengan LOGISTIQ, setiap tahapan dapat dikelola dalam satu alur kerja yang terhubung — sehingga tim dapat bekerja dengan data yang sama dan management memiliki visibility terhadap keseluruhan proses.
        </p>
      </div>

      <!-- Timeline Interactive -->
      <div class="uc-interactive reveal delay1">
        
        <!-- Tab Headers Desktop -->
        <div class="uc-tabs d-desktop-only">
          <div class="tab-row">
            <button class="uc-step" :class="{ active: activeStep === 0 }" @click="activeStep = 0">
              <span class="step-num">01</span> ORDER
            </button>
            <span class="uc-arrow">→</span>
            <button class="uc-step" :class="{ active: activeStep === 1 }" @click="activeStep = 1">
              <span class="step-num">02</span> PLANNING
            </button>
            <span class="uc-arrow">→</span>
            <button class="uc-step" :class="{ active: activeStep === 2 }" @click="activeStep = 2">
              <span class="step-num">03</span> DISPATCH
            </button>
            <span class="uc-arrow">→</span>
            <button class="uc-step" :class="{ active: activeStep === 3 }" @click="activeStep = 3">
              <span class="step-num">04</span> TRACKING
            </button>
          </div>
          <div class="tab-row row-two">
            <button class="uc-step" :class="{ active: activeStep === 4 }" @click="activeStep = 4">
              <span class="step-num">05</span> DELIVERY
            </button>
            <span class="uc-arrow">→</span>
            <button class="uc-step" :class="{ active: activeStep === 5 }" @click="activeStep = 5">
              <span class="step-num">06</span> BILLING
            </button>
            <span class="uc-arrow">→</span>
            <button class="uc-step" :class="{ active: activeStep === 6 }" @click="activeStep = 6">
              <span class="step-num">07</span> PROFITABILITY
            </button>
          </div>
        </div>

        <!-- Tab Headers Mobile -->
        <div class="uc-tabs-mobile d-mobile-only">
           <button v-for="(step, i) in stepsData" :key="i" class="uc-step" :class="{ active: activeStep === i }" @click="activeStep = i">
              {{ step.short }}
           </button>
        </div>

        <!-- Content Area -->
        <div class="uc-content-box shadow-lg">
          <transition name="sliding" mode="out-in">
            <div :key="activeStep" class="uc-pane">
              
              <div class="uc-text">
                <span class="pane-num">0{{ activeStep + 1 }} — {{ stepsData[activeStep].short }}</span>
                <h3>{{ stepsData[activeStep].headline }}</h3>
                <p>{{ stepsData[activeStep].description }}</p>
                
                <div class="uc-mini-flow">
                  <div v-for="(flow, findex) in stepsData[activeStep].flow" :key="findex" class="flow-item">
                     <span>{{ flow }}</span>
                     <div v-if="findex !== stepsData[activeStep].flow.length - 1" class="flow-arr">↓</div>
                  </div>
                </div>
              </div>

              <div class="uc-visual">
                <img src="/f.jpg" alt="LOGISTIQ Workflow" class="img-fluid" />
              </div>

            </div>
          </transition>
        </div>

      </div>

      <div class="uc-cta reveal delay2 text-center mt-6">
        <a href="#contact" class="btn blue">Explore the Workflow →</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeStep = ref(0)

const stepsData = [
  {
    short: 'ORDER',
    headline: 'Capture Every Order',
    description: 'Order customer dicatat dan dikelola dalam satu sistem sehingga tim memiliki informasi pengiriman yang terstruktur sejak awal.',
    flow: ['Customer', 'Order', 'Shipment']
  },
  {
    short: 'PLANNING',
    headline: 'Plan Your Shipment',
    description: 'Tim operasional merencanakan jadwal, armada, rute, dan kebutuhan pengiriman berdasarkan order yang masuk.',
    flow: ['Order', 'Planning', 'Schedule + Route + Fleet']
  },
  {
    short: 'DISPATCH',
    headline: 'Dispatch With Control',
    description: 'Shipment diteruskan ke armada dan driver yang sesuai sehingga proses dispatch dapat dikontrol dengan lebih terstruktur.',
    flow: ['Shipment', 'Vehicle + Driver']
  },
  {
    short: 'TRACKING',
    headline: 'Monitor Every Shipment',
    description: 'Progress pengiriman dapat dipantau dari proses keberangkatan hingga shipment mencapai tujuan.',
    flow: ['Origin', 'Transit', 'Destination']
  },
  {
    short: 'DELIVERY',
    headline: 'Complete the Delivery',
    description: 'Status pengiriman dan proof of delivery dicatat sebagai bagian dari proses penyelesaian shipment.',
    flow: ['Shipment', 'Delivered', 'POD']
  },
  {
    short: 'BILLING',
    headline: 'Turn Operations Into Billing',
    description: 'Data operasional yang telah selesai dapat menjadi dasar proses billing dan invoice.',
    flow: ['Completed Shipment', 'Billing Data', 'Invoice']
  },
  {
    short: 'PROFITABILITY',
    headline: 'Understand Your Profitability',
    description: 'Revenue dan biaya operasional dapat dianalisis untuk membantu management memahami performa setiap aktivitas pengiriman.',
    flow: ['Revenue', 'Operational Cost', 'Profitability']
  }
]
</script>

<style src="../assets/AppCaseStudy.css" scoped></style>
