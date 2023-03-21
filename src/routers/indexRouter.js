const router = require("express").Router();
const HomeHandler = require("./handlers/index/home");

const routeViews = "route_views/index";

router.get("/", async (req, res, next) => {
    const handler = new HomeHandler();
    const viewData = await handler.execute(req, res);
    res.render(`${routeViews}/home`, viewData);
});

module.exports = router;
