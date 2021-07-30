// import the model
const Posts = require('../posts/posts-model');
const Users = require('../users/users-model');
console.log(Posts)

function logger(req, res, next) {
    // DO YOUR MAGIC
    let current_datetime = new Date();
    let formatted_date =
        current_datetime.getFullYear() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" +
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();
    let method = req.method;
    let url = req.url;
    console.log('request method: ', method);
    console.log('request url: ', url);
    console.log('request timestamp: ', formatted_date);
    next();
}

const validateUserId = async (req, res, next) => {
    // DO YOUR MAGIC
    try {
        const {id} = req.params;
        const user = await Users.getById(id);
        if (!user) {
            next({status: 404, message: 'Dream not found'})
        } else {
            req.user = user
            next()
        }
    } catch (error) {
        res.status(404).json({message: `user not found`})
    }
}

function validateUser(req, res, next) {
    // DO YOUR MAGIC
    const {name} = req.body
    if (!name || !name.trim()) {
        res.status(400).json({message: 'missing required name field'})
    } else {
        req.name = name.trim()
        next()
    }
}

function validatePost(req, res, next) {
    // DO YOUR MAGIC
    const {text} = req.body
    if (!text || !text.trim()) {
        res.status(400).json({message: 'missing required text field'})
    } else {
        req.text = text.trim()
        next()
    }
}

// do not forget to expose these functions to other modules
module.exports = {
    logger,
    validateUserId,
    validateUser,
    validatePost
}
