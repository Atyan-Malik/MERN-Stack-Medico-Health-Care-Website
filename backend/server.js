import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js"
import blogRoutes from "./routes/blogRoutes.js"
import appointmentRoutes from "./routes/appointmentRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";



dotenv.config();
const app = express();

// Middleware
app.use(cors()); // your frontend URL
app.use(express.json());

// Routes


app.use("/api/users", userRoutes);
app.use("/api/services",serviceRoutes)
app.use("/api/blogs",blogRoutes)
app.use("/api/appointments", appointmentRoutes);
app.use("/api/contact", contactRoutes);


// Root route
app.get("/", (req, res) => res.send("🚀 Backend running"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
