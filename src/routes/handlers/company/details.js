const GenericHandler = require("./../generic");

class DetailsHandler extends GenericHandler {
    constructor () {
        super();
        this.viewData = {
            title: "Details handler for company route",
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

module.exports = DetailsHandler;
