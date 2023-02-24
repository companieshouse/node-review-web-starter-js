// Only include methods that validate common entities i.e. fields that are common to multiple forms
// These methods are then called by individual form validators that extend this class
// Examples of common fields common to multiple forms include: email, username, phone number, postcode, gender, etc...

const errorManifest = require("./../utils/error_manifests/default");
const logger = require("./../../config/winston");

class GenericValidator {
    constructor () {
        this.errorManifest = errorManifest;
        this.errors = this._getErrorSignature();
    }

    _getErrorSignature () {
        return {
            status: 400,
            code: "VALIDATION_ERRORS",
            message: this.errorManifest.validation.default.summary,
            stack: {}
        };
    }

    isValidEmail (email) {
        logger.info(`Request to validate email: ${email}`);
        const regex = "/^[email_regex]$/ig";
        if (regex.test(email)) {
            return true;
        }
        return false;
    }

    isValidUsername (username) {
        logger.info(`Request to validate username: ${username}`);
        const regex = "/^[username_regex]$/ig";
        if (regex.test(username)) {
            return true;
        }
        return false;
    }

    isValidGender (gender) {
        logger.info(`Request to validate gender: ${gender}`);
        const regex = "/^[gender_regex]$/ig";
        if (regex.test(gender)) {
            return true;
        }
        return false;
    }

    isValidPostCode (postCode) {
        logger.info(`Request to validate PostCode: ${postCode}`);
        const regex = "/^[postCode_regex]$/ig";
        if (regex.test(postCode)) {
            return true;
        }
        return false;
    }
}

module.exports = GenericValidator;
