class WalioError extends Error {  
  constructor (message) {
    super(message)
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name
  }

  code() {
    return this.err_code  
  }
}

module.exports = {
	WalioError,
}