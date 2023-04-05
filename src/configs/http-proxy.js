const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware('/api', {
   target: 'http://localhost:3000',
   changeOrigin: true 
 })
module.exports = {apiProxy};