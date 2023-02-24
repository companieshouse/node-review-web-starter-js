
// Map incoming path to appropriate route (sometimes called "route dispatch")

module.exports = function (app) {
    app.use("/", require("./routes/indexRoute"));
    app.use("/user", require("./routes/userRoute"));
    app.use("/company", require("./routes/companyRoute"));
};
