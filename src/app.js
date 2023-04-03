// const exec = require('child_process').exec;
const express = require("express");
const nunjucks = require("nunjucks");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("./config/winston");
const app = express();
global.appRoot = __dirname;

// log requests
app.use(morgan("combined"));

// views path + engine set-up
app.set("views", [
    path.join(__dirname, "views"),
    path.join(__dirname, "../../node_modules/govuk-frontend")
]);

const nunjucksLoaderOpts = {
    watch: process.env.NUNJUCKS_LOADER_WATCH !== "false",
    noCache: process.env.NUNJUCKS_LOADER_NO_CACHE !== "true"
};
const njk = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(app.get("views"),
        nunjucksLoaderOpts)
);
njk.express(app);
app.set("view engine", "njk");

njk.addGlobal("cdnUrlCss", process.env.CDN_URL_CSS);
njk.addGlobal("cdnUrlJs", process.env.CDN_URL_JS);
njk.addGlobal("cdnHost", process.env.CDN_HOST);
njk.addGlobal("chsUrl", process.env.CHS_URL);

// serve static files
app.use(express.static(path.join(__dirname, "/../assets/public")));
// app.use("/assets", express.static("./../node_modules/govuk-frontend/govuk/assets"));

// parse body into req.body
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Channel all requests through the router
require("./router.dispatch")(app);

// unhandled errors
app.use((err, req, res, next) => {
    const status = err.status || 500;
    logger.error(`${status} - appError: ${err.stack}`);
    res.render("partials/error_500");
});

// unhandled exceptions - ideally, should never get to this point
process.on("uncaughtException", err => {
    const status = err.status || 500;
    logger.error(`${status} - uncaughtException: ${err.stack}`);
    process.exit(1);
});

// unhandled promise rejections
process.on("unhandledRejection", err => {
    const status = err.status || 500;
    logger.error(`${status} - unhandledRejection: ${err.stack}`);
    process.exit(1);
});

module.exports = app;
