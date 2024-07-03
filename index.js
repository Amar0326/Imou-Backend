const express = require('express')
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose"); // Import mongoose directly
const routes = require('./Routes/userRoutes')
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(
    cors({
        origin: "*", // Set specific origin
        credentials: true, // Allow credentials
    })
);
app.use("/v1", routes);
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MONGO_URL",MONGO_URL);
      console.log("MongoDB Connected Successfully");
    } catch (err) {
      console.log("MongoDB not connected", err);
      process.exit(1); // Exit process with failure
    }
  };
connectDB();


app.listen(PORT, () => {
    console.log("Server is Running On port ", PORT);
  });