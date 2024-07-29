import { MongoClient } from "mongodb";

let client: MongoClient | undefined;

try {
  if (!process.env.MONGODB_URI) {
    throw new Error("MongoDB URI is required!");
  }

  client = new MongoClient(process.env.MONGODB_URI);
  client.connect().catch((e) => {
    console.error("Failed to connect to MongoDB:", e);
  });
} catch (e) {
  console.error("Error initializing MongoDB client:", e);
}

export default client;
