export const authenticateUser = async (req, res, next) => {
  const {token} = req.cookies;
  if (!token) {
    throw new Error("invalid token")
  }

  next();
};
