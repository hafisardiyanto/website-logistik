<template>
  <div class="login-overlay" id="login" :class="{ open: isOpen }" @click.self="$emit('close-login')">
    <div class="login-box">
      <button class="close" @click="$emit('close-login')">×</button>
      <span class="pill">Akses Aman</span>
      <h2>Selamat datang kembali.</h2>
      <p>Masuk ke dalam area ruang kerja operasional LOGISTIQ Anda.</p>
      <input type="email" placeholder="Alamat email resmi kerja" />
      <input type="password" placeholder="Kata sandi" />
      <div class="login-row">
        <label>
          <input type="checkbox" style="width: auto; margin: 0 5px 0 0" /> Ingat kredensial saya
        </label>
        <a href="#">Lupa kata sandi?</a>
      </div>
      <button class="btn blue full" @click="$emit('close-login')">Masuk Menggunakan Sandi →</button>
      <div class="login-divider">atau alternatif lainnya</div>
      <button class="login-demo" @click="handleDemoRequest">
        Kirim Permintaan Trial Akses
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-login'])

const handleDemoRequest = () => {
  emit('close-login');
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close-login')
  }
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<style src="../assets/AppLogin.css" scoped></style>

