import express from "express";
import cors from "cors";
import {clerkMiddleware} from "@clerk/express";

import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware({ apiKey: ENV.CLERK_SECRET_KEY }));

app.get("/", (req, res) => {
  res.send("Hello  from backend");
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const startServer = async () => {
  await connectDB();
  app.listen(ENV.PORT, () =>
    console.log("Server is up and runnig on ", ENV.PORT),
  );
};



startServer();
