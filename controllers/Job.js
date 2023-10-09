import {nanoid} from 'nanoid';
import JobModel from '../models/JobModel.js';


export const getAllJobs = async (req, res) => {
  try {
    const jobs = await JobModel.find({});
    res.status(200).json({jobs});
  } catch (err) {
    res.status(500).json({msg: 'server error', reason: err});
  }
};
export const createNewJob = async (req, res) => {
  try {
    const newJob = await JobModel.create(req.body);
    res.status(201).json({newJob});
  } catch (err) {
    res.status(500).json({msg: 'server error', reason: err});
  }
};

export const getSingleJob = async (req, res) => {
  const {id} = req.params;
  try {
    const singleJob = JobModel.findById(id);
    if (!singleJob) {
      throw new Error('job with this id isnt exist');
    } else {
      res.status(200).json({job: singleJob});
    }
  } catch (err) {
    res.status(500).json({msg: 'server error', reason: err});
  }
};

export const updateJob = async (req, res) => {
  const {id} = req.params;
  try {
    if (!company || !position) {
      return res.status(400).json({message: 'Error, some values are empty'});
    }
    const updatedJob = await JobModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedJob) {
      return res.status(404).json({message: 'Error, Job dosent exist'});
    } else {
      const otherJobs = jobs.filter((job) => job.id !== id);
      const editedJob = {
        id: id,
        company,
        position,
      };
      const modificatiedArray = [...otherJobs, editedJob];
      res.status(200).json({job: modificatiedArray});
    }
  } catch {
    res.status(500).json({msg: 'server error', reason: err});
  }
};

export const deleteJob = async (req, res) => {
  const {id} = req.params;
  const removedJob = await JobModel.findByIdAndDelete(id);
  try {
    if (!removedJob) {
      return res.status(404).json({message: 'Error, Job dosent exist'});
    } else {
      res.status(200).json({message: 'job has been deleted', job: removedJob});
    }
  } catch (err) {
    res.status(500).json({msg: 'server error', reason: err});
  }
};
