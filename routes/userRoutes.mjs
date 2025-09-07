import express from "express";
import { users } from "../data/users.mjs";
const router = express.Router();

//GET and POST /api/users
router
    .route("/")
    // Create
    // @route POST /api/users
    // @desc create all users
    // @access Public
    .post((req, res) => {
        const { name, username, email } = req.body;

        // Check if we have all data needed to create user
        if (name && username && email) {
            // check is username exists!!
            if (users.find((u) => u.username == username)) {
                res.status(400).json({ err: "Username taken" });
                return;
            }

            const user = {
                id: users[users.length - 1].id + 1, //find the last users id number and add one to it.
                name,
                username,
                email,
            };
            users.push(user);
            res.json(user);
        } else res.status(400).json({ msg: "Insuffecient Data" });
    })
    // Read
    // @route GET /api/users
    // @desc get all users
    // @access Public
    .get((req, res) => {
        res.json(users);
    })

    // GET, POST, PATCH, DELETE /api/users/:id
router
    .route("/:id")
    //  @route GET /api/users/:id
//  @desc Get ONE user
//  @access Public
.get( (req, res) => {
    res.json( {msg: 'Testing read by id'})
})
.patch( (req, res) => {
    res.json( {msg: `Testing update`});
})

// Delete
.delete( (req, res) => {
    res.json( {msg: `Testing delete`});
})


//  @route GET /api/users/:id
//  @desc Get ONE user
//  @access Public

export default router;