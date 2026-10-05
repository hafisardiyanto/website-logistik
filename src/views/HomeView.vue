<template>
  <div class="home-wrapper">
    <AppHero />
    <AppTrust />
    <AppProblems />
    <AppSolution />
    <AppHowItWorks />
    <AppProduct />
    <AppDetailWorkflow />
    <AppDashboard />
    <AppIndustries />
    <AppIntegrations />
    <AppWhySecurity />
    <AppCaseStudy />
    <AppFaq />
    <AppCta />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import AppHero from '../components/AppHero.vue'
import AppTrust from '../components/AppTrust.vue'
import AppProblems from '../components/AppProblems.vue'
import AppSolution from '../components/AppSolution.vue'
import AppHowItWorks from '../components/AppHowItWorks.vue'
import AppProduct from '../components/AppProduct.vue'
import AppDetailWorkflow from '../components/AppDetailWorkflow.vue'
import AppDashboard from '../components/AppDashboard.vue'
import AppIndustries from '../components/AppIndustries.vue'
import AppIntegrations from '../components/AppIntegrations.vue'
import AppWhySecurity from '../components/AppWhySecurity.vue'
import AppCaseStudy from '../components/AppCaseStudy.vue'
import AppFaq from '../components/AppFaq.vue'
import AppCta from '../components/AppCta.vue'

onMounted(() => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
      }
    });
  }, observerOptions);

  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });
  }, 150);
});
</script>
