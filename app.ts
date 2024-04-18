/* eslint-disable no-unused-vars */
// =================== packages ====================
import express from 'express';
import mongoose from "mongoose"

// ======================================================
import { PORT } from './src/Config/index';
import { DATABASE_URL } from './src/Config/index';
import errorMiddleware from './src/Middlewares/error.middleware';
import IndexRoute from './src/api/Routes/index.route';


class App {
  public app: express.Application;
  public port: string | number;
  public dbUrl: string;

  private  IndexRoute = new IndexRoute();

    constructor() {
    this.app = express();
    this.port = PORT || 7000;
    this.dbUrl = DATABASE_URL || "mongodb://127.0.0.1:27017/test";
    this.initializeMiddlewares();
    this.initializeErrorHandling();
  }

  public listen() {
    mongoose.connect(this.dbUrl).then(() => {
      this.app.use('/', this.IndexRoute.router);
      this.app.listen(PORT, () => {
        console.log(`Server is running on port ${this.port}`);
      });
    })
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.set('view engine', 'ejs');
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
  }

  // ===================== routes ======================
  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
