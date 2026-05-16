<div align="center">

# ARSly

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Backend](https://img.shields.io/badge/backend-Express-green)
![Database](https://img.shields.io/badge/database-MongoDB-brightgreen)
![Frontend](https://img.shields.io/badge/frontend-Netlify-black)

</div>

**ARSly** is a lightweight URL shortener that converts long links into compact, shareable short URLs.  
It includes a TypeScript-based backend API powered by Express and MongoDB, plus a live web experience deployed online.

## Live Demo

- **Live Demo:** https://arsly.netlify.app/

---

## Features

- Generate short URLs from long links
- Redirect users from short URLs to the original destination
- Store shortened URL records in MongoDB
- Simple REST API structure
- TypeScript backend with clean routing, controller, and model separation

---

## Tech Stack

### Backend
- **Node.js**
- **TypeScript**
- **Express.js**
- **MongoDB**
- **dotenv**

### Deployment
- **Frontend:** Netlify
- **Backend:** Render

---

## Backend API

### 1. Create a Short URL

**Endpoint**

```http
POST /url
```

**Request Body**

```json
{
  "url": "https://example.com"
}
```

**Success Response**

```json
{
  "id": "a1B2c3D4"
}
```

**Error Response**

```json
{
  "error": "URL is Required"
}
```

---

### 2. Redirect to the Original URL

**Endpoint**

```http
GET /url/:shortId
```

**Example**

```http
GET /url/a1B2c3D4
```

If the short ID exists, the server redirects the user to the original URL.

**Not Found Response**

```json
{
  "error": "Short URL not found"
}
```

---

## Project Structure

```text
ARSly/
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   │   ├── url.generate.ts
│   │   │   └── url.get.ts
│   │   ├── models/
│   │   │   └── url.model.ts
│   │   ├── routes/
│   │   │   └── url.route.ts
│   │   └── index.ts
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── README.md
└── .gitignore
```

---

## Local Setup

### Prerequisites

- Node.js installed
- MongoDB connection string
- npm or compatible package manager

### 1. Clone the Repository

```bash
git clone https://github.com/ars2k03/ARSly.git
cd ARSly
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Create Environment File

Create a `.env` file inside the `backend` directory:

```env
MONGO_URL=your_mongodb_connection_string
```

### 4. Run the Development Server

```bash
npm run dev
```

The backend starts on:

```text
http://localhost:3000
```

---

## Available Backend Scripts

Inside the `backend` folder:

```bash
npm run dev
```

Runs the backend in development mode with file watching.

```bash
npm run build
```

Compiles TypeScript into JavaScript.

```bash
npm start
```

Runs the compiled production build.

---

## Example cURL Request

```bash
curl -X POST http://localhost:3000/url \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

---

## Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URL` | MongoDB connection string used by the backend |

---

## Roadmap Ideas

- Custom aliases for short URLs
- Click analytics and visit tracking
- QR code generation
- User dashboard
- Expiration dates for links
- Rate limiting and validation hardening

---

## License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

---

## Author

**A R S Arafat**