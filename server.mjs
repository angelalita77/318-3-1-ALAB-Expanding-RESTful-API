//Imports 
import express, { Router, urlencoded } from "express";
import globalErr from "./globalErr_handling/globalErrHandling'.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import postRoutes from "./routes/postRoutes.mjs";
import commentRoutes from "./routes/commentRoutes.mjs"
import morgan from "morgan";


// Env Setup
const app = express();
const PORT = 3000;


// Middleware
app.use(morgan('tiny')); // for displaying log request, path, how long to execute request
app.use(express.json()); //parses your JSON data for POST and PUT/PATCH requests
app.use(express.urlencoded( {extended: true})); //you can use post requests with JSON



// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);




// Global Err Handling
app.use(globalErr);

// Test global error throw
// app.get("/error-test", (req, res, next) => {
//   const err = new Error("Something went wrong!");
//   next(err); // sends error to your global handler
// });

// Server Listening
app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
});

