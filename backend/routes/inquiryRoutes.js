const express = require('express');
const router = express.Router();
const { submitInquiry } = require('../controllers/inquiryController');

// POST /api/inquiry - handle inquiry form submissions
router.post('/inquiry', submitInquiry); // no need for try/catch here since already handled

module.exports = router;
