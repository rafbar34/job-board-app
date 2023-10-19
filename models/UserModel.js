import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: 'Last name',
  },
  location: {
    type: String,
    default: 'Poland',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});
UserModel.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};
export default mongoose.model('User', UserModel);
