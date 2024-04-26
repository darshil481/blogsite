import e from "express";
import { BlogCreationData, BlogListSchema } from "../../Interface/blog.interface";
const { Blog,BlogCategory,BlogTag } = require('../../Models/Schema');
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
    async getAllBlogList(blogListData:BlogListSchema){
        try {
            const result =  await Blog.find({$or:[{category:blogListData.category},{tag:blogListData.tag}]})
            console.log(result)
            return result;
        } catch (error) {
            throw new Error('Failed to fetch blog list');
        }
    }
    async createBlogCategory(name:String){
        try {
             const category = new BlogCategory(name);
             const result = category.save;
             return result;
        }catch(error){
            console.log(error);
        }
    }
    async createBlogTag(name:String){
        try{
            const tag = new BlogTag(name);
            const result = tag.save();
            return result;  
        }catch(error){
            console.log(error);
        }
    }
}