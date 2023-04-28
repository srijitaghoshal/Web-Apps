import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Cat } from './util.js';

const CatsRouter = Router();


CatsRouter.get('/', async (req, res) => {
  const cats = await Cat.find();
  console.log(cats);

  res.send(cats);
});

CatsRouter.get('/:cat_id', async (req, res) => {
  const catId = req.params.cat_id;
  try {
    const cat = await Cat.findOne({ _id: catId });
    console.log(cat);
    if (cat === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }
    // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
    // Express' `Response` object
    res.json(cat);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

CatsRouter.post("/new", async (req, res) => {
  const requestBody = req.body;
  requestBody._id = uuidv4();

  try {
    const result = await new Cat(requestBody).save();
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



export default CatsRouter;