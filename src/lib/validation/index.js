const errorManifest = require(`${serverRoot}/lib/utils/error_manifests/default`).validation;
const logger = require(`${serverRoot}/config/winston`);

class Validator {

  constructor() {

  }

  isValidEmail(email) {
    logger.info(`Request to validate email: ${email}`);
    let errors = this._getErrorSignature();
    return new Promise((resolve, reject) => {
      // validate email here
    });
  }
}

module.exports = Validator;
