const GenericHandler = require("./../generic");

class ProfileHandler extends GenericHandler {
    constructor () {
        super();
        this.viewData = {
            title: "Settings handler for user route",
            sampleKey: "sample value",
            errors: {}
        };
    }

    // use the "execute" method for handler logic
    // use additional support methods for handlers with more complex requirements
    execute (req, res, method = "GET") {
        return Promise.resolve(this.viewData);
    }

    supportMethod () {

    }
}

module.exports = ProfileHandler;
