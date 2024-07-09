const express = require("express")
const router = express.Router()
const {
    uploadFile,getFileData,searchData
} = require("../Controllers/userControllers");

router.post("/uploadFile",uploadFile)
router.get("/getFileData",getFileData)
router.post("/searchData",searchData)


module.exports = router
