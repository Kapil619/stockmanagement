import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

    // Replace the uri string with your connection string.
    const uri = "mongodb+srv://dbuser:Mwe9G9QqMcBQGl8G@cluster0.cz2yz4n.mongodb.net/";
    const client = new MongoClient(uri);
    try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');
        // Query for a movie that has the title 'Back to the Future'
        const query = {};
        const allProducts = await inventory.find(query).toArray();
        console.log(movie);
        return NextResponse.json({ allProducts })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

}


export async function POST(request) {

    // Replace the uri string with your connection string.
    let body = request.body
    const uri = "mongodb+srv://dbuser:Mwe9G9QqMcBQGl8G@cluster0.cz2yz4n.mongodb.net/";
    const client = new MongoClient(uri);
    try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');
        // Query for a movie that has the title 'Back to the Future'
        const query = {};
        const product = await inventory.insertOne(body);
        console.log(movie);
        return NextResponse.json({ product })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

}