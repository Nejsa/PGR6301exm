import express from 'express';
import {ObjectId} from "mongodb";

export function ActivitiesApi(db) {
    const api = express.Router();


    api.get("/", async (req, res) => {
        const activities = await db
            .collection("activities")
            .find({})
            .map(({ _id, hours, activity, maxHours }) => ({ _id, hours, activity, maxHours }))
            .toArray();

        res.json(activities);
    });


    api.post("/", (req, res) => {
        const { hours, activity, maxHours } = req.body;

        db.collection("activities").insertOne({ hours, activity, maxHours });

        res.sendStatus(200);
    });


    api.put("/:id", async (req, res) => {
        const activityId = req.params.id;
        const { hours } = req.body;

        const result = await db.collection("activities").updateOne(
            { _id: new ObjectId(activityId) },
            { $set: { hours } }
        );

        if (result.modifiedCount === 1) {
            res.sendStatus(200); // success code
        } else {
            res.sendStatus(404); // error code
        }
    });

    return api;
}