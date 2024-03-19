import Blog from '../models/blogModel.js';

export const getBlogs = async (req, res) => {
  try {
    const blogList = await Blog.find({});
    res.status(200).json(blogList);
  } catch (error) {
    res.status(500).json(error);
  }
}