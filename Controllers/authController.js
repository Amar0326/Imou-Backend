const User = require("../Models/userModel");

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        console.log("Data :: ",username,password)
        if (!user) return res.send({ success: false, message: "User not found" });
        if (user.password === password) {
          return res.send({
            success: true,
            message: "User logged in",
            user,
          });
        } else {
          return res.send({
            success: false,
            message: "Invalid Password",
          });
        }
        
      } catch (err) {
        res.send({
          success: false,
          message: err.message,
        });
      }
};

const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user)
      return res.send({ success: false, message: "User already exist" });
    const newUser = new User({
      username: username,
      password: password,
    });

    await newUser.save();
    return res.send({
      success: true,
      message: "User Added Successfully",
      newUser,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(userId);
    const user = await User.findOne({ _id:userId });
    if (!user) return res.send({ success: false, message: "User not found" });
      return res.send({
        success: true,
        message: "User Data fetched",
        user,
      });
   
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};


module.exports = {
  login,
  signUp,
  getUser
};
