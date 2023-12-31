import express from 'express';
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) => {
  console.log('Hello from epress');
  res.json({ message: 'Hello World' });
});



app.use('/api', protect, router);


app.post('/user', createNewUser);
app.post('/signin', signin);
export default app;
