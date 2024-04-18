import type { Request, Response, NextFunction } from 'express';
import {AuthService} from "../Services/auth.service"
import { generalResponse } from "../../Helper/common.helper"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

export class AuthController{
    private authService: AuthService;
    constructor() {
      this.authService = new AuthService();
    }
    public register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      console.log("=================>")
      const { first_name, last_name, user_name, email, password, mob_no } = req.body;
      console.log(first_name, last_name, user_name, email, password, mob_no)
      const user = await this.authService.getUser(user_name);

      if (user) {
        return generalResponse(res, null, 'User is already registered with this email or username!', 'error', true, 500);
      }

      //encrypt password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = await this.authService.registerUser({
        firstName: first_name,
        lastName: last_name,
        userName: user_name,
        email: email,
        password: hashedPassword,
        mob_no: mob_no
      });

      const token = jwt.sign({ email: email }, 'polebhaibanna215', { expiresIn: '1d' }); 
      generalResponse(res, { token: token }, 'User registered successfully!', 'success', false, 200);
    }
}