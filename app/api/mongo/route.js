import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(request) {
    return NextResponse.json({ message: "Hello World" });
}


// Replace the uri string with your connection string.
const uri = "mongodb+srv://mongodb:Kapil619#>@cluster0.cz2yz4n.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');

        // Query for a movie that has the title 'Back to the Future'
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);

        console.log(movie);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);