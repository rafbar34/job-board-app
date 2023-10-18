import {StatusCodes} from 'http-status-codes';
import UserModel from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import {comparePassword, hashPassword} from '../routes/utils/passwords.js';
import {createJWT} from '../routes/utils/token.js';
export const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await UserModel.create(req.body);

  res.status(StatusCodes.CREATED).json({user});
};
export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await UserModel.findOne({email: email});
  const isValidUser = comparePassword(password, user.password) && user;
  if (!isValidUser) {
    throw new Error('invalid values');
  }
  const token = createJWT({
    userId: user._id,
    role: user.role,
  });
  const oneDay = 1000 * 60 * 60 * 24;
  console.log(oneDay)
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now()+oneDay),
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(StatusCodes.OK).json({msg: 'user logged in'});
};
