import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import courseRouter from "./routes/courseRouter.js";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/v1/course", courseRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`App is running at port ${PORT}`);
  }
});
