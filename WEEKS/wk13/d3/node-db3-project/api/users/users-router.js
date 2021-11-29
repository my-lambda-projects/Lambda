const express = require("express");
const {
    validateUserId,
    validateUser,
    validatePost,
} = require("../middleware/middleware");
// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const User = require('./users-model')
const Posts = require('../posts/posts-model')

const router = express.Router();

router.get("/", (req, res) => {
    // RETURN AN ARRAY WITH ALL THE USERS
    User.get(req.query)
        .then(users => {
            res.status(200).json(users)
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "The users information could not be retrieved",
            });
        });
    console.log("made it");
});

router.get("/:id", validateUserId, (req, res,) => {
    // RETURN THE USER OBJECT
    // this needs a middleware to verify user id
    //sanity check
     User.getById(req.params.id)
        .then((user) => {
            res.status(200).json(user)
        }
        )
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "The users information could not be retrieved",
            });
        });
});

router.post("/", validateUser, (req, res, next) => {
    // RETURN THE NEWLY CREATED USER OBJECT
    // this needs a middleware to check that the request body is valid
    User.insert({name: req.name})
        .then((newUser) => {
            User.getById(newUser.id).then((newUser) => {
                res.status(201).json(newUser);
            });
        })
        .catch(next);

});

router.put("/:id", validateUserId, validateUser, (req, res) => {
    // RETURN THE FRESHLY UPDATED USER OBJECT
    // this needs a middleware to verify user id
    // and another middleware to check that the request body is valid
    const id = req.params.id; //happy path 200
    User.update(id, {name: req.name})
        .then((updatedUser) => {
            res.status(200).json(updatedUser)
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "The post information could not be modified",
            });
        });
});

router.delete("/:id", validateUserId, (req, res) => {
    // RETURN THE FRESHLY DELETED USER OBJECT
    // this needs a middleware to verify user id
    //sanity checker
    User.getById(req.params.id)
        .then((post) => {
            if (!post) {
                res
                    .status(404)
                    .json({message: "The post with the specified ID does not exist"});
            } else {
                User.remove(req.params.id).then((response) => {
                    res.status(200).json(post);
                    console.log(response);
                });
            }
        })
        .catch((err) => {
            console.log("Error deleting server from the server 500", err);
            res.status(500).json({message: "The post could not be removed"});
        });
});

router.get("/:id/posts", validateUserId, (req, res) => {
    // RETURN THE ARRAY OF USER POSTS
    // this needs a middleware to verify user id
    const id = req.params.id;
    Posts.getById(id).then((posts) => {
        if (posts) {
            User.getUserPosts(id)
                .then((posts) => {
                    res.status(200).json(posts);
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).json({
                        message: "The posts information could not be retrieved",
                    });
                });
        } else {
            res.status(404).json({
                message: "The posts for the specified ID does not exist",
            });
        }
    });
});

router.post("/:id/posts", validateUserId, validatePost, async (req, res, next) => {
    // RETURN THE NEWLY CREATED USER POST
    // this needs a middleware to verify user id
    // and another middleware to check that the request body is valid
    try {
        const result = await Posts.insert({
            user_id: req.params.id,
            text: req.text,
        })
        res.status(201).json(result)
    } catch (err) {
        next(err)
    }
});

router.use((err, req, res) => {// eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'dead path',
        message: err.message,
        stack: err.stack
    })
})
// do not forget to export the router

module.exports = router;
