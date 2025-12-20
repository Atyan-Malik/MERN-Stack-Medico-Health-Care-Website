import Blog from "../models/Blog.js";


export const createBlog = async (req, res) => {
  try {
    const { title, image, content, author, tags } = req.body;

    if (!title || !image || !content || !author || !tags) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const blog = await Blog.create({
      title,
      image,
      content,
      author,
      tags,
    });

    res.status(201).json({ message: "BLog created", blog});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getBlogs = async (req, res) => {
   console.log("GET /api/services HIT");
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services" });
  }
};


export const getBlogById = async (req, res) => {
  try {
    const blogs = await Blog.findById(req.params.id);

    if (!blogs) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

