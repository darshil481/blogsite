import { Routes } from "../../Interface/routes.interface";
import AuthRoute from "./auth.route";
import { Router } from "express";
class IndexRoute implements  Routes{
    public path = '/';
    public router = Router();
    private routes = [
        new AuthRoute(),
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