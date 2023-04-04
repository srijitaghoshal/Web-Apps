import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Store } from './util.js';


const StoresRouter = Router();

StoresRouter.get('/stores', async (req, res) => {
  const stores = await Store.find();

  res.send(stores);
});

// blogRouter.get('/:postId', async (req, res) => {
//   const postId = req.params.postId;
//   try {
//     const post = await Post.findOne({ _id: postId });
//     console.log(post);
//     if (post === null) {
//       res.status(404);
//       res.json({
//         status: 404,
//         message: 'not found',
//       });
//       return;
//     }
//     // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
//     // Express' `Response` object
//     res.json(post);
//   } catch (e) {
//     console.log(e);
//     res.status(500);
//     res.send('');
//   }
// });

StoresRouter.post("/stores", async (req, res) => {
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