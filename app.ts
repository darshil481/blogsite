/* eslint-disable no-unused-vars */
// =================== packages ====================
import express from 'express';
import mongoose from "mongoose"

// ======================================================
import { PORT } from './src/Config/index';
import { DATABASE_URL } from './src/Config/index';
import errorMiddleware from './src/Middlewares/error.middleware';
import IndexRoute from './src/api/Routes/index.route';
import multer from 'multer';


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
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  public listen() {
    mongoose.connect(this.dbUrl).then(() => {
      this.app.listen(this.port, () => {
        console.log(`Server is running on port ${this.port}`);
      });
    })
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(multer().none());
    this.app.use(express.static('./public'));
    this.app.use('/uploads', express.static('uploads'));
    this.app.set('view engine', 'ejs');
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
  }

  // ===================== routes ======================
  private initializeRoutes() {
    this.app.use('/', this.IndexRoute.router);
  }
  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
