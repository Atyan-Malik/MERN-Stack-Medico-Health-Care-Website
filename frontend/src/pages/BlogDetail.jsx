import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) return <h2 className="status">Loading blog...</h2>;

  return (
    <section className="blog-details">
      <img src={blog.image} alt={blog.title} />

      <div className="blog-details-content">
        <span className="category">{blog.category}</span>
        <h1>{blog.title}</h1>
        <p className="date">{new Date(blog.createdAt).toDateString()}</p>

        <p className="content">{blog.content}</p>
      </div>
    </section>
  );
};

export default BlogDetail;
