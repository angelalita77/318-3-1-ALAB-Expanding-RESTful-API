import express from "express";
import { users } from "../data/users.mjs";
const router = express.Router();

// @route GET /api/users
// @desc Get all users
// @access Public

// Create
router.post("/", (req, res) => {
    res.json( {msg: `Testing create`});
})

// Read
router.get("/", (req, res) => {
    res.json( {msg: `Testing read`});
})


// Update
router.put("/:id", (req, res) => {
    res.json( {msg: `Testing update`});
})

// Delete
router.delete("/:id", (req, res) => {
    res.json( {msg: `Testing delete`});
})


//  @route GET /api/users/:id
//  @desc Get ONE user
//  @access Public

export default router;