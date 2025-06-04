import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// api endpoint

app.get("/", (req, res) => {
  res.send("API WORKING");
});

connectDB()
  .then(() => {
    app.listen(port, () => console.log("Server is Started at: ", port));
  })
  .catch((err) => {
    console.error("Error connecting to database: ", err.message);
  });
