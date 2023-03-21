const logger = require("./../../../config/winston");
const GenericHandler = require("./../generic");

class ProfileHandler extends GenericHandler {
    constructor () {
        super();
        this.viewData = {
            title: "Settings handler for user route",
            sampleKey: "sample value for user settings screen",
            errors: {}
        };
    }

    execute (req, res, method = "GET") {
        logger.info(`${method} request to retrieve user settings`);
        // ...process request here and return data for the view
        return Promise.resolve(this.viewData);
    }

    supportMethod () {

    }
}

module.exports = ProfileHandler;
