import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

dotenv.config();

const __dirname = path.resolve();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

const PORT = process.env.PORT;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../Frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
    });
  }

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});