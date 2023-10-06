import {Router} from 'express';
import { createNewJob, deleteJob, getAllJobs, getSingleJob, updateJob } from '../controllers/Job.js';


const routerJob = Router();

routerJob.get('/', getAllJobs);
routerJob.post('/', createNewJob);
routerJob.get('/:id', getSingleJob);
routerJob.delete('/:id', deleteJob);
routerJob.put('/:id', updateJob);

export default routerJob
