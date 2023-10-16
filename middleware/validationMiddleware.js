import {body, validationResult} from 'express-validator';
import {JOB_STATUS} from '../routes/utils/constants.js';

const validationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        next();
      } else {
        const errorMessage = errors.array().map(() => error.msg);
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
    .withMessage('invalid value'),
]);
