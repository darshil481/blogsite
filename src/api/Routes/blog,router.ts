import { Router } from "express";
import { Routes } from "../../Interface/routes.interface";
import { BlogCreateSchema } from "../../Validations/blog.validationSchema";
import validationMiddleware from "../../Middlewares/validation.middleware";
import { BlogController } from "../Controller/blog.controller";

class BlogRoute implements Routes{
    public path = "/blog"
    public router = Router();
    public blogController = new BlogController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/create`,validationMiddleware(BlogCreateSchema, 'body'),this.blogController.createOrUpdateBlog);
        
    }
    
}
export default BlogRoute;