import { Link } from "react-router-dom";
import "../styles/BlogCard.css"
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />

      <div className="blog-content">
        <span className="category">{blog.category}</span>
      <h2>{blog.title}</h2>

        <p>{blog.content}</p>
        <h4>{blog.author}</h4>
        <h5>{blog.tags}</h5>

        <Link to={`/blog/${blog._id}`} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
