import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema(
  {
    url: {
      type: String,
      trim: true,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    output: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OutPut",
    },
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model("Url", urlSchema);

export default Url;
