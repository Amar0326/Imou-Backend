const express = require("express")
const router = express.Router()
const {
    uploadFile,getFileData,searchData,deleteData
} = require("../Controllers/userControllers");

router.post("/uploadFile",uploadFile)
router.get("/getFileData",getFileData)
router.post("/searchData",searchData)
router.delete("/deleteData/:id",deleteData)

module.exports = router