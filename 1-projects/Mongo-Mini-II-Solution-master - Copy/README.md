# Mongo II Mini

## Topics To Cover
* Schema Types
  * [String, Number, Buffer, Date, Boolean, Mixed, ObjectId, Array](http://mongoosejs.com/docs/schematypes.html)
* [$ne](https://docs.mongodb.com/v3.2/reference/operator/query/ne/)
* [$and](https://docs.mongodb.com/v3.2/reference/operator/query/and/index.html)
* [$or](https://docs.mongodb.com/v3.2/reference/operator/query/or/index.html)
* [$in](https://docs.mongodb.com/v3.2/reference/operator/query/in/#op._S_in)
* [$gt](https://docs.mongodb.com/v3.2/reference/operator/query/gt/)
* [$sum](https://docs.mongodb.com/v3.2/reference/operator/aggregation/sum/index.html)
* [$orderby](https://docs.mongodb.com/v3.2/reference/operator/meta/orderby/index.html)
* [count](https://docs.mongodb.com/v3.2/reference/command/count/index.html)


## Running the Project

* `cd` into your project directory.
* `npm install` to receive your dependencies.
* fire up your `mongod` server from your root dir or create a `data` dir in this project to store your documents from mongo there. `mongod --dbpath data`.

### Mongoose Schema
* When you open `models.js` you'll see we've already included your Schema. You're welcome. 
* You'll also notice that this sprint comes with a `people.json` file, and a `populateDbScript.js`. this script will grab those `people` and add them into your db as long as you have your mongo server up and running. 
* RUN: `node populateDbScript.js` get receive all your data.

### Todos:
* write a `GET` request to `/users` that simply returns all the people.
* write a `GET` request to `/users/:direction` that takes the given string and returns back a list of sorted data alphebetically.
  * hint direction can be `asc` or `desc` so in your `.sort()` method you'll have to conditionally check, and we are going to be sorting by user `firstName`
* write a `GET` request `/user-get-friends/:id` that returns a single users's friends.
### Extra Credit: 
* lastly write a `PUT` that updates a users `firstName` `lastName` 