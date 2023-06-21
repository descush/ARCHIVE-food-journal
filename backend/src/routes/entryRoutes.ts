import express from "express";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import Entry from "../models/Entry";

export const entryRouter = express.Router();

const errorResponse = (error: any, res: any) => {
    console.error("FAIL", error);
    res.status(500).json({ message: "Internal Server Error" });
  };

  // endpoints

    //get all
    entryRouter.get('/entries', async (req, res) => {
      try {
        const client = await getClient();
        const results = await client.db().collection<Entry>('entries').find().toArray();
        res.status(200).json(results);
      } catch (err) {
        errorResponse(err, res);
      }
    });

  // entryRouter.get('/entries', (req, res) => {
  //   res.send('Entries endpoint is working!');
  // });
  

  //get one
  entryRouter.get('/entries/:id', async (req, res) => {
    try {
      const id = req.params.id;
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Invalid entry ID' });
        return;
      }
      const client = await getClient();
      const result = await client.db().collection<Entry>('entries').findOne({ _id: new ObjectId(id) });
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: 'Entry not found' });
      }
    } catch (err) {
      errorResponse(err, res);
    }
  });

    // create one
    entryRouter.post('/entries', async (req, res) => {
      try {
        const newEntry = req.body as Entry;
        const client = await getClient();
        const result = await client.db().collection<Entry>('entries').insertOne(newEntry);
        console.log(result);
        res.status(201).json(newEntry);
      } catch (err) {
        console.error("Error creating entry:", err);
        res.status(500).json({ message: "Failed to create entry" });
      }
    });