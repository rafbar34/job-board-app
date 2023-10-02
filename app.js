import * as dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import morgan from 'morgan';
import {nanoid} from 'nanoid';

const app = express();

let jobs = [
  {id: nanoid(), company: 'apple', position: 'front-end'},
  {id: nanoid(), company: 'apple', position: 'front-end'},
];
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.get('/', (req, res) => {
  res.send('test');
});
app.post('/', (req, res) => {
  res.json({message: 'data recieved', data: req.body});
});

//GET ALL JOBS
app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({jobs});
});

//CREATE ALL JOBS
app.post('/api/v1/jobs', (req, res) => {
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
});

//GET SINGLE JOB
app.get('/api/v1/jobs/:id', (req, res) => {
  const {id} = req.params;

  const singleJob = jobs.find((job) => job.id === id);
  if (!singleJob) {
    return res.status(404).json({message: 'Error, Job dosent exist'});
  } else {
    res.status(200).json({job: singleJob});
  }
});
//Edit SINGLE JOB
app.put('/api/v1/jobs/:id', (req, res) => {
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
    res.status(200).json({job: editedJob});
  }
});
app.delete('/api/v1/jobs/:id', (req, res) => {
  const {id} = req.params;

  const singleJob = jobs.find((job) => job.id === id);
  if (!singleJob) {
    return res.status(404).json({message: 'Error, Job dosent exist'});
  } else {
    jobs.filter((job) => job.id !== id);
    res.status(200).json({message: 'job has been deleted'});
  }
});

app.listen(process.env.PORT, () => {
  console.log('server Runneing...');
});
