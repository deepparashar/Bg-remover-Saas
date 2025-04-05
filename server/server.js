import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDb from './config/db.js';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(cors())
await connectDb()

app.get('/', (req,res) =>{
  res.send('Hello from the server!');
})

app.use('/api/user', userRouter)


const port = process.env.PORT || 4001

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


