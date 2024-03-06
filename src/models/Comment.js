import mongoose, { Schema } from "mongoose";

const outPutSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    url: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Url",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OutPut = mongoose.model("OutPut", outPutSchema);

export default OutPut;
