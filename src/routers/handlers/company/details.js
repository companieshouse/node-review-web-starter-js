const logger = require("./../../../config/winston");
const GenericHandler = require("./../generic");

class DetailsHandler extends GenericHandler {
    constructor (companyId) {
        super();
        this.viewData = {
            title: "Details handler for company route",
            sampleKey: "sample value for company details screen",
            company_data: {
                id: companyId
            },
            errors: {}
        };
    }

    execute (req, res) {
        logger.info(`GET request for to retrieve company details, with id: ${req.params.id}`);
        // ...process request here and return data for the view
        return Promise.resolve(this.viewData);
    }

    // additional support method for handlers with more complex requirements
    supportMethod () {

    }
}

module.exports = DetailsHandler;
