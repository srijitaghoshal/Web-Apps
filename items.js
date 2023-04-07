import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Item } from './util.js';
import {Store} from './util.js';


const ItemsRouter = Router();

//returns all the items associated with a store
ItemsRouter.get('/', async (req, res) => {
  const storeId = req.params.store_id;
  try {
    //lookup store
    const store = await Store.findOne({ _id: storeId });
    
    if (store === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }

    //return all items of that store
    let itemsArray = store.items
    res.json(itemsArray);

  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

//returns a specified item
ItemsRouter.get('/:item_id', async (req, res) => {
  const storeId = req.params.store_id;
  const itemId = req.params.item_id;
  try {
    //lookup store
    const store = await Store.findOne({ _id: storeId });

    if (store === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }
    let itemsArray = store.items;
    console.log(itemsArray);
    
    //look up item by item id
    let item = {}
    for (var i = 0; i < itemsArray.length; i++){
      let currentItem = itemsArray[i];
        if(currentItem._id == itemId) {
          item = currentItem;
        }    
    }
    //return item
    res.json(item);

    //return server error if there are issues
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

// Posts an Item to the specified store
ItemsRouter.post("/", async (req, res) => {
  const storeId = req.params.store_id;
  const requestBody = req.body;

  //generate uuid for item
  requestBody._id = uuidv4();

  try {
    //lookup store
    const store = await Store.findOne({ _id: storeId });
    
    if (store === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }

    //add new item to array
    let itemsArray = store.items
    const result = await new Item(requestBody).save();
    itemsArray.push(result);

    //update the store with the new item array
    const newStore = await Store.updateOne({ _id: storeId },  { $set: { items: itemsArray }});

    console.log(result);
    res.status(201);
    res.json({
      status: 201,
      message: 'created',
    });

  //return server error if there are issues
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
})

export default ItemsRouter;