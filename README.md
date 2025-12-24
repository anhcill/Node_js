# Dự Án Học Node.js

## 📝 Mô tả

Dự án học Node.js cơ bản với Express framework, bao gồm các middleware cơ bản và best practices.

## 🚀 Công nghệ sử dụng

- **Node.js** - Runtime JavaScript
- **Express** - Web framework
- **Morgan** - HTTP request logger
- **Helmet** - Bảo mật HTTP headers
- **Compression** - Nén response để giảm dung lượng

## 📦 Cài đặt

```bash
# Clone hoặc tạo thư mục dự án
cd Ngay3

# Cài đặt dependencies
npm install express morgan helmet compression

# Hoặc nếu có package.json
npm install
```

## 🏃 Chạy dự án

```bash
# Chạy server
node server.js

# Hoặc dùng nodemon (tự động reload khi code thay đổi)
npm install -g nodemon
nodemon server.js
```

Server sẽ chạy tại: **http://localhost:3055**

## 📁 Cấu trúc thư mục

```
Ngay3/
├── src/
│   └── app.js          # Cấu hình Express app
├── server.js           # Entry point, khởi động server
├── package.json        # Dependencies
└── README.md           # File này
```

## 🔧 API Endpoints

### GET /

Trả về thông điệp chào mừng và dữ liệu test compression

**Response:**

```json
{
  "message": "welcome js!",
  "metadata": "halo halo halo..."
}
```

## 📚 Kiến thức đã học

### Middleware

- **Morgan**: Log HTTP requests để debug
- **Helmet**: Bảo vệ ứng dụng khỏi các lỗ hổng bảo mật phổ biến
- **Compression**: Nén response để tăng tốc độ tải trang

### Process Management

- **SIGINT Handler**: Tắt server một cách an toàn khi nhấn Ctrl+C

## 🎯 Mục tiêu học tập

- [x] Cài đặt và cấu hình Express
- [x] Sử dụng các middleware cơ bản
- [x] Xử lý HTTP requests
- [x] Graceful shutdown

## 📖 Tài liệu tham khảo

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/)

## 👨‍💻 Tác giả

Ducan - Học Node.js ngày 3

## 📅 Ngày tạo

December 24, 2025
