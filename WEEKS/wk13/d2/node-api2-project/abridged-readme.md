# Server Side Routing Module Project

## Introduction

Use `Node.js` and `Express` to build an API that performs _CRUD_ operations on `blog posts`.

### Task 2: Minimum Viable Product

- Add the code necessary to `index.js`, `api/server.js` and `api/posts/posts-router.js` to implement the endpoints listed below.
- Separate the endpoints that begin with `/api/posts` into a separate Express Router inside `api/posts/posts-router.js`.
- Configure the API to handle to the following routes. Some of these endpoints might require more than one call to the provided database helpers inside `api/posts/posts-model.js`.

| N   | Method | Endpoint                | Description                                                                                                                     |
| --- | ------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1   | GET    | /api/posts              | Returns **an array of all the post objects** contained in the database                                                          |
| 2   | GET    | /api/posts/:id          | Returns **the post object with the specified id**                                                                               |
| 3   | POST   | /api/posts              | Creates a post using the information sent inside the request body and returns **the newly created post object**                 |
| 4   | PUT    | /api/posts/:id          | Updates the post with the specified id using data from the request body and **returns the modified document**, not the original |
| 5   | DELETE | /api/posts/:id          | Removes the post with the specified id and returns the **deleted post object**                                                  |
| 6   | GET    | /api/posts/:id/comments | Returns an **array of all the comment objects** associated with the post with the specified id                                  |

#### 1 [GET] /api/posts

- If there's an error in retrieving the _posts_ from the database:
  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The posts information could not be retrieved" }`.

#### 2 [GET] /api/posts/:id

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in retrieving the _post_ from the database:
  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The post information could not be retrieved" }`.

#### 3 [POST] /api/posts

- If the request body is missing the `title` or `contents` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON: `{ message: "Please provide title and contents for the post" }`.

- If the information about the _post_ is valid:

  - save the new _post_ the the database.
  - return HTTP status code `201` (Created).
  - return the newly created _post_.

- If there's an error while saving the _post_:
  - respond with HTTP status code `500` (Server Error).
  - return the following JSON: `{ message: "There was an error while saving the post to the database" }`.

#### 4 [PUT] /api/posts/:id

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If the request body is missing the `title` or `contents` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON: `{ message: "Please provide title and contents for the post" }`.

- If there's an error when updating the _post_:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The post information could not be modified" }`.

- If the post is found and the new information is valid:

  - update the post document in the database using the new information sent in the `request body`.
  - return HTTP status code `200` (OK).
  - return the newly updated _post_.

#### 5 [DELETE] /api/posts/:id

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in removing the _post_ from the database:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The post could not be removed" }`.

#### 6 [GET] /api/posts/:id/comments

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in retrieving the _comments_ from the database:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The comments information could not be retrieved" }`.

### Database Persistence Helpers

The `data` folder contains a database populated with test `posts`.

Database access will be done using the `posts-model.js` file included inside the `api/posts` folder:

- `find()`: calling find returns a promise that resolves to an array of all the `posts` contained in the database.
- `findById()`: this method expects an `id` as it's only parameter and returns a promise that resolves to the post corresponding to the `id` provided or `undefined` if no post with that `id` is found.
- `insert()`: calling insert passing it a `post` object will add it to the database and return a promise that resolves to an object with the `id` of the inserted post. The object looks like this: `{ id: 123 }`.
- `update()`: accepts two arguments, the first is the `id` of the post to update and the second is an object with the `changes` to apply. It returns a promise that resolves to the count of updated records. If the count is 1 it means the record was updated correctly.
- `remove()`: the remove method accepts an `id` as its first parameter and upon successfully deleting the post from the database it returns a promise that resolves to the number of records deleted.
- `findPostComments()`: the findPostComments accepts a `postId` as its first parameter and returns a promise that resolves to an array of all comments on the post associated with the post id.

### Blog Post Schema

A Blog Post in the database has the following structure:

```js
{
  title: "The post title", // String, required
  contents: "The post contents", // String, required
  created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
}
```

### Comment Schema

A Comment in the database has the following structure:

```js
{
  text: "The text of the comment", // String, required
  post_id: "The id of the associated post", // Integer, required, must match the id of a post entry in the database
  created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
}
```

#### Important Notes

- Run tests locally by executing `npm test`.
- Reset the database by executing `npm run resetdb`.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install additional libraries or add additional scripts.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work.
- Perform basic professional polishing including spell-checking and grammar-checking on your work.

### Task 3: Stretch Problems

To work on the stretch problems you'll need to enable the `cors` middleware. Follow these steps:

- add the `cors` npm module: `npm i cors`.
- add `server.use(cors())` after `server.use(express.json())`.

Create a new React application and connect it to your server:

- Use `create-react-app` to create an application inside the root folder, name it `client`.
- From the React application connect to the `/api/posts` endpoint in the API and show the list of posts.
- Style the list of posts however you see fit.
