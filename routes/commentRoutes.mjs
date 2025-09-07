import express from "express";
import { comments } from "../data/comments.mjs";
const router = express.Router();



router
    .route("/")
    //READ
    // @route GET /api/comments
    // @desc Get all comments
    // @access Public
    .get((req, res) => {
        res.json(comments);
    })
    // @route comment /api/comments
    // @desc Create a comment
    // @access Public
    .post((req, res) => {
        const { userId, postId, body } = req.body; // grabbing data the client entered through req.body
        let id = comments[comments.length - 1].id + 1; // creating a new id
        // let id = comments.length++;

        // creating a new object that will be pushed to the comments array
        if (userId && title && content) {
            const comment  = {
                id: id,
                userId: userId,
                title: title,
                content: content,
            };
            comments.push(comment );
            res.json(comments[comments.length - 1]);
        } else {
            res.json({ error: "Insufficient Data" });
        }
    });

// GET, comment, PATCH, DELETE /api/comments/:id
router
    .route("/:id")
    //  @route GET /api/comments/:id
    //  @desc Get ONE comment
    //  @access Public
    .get((req, res) => {
        const comment = comments.find((comment) => comment.id == req.params.id);

        if (comment) res.json(comment);
        else next();
    })
    //  @route comment /api/comments/:id
    //  @desc create ONE comment
    //  @access Public
    .patch((req, res, next) => {
        // find the item that the client wants to update
        const id = req.params.id;
        const data = req.body;
        const comment = comments.find((comment, i) => {
            if (comment.id == id) {
                for (const item in data) {
                    // in the comments array grab the comment that the client wants to change
                    comments[i][item] = data[item]; // make the change
                }
                return true;
            }
        });

        // send a response
        if (comment) {
            res.json(comments);
        } else next();
    })
    .delete((req, res, next) => {
        // find the comment that the client want to delete
        const id = req.params.id;
        const comment = comments.find((comment, i) => {
            if (comment.id == id) {
                comments.splice(i, 1); // remove the comment at index i
                return true;
            }
        });

        // send the client a response
        if (comment) {
            res.json(comments);
        } else next();
    });


export default router;