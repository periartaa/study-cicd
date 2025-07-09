# Study-CI/CD

CI/CD, atau Continuous Integration/Continuous Deployment, adalah praktik pengembangan perangkat lunak yang mengotomatiskan proses integrasi dan penyebaran kode. Dalam CI, setiap perubahan kode diintegrasikan secara berkala dan diuji secara otomatis, memastikan kualitas kode tetap terjaga. Sementara itu, CD secara otomatis menyebarkan kode yang telah diuji ke lingkungan produksi, memungkinkan rilis fitur baru dan perbaikan bug yang lebih cepat. Dengan CI/CD, tim pengembang dapat bekerja lebih efisien, menghasilkan perangkat lunak berkualitas tinggi, dan memberikan nilai tambah kepada pengguna secara berkelanjutan.

File Pengujian (File postman )

📋 **Postman Collection**: [Study CI-CD.postman_collection](./Study%20CI-CD.postman_collection)

> Klik link di atas untuk mengunduh atau membuka file Postman collection. Anda dapat mengimpornya ke Postman untuk menguji API endpoints.

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

## Konfigurasi Localhost

Jalankan perintah pada terminal

```bash
npm run start
```

lalu jalankan file pengujian pada postman 
- jika login berhasil maka output
  ``` bash
  Login successful
  ```
- jika outut berhasil maka output
  ``` bash
  Logout successful
  ```


## Konfigurasi Google Console

### 1. Select a project

Pilih projek atau buat projek dan pastikan mengingat id projek
contoh:

```bash
new-cicd-study
```

### 2. Artifact Registry API
- enabel Artifact Registry (jika belum dihidupka)
- create respository

  contoh name
  ```bash
  my-docker-repo
  ```
  contoh regional
  ``` bash
  asia-southeast2 (Jakarta)
  ```
  
- jika sudah lalu pilih
  ``` bash
  create
  ```


### Setelah konfigurasi selesai, jalankan pada github action.
