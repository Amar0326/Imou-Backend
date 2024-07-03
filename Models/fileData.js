const mongoose = require("mongoose");

const fileDataModel = mongoose.Schema(
  {
    SrNo: {
      type: String,
      required: true,
    },
    ShopName: {
      type: String,
    },
    Model: {
      type: String,
    },
    CameraSDCard: {
      type: String,
    },
    DateOfDispatch:{
        type:String
    }
  },
  { timestamps: true }
);

const FileData = mongoose.model("FileData", fileDataModel);
module.exports = FileData;
