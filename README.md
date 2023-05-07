# Siss:

## CÔNG NGHỆ SỬ DỤNG

- **Front-End:** ReactJS
- **Back-End:** NodeJS(Express)
- **Database:** NoSQL(MongoDB)

## CHỨC NĂNG

- Đăng ký, xác thực email, đăng nhập, đặt lại mặt khẩu
- CRUD tác giả, sách, mã giảm giá
- Tìm kiếm, lọc sách, xem chi tiết sách
- Chức năng đặt hàng, quản lý giỏ hàng, tính phí vận chuyển, thanh toán online
- Xem, cập nhật thông tin cá nhân
- Xem lịch sử mua hàng
- Quản lý khách hàng, hóa đơn
- Tạo tài khoản, khóa - kích hoạt tài khoản nhân viên
- Thống kê

### Tài khoản nhân viên

- Email: nhanvien01@gmail.com
- Password: 123

## API bên thứ 3

## Cài đặt môi trường local

tạo file .env

```
    PORT=5000
    MONGODB_CONNECT_URI=

    JWT_ACCESS_TOKEN_SECRET=
    JWT_REFRESH_TOKEN_SECRET=

    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

    GOOGLE_GMAIL_CLIENT_ID=
    GOOGLE_GMAIL_CLIENT_SECRET=
    GOOGLE_GMAIL_REDIRECT_URI=
    GOOGLE_GMAIL_REFRESH_TOKEN=
```

3.

```
    Cài đặt: npm install
```

```
    Run: npm start
```

4. cd client, tạo file .env

```
    REACT_APP_GOOGLE_CLIENT_ID=899674564724-0rfh2skmnfp430lltu8cdoclml3s5d7i.apps.googleusercontent.com

    REACT_APP_GHN_TOKEN=
    REACT_APP_GHN_FROM_DISTRICT_ID=
    REACT_APP_GHN_SHOP_ID=
    REACT_APP_GHN_FROM_WARD_CODE=

    REACT_APP_SERVER_URL=http://localhost:5000/api/v1/
    REACT_APP_REDIRECT_LOGIN_GOOGLE=http://localhost:3000
    REACT_APP_REDIRECT_LOGIN_FACEBOOK=http://localhost:3000/dang-nhap
```

5.

```
    Cài đặt: npm install
```

```
    Run: npm start
```
