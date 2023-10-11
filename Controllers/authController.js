import User from "../models/UserSchema.js";
import Coach from "../models/PlayersSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;

    if (role === "player") {
      user = await User.findOne({ email });
    } else if (role === "coach") {
      user = await Coach.findOne({ email });
    }

    //chech if user exist

    if (user) {
      return res.status(400).json({ message: " User already exist." });
    }

    //hast password

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    if(role === "player") {
        user = new User({
            name,
            email,
            password : hashPassword,
            photo,
            gender,
            role
        })
    }

    if(role === "coach") {
        user = new Coach({
            name,
            email,
            password : hashPassword,
            photo,
            gender,
            role
        })
    }

    await user.save()
    res.status(200).json({success:true, message: "User successfully created"})

  } catch (err) {
    res.status(500).json({success:false, message: "Internal server error, Try again"})

  }
};

export const login = async (req, res) => {
  try {
  } catch (err) {}
};
