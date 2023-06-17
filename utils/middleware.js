const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).send({ error: "content is missing" });
  } else if (error.name === "JsonWebTokenError") {
    return res.status(400).send({ error: error.message });
  } else if (error.name == +"TokenExpiredError") {
    return res.status(400).json({ error: "Token expired" });
  }

  next(error);
};

module.exports = { errorHandler };
