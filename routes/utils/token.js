import jwt from "jsonwebtoken";

export const createJWT = (payload,req) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRED,
  });
  console.log(payload.userId)
  req.user = { userId: payload.userId };
  console.log(req.user)
  return token;
};

export const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
