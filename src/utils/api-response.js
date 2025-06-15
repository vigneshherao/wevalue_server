class ApiResponse {
  constructor(status, message = 'sucess', data) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.sucess = status < 400;
  }
}

module.exports = ApiResponse;
