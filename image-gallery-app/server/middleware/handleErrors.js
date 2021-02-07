const multer = require('multer');

const handleErrors = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
  
    return res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
  
  
  module.exports = handleErrors;