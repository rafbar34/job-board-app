import { nanoid } from 'nanoid';

let jobs = [
  {id: nanoid(), company: 'apple', position: 'front-end'},
  {id: nanoid(), company: 'apple', position: 'front-end'},
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({jobs});
};
export const createNewJob = async (req, res) => {
  const {company, position} = req.body;

  if (!company || !position) {
    return res.status(400).json({message: 'Error, some values are empty'});
  } else {
    const newJob = {
      id: nanoid(),
      company,
      position,
    };

    jobs.push(newJob);
    res.status(201).json({message: 'Job has been successfully created'});
  }
};

export const getSingleJob = async (req, res) => {
  const {id} = req.params;

  const singleJob = jobs.find((job) => job.id === id);
  if (!singleJob) {
    throw new Error('job with this id isnt exist');
    return res.status(404).json({message: 'Error, Job dosent exist'});
  } else {
    res.status(200).json({job: singleJob});
  }
};

export const updateJob = (req, res) => {
  const {id} = req.params;
  const {company, position} = req.body;

  if (!company || !position) {
    return res.status(400).json({message: 'Error, some values are empty'});
  }
  const singleJob = jobs.find((job) => job.id === id);
  if (!singleJob) {
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
};

export const deleteJob = (req, res) => {
  const {id} = req.params;

  const singleJob = jobs.find((job) => job.id === id);
  if (!singleJob) {
    return res.status(404).json({message: 'Error, Job dosent exist'});
  } else {
    jobs.filter((job) => job.id !== id);
    res.status(200).json({message: 'job has been deleted'});
  }
};
