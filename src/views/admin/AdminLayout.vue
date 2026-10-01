<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <div class="logo">LOGISTIQ Admin</div>
      <nav>
        <router-link to="/admin/dashboard" class="nav-item">Dashboard</router-link>
        <router-link to="/admin/services" class="nav-item">Layanan/Service</router-link>
        <router-link to="/admin/orders" class="nav-item">Job Orders</router-link>
        <router-link to="/admin/settings" class="nav-item">Pengaturan</router-link>
        <div class="nav-item" @click="logout" style="cursor: pointer; margin-top:20px; color:var(--red)">Logout</div>
      </nav>
    </aside>
    <main class="main-content">
      <header class="topbar">
        <h2>{{ $route.meta.title || 'Admin Panel' }}</h2>
        <div class="user-info">
          <span>Admin</span>
        </div>
      </header>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin/login')
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
  background-color: #f1f5f9;
}

.sidebar {
  width: 250px;
  background-color: #0a1b31;
  color: white;
  display: flex;
  flex-direction: column;
}

.logo {
  padding: 20px;
  font-size: 24px;
  font-weight: 800;
  font-family: Manrope;
  border-bottom: 1px solid #143054;
}

nav {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}

.nav-item {
  color: #a9b9cd;
  padding: 15px 20px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s, color 0.3s;
}

.nav-item:hover, .nav-item.router-link-active {
  background-color: #1768e8;
  color: white;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.topbar {
  background: white;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
}

.topbar h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.page-content {
  padding: 30px;
  overflow-y: auto;
  flex: 1;
}
</style>
