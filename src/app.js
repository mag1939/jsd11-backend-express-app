import express from "express";
import { router as apiRoutes } from "./routes/index.js";
import cors from "cors";


// setup Express.js structure
export const app = express();

// enable CORS policy
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5175',
    ]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", apiRoutes);
