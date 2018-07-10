const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const reactpressConfig = require("./reactpress.config");

const app = next({ dev, dir: `themes/${reactpressConfig.theme}` });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/post/:slug", (req, res) => {
      const actualPage = "/post";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/page/:slug", (req, res) => {
      const actualPage = "/page";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/tag/:slug", (req, res) => {
      const actualPage = "/tag";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/category/:slug", (req, res) => {
      const actualPage = "/category";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
