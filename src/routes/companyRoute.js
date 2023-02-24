const router = require("express").Router();
const CreateHandler = require("./handlers/company/create");
const DetailsHandler = require("./handlers/company/details");

router.get("/create", async (req, res, next) => {
    const handler = new CreateHandler();
    const viewData = await handler.execute(req, res);
    res.render("company/create", viewData);
});

router.post("/create", async (req, res, next) => {
    const handler = new CreateHandler();
    const viewData = await handler.execute(req, res, "POST");
    res.render("company/create", viewData);
});

router.get("/details", async (req, res, next) => {
    const handler = new DetailsHandler();
    const viewData = await handler.execute(req, res);
    res.render("company/details", viewData);
});

module.exports = router;
