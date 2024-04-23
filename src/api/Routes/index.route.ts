import { Routes } from "../../Interface/routes.interface";
import AuthRoute from "./auth.route";
import BlogRoute from "./blog,router";
import { Router } from "express";
import upload from "../../Middlewares/multer.middleware";
class IndexRoute implements  Routes{
    public path = '/';
    public router = Router();
    private routes = [
        new AuthRoute(),
        new BlogRoute(),
    ];
    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.routes.forEach(route => {
          this.router.use('/',  upload.single('file'),route.router);
        });
      }

}
export default IndexRoute;