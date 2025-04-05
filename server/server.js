import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDb from './config/db.js';

const app = express();

app.use(express.json());
app.use(cors())
await connectDb()

app.get('/', (req,res) =>{
  res.send('Hello from the server!');
})


const port = process.env.PORT || 4001

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


