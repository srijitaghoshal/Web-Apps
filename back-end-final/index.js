import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import CatsRouter from './cats.js';
import DogsRouter from './dogs.js';
import DonationsRouter from './donation.js';

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());

// Connect to the MongoDB database once and attach the connection pool to the application instance
await mongoose.connect('mongodb://localhost:27017/animals')

app.get("/", (req, res) => {
  console.log(req, res);
  res.json({
    code: 200,
    message: "Hello, Express",
  });
});


app.use('/animals/cat', CatsRouter);
app.use('/animals/dog', DogsRouter);
app.use('/donation', DonationsRouter);


app.listen(port, () => {
  console.log(`listening on localhost:${port}...`);
})