const router = require('express').Router()
const { delUser, getUsers, getUserPosts, postUser, updateUser } = require('./user')
const { getPosts } = require('./post')
const { getTags, postTag } = require('./tag')
const { catchErr } = require('./middleware')

/* Users */
router.get('/user/:id?', catchErr(getUsers))
router.get('/user/:id/posts', catchErr(getUserPosts))
router.post('/user', catchErr(postUser))
router.put('/user/:id', catchErr(updateUser))
router.delete('/user/:id', catchErr(delUser))

/* Posts */
router.get('/post/:id?', catchErr(getPosts))

/* Tags */
router.get('/tag/:id?', catchErr(getTags))
router.post('/tag', catchErr(postTag))

module.exports = router