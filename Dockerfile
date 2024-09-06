# Sử dụng hình ảnh Node.js chính thức từ Docker Hub
FROM node:16

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc của ứng dụng
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Mở cổng mà ứng dụng sẽ lắng nghe
EXPOSE 4000

# Chạy ứng dụng khi container khởi động
CMD [ "npm", "start" ]
