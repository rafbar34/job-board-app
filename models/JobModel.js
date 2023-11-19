import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../routes/utils/constants.js";

const JobSchema = new mongoose.Schema(
  {
    title: String,
    logo: String,
    company: String,
    desc: String,
    salary: Number,
    currency: {
      type: String,
    },
    position: String,
    // jobStatus: {
    //   type: String,
    //   enum: Object.values(JOB_STATUS),
    //   default: JOB_STATUS.PENDING,
    // },
    jobType: {
      type: String,

      // default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
