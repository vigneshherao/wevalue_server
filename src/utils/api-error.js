class ApiError extends Error {
  constructor(
    status,
    message = 'something went wrong',
    error = [],
    stack = ''
  ) {
    super(message);

    this.status = status;
    this.message = message;
    this.error = error;
    this.sucess = false;
    if (stack) {
      this.stack = stack;
    }
  }
}

module.exports = ApiError;
