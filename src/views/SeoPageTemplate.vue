
<template>
  <section class="section" style="padding-top:150px; padding-bottom:100px;">
    <div class="container center reveal">
      <h1 style="font-size:36px; font-weight:800; font-family:Manrope; color:var(--navy); margin-bottom:20px;">{{ title }}</h1>
      <p style="font-size:16px; color:var(--muted); max-width:800px; margin:0 auto; line-height:1.7;">
        Halaman khusus untuk edukasi dan pencarian organik <strong>{{ title }}</strong>. Konten lengkap sedang dipersiapkan untuk fase SEO selanjutnya.
      </p>
      <div style="margin-top:40px;">
        <router-link to="/" class="btn blue" style="padding:10px 20px; font-weight:700;">Kembali ke Beranda</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => {
  return route.meta.pageTitle || 'Logistics Solutions'
})
</script>
