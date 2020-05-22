const router = require("express").Router();

router.use("/paytm", require("../routes/paytm_routes"));

module.exports = router;