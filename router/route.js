const express = require("express");

const trackController = require("../controller/track");

const router = express.Router();

//World Wide Updated Data of Covid
router.get("/country-Info", trackController.getCountryInfo);

//All List of Country Info and data
router.get("/country", trackController.getCountry);

//Updated data of Particular country
router.get("/country/:countryCode", trackController.getCountryParticular);

module.exports = router;
