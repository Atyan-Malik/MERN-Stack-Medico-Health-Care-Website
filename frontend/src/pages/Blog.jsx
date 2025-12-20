import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import "../styles/Blog.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blogs");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="status">Loading blogs...</h2>;
  if (error) return <h2 className="status error">{error}</h2>;

  return (
    <section className="blogs-page">
      <div className="blogs-header">
        <h1>Health Blogs</h1>
        <p>Latest tips & insights from medical experts</p>
      </div>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
