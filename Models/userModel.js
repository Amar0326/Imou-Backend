const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required:true
    },
    role:{
        type:String,
        default:"user"
    }
  },
  { timestamps: true }
);

const user = mongoose.model("User", userModel);
module.exports = user;
