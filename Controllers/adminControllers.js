const User = require("../Models/userModel")

const getAllUsers =async(req,res)=>{
    try{
        const {id}=req.body
        console.log(id);
      const getAdmin = await User.findOne({_id:id})
      if(!getAdmin){

        return res.send({
            success:false,
            message:"Not Authorized"
        })
      }else{
        if(getAdmin.role === "admin"){
          const allUsers = await User.find()
          return res.send({
            success:true,
            message:"User Fetched",
            allUsers
        })
        }else{
            return res.send({
                success:false,
                message:"Not Authorized"
            })
        }
      }
    }catch(err){
        return res.send({
            success:false,
            message:err.message
        })
    }
}

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
    getAllUsers,
    deleteData
}