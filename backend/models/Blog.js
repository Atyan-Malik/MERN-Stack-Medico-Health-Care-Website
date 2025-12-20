import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    image: {
      type: String, 
      required: true,
    },
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tags: [String],
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);
