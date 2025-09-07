# ALAB 318.3.1: Expanding a RESTful API
#### Version 1.0, 07/23/23
Click here to open in a separate window.
## Introduction
This assignment will ask you to expand the example REST API application that was explored during the lesson, adding additional routes and features that are common with an API of its kind.
Feel free to reference the lesson materials, express documentation, and other resources when creating these additional features, but think critically about how you want to approach your own solution. Sometimes, the way things are presented the first time are not the best way to do them!
When working on a team, especially with legacy code, you can never assume that something is correct just because it was previously the accepted way of doing it. Look for ways to increase the efficiency of the application and the efficiency of the development process!
## Objectives
Add additional features to an existing RESTful Express API.
Refactor existing code for efficiency, organization, and/or performance.

### Part 1: Exploring Existing Routes
Create API with the following routes:

| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| GET    | `/`               | Root endpoint              |
| GET    | `/api`            | API status/info            |
| GET    | `/api/users`      | Get all users              |
| POST   | `/api/users`      | Create a new user          |
| GET    | `/api/users/:id`  | Get a single user by ID    |
| PATCH  | `/api/users/:id`  | Update a user by ID        |
| DELETE | `/api/users/:id`  | Delete a user by ID        |
| GET    | `/api/posts`      | Get all posts              |
| POST   | `/api/posts`      | Create a new post          |
| GET    | `/api/posts/:id`  | Get a single post by ID    |
| PATCH  | `/api/posts/:id`  | Update a post by ID        |
| DELETE | `/api/posts/:id`  | Delete a post by ID        |

### Part 2: Adding Additional Routes
Add the following routes
