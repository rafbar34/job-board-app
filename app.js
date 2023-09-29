import * as dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import morgan from 'morgan';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.get('/', (req, res) => {
  res.send('test');
});
app.post('/', (req, res) => {
  console.log(req);
  res.json({message: 'data recieved', data: req.body});
});

app.listen(process.env.PORT, () => {
  console.log('server Runneing...');
});
