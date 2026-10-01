<template>
  <div class="login-page">
    <div class="login-card">
      <h2 style="font-family:Manrope; font-weight:800; font-size:24px; margin-bottom:10px;">Admin Login</h2>
      <p style="color:#64748b; margin-bottom:30px; font-size:14px;">Masukkan kredensial Anda untuk masuk ke CMS</p>
      
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" placeholder="admin@logistiq.id" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" placeholder="••••••••" required>
        </div>
        
        <p v-if="error" class="error-msg">{{ error }}</p>
        
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = () => {
    // Mock login logic
    if (email.value === 'admin@logistiq.id' && password.value === 'admin123') {
        localStorage.setItem('adminAuth', 'true')
        router.push('/admin/dashboard')
    } else {
        error.value = 'Email atau password salah. (Coba admin@logistiq.id / admin123)'
    }
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
}
.login-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #334155;
}
.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 15px;
  transition: border 0.3s;
}
.form-group input:focus {
  border-color: #3b82f6;
  outline: none;
}
.btn {
  width: 100%;
  background: #1768e8;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
}
.btn:hover { background: #1557d0; }
.error-msg {
  color: #ef4444;
  font-size: 13px;
  margin-bottom: 15px;
}
</style>
