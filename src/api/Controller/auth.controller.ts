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
      const { first_name, last_name, user_name, email, password, mob_no } = req.body;
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
    public login = async (req:Request,res:Response,next:NextFunction):Promise<void> =>{
      try {
        const {email, password } = req.body;
        const user = await this.authService.getUserByEmailOrUsername(email);
        if (user) { 
          if (!user.password) {
            return generalResponse(res, null, 'Your password is not set,Please contact to authorities!', 'error', true, 500);
          }
          // if (!user.verified) {
          //     const token = jwt.sign({ email: user.email }, 'polebhaibanna215', { expiresIn: '1d' });;
              // this.sendEmailVarificationMail(user, token);
          //   return generalResponse(res, null, 'Please check your mail to verify your account!', 'error', true, 500);
          // }
          const isMatch = await bcrypt.compare(password, user.password);
  
          if (isMatch) {
            const token = jwt.sign({ email: user.email }, 'polebhaibanna215', { expiresIn: '1d' });
            return generalResponse(res, { token: token, email: user.email });
          }
          return generalResponse(res, null, 'Username Or Password is incorrect!', 'error', true, 403);
        } else {
          return generalResponse(res, null, 'User not found or your account is inactive,Please contact to authorities!', 'error', true, 500);
        }
      } catch (error) {
        next(error);
      }
    }
}