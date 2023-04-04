import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Store } from './util.js';


const ItemsRouter = Router();

// StoresRouter.get('/', async (req, res) => {
//   const stores = await Store.find();

//   res.send(stores);
// });

export default ItemsRouter;