import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import AuthRoute from "./src/api/Routes/auth.route"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL  = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/test";

mongoose.connect(MONGOURL)
  .then(() => {
    const authRoute = new AuthRoute();
    app.use(authRoute.path, authRoute.router);
   
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
  const User = require("./src/Models/User")

