export function sendSuccess(res, data = {}, meta, status = 200) {
  const body = {
    success: true,
    data,
  };

  if (meta !== undefined) {
    body.meta = meta;
  }

  return res.status(status).json(body);
}

export function sendFailure(res, data = {}, status = 400) {
  const body = {
    success: false,
    err: data,
  };

  return res.status(status).json(body);
}

export default {
  sendSuccess,
  sendFailure,
};
