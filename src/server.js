import express from "express";

const app = express();
const port = 3000;

//  our very first API endpoint!
app.get("/", (req, res) => {
    res.send(`Hello Client! It's me Express`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

