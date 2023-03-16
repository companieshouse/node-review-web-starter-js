const logger = require("./../../../config/winston");
const GenericHandler = require("./../generic");

class ProfileHandler extends GenericHandler {
    constructor () {
        super();
        this.viewData = {
            title: "Profile handler for user route",
            sampleKey: "sample value for user profile screen",
            errors: {}
        };
    }

    execute (req, res) {
        logger.info(`GET request to retrieve user profile`);
        // ...process request here and return data for the view
        return Promise.resolve(this.viewData);
    }

    // additional support method for handlers with more complex requirements
    supportMethod () {

    }
}

module.exports = ProfileHandler;
