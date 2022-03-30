const sendFailedResponse = (
  res,
  message = "Something went wrong",
  statusCode = 400
) => {
  res.status(statusCode).send({
    message,
  });
};

module.exports = { sendFailedResponse };
