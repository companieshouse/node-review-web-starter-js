const router = require("express").Router();
const HomeHandler = require("./handlers/index/home");

router.get("/", async (req, res, next) => {
    const handler = new HomeHandler();
    const viewData = await handler.execute(req, res);
    res.render("index/home", viewData);
});

module.exports = router;
