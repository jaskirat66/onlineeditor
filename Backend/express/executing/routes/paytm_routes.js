const router = require("express").Router();
const paytm = require('../controllers/paytm/paytm_controller');
var express = require('express');
var app = express();


router.get("/request", paytm.getRequest);
router.post("/request", paytm.request);
router.post("/response", paytm.response);

module.exports = router;