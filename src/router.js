
// Map incoming path to appropriate route (sometimes called "route dispatch")

module.exports = function (app) {
    app.use('/', require('./routes/index'));
    app.use('/user', require('./routes/user'));
    app.use('/company', require('./routes/company'));
}
