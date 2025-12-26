import express from "express";
import { router as apiRoutes } from "./routes/index.js";


// setup Express.js structure
export const app = express();

app.use(express.json());
app.use("/api", apiRoutes);
