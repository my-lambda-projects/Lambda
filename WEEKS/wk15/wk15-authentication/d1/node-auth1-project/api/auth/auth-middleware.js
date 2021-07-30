const users = require("../users/users-model");

/*
  If the user does not have a session saved in the server

  status 401
  {
    "message": "You shall not pass!"
  }
*/
function restricted(req, res, next) {
  const token = req.session.user;

  if (token) {
    next();
  } else {
    res.status(401).json({
      message: "You shall not pass!",
    });
  }
}

/*
  If the username in req.body already exists in the database

  status 422
  {
    "message": "Username taken"
  }
*/
async function checkUsernameFree(req, res, next) {
  const { username } = req.body;
  const exists = await users.findBy({ username: username }).first();

  if (!exists) {
    next();
  } else {
    res.status(422).json({
      message: "Username taken",
    });
  }
}

/*
  If the username in req.body does NOT exist in the database

  status 401
  {
    "message": "Invalid credentials"
  }
*/
async function checkUsernameExists(req, res, next) {
  const { username } = req.body;
  const exists = await users.findBy({ username: username }).first();

  if (exists) {
    req.user = exists;
    next();
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}

/*
  If password is missing from req.body, or if it's 3 chars or shorter

  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
*/
function checkPasswordLength(req, res, next) {
  const { password } = req.body;

  if (password && typeof password === "string" && password.length > 3) {
    next();
  } else {
    res.status(422).json({ message: "Password must be longer than 3 chars" });
  }
}

// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
  restricted,
  checkPasswordLength,
  checkUsernameExists,
  checkUsernameFree,
};
