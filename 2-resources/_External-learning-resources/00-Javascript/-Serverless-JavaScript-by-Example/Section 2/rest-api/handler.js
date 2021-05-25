"use strict";

const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  // region: 'localhost',
  // endpoint: 'http://localhost:8000'
}); // remove when deploying!

module.exports.create = (event, context, callback) => {
  // create a note and put it in the database
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      content: data.content,
    },
  };

  dynamoDb.put(params, (error) => {
    if (error) {
      console.error(error);
      return callback(null, {
        statusCode: error.statusCode || 500,
        headers: { "Content-Type": "text/plain" },
        body: "Could not create the note.",
      });
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};

module.exports.getOne = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.error(error);
      return callback(null, {
        statusCode: error.statusCode || 500,
        headers: { "Content-Type": "text/plain" },
        body: "Could not fetch the note.",
      });
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};

module.exports.getAll = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };

  dynamoDb.scan(params, (error, result) => {
    if (error) {
      console.error(error);
      return callback(null, {
        statusCode: error.statusCode || 500,
        headers: { "Content-Type": "text/plain" },
        body: "Could not fetch the note.",
      });
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};

module.exports.update = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },

    ExpressionAttributeValues: {
      ":content": data.content,
    },

    UpdateExpression: "SET content = :content",

    ReturnValues: "ALL_NEW",
  };

  dynamoDb.update(params, (error, result) => {
    if (error) {
      console.error(error);
      return callback(null, {
        statusCode: error.statusCode || 500,
        headers: { "Content-Type": "text/plain" },
        body: "Could not update the note.",
      });
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};

module.exports.delete = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  dynamoDb.delete(params, (error) => {
    if (error) {
      console.error(error);
      return callback(null, {
        statusCode: error.statusCode || 500,
        headers: { "Content-Type": "text/plain" },
        body: "Could not delete the note.",
      });
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(
        "Removed the note with id: " + event.pathParameters.id
      ),
    };
    callback(null, response);
  });
};
