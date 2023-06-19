import express from "express";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import Entry from "../models/Entry";

const entryRouter = express.Router();

const errorResponse = (error: any, res: any) => {
    console.error("FAIL", error);
    res.status(500).json({ message: "Internal Server Error" });
  };

  // endpoints

    //get all
  entryRouter.get('/entries', async (req, res)=> {
    const searchTerm = req.query.search ? req.query.search : "";
    const min = req.query.min ? +req.query.min : 0;
    console.log(searchTerm);
    console.log(min);
    const client = await getClient();
    const results = await client.db().collection<Entry>("entries").find({
      $and: [{ setUp: new RegExp(`${searchTerm}`) }, { rating: { $gte: min } }],
    }).toArray();
    res.status(200).json(results);
  });

  //get one
  entryRouter.get('/entries/:id', async (req, res) => {
    try{
    const id = new ObjectId(req.params.id);
  
    const client = await getClient();
    const result = await client.db().collection<Entry>("entries")
    .findOne({_id: id});
    
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({message:'entry not found'});
    }
    } catch (err) {
      errorResponse(err, res);
    }
  });


    // create one
  entryRouter.post('/entries', async (req, res)=> {
    try {
    const newEntry = req.body as Entry;
    const client = await getClient();
    await client.db().collection<Entry>('entries').insertOne(newEntry);
    res.status(201).json(newEntry);
  } catch (err) {
      errorResponse(err, res);
    }
  });