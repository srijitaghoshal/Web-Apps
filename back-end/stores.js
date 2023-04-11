import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Store } from './util.js';
import ItemsRouter from "./items.js";

const StoresRouter = Router();

ItemsRouter.mergeParams = true;
StoresRouter.use("/:store_id/items", ItemsRouter);

StoresRouter.get('/', async (req, res) => {
  const stores = await Store.find();
  console.log(stores);

  res.send(stores);
});

StoresRouter.get('/:store_id', async (req, res) => {
  const storeId = req.params.store_id;
  try {
    const store = await Store.findOne({ _id: storeId });
    console.log(store);
    if (store === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }
    // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
    // Express' `Response` object
    res.json(store);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

StoresRouter.post("/", async (req, res) => {
  const requestBody = req.body;
  requestBody._id = uuidv4();

  try {
    const result = await new Store(requestBody).save();
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



export default StoresRouter;
