import { MongoClient } from 'mongodb';

export async function connectDatabase() {

  const ConnectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.bbpkr.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.mongodb_database}`

  const client = await MongoClient.connect(ConnectionString);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();

  return documents;
}