import type { Request, Response, NextFunction } from 'express';
import { generalResponse } from "../../Helper/common.helper";
import { BlogService } from "../Services/blog.service";

export class  BlogController{
    private blogService:BlogService;
    constructor(){
        this.blogService = new BlogService();
    }
    public createOrUpdateBlog = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { userId, title, metaTitle, slug, summary, content, tags, categories, image, status } = req.body;
            const blog = await this.blogService.createOrUpdateBlogService({
                userId,
                title,
                metaTitle,
                slug,
                summary,
                content,
                tags,
                categories,
                image,
                status
            }); 
            console.log("===========================>",blog)
            return generalResponse(res, blog, 'Blog post created successfully', 'success', false, 200);
        } catch (error) {
            // Handle errors
            console.error("Error creating blog post:", error);
            return generalResponse(res, null, 'Failed to create blog post', 'error', true, 500);
        }
    }
}