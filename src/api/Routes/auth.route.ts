import { Router } from "express";
import { Routes } from "../../Interface/routes.interface"; 
import { AuthController } from "../Controller/auth.controller";


class AuthRoute implements Routes{
    public path = "/auth"
    public router = Router();
    public authController = new AuthController();

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes(){
        this.router.post(`${this.path}/register`,this.authController.register);
    }

}
export default AuthRoute;