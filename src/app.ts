import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import emailRoutes from "./routes/routes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/email", emailRoutes);


export default app;