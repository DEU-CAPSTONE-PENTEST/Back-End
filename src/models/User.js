import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "User name is required"],
      lowercase: true,
    },
    lastname: {
      type: String,
      required: [true, "User name is required"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email name is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password name is required"],
      minlength: [4, "At least 4 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
