import mongoose from 'mongoose';

export const Cat = mongoose.model('cats', {
  _id: mongoose.SchemaTypes.String,
  name: mongoose.SchemaTypes.String,
  age: mongoose.SchemaTypes.Number,
  breed: mongoose.SchemaTypes.String,
  description: mongoose.SchemaTypes.String
});

export const Dog = mongoose.model('dogs', {
  _id: mongoose.SchemaTypes.String,
  name: mongoose.SchemaTypes.String,
  age: mongoose.SchemaTypes.Number,
  breed: mongoose.SchemaTypes.String,
  description: mongoose.SchemaTypes.String
});


export const Donation = mongoose.model('donations', {
  _id: mongoose.SchemaTypes.String,
  name: mongoose.SchemaTypes.String,
  amount: mongoose.SchemaTypes.Number
});



