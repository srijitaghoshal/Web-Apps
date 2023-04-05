import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Item } from './util.js';


const ItemsRouter = Router();

// ItemsRouter.get('/', async (req, res) => {
//   const item = await Item.find();

//   res.send(item);
// });

ItemsRouter.get('/:item_id', async (req, res) => {
  console.log(req.params.store_id);

  res.send(item);
});

export default ItemsRouter;