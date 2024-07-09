const express = require("express")
const router = express.Router()
const {
    login,signUp,getUser
} = require("../Controllers/authController");

router.post("/login",login)
router.post("/signUp",signUp)
router.post("/getUser",getUser)

module.exports = router