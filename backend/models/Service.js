import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    image: {
      type: String, 
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
     price: {
      type: Number, 
      required: true,
    },
    
  },
  { timestamps: true } 
);

export default mongoose.model("Service", serviceSchema);

