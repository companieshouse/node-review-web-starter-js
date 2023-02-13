const GenericHandler = require('./../generic');

class ProfileHandler extends GenericHandler {
  constructor() {
    super();
    this.viewData = {
  			title: 'Profile handler for user route',
        sampleKey:"sample value",
        errors: {}
		};
  }

  // use the "execute" method for handler logic
  // use additional support methods for handlers with more complex requirements
  execute (req, res) {
    return Promise.resolve(this.viewData);
  }

  supportMethod() {

  }
}

module.exports = ProfileHandler;
