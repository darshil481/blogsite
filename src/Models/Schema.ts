import { Mongoose } from "mongoose";

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String,required: true },
    lastName: { type: String,required: true },
    mobile_no: String ,
    userName: { type: String, required: true },
    password: { type: String,required: true },
    email: { type: String, unique: true },
    profilePicture: String,
    dateOfBirth: Date,
    gender: String,
    bio: String,
    socialMedia: {twitter: String,facebook: String,linkedIn: String},
    roles: { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: { type: Date, default: Date.now },
    verified: { type: Boolean, default:false },
});

const BlogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    metaTitle: String, // Meta title for SEO
    slug: { type: String }, // URL slug for the blog post
    summary: { type: String, required: true }, // Summary or excerpt of the blog post content
    content: { type: String, required: true }, // Main content of the blog post
    tags: [{ type: Number }], // Tags associated with the blog post
    categories: [{ type: Number }], // Categories the blog post belongs to
    image: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    publishedAt: { type: Date },
    updatedAt: { type: Date },
    status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
})
const BlogCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
});

const BlogTagSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const BlogCommentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true }, 
    content: { type: String, required: true }, 
    createdAt: { type: Date, default: Date.now }, 
    likes: { type: Number, default: 0 },
});

const BlogLikeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who liked the post
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true }, // Reference to the blog post
    createdAt: { type: Date, default: Date.now } // Timestamp of when the like was created
});

const BlogViewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who viewed the post (optional)
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true }, // Reference to the blog post
    createdAt: { type: Date, default: Date.now } // Timestamp of when the view occurred
});

const User = mongoose.model('User', UserSchema);
const Blog = mongoose.model('Blog', BlogSchema);
const BlogComment = mongoose.model('BlogComment', BlogCommentSchema);
const BlogView = mongoose.model("BlogView",BlogViewSchema);
const BlogLike = mongoose.model("BlogLike",BlogLikeSchema)
const BlogTag = mongoose.model("Blogtag", BlogTagSchema);
const BlogCategory = mongoose.model("BlogCategory",BlogCategorySchema)

module.exports = { User,Blog,BlogComment,BlogLike,BlogView };
