const router = require("express").Router();
const CreateHandler = require("./handlers/company/create");
const DetailsHandler = require("./handlers/company/details");

const routeViews = "route_views/company";

router.get("/create", async (req, res, next) => {
    const handler = new CreateHandler();
    const viewData = await handler.execute(req, res);
    res.render(`${routeViews}/create`, viewData);
});

router.post("/create", async (req, res, next) => {
    const handler = new CreateHandler();
    const viewData = await handler.execute(req, res, "POST");
    res.render(`${routeViews}/create`, viewData);
});

router.get("/details/:id", async (req, res, next) => {
    const handler = new DetailsHandler(req.params.id);
    const viewData = await handler.execute(req, res);
    res.render(`${routeViews}/details`, viewData);
});

module.exports = router;
