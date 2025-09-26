# 🛡️ Node.js JWT Authentication API

A secure authentication system built with **Node.js**, **Express**, **MongoDB**, **express-validator**, and **JWT**.  
It supports **register, login, refresh tokens, logout, and protected routes**.

---

## 🚀 Features

- User **registration** and **login**
- **Access token** (short-lived, 15m)
- **Refresh token** (long-lived, 7d, stored in DB)
- **Token refresh endpoint** to get new access tokens
- **Logout** endpoint (invalidates refresh token)
- **Protected routes** middleware
- Input **validation with express-validator**
- Clean architecture: routes, controllers, services, validators, middlewares

---

---

## ⚙️ Installation

```bash
# 1. Clone repo
git clone https://github.com/yourusername/jwt-auth-api.git
cd user_auth_api

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env

# 4. Start server
npm run dev
```

## 🔑 Environment Variables (.env)

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/jwt_auth_db

ACCESS_TOKEN_SECRET=your_access_secret_here
REFRESH_TOKEN_SECRET=your_refresh_secret_here
```

## 📡 API Endpoints

| Method | Endpoint                 | Description             | Auth Required   |
| ------ | ------------------------ | ----------------------- | --------------- |
| POST   | `/api/auth/register`     | Register a new user     | ❌              |
| POST   | `/api/auth/login`        | Login & get tokens      | ❌              |
| POST   | `/api/auth/refresh`      | Refresh access token    | ❌              |
| POST   | `/api/auth/logout`       | Logout user             | ❌              |
| GET    | `/api/protected/profile` | Example protected route | ✅ Access token |

## 🔐 Authentication Flow

1. Login → Returns accessToken + refreshToken.

2. Use accessToken in Authorization header for protected routes:

```
Authorization: Bearer <accessToken>
```

3. If access token expires → Call /api/auth/refresh with:

```
{ "refreshToken": "<refreshToken>" }
```

→ Get a new accessToken (and refreshToken if rotated).

4. Logout → Call /api/auth/logout with:

```
{ "refreshToken": "<refreshToken>" }
```

→ Removes refresh token from DB.

---

## 🧪 Postman Setup

1. Create a Postman environment with variables:

   - accessToken
   - refreshToken

2. In Login → Scripts tab, save tokens automatically:

```
const res = pm.response.json();
pm.environment.set("accessToken", res.data.accessToken);
pm.environment.set("refreshToken", res.data.refreshToken);
```

2. For protected routes, add header:

```
Authorization: Bearer {{accessToken}}
```

4. For refresh/logout, body:

```
{ "refreshToken": "{{refreshToken}}" }
```
