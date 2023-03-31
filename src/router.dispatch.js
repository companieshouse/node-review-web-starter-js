// Do Router dispatch here, i.e. map incoming routes to appropriate router

module.exports = function (app) {
    app.use("/", require("./routers/indexRouter"));
    app.use("/user", require("./routers/userRouter"));
    app.use("/company", require("./routers/companyRouter"));
    app.use("*", (req, res) => {
        res.status(404).render("partials/error_400");
    });
};
