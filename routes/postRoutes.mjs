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
    })
    .post( (req, res) => {
        console.log(req.body);
        /*const {userId, title, content} = req.body; //grabbing data the client entered through req.body
        let id = post[post.length - 1].id + 1; //creating a new id after last index
                                               //ex: post[8] is the last index with id = 9
                                               //then new id = 9+1 = 10

        //creating a new oject that will be pushed to the post array
        if (userId && title && content) {
            const post = {
                id: id,
                userId: userId,
                title: title,
                content: content,
            };
            post.push(post);
            res.json( post[post.length-1]);
        } else {
            res.json( {
                error: "Insufficient Data"
            });
        }*/
    }); 

    export default router;