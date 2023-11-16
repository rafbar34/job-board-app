import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import JobModel from "../models/JobModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  if (user) {
    res.status(StatusCodes.OK).json({ user: userWithoutPassword });
  }
};
export const getApplicationStats = async (req, res) => {
  // const users = await UserModel.countDocuments();
  const jobs = await JobModel.countDocuments();
  const fullTime = await JobModel.find({
    jobType: "full-time",
  }).countDocuments();
  const partTime = await JobModel.find({
    jobType: "part-time",
  }).countDocuments();
  const intern = await JobModel.find({
    jobType: "intership",
  }).countDocuments();
  res.status(StatusCodes.OK).json({ jobs, fullTime, partTime, intern });
};
export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;

  await UserModel.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: "user has been updated" });
};
