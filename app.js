import * as dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import morgan from 'morgan';
import routerJob from './routes/index.js';
import mongoose from 'mongoose';
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.post('/', (req, res) => {
  res.json({message: 'data recieved', data: req.body});
});
app.use('/api/v1/jobs', routerJob);

app.use('*', (req, res) => {
  res.status(200).json({msg: 'not found'});
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({msg: 'something went wrong'});
});
try {
  await mongoose.connect(
    `mongodb+srv://${process.env.EMAIL}:${process.env.PASSWORD}@cluster0.pdjzyjw.mongodb.net`
  );
  app.listen(process.env.PORT, () => {
    console.log('server Runneing...');
  });
} catch (err) {
  console.log(err);
  process.exit(1)
}
