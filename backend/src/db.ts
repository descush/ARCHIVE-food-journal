import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
console.log('MongoDB URI:', process.env.URI);


const uri: string = process.env.URI || "";
const client: MongoClient = new MongoClient(uri);

export const getClient =async () => {
try {
    await client.connect();
    return client;
} catch (error) {
    console.error("error connecting")
    throw error;
}
    
};

console.log("MongoDB URI:", uri);
