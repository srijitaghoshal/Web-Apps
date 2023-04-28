import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Donation } from './util.js';

const DonationsRouter = Router();

DonationsRouter.get('/', async (req, res) => {
    const donations = await Donation.find();
    console.log(donations);
  
    res.send(donations);
});


DonationsRouter.post("/new", async (req, res) => {
    const requestBody = req.body;
    requestBody._id = uuidv4();
  
    try {
      const result = await new Donation(requestBody).save();
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


export default DonationsRouter;