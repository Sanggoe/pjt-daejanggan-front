const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'djg-server1-v1-221113:8633',
            changeOrigin: true,
        })
    );
};