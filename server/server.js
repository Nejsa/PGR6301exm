import express from "express";
import bodyParser from "body-parser";
import * as path from "path";
import { ActivitiesApi } from "./activitiesApi.js";
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongodburl = process.env.MONGODB_URL;

if(mongodburl){
    const client = new MongoClient(mongodburl);

    client
        .connect()
        .then((conn) => { console.log("Database Connected")
            app.use("/api/activities",
                ActivitiesApi(conn.db(process.env.MONGODB_DATABASE || "activitiesList")))
        });

}

app.use(express.static("../client/dist/"));

// app.use("/api/activities", ActivitiesApi);


app.use((req, res, next) => {
    if(req.method === "GET" && !req.path.startsWith("/api")){
        return res.sendFile(path.resolve("../client/dist/index.html"));
    }  else {
        next();
    }
});


const server = app.listen(process.env.PORT || 2000, () => {
    console.log(`Server started on http://localhost:${server.address().port}`);
});