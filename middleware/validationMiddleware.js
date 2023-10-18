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
        console.log(errors.errors, 'errr');
        const errorMessage = errors.errors[0].msg;
        console.log(errorMessage);
        return res.status(400).json({error: errorMessage});
      }
    },
  ];
};

export const validateJobInput = validationErrors([
  body('company').isEmpty().withMessage('company is required'),
  body('position').isEmpty().withMessage('position is required'),
  body('jobLocation').isEmpty().withMessage('job Location is required'),
  body('jobStatus')
    .isIn(Object.values(JOB_STATUS))
    .withMessage('invalid value Job status'),
]);

export const validateIdParam = validationErrors([
  param('id').custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new Error('invalid id');
    const singleJob = await JobModel.findById(value);
    if (!singleJob) {
      throw new Error('job with this id isnt exist');
    }
  }),
]);
export const validateRegister = validationErrors([
  body('name').isEmpty().withMessage('enter name'),
  body('email')
    .isEmail()
    .withMessage('incorrect email')
    // .isEmpty()
    // .withMessage('enter email')
    .custom(async (email) => {
      const user = await UserModel.findOne({email});
      if (user) {
        throw new Error('email already exist');
      }
    }),
  body('password').isStrongPassword().withMessage('password is to weak'),
]);
export const validateLogin = validationErrors([
  body('email')
    .isEmail()
    .withMessage('incorrect email')
    // .isEmpty()
    // .withMessage('enter email')
    .custom(async (email) => {
      const user = await UserModel.findOne({email});
      if (!user) {
        throw new Error('email dosent exist');
      }
    }),
  body('password').isStrongPassword().withMessage('password is to weak'),
]);
