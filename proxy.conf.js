const PROXY_CONFIG = {
  "/proxy/*": {
    "target": "http://94.237.78.72/api/v1",
    "pathRewrite": {
      "^/proxy": ""
    },
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    // "withCredentials": true,
    "onProxyRes": function (proxyRes, req, res) {
      if(proxyRes.headers["set-cookie"]) {
        let cookie = proxyRes.headers["set-cookie"][0].split(';');
        cookie.push('Path=/');
        proxyRes.headers["set-cookie"] = cookie.join(';');
      }
    }
  }
}

module.exports = PROXY_CONFIG;
