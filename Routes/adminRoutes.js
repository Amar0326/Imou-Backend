const express = require("express")
const router = express.Router()
const {getAllUsers,deleteData} = require("../Controllers/adminControllers");

router.post("/getAllUsers",getAllUsers)
router.post("/deleteData/:id",deleteData)

module.exports = router