import { Router } from "express";
import { Routes } from "../../Interface/routes.interface"
import validationMiddleware from '../../Middlewares/validation.middleware';
import {RegisterSchema} from '../../Validations/auth.validationSchema'
import { AuthController } from '../Controller/auth.controller';
import { AuthService } from "../Services/auth.service";


class AuthRoute implements Routes{
    public path = "/auth"
    public router = Router();
    public authController = new AuthController(new AuthService());

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes(){
        this.router.post(`${this.path}/register`, validationMiddleware(RegisterSchema, 'body'), this.authController.register);
    }

}
export default AuthRoute;