const logger = require("./../../../config/winston");
const GenericHandler = require("./../generic");
const CompanyFormsValidator = require("./../../../lib/validation/formValidators/company");

class CreateHandler extends GenericHandler {
    constructor () {
        super();
        this.validator = new CompanyFormsValidator();
        this.viewData = {
            errors: {},
            title: "Create handler for company route",
            sampleKey: "sample value for create a company screen"
        };
    }

    // process request here and return data for the view
    async execute (req, res, method = "GET") {
        logger.info(`${method} request to create a company`);
        try {
            if (method !== "POST") {
                return this.viewData;
            }
            this.viewData.payload = req.body;
            await this.validator.validateCreateCompany(req.body);
            await this.save(req.body);
            this.viewData.dataSaved = true;
        } catch (err) {
            logger.error(`error creating a company: ${err}`);
            this.viewData.errors = this.processHandlerException(err);
        }
        return this.viewData;
    }

    // call service(s) to save data here
    save (payload) {
        return Promise.resolve(true);
    }

    // additional support method for handlers with more complex requirements
    supportMethod () {

    }
}

module.exports = CreateHandler;
