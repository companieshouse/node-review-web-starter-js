const GenericHandler = require("./../generic");

class HomeHandler extends GenericHandler {
    constructor () {
        super();
        this.viewData = {
            title: "Home handler for index route",
            sampleKey: "sample value",
            errors: {}
        };
    }

    // use the "execute" method for handler logic
    // use additional support methods for handlers with more complex requirements
    execute (req, res) {
        return Promise.resolve(this.viewData);
    }

    supportMethod () {

    }
}

module.exports = HomeHandler;
