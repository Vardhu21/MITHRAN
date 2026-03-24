const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const uri = "mongodb+srv://vv159160_db_user:mQPSVAId0jkT7E8h@clusterdb1.i2hdzjo.mongodb.net/SCHEMESDB?retryWrites=true&w=majority";

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