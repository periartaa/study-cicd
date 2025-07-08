# Study-CI/CD
CI/CD, atau Continuous Integration/Continuous Deployment, adalah praktik pengembangan perangkat lunak yang mengotomatiskan proses integrasi dan penyebaran kode. Dalam CI, setiap perubahan kode diintegrasikan secara berkala dan diuji secara otomatis, memastikan kualitas kode tetap terjaga. Sementara itu, CD secara otomatis menyebarkan kode yang telah diuji ke lingkungan produksi, memungkinkan rilis fitur baru dan perbaikan bug yang lebih cepat. Dengan CI/CD, tim pengembang dapat bekerja lebih efisien, menghasilkan perangkat lunak berkualitas tinggi, dan memberikan nilai tambah kepada pengguna secara berkelanjutan.


## Instalasi

### 1. Clone Repository
Pertama kita donlowad repository dari github
```bash
git clone https://github.com/periartaa/study-cicd.git
```

### 2. Instal Dependensi
Jalankan perintah berikut untuk menginstal dependensi pada projek anda.
```bash
npm install
```
Penginstalan berhasil ketika folder node_modules sudah muncul pada direktori anda.

### 3. Konfigurasi env

```bash
env:
  PROJECT_ID:....
  REGION:....
  ARTIFACT_REGISTRY:....
  ARTIFACT_LOCATION:....
```
note  **pastikan sesuai data pada google console**
Sesuaikan dengan projek yang kalian buat.

### Setelah konfigurasi selesai, jalankan pada github action.
