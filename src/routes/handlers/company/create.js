const GenericHandler = require('./../generic');

class CreateHandler extends GenericHandler {

  constructor() {
    super();
    this.viewData = {
         title: 'Create handler for company route',
         sampleKey:"sample value",
         errors: {},
     };
  }

  execute (req, res, method = '') {
      if (method !== 'POST') {
          return Promise.resolve(this.viewData);
      }

      let savedRequest = false;

      const validationErrors = await this.validate(req.body);

      if(!Object.keys(validationErrors.stack).length) {
          this.viewData.errors = validationErrors.stack;
      } else {
        savedRequest = await this.save(req.body);
      }
      if (!savedRequest) {
        this.viewData.errors.serverError = this.errorManifest.generic.serverError;
        return Promise.reject(this.viewData);
      }

      return Promise.resolve(this.viewData);
  }

  // validate here
  validate(payload) {
    return Promise.resolve({});
  }

  // save data here
  save(payload) {
    return Promise.resolve(true);
  }

  supportMethod() {

  }
}

module.exports = CreateHandler;
