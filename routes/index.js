import { Router } from "express";
import {
  createNewJob,
  deleteJob,
  getAllCreatedJobs,
  getAllJobs,
  getSingleJob,
  updateJob,
} from "../controllers/Job.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validationMiddleware.js";

const routerJob = Router();

routerJob.get("/", getAllJobs);
routerJob.post("/", createNewJob);
routerJob.get("/my-jobs", getAllCreatedJobs);
routerJob.get("/:id", getSingleJob);
routerJob.delete("/:id", deleteJob);
routerJob.patch("/:id", updateJob);

export default routerJob;
