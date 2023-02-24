const router = require("express").Router();
const ProfileHandler = require("./handlers/user/profile");
const SettingsHandler = require("./handlers/user/settings");

router.get("/profile", async (req, res, next) => {
    const handler = new ProfileHandler();
    const viewData = await handler.execute(req, res);
    res.render("user/profile", viewData);
});

router.get("/settings", async (req, res, next) => {
    const handler = new SettingsHandler();
    const viewData = await handler.execute(req, res);
    res.render("user/settings", viewData);
});

router.post("/settings", async (req, res, next) => {
    const handler = new SettingsHandler();
    const viewData = await handler.execute(req, res, "POST");
    res.render("user/settings", viewData);
});

module.exports = router;
