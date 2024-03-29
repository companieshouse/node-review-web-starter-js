const router = require("express").Router();
const ProfileHandler = require("./handlers/user/profile");
const SettingsHandler = require("./handlers/user/settings");

const routeViews = "route_views/user";

router.get("/profile", async (req, res, next) => {
    const handler = new ProfileHandler();
    const viewData = await handler.execute(req, res);
    res.render(`${routeViews}/profile`, viewData);
});

router.get("/settings", async (req, res, next) => {
    const handler = new SettingsHandler();
    const viewData = await handler.execute(req, res);
    res.render(`${routeViews}/settings`, viewData);
});

router.post("/settings", async (req, res, next) => {
    const handler = new SettingsHandler();
    const viewData = await handler.execute(req, res, "POST");
    res.render(`${routeViews}/settings`, viewData);
});

module.exports = router;
