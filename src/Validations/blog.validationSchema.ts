import Joi from "joi";
import { errorMessage } from "../Constants/error.constant";
export const BlogCreateSchema = Joi.object({
    userId:Joi.string()
        .required()
        .label('User Id')
        .messages({ ...errorMessage }),
    title:Joi.string()
        .required()
        .label('Title')
        .messages({...errorMessage}),
    metaTitle: Joi.string()
        .label('Meta Title')
        .messages({ ...errorMessage }),
    slug: Joi.string()
        .label('Slug')
        .messages({ ...errorMessage }),
    summary: Joi.string()
        .required()
        .label('Summary')
        .messages({ ...errorMessage }),
    content: Joi.string()
        .required()
        .label('Content')
        .messages({ ...errorMessage }),
    tags: Joi.array().items(Joi.string())
        .label('Tags')
        .messages({ ...errorMessage }),
    categories: Joi.array().items(Joi.string())
        .label('Categories')
        .messages({ ...errorMessage }),
    image: Joi.array().items(Joi.string())
        .label('Image')
        .messages({ ...errorMessage }),
    status: Joi.string().valid('draft', 'published', 'archived')
        .label('Status')
        .messages({ ...errorMessage }),
    
}).options({
    abortEarly: false,
  });
  