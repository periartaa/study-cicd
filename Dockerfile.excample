# Gunakan Node.js sebagai base image
FROM node:18

# Set direktori kerja dalam container
WORKDIR /app

# Salin package.json dan install dependensi
COPY package*.json ./
RUN npm install

# Salin seluruh kode
COPY . .

# Expose port untuk aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "src/server.js"]
