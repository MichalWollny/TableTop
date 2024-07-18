import express from "express";
import "./db/server.js";
import { errorHandler } from "./middlewares/ErrorHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser()); // cookie-parser

// ROUTES
app.use("/auth", authRouter);
// app.use('/posts', postsRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
