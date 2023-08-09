import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.use(express.static("../client/dist/"));


const server = app.listen(process.env.PORT || 2000, () => {
    console.log(`Server started on http://localhost:${server.address().port}`);
});