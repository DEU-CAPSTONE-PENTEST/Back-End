import mongoose, { Schema } from "mongoose";

const outPutSchema = new Schema(
  {
    output: {
      type: String,
      required: true,
    },
    url: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Url",
    },
  },
  {
    timestamps: true,
  }
);

const OutPut = mongoose.model("OutPut", outPutSchema);

export default OutPut;
