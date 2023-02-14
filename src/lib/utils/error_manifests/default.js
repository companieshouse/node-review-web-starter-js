const ErrorManifest = {
  generic: {
    serverError: {
      summary: "Internal server error. Please try again"
    }
  },
  validation: {
    default: {
      summary: "Your request contains validation errors",
      inline: "Your request contains validation errors"
    },
    email: {
      blank: {
        summary: "Enter your email address",
        inline: "Enter your email address"
      },
      incorrect: {
        summary: "Email not valid",
        inline: "Enter an email address in the correct format, like name@example.com"
      }
    },
  }
}

module.exports = ErrorManifest;
