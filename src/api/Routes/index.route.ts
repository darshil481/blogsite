import { Routes } from "../../Interface/routes.interface";
import AuthRoute from "./auth.route";
import BlogRoute from "./blog,router";
import { Router } from "express";
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
          this.router.use('/', route.router);
        });
      }

}
export default IndexRoute;