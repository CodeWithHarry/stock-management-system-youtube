import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

    


// Replace the uri string with your connection string.
const uri = "mongodb+srv://mongodb:di9utTasUi4AHxoJ@mongoyoutube.nhtraxd.mongodb.net/";
const client = new MongoClient(uri); 
  try {
    const database = client.db('harry');
    const movies = database.collection('inventory');
    // Query for a movie that has the title 'Back to the Future'
    const query = {  };
    const movie = await movies.find(query).toArray();
    console.log(movie);
    return NextResponse.json({"a": 34, movie})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  } 

}