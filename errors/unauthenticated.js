const { StatusCodes } = require("http-status-codes")
const CustomAPIError = require("./custom-error")

class Unauthenticated extends CustomAPIError {
  constructor(message) {
    super(message)
    this.StatusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = Unauthenticated
