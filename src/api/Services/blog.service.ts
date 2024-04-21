import { BlogCreationData } from "../../Interface/blog.interface";
const { Blog } = require('../../Models/Schema');
export class BlogService{
    async createOrUpdateBlogService(blogData:BlogCreationData){
        try{
            const blog = new Blog(blogData);
            const result = await blog.save();
            return result;
        }catch(error){
            console.log(error);
            throw error
        }
    }
}