const express = require("express");
const router = express.Router();

const user = require("../controllers/user");
const auth = require("../middleware/auth");

router.get("/users", auth, user.getUser);
router.post("/login", user.login);
router.post("/register", user.register);
router.post("/tokenIsValid", user.tokenIsValid);

module.exports = router;