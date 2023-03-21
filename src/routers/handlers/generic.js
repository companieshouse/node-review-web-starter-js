// Generic handler is the base handler that is extended by all other handlers
// It contains methods that are common to multiple route handlers

const errorManifest = require("./../../lib/utils/error_manifests/default");

class GenericHandler {
    constructor () {
        this.errrorManifest = errorManifest;
    }

    processHandlerException (err) {
        if (err.name === "VALIDATION_ERRORS") {
            return err.stack;
        }
        return {
            serverError: this.errorManifest.generic.serverError
        };
    }

    someSharedMethod () {
        return {};
    }
}

module.exports = GenericHandler;
