require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function start() {
  await client.connect();

  console.log("Connected to DB");

  const db = client.db("SCHEMESDB");
  const collection = db.collection("STUDENTS");

  app.get("/schemes", async (req, res) => {
    const data = await collection.find().toArray();
    res.json(data);
  });

  app.listen(3000, () => {
    console.log("Server started");
  });
}

start();