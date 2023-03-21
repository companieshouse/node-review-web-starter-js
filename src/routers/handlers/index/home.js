const logger = require("./../../../config/winston");
const GenericHandler = require("./../generic");

class HomeHandler extends GenericHandler {
    constructor () {
        super();
        this.viewData = {
            title: "Home handler for index route",
            sampleKey: "sample value for home page screen",
            errors: {}
        };
    }

    execute (req, res) {
        logger.info(`GET request for to serve home page`);
        // ...process request here and return data for the view
        return Promise.resolve(this.viewData);
    }

    // additional support method for handlers with more complex requirements
    supportMethod () {

    }
}

module.exports = HomeHandler;
