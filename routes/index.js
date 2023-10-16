import {Router} from 'express';
import { createNewJob, deleteJob, getAllJobs, getSingleJob, updateJob } from '../controllers/Job.js';
import { validateIdParam, validateJobInput } from '../middleware/validationMiddleware.js';


const routerJob = Router();

routerJob.get('/', getAllJobs);
routerJob.post('/',validateJobInput, createNewJob);
routerJob.get('/:id',validateIdParam, getSingleJob);
routerJob.delete('/:id',validateIdParam, deleteJob);
routerJob.put('/:id',validateIdParam, updateJob);

export default routerJob
