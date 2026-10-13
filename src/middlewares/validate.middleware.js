import { sendFailure } from '../utils/response.js';

const validateRequest = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
  });
  if (error) {
    const details = error.details.map((detail) => ({
      msg: detail.message,
      path: detail.path.join('.'),
      location: 'body',
      value: detail.context?.value,
    }));

    return sendFailure(
      res,
      {
        code: 400,
        message: 'Validation failed',
        details: details,
      },
      400
    );
  }

  req.body = value;
  return next();
};

export default validateRequest;
