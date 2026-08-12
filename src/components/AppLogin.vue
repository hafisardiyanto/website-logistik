<template>
  <div class="login-overlay" id="login" :class="{ open: isOpen }" @click.self="$emit('close-login')">
    <div class="login-box">
      <button class="close" @click="$emit('close-login')">×</button>
      <span class="pill">Secure access</span>
      <h2>Welcome back.</h2>
      <p>Sign in to your LOGISTIQ operations workspace.</p>
      <input type="email" placeholder="Work email" />
      <input type="password" placeholder="Password" />
      <div class="login-row">
        <label>
          <input type="checkbox" style="width: auto; margin: 0 5px 0 0" /> Remember me
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button class="btn blue full" @click="$emit('close-login')">Sign in →</button>
      <div class="login-divider">or</div>
      <button class="login-demo" @click="handleDemoRequest">
        Request demo access
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

<style scoped>
.login-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 100;
  background: #03101fbe;
  backdrop-filter: blur(7px);
  place-items: center;
}
.login-overlay.open {
  display: grid;
}
.login-box {
  width: min(440px, 92%);
  background: white;
  border-radius: 17px;
  padding: 31px;
  position: relative;
  box-shadow: 0 35px 90px #0006;
}
.login-box .close {
  position: absolute;
  right: 14px;
  top: 10px;
  border: 0;
  background: none;
  font-size: 25px;
  cursor: pointer;
}
.login-box h2 {
  font: 800 25px Manrope;
  margin: 14px 0 6px;
}
.login-box p {
  font-size: 10px;
  color: var(--muted);
}
.login-box input {
  width: 100%;
  padding: 12px;
  margin: 7px 0;
  border: 1px solid #dbe4ef;
  border-radius: 8px;
  outline: none;
}
.login-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 9px;
  color: #758399;
  margin: 7px 0 15px;
}
.login-row a {
  color: var(--blue);
}
.login-divider {
  text-align: center;
  color: #9aa7b7;
  font-size: 9px;
  margin: 16px 0;
}
.login-demo {
  border: 1px solid #d8e3ef;
  background: white;
  width: 100%;
  padding: 11px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
}
</style>
