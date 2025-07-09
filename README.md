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

### 3. IAM & Admin --> Service accounts --> Manage Key --> add key --> add new key --> JSON

simpan file json

buka akun github--> buka respository --> setting --> action --> new respository secret 

contoh name
``` bash
GCP_SA_KEY
```
conoth Secret
``` bash
{
  "type": "service_account",
  "project_id": "new-cicd-study",
  "private_key_id": "7fada959d9827e8853388dab2015a2b47cc95450",
  "private_key": "-----BEGIN PRIVATE KEY-----
  "client_email": "cicd-705@new-cicd-study.iam.gserviceaccount.com",
  "client_id": "105745861054815779675",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cicd-705%40new-cicd-study.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
```
### 4. Konfigurasi env

```bash
env:
  PROJECT_ID:....
  REGION:....
  ARTIFACT_REGISTRY:....
  ARTIFACT_LOCATION:....
```
pastikan sesaui dengan data yang dibuat

### 5. push and deploy witch github action

### 6. allow unauthenticated access

``` bash
gcloud run services add-iam-policy-binding app \
  --member="allUsers" \
  --role="roles/run.invoker" \
  --region=asia-southeast2
```

### 7. deploy ulang
### Setelah konfigurasi selesai, jalankan pada github action.
