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
const sortByMonth = (array) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push({
      month: new Date(element.createdAt).getMonth() + 1,
    });
  }
  const getNumberFullTimeJobsInMonths = months.map((months) => {
    return newArray.filter((x) => {
      return x.month === months;
    });
  });
  return getNumberFullTimeJobsInMonths;
};
export const getApplicationStats = async (req, res) => {
  // const users = await UserModel.countDocuments();
  const jobs = await JobModel.countDocuments();
  const fullTime = await JobModel.find({
    jobType: "full-time",
  });
  const partTime = await JobModel.find({
    jobType:"part-time",
  });
  const intern = await JobModel.find({
    jobType: "intership",
  });
  const fulltimeArray = sortByMonth(fullTime);
  const partTimeArray = sortByMonth(partTime);
  const internArray = sortByMonth(intern);
  res
    .status(StatusCodes.OK)
    .json({
      jobs,
      fullTime: fulltimeArray,
      partTime: partTimeArray,
      intern: internArray,
    });
};
export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;

  await UserModel.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: "user has been updated" });
};
