import mongoose from "mongoose";

const refundSchema = new mongoose.Schema(
  {
    benefit: {
      type: String,
      required: true,
    },
    epf: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    reason: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Refund = mongoose.model("Refund", refundSchema);

export default Refund;
