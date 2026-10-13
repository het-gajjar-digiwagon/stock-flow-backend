import { sendFailure } from '../utils/response.js';

const errorHandler = (error, _req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  const normalizedError =
    error instanceof Error ? error : new Error(String(error));
  const statusCode =
    Number.isInteger(normalizedError.status) &&
    normalizedError.status >= 400 &&
    normalizedError.status < 600
      ? normalizedError.status
      : 500;
  const message =
    statusCode < 500 ? normalizedError.message : 'Internal server error';
  const response = { code: statusCode, message };

  if (normalizedError.details !== undefined) {
    response.details = normalizedError.details;
  }

  if (statusCode >= 500) {
    console.error(normalizedError);
  }

  return sendFailure(res, response, statusCode);
};

export default errorHandler;
