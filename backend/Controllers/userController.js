import User from "../models/UserSchema.js";
import BookingSchema from "../../backend/models/BookingSchema.js"
import CoachSchema from "../../backend/models/CoachSchema.js"


export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
     const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      succes: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      succes: true,
      message: "User found",
      data: user,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No user found" });
  }
};

export const getAllUser = async (req, res) => {
  const id = req.params.id;

  try {
    const users = await User.find({}).select("-password");

    res.status(200).json({
      succes: true,
      message: "Users found",
      data: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};



export const getUserProfile = async(req,res) => {
  const userId = req.userId
  try {
    const user = await User.findById(userId)

    if(!user) {
      return res.status(404).json({success:false , message:"User not found"})
    }
    
    const {password, ...rest} = user._doc
    res.status(200).json({success:true,message:"Profile info is getting", data:{...rest}})
  } catch (err) {
    return res.status(500).json({success:false , message:"Something went wrong, cannot get"})

  }
}


export const getMyAppointments = async(req,res) => {
  try {
    //step 1 : retrieve appointments from booking for specific user
    const bookings = await BookingSchema.find({user:req.userId})

    //step 2 : extract coaches IDs from appointments
    const coachesIds = bookings.map(el => el.coach.id)
    //step 3 : retrieve coaches using coaches IDs
    const coaches = await CoachSchema.find({_id:{$in:coachesIds}}).select("-password")

    res.status(200).json({success:true, message:"Appointments are  getting", data:coaches})



  } catch (err) {
    return res.status(500).json({success:false , message:"Something went wrong, cannot get"})

  }
}