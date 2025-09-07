//Imports 
import express, { Router, urlencoded } from "express";
import globalErr from "./globalErr_handling/globalErrHandling'.mjs";
import postRoutes from "./routes/postRoutes.mjs";


// Env Setup
const app = express();
const PORT = 3000;


// Middleware
app.use(express.urlencoded( {extended: true})); //you can use post requests with JSON
app.use(express.json()); //parses your JSON data


// Routes
app.use("/api/posts", postRoutes);




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

