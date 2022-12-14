import express from "express";
import cors from "cors";
import courseRouter from "./routes/courseRouter.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/course", courseRouter);

//ERROR HANDLEING

app.use((error, req, res, next) => {
  const status = error.status ? error.status : 500;
  const message = error.message ? error.message : "Internal Server Error";
  return res.status(status).json({ message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
