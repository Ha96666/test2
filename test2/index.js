const express = require('express');
const mongoClient = require('mongodb').MongoClient;

const app = express();
const mongoServerURL = "mongodb://localhost:27017/";

//default route - display all items
app.get('/', (request, response) => {
    mongoClient.connect(mongoServerURL, (err, db) => {
        if (err)
            console.log("DB Connect Error:" +err.message);

        //connect to the itemdb
        const itemdb = db.db("itemdb");

        //read from the items collections
        itemdb.collection("items").find({}).toArray((err, itemDocsArray) => {
            if (err)
                console.log(err.message);

            response.send(JSON.stringify(itemDocsArray));
        }); 

        //close the connection to the db
        db.close();
    });
});

app.get('/sensors', (request, response) => {
    mongoClient.connect(mongoServerURL, (err, db) => {
        if (err)
            console.log("DB Connect Error:" +err.message);

        //connect to the itemdb
        const itemdb = db.db("itemdb");

        //read from the items collections
        itemdb.collection("items").find({category:"sensors"}).toArray((err, itemDocsArray) => {
            if (err)
                console.log(err.message);

            response.send(JSON.stringify(itemDocsArray));
        }); 

        //close the connection to the db
        db.close();
    });
});

app.get('/robots', (request, response) => {
    mongoClient.connect(mongoServerURL, (err, db) => {
        if (err)
            console.log("DB Connect Error:" +err.message);

        //connect to the itemdb
        const itemdb = db.db("itemdb");

        //read from the items collections
        itemdb.collection("items").find({category:"robot"}).toArray((err, itemDocsArray) => {
            if (err)
                console.log(err.message);

            response.send(JSON.stringify(itemDocsArray));
        }); 

        //close the connection to the db
        db.close();
    });
});

app.get('/micros', (request, response) => {
    mongoClient.connect(mongoServerURL, (err, db) => {
        if (err)
            console.log("DB Connect Error:" +err.message);

        //connect to the itemdb
        const itemdb = db.db("itemdb");

        //read from the items collections
        itemdb.collection("items").find({category:"microcontroller"}).toArray((err, itemDocsArray) => {
            if (err)
                console.log(err.message);

            response.send(JSON.stringify(itemDocsArray));
        }); 

        //close the connection to the db
        db.close();
    });
});

//add code for /sensors route . . .
//add code for /robots route. . .
//listen for request on port 7878
app.listen(7878, () => {
    console.log("server listening on 7878");
});
