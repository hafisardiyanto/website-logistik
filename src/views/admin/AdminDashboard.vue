<template>
  <div class="admin-dashboard">
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Order</h3>
        <p class="value">124</p>
      </div>
      <div class="stat-card">
        <h3>Armada Aktif</h3>
        <p class="value">42</p>
      </div>
      <div class="stat-card">
        <h3>Pendapatan</h3>
        <p class="value">Rp 120.5M</p>
      </div>
      <div class="stat-card">
        <h3>Pengiriman Selesai</h3>
        <p class="value">89</p>
      </div>
    </div>

    <div class="recent-activity">
      <h3>Aktivitas Terbaru</h3>
      <table class="activity-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Tujuan</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#JO-001</td>
            <td>PT. Global Logistik</td>
            <td>Jakarta - Surabaya</td>
            <td><span class="badge in-progress">In Progress</span></td>
          </tr>
          <tr>
            <td>#JO-002</td>
            <td>CV. Maju Jaya</td>
            <td>Bandung - Semarang</td>
            <td><span class="badge completed">Completed</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.admin-dashboard {
  font-family: Inter, sans-serif;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}
.stat-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
}
.stat-card h3 {
  margin: 0 0 10px;
  font-size: 14px;
  color: #64748b;
}
.stat-card .value {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
}
.recent-activity {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.activity-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}
.activity-table th, .activity-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}
.activity-table th {
  background: #f8fafc;
  color: #475569;
  font-weight: 600;
  font-size: 14px;
}
.badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}
.badge.in-progress { background: #e0f2fe; color: #0369a1; }
.badge.completed { background: #dcfce3; color: #166534; }
</style>
