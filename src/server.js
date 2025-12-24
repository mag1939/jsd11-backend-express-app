import chalk from "chalk";
import { app } from "./app.js";

const port = 3000;

app.listen(port, () => {
    console.log(chalk.magenta(`Server running on port ${port} ✅`));
});

