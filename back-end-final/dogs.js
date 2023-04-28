import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Dog } from './util.js';

const DogsRouter = Router();


DogsRouter.get('/', async (req, res) => {
  const dogs = await Dog.find();
  console.log(dogs);

  res.send(dogs);
});

DogsRouter.get('/:dog_id', async (req, res) => {
  const dogId = req.params.dog_id;
  try {
    const dog = await Dog.findOne({ _id: dogId });
    console.log(dog);
    if (dog === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }
    // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
    // Express' `Response` object
    res.json(dog);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

DogsRouter.post("/new", async (req, res) => {
  const requestBody = req.body;
  requestBody._id = uuidv4();

  try {
    const result = await new Dog(requestBody).save();
    console.log(result);
    res.status(201);
    res.json({
      status: 201,
      message: 'created',
    });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.json({
      status: 500,
      message: e,
    });
  }
})



export default DogsRouter;