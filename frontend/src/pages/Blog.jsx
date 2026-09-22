
import BlogCard from "../components/BlogCard";
import "../styles/Blog.css";

const dummyBlogs = [
  {
    _id: "blog-1",
    title: "5 Simple Habits for a Healthier Life",
    category: "Healthy Lifestyle",
    image: "/blog1.jpg",
    content:
      "Discover simple daily habits that can improve your physical health, energy, and overall wellbeing.",
    author: "Medico Healthcare",
    tags: ["Health", "Lifestyle", "Wellness"],
  },
  {
    _id: "blog-2",
    title: "Why Regular Health Checkups Matter",
    category: "Preventive Care",
    image: "/blog2.jfif",
    content:
      "Regular health checkups can help monitor your health and identify potential concerns before they become serious.",
    author: "Medico Healthcare",
    tags: ["Checkup", "Prevention", "Healthcare"],
  },
  {
    _id: "blog-3",
    title: "Understanding the Importance of Good Sleep",
    category: "Wellness",
    image: "/blog3.jpg",
    content:
      "Learn why quality sleep is essential for your physical health, mental wellbeing, energy, and concentration.",
    author: "Medico Healthcare",
    tags: ["Sleep", "Wellness", "Health"],
  },
  {
    _id: "blog-4",
    title: "Healthy Eating for Everyday Wellness",
    category: "Nutrition",
    image: "/blog4.jfif",
    content:
      "Simple nutrition choices can help maintain your energy, support your immune system, and improve your everyday wellbeing.",
    author: "Medico Healthcare",
    tags: ["Nutrition", "Food", "Healthy Living"],
  },
  {
    _id: "blog-5",
    title: "How to Stay Active Every Day",
    category: "Fitness",
    image: "/blog5.jpg",
    content:
      "Explore practical ways to add more physical activity to your daily routine and maintain an active lifestyle.",
    author: "Medico Healthcare",
    tags: ["Fitness", "Exercise", "Lifestyle"],
  },
  {
    _id: "blog-6",
    title: "Taking Care of Your Mental Wellbeing",
    category: "Mental Wellness",
    image: "/blog6.jfif",
    content:
      "Small changes in your daily routine can support emotional wellbeing and help you manage everyday stress.",
    author: "Medico Healthcare",
    tags: ["Mental Health", "Wellness", "Self Care"],
  },
];

const Blogs = () => {
  return (
    <section className="blogs-page">
      <div className="blogs-container">
        <div className="blogs-header">
          <span className="blogs-label">
            Health & Wellness
          </span>

          <h2>
            Latest Health
            <span> Insights</span>
          </h2>

          <p>
            Stay informed with practical health tips, medical insights,
            and trusted advice to help you make better decisions about
            your wellbeing.
          </p>
        </div>

        <div className="blogs-grid">
          {dummyBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;