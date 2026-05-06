class BaseController {
  sendResponse(res, data, message = 'Success') {
    res.json({
      success: true,
      message,
      data
    });
  }

  sendError(res, error, status = 500) {
    res.status(status).json({
      success: false,
      message: error.message
    });
  }
}

module.exports = BaseController;