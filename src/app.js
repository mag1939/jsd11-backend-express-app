import express from "express";
import { router as apiRoutes } from "./routes/index.js";
import { testAPI } from "./modules/users/users.controller.js";

// setup Express.js structure
export const app = express();

app.use(express.json());

app.use("/", testAPI);
app.use("/api", apiRoutes);
