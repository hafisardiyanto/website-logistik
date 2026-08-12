<script setup>
import { onMounted, ref, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import AppTrust from './components/AppTrust.vue'
import AppProblems from './components/AppProblems.vue'
import AppSolution from './components/AppSolution.vue'
import AppWorkflow from './components/AppWorkflow.vue'
import AppProductPreview from './components/AppProductPreview.vue'
import AppFeatures from './components/AppFeatures.vue'
import AppException from './components/AppException.vue'
import AppProfit from './components/AppProfit.vue'
import AppDashboard from './components/AppDashboard.vue'
import AppWhySecurity from './components/AppWhySecurity.vue'
import AppPricing from './components/AppPricing.vue'
import AppFaq from './components/AppFaq.vue'
import AppCta from './components/AppCta.vue'
import AppFooter from './components/AppFooter.vue'
import AppLogin from './components/AppLogin.vue'

const showLogin = ref(false)

watch(showLogin, (val) => {
  if (val) {
    document.body.classList.add('login-open')
  } else {
    document.body.classList.remove('login-open')
  }
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("show");
      }),
    { threshold: 0.12 },
  );
  setTimeout(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
  }, 100);
})
</script>

<template>
  <AppHeader @open-login="showLogin = true" />
  <main>
    <AppHero />
    <AppTrust />
    <AppProblems />
    <AppSolution />
    <AppWorkflow />
    <AppProductPreview />
    <AppFeatures />
    <AppException />
    <AppProfit />
    <AppDashboard />
    <AppWhySecurity />
    <AppPricing />
    <AppFaq />
    <AppCta />
  </main>
  <AppFooter />
  <AppLogin :is-open="showLogin" @close-login="showLogin = false" />
</template>
