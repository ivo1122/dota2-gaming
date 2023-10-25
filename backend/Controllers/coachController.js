import BookingSchema from "../models/BookingSchema.js";
import CoachSchema from "../models/CoachSchema.js";

export const updatedCoach = async (req, res) => {
  const id = req.params.id;

  try {
    const updateCoach = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      succes: true,
      message: "Successfully updated",
      data: updateCoach,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteCoach = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await CoachSchema.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleCoach = async (req, res) => {
  const id = req.params.id;

  try {
    const coach = await CoachSchema.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      succes: true,
      message: "Coach found",
      data: coach,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No coach found" });
  }
};

export const getAllCoaches = async (req, res) => {
  try {
    const { query } = req.query;
    let coaches;

    if (query) {
      coaches = await CoachSchema.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select(-"password");
    } else {
      const coaches = await CoachSchema.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      succes: true,
      message: "Coaches found",
      data: coaches,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getCoachProfile = async (req, res) => {
  const coachId = req.userId;

  try {
    const coach = await CoachSchema.findById(userId);

    if (!coach) {
      return res
        .status(404)
        .json({ success: false, message: "Coach not fount" });
    }

    const { password, ...rest } = coach._doc;
    const appointments = await BookingSchema.find({ coach: coachId });

    res
      .status(200)
      .json({
        success: true,
        message: "Profile info is getting",
        data: { ...rest, appointments },
      });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong, cannot get" });
  }
};
