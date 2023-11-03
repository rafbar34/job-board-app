import {body, param, validationResult} from 'express-validator';
import {JOB_STATUS} from '../routes/utils/constants.js';
import mongoose from 'mongoose';
import JobModel from '../models/JobModel.js';
import UserModel from '../models/UserModel.js';

const validationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        next();
      } else {
        const errorMessage = errors.errors[0].msg;
        return res.status(400).json({error: errorMessage});
      }
    },
  ];
};

export const validateJobInput = validationErrors([
  // body('jobStatus')
  //   .isIn(Object.values(JOB_STATUS))
  //   .withMessage('invalid value Job status'),
]);

export const validateIdParam = validationErrors([
  param('id').custom(async (value, {req}) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new Error('invalid id');
    const singleJob = await JobModel.findById(value);
    if (!singleJob) {
      throw new Error('job with this id isnt exist');
    }
    const isAdmin = req.user.role === 'admin';
    const isOwner = req.user.userId === job.createdBy.toString();
    if (!isAdmin && isOwner) {
      throw new Error('not authorize');
    }
  }),
]);
export const validateRegister = validationErrors([
  body('email')
    // .isEmpty()
    // .withMessage('enter email')
    .custom(async (email) => {
      const user = await UserModel.findOne({email});
      if (user) {
        throw new Error('email already exist');
      }
    }),
]);
export const validateLogin = validationErrors([
  body('email').custom(async (email) => {
    const user = await UserModel.findOne({email});
    if (!user) {
      throw new Error('email dosent exist');
    }
  }),
]);

export const validateUpdateUserInput = validationErrors([
  body('email').custom(async (email, {req}) => {
    const user = await UserModel.findOne({email});
    if (user && user.id.ToString() === req.user.userId) {
      throw new Error('email already exist');
    }
  }),
]);
