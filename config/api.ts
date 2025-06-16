export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://quoc-trang-backend-production.up.railway.app' // Railway deployment URL
  : 'http://localhost:2701'
