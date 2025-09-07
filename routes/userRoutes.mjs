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
    .get((req, res) => {
        const user = users.find((user) => user.id == req.params.id);

        if (user) res.json(user);
        else next();
    })
    //  @route PATCH /api/users/:id
    //  @desc Update ONE user by id
    //  @access Public
    .patch((req, res, next) => {
        // find the user that the client wants to change
        const id = req.params.id;
        const data = req.body;
        // go through each object element
        // for each object, see if the id matches,
        // if matches save the data object into that index of the users array
        const user = users.find((user, i) => { 
            if (user.id == id) {
                for (const item in data) {
                    users[i][item] = data[item]; // make the changes
                }
                return true;
            }
        });

        // once the change is made
        // send a response back to the client

        if (user) {
            res.json(users);
        } else next(); //else (if id is not found) do nothing
    })

    // Delete
    .delete((req, res, next) => {
    // find user the client wants to delete
    const id = req.params.id;
    const user = users.find((user, i) => {
      if (user.id == id) {
        users.splice(i, 1); // remove the user at index i
        return true;
      }
    });

    // send a response back to the client
    if (user) {
      res.json(users);
    } else next();
  });




export default router;