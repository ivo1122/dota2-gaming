import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    coach: {
      type: mongoose.Types.ObjectId,
      ref: "Coach",
      required: true,
    },
    player: {
      type: mongoose.Types.ObjectId,
      ref: "Player",
      required: true,
    },
    ticketPrice: { type: String, required: true },
    appointmentDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);