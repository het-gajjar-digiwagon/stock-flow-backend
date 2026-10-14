import { sendFailure } from '../utils/response.js';

const validateRequest = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
  });
  if (error) {
    //This is the structure of validation error obj
    const details = error.details.map((detail) => ({
      msg: detail.message,
      value: detail.context?.value,
    }));

    return sendFailure(
      res,
      {
        code: 400,
        msg: 'Validation failed',
        details: details,
      },
      400
    );
  }

  req.body = value;
  return next();
};

export default validateRequest;
