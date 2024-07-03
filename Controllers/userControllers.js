const File = require("../Models/fileData");
const uploadFile = async (req, res) => {
  try {
    const { excelData } = req.body;
    // console.log("exceldata",excelData);
    const dataArray = JSON.parse(excelData);
    const dataToSave = dataArray.map((data) => ({
      SrNo: data.SrNo,
      ShopName: data.ShopName,
      Model: data.Model,
      CameraSDCard: data.Camera_SDCard,
      DateOfDispatch: data.DateOfDispatch,
    }));
    const result = await File.insertMany(dataToSave);
    res.send({
      success: true,
      message: "File Uploaded Successfully",
      result,
    });
  } catch (err) {
    res.send({
      success: false,
      message: "Something Went Wrong",
    });
  }
};
const getFileData = async (req, res) => {
  try {
    const Data = await File.find();
    res.send({
      success: true,
      message: "Data fetched",
      data: Data,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const searchData = async (req, res) => {
  try {
    const { searchQuery } = req.body;
    console.log(searchQuery);
    const Data = await File.find({
      $or: [
        { SrNo: { $regex: ".*" + searchQuery + ".*", $options: "i" } },
        { ShopName: { $regex: ".*" + searchQuery + ".*", $options: "i" } },
        { Model: { $regex: ".*" + searchQuery + ".*", $options: "i" } },
        { CameraSDCard: { $regex: ".*" + searchQuery + ".*", $options: "i" } },
        {
          DateOfDispatch: { $regex: ".*" + searchQuery + ".*", $options: "i" },
        },
      ],
    });

    res.status(200).send({ success: true, data: Data });
  } catch (error) {
    console.error("Error:", error);
    res.send({ success: false, message: "Internal server error" });
  }
};
const deleteData = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const deleteData = await File.findByIdAndDelete(_id);

    if (!deleteData) {
      return res
        .status(404)
        .send({ success: false, message: "Data Not found" });
    }
    return res.send({
      success: true,
      message: "Data deleted successfully",
    });
  } catch (err) {
    res.send({
      succuss: false,
      message: err.message,
    });
  }
};
module.exports = {
  uploadFile,
  getFileData,
  searchData,
  deleteData,
};
