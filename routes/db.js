const { MongoClient } = require("mongodb");
const {db, client } = require("./db");

const uri = "mongodb://localhost:27017/HM_db";
const client = new MongoClient(uri);
const db = client.db("HM_db");

(async () => {
    try {
      await client.connect();
      console.log("Connected successfully to server");
    } catch (err) {
      console.log("Error connecting to server:", err);
    }
})();

const ticketsCollection = db.collection("tickets");
const usersCollection = db.collection("users");

module.exports = {
    ticketsCollection,
    usersCollection,
};