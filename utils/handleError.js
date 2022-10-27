export const handleError = (msg = "Internal Server Error", status = 500) => {
  const error = new Error(msg);
  error.status = status;
  return error;
};
