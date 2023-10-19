import {verifyJWT} from '../routes/utils/token.js';

export const authenticateUser = async (req, res, next) => {
  const {token} = req.cookies;
  if (!token) {
    throw new Error('invalid token');
  }
  try {
    const {userId} = verifyJWT(token);
    req.user = {userId};
    // if(!veryify )
  } catch (err) {}

  next();
};
