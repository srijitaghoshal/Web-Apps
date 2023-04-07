import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';


const ItemSchema = new mongoose.Schema ({
  _id: mongoose.SchemaTypes.String,
  name: mongoose.SchemaTypes.String,
  quantity: mongoose.SchemaTypes.Number,
  price: mongoose.SchemaTypes.Number,
  store_id: mongoose.SchemaTypes.String
});


export const Item = mongoose.model('items', ItemSchema);

//Store holds items 
export const Store = mongoose.model('stores', {
  _id: mongoose.SchemaTypes.String,
  name: mongoose.SchemaTypes.String,
  items: [ItemSchema]
});




