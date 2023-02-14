const logger = require(""./../../Logger");
const errorManifest = "./../utils/error_manifests/default";

class UserFormsValidator extends Validator {

    constructor() {
      this.errors = {};
      this.payload = {};
    }

    _getErrorSignature () {
      return {
        status: 400,
        code: 'VALIDATION_ERRORS',
        message: errorManifest.default.summary,
        stack: {}
      }
    }

    validateUpdateSettings(payload) {
      logger.info(`Request to validate email: ${email}`);
      let errors = this._getErrorSignature();
      return new Promise((resolve, reject) => {
        // validate user settings form here
        resolve(true);
      });
    }
};

module.exports = UserFormsValidator;
