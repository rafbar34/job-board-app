import { nanoid } from "nanoid";
import JobModel from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import { verifyJWT } from "../routes/utils/token.js";
import fs from "fs";
import path from "path";
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await JobModel.find({});
    let jobsWithLogo = [];
    jobs.forEach((element) => {
      if (!element.logo) {
        jobsWithLogo.push(element);
      } else {
        const file = fs.readFileSync(`images/${element.title}.png`);
        const base64data = Buffer.from(file, "binary").toString("base64");
        element.logo = base64data;
        jobsWithLogo.push(element);
      }
    });

    res.status(StatusCodes.OK).json({ jobsWithLogo });
  } catch (err) {
    console.log(err);
    res
      .status(StatusCodes.GATEWAY_TIMEOUT)
      .json({ msg: "server error", reason: err });
  }
};
export const getAllCreatedJobs = async (req, res) => {
  const { userId } = verifyJWT(req.query.token);
  try {
    const jobs = await JobModel.find({ createdBy: userId });
    let jobsWithLogo = [];
    jobs.forEach((element) => {
      if (!element.logo) {
        jobsWithLogo.push(element);
      } else {
        const file = fs.readFileSync(`images/${element.title}.png`);
        const base64data = Buffer.from(file, "binary").toString("base64");
        element.logo = base64data;
        jobsWithLogo.push(element);
      }
    });
    res.status(StatusCodes.OK).json({ jobsWithLogo });
  } catch (err) {
    res
      .status(StatusCodes.GATEWAY_TIMEOUT)
      .json({ msg: "server error", reason: err });
  }
};
export const createNewJob = async (req, res) => {
  const { userId } = verifyJWT(req.query.token);
  var base64Data = req.body.logo.replace(/^data:image\/png;base64,/, "");

  fs.writeFile(
    `images/${req.body.title}.png`,
    base64Data,
    "base64",
    function (err) {
      console.log(err);
    }
  );
  req.body.logo = `images/${req.body.title}.png`;
  try {
    const newJob = await JobModel.create(req.body);
    res.status(StatusCodes.CREATED).json({ newJob });
  } catch (err) {
    res.status(500).json({ msg: "server error", reason: err });
  }
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;

  try {
    const singleJob = await JobModel.findById(id);
    if (!singleJob) {
      res.status(StatusCodes.NOT_FOUND).json({ job: "not found" });
      throw new Error("job with this id isnt exist");
    } else {
      res.status(StatusCodes.OK).json({ job: singleJob });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "server error", reason: err });
  }
};

export const updateJob = async (req, res) => {
  const { userId } = verifyJWT(req.query.token);
console.log(userId)
  try {
    if (
      !req.body.company ||
      !req.body.position ||
      req.body.salary ||
      req.body.desc
    ) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Error, some values are empty" });
    }
    const updatedJob = await JobModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedJob) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Error, Job dosent exist" });
    } else {
      res.status(StatusCodes.OK).json({ job: updatedJob });
    }
  } catch (err) {
    res.status(500).json({ msg: "server error", reason: err });
  }
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await JobModel.findByIdAndDelete(id);
  try {
    if (!removedJob) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Error, Job dosent exist" });
    } else {
      res
        .status(StatusCodes.OK)
        .json({ message: "job has been deleted", job: removedJob });
    }
  } catch (err) {
    res.status(500).json({ msg: "server error", reason: err });
  }
};
