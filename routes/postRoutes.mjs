import express from "express";
import {posts} from "../data/post.mjs";
const router = express.Router();

// @route GET /api/posts
// @desc Get all post
// @access Public

router
    .route("/")
    .get( (req, res) => {
        res.json(posts);
    });

    export default router;