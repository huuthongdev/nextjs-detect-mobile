const { createServer } = require('http');
const next = require('next');
const MobileDetect = require('mobile-detect');

const { mainRoutes } = require('./routes/index.js');

const app = next({ dev: !process.env.ENV })
const port = process.env.PORT || 3400;

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const handler = mainRoutes.getRequestHandler(app);
      md = new MobileDetect(req.headers['user-agent']);
      const isMobile = md.mobile();
      req.isMobile = isMobile;

      handler(req, res);
    })
      .listen(port, () => console.log(`> Ready on http://localhost:${port}`))
  })