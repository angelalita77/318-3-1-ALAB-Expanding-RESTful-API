import express from "express";
import { posts } from "../data/post.mjs";
const router = express.Router();

// @route GET /api/posts
// @desc Get all post
// @access Public

router
    .route("/")
    //READ
    // @route GET /api/posts
    // @desc Get all post
    // @access Public
    .get((req, res) => {
        res.json(posts);
    })
    // @route POST /api/posts
    // @desc Create a post
    // @access Public
    .post((req, res) => {
        const { userId, title, content } = req.body; // grabbing data the client entered through req.body
        let id = posts[posts.length - 1].id + 1; // creating a new id
        // let id = posts.length++;

        // creating a new object that will be pushed to the posts array
        if (userId && title && content) {
            const post = {
                id: id,
                userId: userId,
                title: title,
                content: content,
            };
            posts.push(post);
            res.json(posts[posts.length - 1]);
        } else {
            res.json({ error: "Insufficient Data" });
        }
    });

//  @route GET /api/posts/:id
//  @desc Get ONE post
//  @access Public 



export default router;