const express = require("express");
const router = express.Router();

const profile = require("../controllers/profile");

router.get(`/profile`, profile.findProfile);
router.put(`/home`, profile.updateRecord);

module.exports = router;