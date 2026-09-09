const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const helmet = require("helmet");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const cspDirectives = {
  defaultSrc: ["'self'"],
  scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
  styleSrc: ["'self'", "'unsafe-inline'"],
  imgSrc: ["'self'", "data:", "blob:"],
  fontSrc: ["'self'", "data:"],
  connectSrc: ["'self'"],
  frameAncestors: ["'none'"],
  formAction: ["'self'"],
  baseUri: ["'self'"],
  upgradeInsecureRequests: [],
};

app.prepare().then(() => {
  createServer((req, res) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1e6) req.destroy();
    });

    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: cspDirectives,
      },
      referrerPolicy: { policy: "strict-origin-when-cross-origin" },
      crossOriginOpenerPolicy: { policy: "same-origin" },
    })(req, res, () => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });
  }).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});