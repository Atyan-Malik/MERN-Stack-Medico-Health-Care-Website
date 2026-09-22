
import { useParams } from "react-router-dom";
import "../styles/Blog.css";

const dummyBlogs = [
  {
    _id: "blog-1",
    title: "5 Simple Habits for a Healthier Life",
    category: "Healthy Lifestyle",
    image: "/blog1.jpg",
    createdAt: "2026-09-12",
    author: "Medico Healthcare",
    tags: ["Health", "Lifestyle", "Wellness"],
    content:
      "A healthier lifestyle starts with small and consistent habits. Staying active, eating balanced meals, drinking enough water, getting quality sleep, and making time for relaxation can have a positive impact on your overall wellbeing. You do not need to make major changes overnight. Start with one healthy habit and gradually build a routine that works for you.",
  },
  {
    _id: "blog-2",
    title: "Why Regular Health Checkups Matter",
    category: "Preventive Care",
    image: "/blog2.jfif",
    createdAt: "2026-09-08",
    author: "Medico Healthcare",
    tags: ["Checkup", "Prevention", "Healthcare"],
    content:
      "Regular health checkups are an important part of preventive healthcare. They allow healthcare professionals to monitor your general health, identify potential concerns early, and provide guidance based on your individual needs. Keeping track of your health can help you make informed decisions and maintain a healthier lifestyle.",
  },
  {
    _id: "blog-3",
    title: "Understanding the Importance of Good Sleep",
    category: "Wellness",
    image: "/blog3.jpg",
    createdAt: "2026-09-04",
    author: "Medico Healthcare",
    tags: ["Sleep", "Wellness", "Health"],
    content:
      "Quality sleep plays an important role in both physical and mental wellbeing. A consistent sleep schedule, a comfortable sleeping environment, and reducing screen time before bed can help support better sleep. Giving your body enough time to rest can improve energy, concentration, and overall daily performance.",
  },
  {
    _id: "blog-4",
    title: "Healthy Eating for Everyday Wellness",
    category: "Nutrition",
    image: "/blog4.jfif",
    createdAt: "2026-08-30",
    author: "Medico Healthcare",
    tags: ["Nutrition", "Food", "Healthy Living"],
    content:
      "Healthy eating does not have to be complicated. A balanced diet can include vegetables, fruits, whole grains, healthy sources of protein, and adequate hydration. Making simple and sustainable food choices can support your energy levels and contribute to long-term wellbeing.",
  },
  {
    _id: "blog-5",
    title: "How to Stay Active Every Day",
    category: "Fitness",
    image: "/blog5.jpg",
    createdAt: "2026-08-25",
    author: "Medico Healthcare",
    tags: ["Fitness", "Exercise", "Lifestyle"],
    content:
      "Regular physical activity can be incorporated into everyday life in simple ways. Walking, stretching, taking the stairs, and participating in activities you enjoy can help you stay active. The key is consistency and finding movement that fits naturally into your daily routine.",
  },
  {
    _id: "blog-6",
    title: "Taking Care of Your Mental Wellbeing",
    category: "Mental Wellness",
    image: "/blog6.jfif",
    createdAt: "2026-08-20",
    author: "Medico Healthcare",
    tags: ["Mental Health", "Wellness", "Self Care"],
    content:
      "Taking care of your mental wellbeing is an important part of overall health. Making time for rest, staying connected with people you trust, maintaining healthy routines, and practicing activities that help you relax can support emotional wellbeing. If you are experiencing ongoing difficulties, consider speaking with a qualified healthcare professional.",
  },
];

const BlogDetail = () => {
  const { id } = useParams();

  const blog = dummyBlogs.find((item) => item._id === id);

  if (!blog) {
    return (
      <section className="blogs-status error">
        <i className="ri-article-line"></i>
        <h2>Blog Not Found</h2>
        <p>The blog you're looking for does not exist.</p>
      </section>
    );
  }

  return (
    <section className="blog-details">
      <div className="blog-details-image">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-details-content">
        <span className="category">
          {blog.category}
        </span>

        <h1>{blog.title}</h1>

        <div className="blog-meta">
          <span>
            <i className="ri-user-line"></i>
            {blog.author}
          </span>

          <span>
            <i className="ri-calendar-line"></i>
            {new Date(blog.createdAt).toDateString()}
          </span>
        </div>

        <p className="content">
          {blog.content}
        </p>

        <div className="blog-detail-tags">
          {blog.tags.map((tag, index) => (
            <span key={index}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
