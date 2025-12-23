import express from "express";
import chalk from "chalk";

const app = express();
const port = 3000;

//  our very first API endpoint!
app.get("/", (req, res) => {
    res.send(`Hello Client! It's me Express`);
});

app.listen(port, () => {
    console.log(chalk.magenta(`Server running on port ${port}`));
});

