import express from "express"
import { getBlogById, getBlogs } from "../controllers/blogController.js"

const router = express.Router()

router.get("/",getBlogs)
router.get("/:id",getBlogById)

export default router;