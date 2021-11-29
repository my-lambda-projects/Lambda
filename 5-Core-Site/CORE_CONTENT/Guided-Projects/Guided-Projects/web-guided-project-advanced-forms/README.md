# Friends Advanced Form Management

## Running this project

This project is set up with [Parcel Bundler](https://parceljs.org/), an npm package
that compiles our frontend assets and comes with an integrated development server.

The dev server for the React page runs on port `1234` by default, but will use another if `1234` is
being used by another application.

- Clone the repo.
- Navigate into the project folder.
- Run `npm i` to download the project's dependencies listed in the `package.json`
- Run `npm start` to compile the React project and serve it on `http://localhost:1234`

Today's endpoints are:

- [GET] `http://buddies.com/api/friends`
- [POST] `http://buddies.com/api/friends`

In order to [POST] a new friend we must supply several required fields.

```js
  // example of a new friend
  {
    "username": "Tom",
    "email": "tom@tom.com",
    "role": "tl",
    "civil": "single"
  }
```
![design-files](./src/design-files/form.png)
