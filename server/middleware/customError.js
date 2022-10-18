class CustomError extends Error {

    constructor(httpCodes, errorCode, message) {
        super(message)
        this.httpCodes = httpCodes;
        this.errorCode = errorCode;
        this.message = message;
    }
}

module.exports = CustomError;