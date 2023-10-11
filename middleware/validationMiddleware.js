import {body, validationResult} from 'express-validator';

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

export const validateTest = validationErrors([
  [body('name').notEmpty().withMessage('name is require')],
]);
