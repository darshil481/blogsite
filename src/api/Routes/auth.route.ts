import { Router } from "express";
import { Routes } from "../../Interface/routes.interface"; 
import { AuthController } from "../Controller/auth.controller";
import { RegisterSchema,LoginSchema } from "../../Validations/auth.validationSchema";
import validationMiddleware from "../../Middlewares/validation.middleware";

class AuthRoute implements Routes{
    public path = "/auth"
    public router = Router();
    public authController = new AuthController();

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes(){
        this.router.post(`${this.path}/register`,validationMiddleware(RegisterSchema, 'body'),this.authController.register);
        this.router.post(`${this.path}/login`, validationMiddleware(LoginSchema, 'body'), this.authController.login);
    }

}
export default AuthRoute;