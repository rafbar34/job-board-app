import { verifyJWT } from "../routes/utils/token.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.query;
  if (!token) {
    throw new Error("invalid token");
  }
  try {
    const { userId } = verifyJWT(token);
    req.user = { userId };
    next();
  } catch (err) {
    throw new Error("auth invalid");
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role)) {
      throw Error("You havent permission");
    } else {
      next();
    }
  };
};
