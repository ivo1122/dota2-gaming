import mongoose from "mongoose";
import Coach from "./CoachSchema.js"

const reviewSchema = new mongoose.Schema(
  {
    coach: {
      type: mongoose.Types.ObjectId,
      ref: "Coach",
    },
    player: {
      type: mongoose.Types.ObjectId,
      ref: "Player",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });
  next();
});

reviewSchema.statics.calcAverageRatings = async function (coachId) {
  //this points the current review
  const stats = await this.aggregate([
    {
      $match: { coach: coachId },
    },
    {
      $group:{
        _id:"$doctor",
        numOfRating:{$sum:1},
        avgRating: {$avg:"$rating"}
      }
    }
  ]);

  await Coach.findByIdAndUpdate(coachId , {
    totalRating: stats[0].numberOfRating,
    averageRating:stats[0].avgRating,
  })
};

reviewSchema.post("save", function() {
  this.constructor.calcAverageRatings(this.coach)
})

export default mongoose.model("Review", reviewSchema);
