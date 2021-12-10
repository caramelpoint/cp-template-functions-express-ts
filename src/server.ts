import serverless from "serverless-http";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/hello", async (req, res) => {
  res.status(200).send({ message: "hello world" });
});

export const handler = serverless(app);
