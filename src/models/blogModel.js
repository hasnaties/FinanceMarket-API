import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: { type: String, required: true },
  body: String,
  image: String
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;