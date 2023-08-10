import express from 'express'


export function ActivitiesApi(db) {
    const api = express.Router();

    api.get("/", async (req, res) => {


            const activities = await db
                .collection("activities")
                .find({})
                .map(({hours, activity}) => ({ hours, activity }))
                .toArray();

              res.json(activities);
       // const collection = await db.collection("activities")
       // console.log(collection)
        });

        api.post("/", (req, res) => {
            const {hours, activity} = req.body;

            db.collection("activities").insertOne({hours, activity});

            res.sendStatus(200);
        });

        return api;
}
