const logger = require("./../../../lib/Logger");
const GenericHandler = require('./../generic');
const CompanyFormsValidator = require("./../../../lib/validation/formValidators/company");

class CreateHandler extends GenericHandler {

  constructor() {
    super();
    this.validator = new CompanyFormsValidator();
    this.viewData = {
         title: 'Create handler for company route',
         sampleKey:"sample value",
         errors: {},
     };
  }

  // process request here and return data for the view
  async execute (req, res, method = 'GET') {
      logger.info(`${method} request for to create a company `);

      try {
        
            if (method !== 'POST') {
                return this.viewData;
            }

            const validationErrors = await this.validator.validateCreateCompany(req.body);

            if (!Object.keys(validationErrors.stack).length) {
                this.viewData.errors = validationErrors.stack;
            } else {
                await this.save(req.body);
            }
            return this.viewData;
        } catch (err) {
            logger.error(`error creating a company: ${err}`);
            this.viewData.errors.serverError = this.errorManifest.generic.serverError;
            return this.viewData;
        }
  }

  // call service(s) to save data here
  save(payload) {
    return Promise.resolve(true);
  }

  supportMethod() {

  }
}

module.exports = CreateHandler;
